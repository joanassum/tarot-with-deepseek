# Tarot Web App with DeepSeek AI

A web application that uses DeepSeek AI to provide tarot card interpretations. The app features a beautiful tarot card interface with AI-powered insights based on user questions.

## Features

- Interactive tarot card selection
- AI-powered interpretations using DeepSeek API
- Beautiful, responsive UI
- Upright and reversed card meanings
- Custom question input

## Prerequisites

- Go 1.24.4 or later (for backend)
- A DeepSeek API key (sign up at [DeepSeek Platform](https://platform.deepseek.com/))

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/joanassum/tarot-with-deepseek.git
cd tarot-with-deepseek
```

### 2. Set Up Environment Variables

Create a `.env` file in the project root (or set environment variables):

```bash
# Copy the example .env file if it exists, or create one
cp .env.example .env  # If you have an example file
```

Edit the `.env` file to add your DeepSeek API key:

```
DEEPSEEK_API_KEY=your_api_key_here
PORT=8081  # Optional, defaults to 8081
```

### 3. Start the Backend Server

Navigate to the backend directory and run:

```bash
cd backend
go run main.go
```

The server will start on `http://localhost:8081`. You should see output like:
```
Starting Tarot Backend Service on port 8081
DeepSeek API URL: https://api.deepseek.com/v1/chat/completions
Configuration loaded successfully
```

### 4. Open the Frontend

Open `index.html` in your web browser. You can:
- Double-click the file in your file explorer
- Or use a command:
  ```bash
  open index.html  # macOS
  # or
  xdg-open index.html  # Linux
  # or simply navigate to file:///path/to/tarot-with-deepseek/index.html
  ```

### 5. Using the Application

1. Select a tarot card from the deck
2. Enter your question in the text box
3. Click "Get Interpretation" to receive AI-powered insights
4. The app will display the card's traditional meaning along with a personalized interpretation based on your question

## Project Structure

```
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── script.js           # Frontend JavaScript
├── config.js           # Frontend configuration
├── backend/
│   ├── main.go         # Go backend server
│   └── go.mod          # Go module file
└── README.md           # This file
```

## API Endpoints

- `POST /api/interpret` - Get AI interpretation for a tarot card and question
- `GET /health` - Health check endpoint

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DEEPSEEK_API_KEY` | Your DeepSeek API key (required) | - |
| `PORT` | Port for the backend server | `8081` |
| `DEEPSEEK_API_URL` | DeepSeek API endpoint | `https://api.deepseek.com/v1/chat/completions` |

## Troubleshooting

### Backend won't start
- Ensure you have Go installed (`go version`)
- Check that your DeepSeek API key is set correctly
- Verify port 8081 is not in use by another application

### API calls fail
- Check your internet connection
- Verify your DeepSeek API key is valid and has sufficient credits
- Check browser console for CORS errors (backend should handle CORS)

### Frontend doesn't connect to backend
- Ensure backend is running (`http://localhost:8081/health` should return healthy status)
- Check that you're opening the frontend from the same machine as the backend

## License

This project is open source and available for personal and educational use.

## Acknowledgments

- Tarot card data and imagery
- DeepSeek for providing the AI API
- All contributors and testers
