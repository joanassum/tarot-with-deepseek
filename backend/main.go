package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"time"
)

// Configuration
type Config struct {
	Port           string `json:"port"`
	DeepSeekAPIKey string `json:"deepseek_api_key"`
	DeepSeekAPIURL string `json:"deepseek_api_url"`
}

// Request structure from frontend
type InterpretationRequest struct {
	Card struct {
		Name        string   `json:"name"`
		Suit        string   `json:"suit"`
		Emoji       string   `json:"emoji"`
		Upright     string   `json:"upright"`
		Reversed    string   `json:"reversed"`
		Description string   `json:"description"`
		Keywords    []string `json:"keywords"`
		IsReversed  bool     `json:"isReversed"`
		Position    string   `json:"position"`
	} `json:"card"`
	Question string `json:"question"`
}

// Response structure to frontend
type InterpretationResponse struct {
	Interpretation string `json:"interpretation"`
	Error          string `json:"error,omitempty"`
}

// DeepSeek API request structure
type DeepSeekRequest struct {
	Model       string    `json:"model"`
	Messages    []Message `json:"messages"`
	MaxTokens   int       `json:"max_tokens"`
	Temperature float64   `json:"temperature"`
}

type Message struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

// DeepSeek API response structure
type DeepSeekResponse struct {
	Choices []struct {
		Message struct {
			Content string `json:"content"`
		} `json:"message"`
	} `json:"choices"`
	Error struct {
		Message string `json:"message"`
	} `json:"error,omitempty"`
}

var config Config

func main() {
	// Load configuration
	loadConfig()

	// Set up HTTP server
	http.HandleFunc("/api/interpret", interpretHandler)
	http.HandleFunc("/health", healthHandler)

	// Enable CORS middleware
	handler := corsMiddleware(http.DefaultServeMux)

	server := &http.Server{
		Addr:         ":" + config.Port,
		Handler:      handler,
		ReadTimeout:  30 * time.Second,
		WriteTimeout: 30 * time.Second,
		IdleTimeout:  120 * time.Second,
	}

	log.Printf("Starting Tarot Backend Service on port %s", config.Port)
	log.Printf("DeepSeek API URL: %s", config.DeepSeekAPIURL)

	if err := server.ListenAndServe(); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}

func loadConfig() {
	// Default configuration
	config = Config{
		Port:           getEnv("PORT", "8081"),
		DeepSeekAPIKey: getEnv("DEEPSEEK_API_KEY", ""),
		DeepSeekAPIURL: getEnv("DEEPSEEK_API_URL", "https://api.deepseek.com/v1/chat/completions"),
	}

	// Validate required configuration
	if config.DeepSeekAPIKey == "" {
		log.Fatal("DEEPSEEK_API_KEY environment variable is required")
	}

	log.Println("Configuration loaded successfully")
}

func getEnv(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Set CORS headers
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		// Handle preflight requests
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	response := map[string]string{
		"status":    "healthy",
		"service":   "tarot-backend",
		"timestamp": time.Now().Format(time.RFC3339),
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func interpretHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Parse request
	var req InterpretationRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, fmt.Sprintf("Invalid request body: %v", err), http.StatusBadRequest)
		return
	}

	// Validate request
	if req.Card.Name == "" || req.Question == "" {
		http.Error(w, "Card name and question are required", http.StatusBadRequest)
		return
	}

	log.Printf("Processing interpretation request for card: %s, question: %s", req.Card.Name, req.Question)

	// Call DeepSeek API
	interpretation, err := callDeepSeekAPI(req)
	if err != nil {
		log.Printf("Error calling DeepSeek API: %v", err)
		response := InterpretationResponse{
			Interpretation: "",
			Error:          fmt.Sprintf("Failed to get interpretation: %v", err),
		}
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(response)
		return
	}

	// Return successful response
	response := InterpretationResponse{
		Interpretation: interpretation,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func callDeepSeekAPI(req InterpretationRequest) (string, error) {
	// Prepare the prompt
	prompt := fmt.Sprintf(`You are an expert tarot card reader with deep knowledge of symbolism, psychology, and spiritual guidance.

CARD INFORMATION:
- Card: %s
- Suit: %s
- Position: %s
- Upright Meaning: %s
- Reversed Meaning: %s
- Description: %s
- Keywords: %s

USER'S QUESTION: "%s"

Please provide a thoughtful, insightful interpretation of this card in relation to the user's question. Consider:
1. How the card's traditional meaning applies to their specific situation
2. The significance of the card being %s
3. Practical guidance or advice based on this card's message
4. Any warnings or opportunities indicated by the card

Keep your response concise (2-3 paragraphs), empathetic, and focused on providing meaningful guidance rather than predictions. Speak directly to the user about their question.`,
		req.Card.Name,
		req.Card.Suit,
		req.Card.Position,
		req.Card.Upright,
		req.Card.Reversed,
		req.Card.Description,
		formatKeywords(req.Card.Keywords),
		req.Question,
		map[bool]string{true: "reversed", false: "upright"}[req.Card.IsReversed],
	)

	// Prepare DeepSeek request
	deepSeekReq := DeepSeekRequest{
		Model: "deepseek-chat",
		Messages: []Message{
			{
				Role:    "system",
				Content: "You are a wise, empathetic tarot card reader who provides insightful, practical guidance based on tarot symbolism. You speak in a warm, accessible tone and focus on empowering the querent with self-awareness and practical advice.",
			},
			{
				Role:    "user",
				Content: prompt,
			},
		},
		MaxTokens:   500,
		Temperature: 0.7,
	}

	// Marshal request to JSON
	reqBody, err := json.Marshal(deepSeekReq)
	if err != nil {
		return "", fmt.Errorf("failed to marshal request: %v", err)
	}

	// Create HTTP request
	httpReq, err := http.NewRequest("POST", config.DeepSeekAPIURL, bytes.NewBuffer(reqBody))
	if err != nil {
		return "", fmt.Errorf("failed to create request: %v", err)
	}

	// Set headers
	httpReq.Header.Set("Content-Type", "application/json")
	httpReq.Header.Set("Authorization", "Bearer "+config.DeepSeekAPIKey)

	// Make the request
	client := &http.Client{Timeout: 30 * time.Second}
	resp, err := client.Do(httpReq)
	if err != nil {
		return "", fmt.Errorf("failed to make request: %v", err)
	}
	defer resp.Body.Close()

	// Read response body
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", fmt.Errorf("failed to read response: %v", err)
	}

	// Check HTTP status
	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("API request failed with status %d: %s", resp.StatusCode, string(body))
	}

	// Parse response
	var deepSeekResp DeepSeekResponse
	if err := json.Unmarshal(body, &deepSeekResp); err != nil {
		return "", fmt.Errorf("failed to parse response: %v", err)
	}

	// Check for errors in response
	if deepSeekResp.Error.Message != "" {
		return "", fmt.Errorf("API error: %s", deepSeekResp.Error.Message)
	}

	// Extract interpretation
	if len(deepSeekResp.Choices) == 0 || deepSeekResp.Choices[0].Message.Content == "" {
		return "", fmt.Errorf("no interpretation returned from API")
	}

	return deepSeekResp.Choices[0].Message.Content, nil
}

func formatKeywords(keywords []string) string {
	if len(keywords) == 0 {
		return ""
	}

	result := ""
	for i, keyword := range keywords {
		if i > 0 {
			result += ", "
		}
		result += keyword
	}
	return result
}
