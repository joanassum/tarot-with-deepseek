// Tarot Card Deck Data
const tarotDeck = [
    {
        name: "The Fool",
        suit: "Major Arcana",
        emoji: "🃏",
        upright: "New beginnings, spontaneity, a leap of faith",
        reversed: "Recklessness, risk-taking, lack of direction",
        description: "The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe.",
        keywords: ["beginnings", "innocence", "spontaneity", "faith", "free spirit"]
    },
    {
        name: "The Magician",
        suit: "Major Arcana",
        emoji: "🪄",
        upright: "Manifestation, resourcefulness, power",
        reversed: "Manipulation, poor planning, untapped talents",
        description: "The Magician is the bridge between the world of spirit and the world of humanity. His gift is the ability to manifest things on the earthly plane.",
        keywords: ["manifestation", "power", "skill", "concentration", "action"]
    },
    {
        name: "The High Priestess",
        suit: "Major Arcana",
        emoji: "🌙",
        upright: "Intuition, unconscious knowledge, divine feminine",
        reversed: "Secrets, disconnected from intuition, withdrawal",
        description: "The High Priestess is the guardian of the unconscious. She sits in front of the thin veil of unawareness which is all that separates us from our inner landscape.",
        keywords: ["intuition", "mystery", "subconscious", "divine feminine", "wisdom"]
    },
    {
        name: "The Empress",
        suit: "Major Arcana",
        emoji: "👑",
        upright: "Femininity, beauty, nature, abundance",
        reversed: "Creative block, dependence, smothering",
        description: "The Empress is a beautiful, full-figured woman with blonde hair and a peaceful aura. She is surrounded by an enchanting forest and a stream.",
        keywords: ["fertility", "abundance", "nature", "beauty", "nurturing"]
    },
    {
        name: "The Emperor",
        suit: "Major Arcana",
        emoji: "⚔️",
        upright: "Authority, structure, control, fatherhood",
        reversed: "Domination, excessive control, rigidity",
        description: "The Emperor represents structure, stability, rules and power. He is the embodiment of the masculine principle - the patriarch, a leader.",
        keywords: ["authority", "structure", "control", "stability", "father figure"]
    },
    {
        name: "The Hierophant",
        suit: "Major Arcana",
        emoji: "📿",
        upright: "Spiritual wisdom, religious beliefs, conformity",
        reversed: "Personal beliefs, freedom, challenging the status quo",
        description: "The Hierophant represents spiritual wisdom and religious beliefs. He is an interpreter of sacred mysteries and spiritual truths.",
        keywords: ["tradition", "conformity", "morality", "ethics", "spiritual guidance"]
    },
    {
        name: "The Lovers",
        suit: "Major Arcana",
        emoji: "💑",
        upright: "Love, harmony, relationships, choices",
        reversed: "Self-love, disharmony, imbalance, misalignment",
        description: "The Lovers represent relationships and choices. Its appearance in a spread indicates some decision about an existing relationship or a choice between potential partners.",
        keywords: ["love", "harmony", "relationships", "choices", "alignment"]
    },
    {
        name: "The Chariot",
        suit: "Major Arcana",
        emoji: "🛡️",
        upright: "Control, willpower, success, action",
        reversed: "Lack of direction, aggression, no control",
        description: "The Chariot represents overcoming conflicts and moving forward in a positive direction. One needs to keep going on and through sheer hard work and commitment.",
        keywords: ["control", "willpower", "victory", "assertion", "determination"]
    },
    {
        name: "Strength",
        suit: "Major Arcana",
        emoji: "🦁",
        upright: "Courage, persuasion, influence, compassion",
        reversed: "Inner strength, self-doubt, low energy",
        description: "Strength represents inner strength, patience, control, and compassion. It's about using your inner resources to overcome obstacles.",
        keywords: ["courage", "bravery", "confidence", "compassion", "inner strength"]
    },
    {
        name: "The Hermit",
        suit: "Major Arcana",
        emoji: "🧙",
        upright: "Soul-searching, introspection, being alone",
        reversed: "Isolation, loneliness, withdrawal",
        description: "The Hermit represents introspection, searching for truth, and spiritual guidance. He encourages you to go within to find the answers you seek.",
        keywords: ["introspection", "solitude", "search for truth", "inner guidance", "wisdom"]
    },
    {
        name: "Ace of Cups",
        suit: "Cups",
        emoji: "🏆",
        upright: "New feelings, spirituality, intuition",
        reversed: "Emotional loss, blocked creativity, emptiness",
        description: "The Ace of Cups represents new emotional beginnings, love, compassion, and creativity. It signifies an opening of the heart.",
        keywords: ["love", "compassion", "creativity", "intuition", "new feelings"]
    },
    {
        name: "Two of Cups",
        suit: "Cups",
        emoji: "💞",
        upright: "Unity, partnership, connection",
        reversed: "Imbalance, broken communication, tension",
        description: "The Two of Cups represents mutual attraction, love, and partnership. It indicates a strong bond between two people.",
        keywords: ["partnership", "unity", "attraction", "connection", "harmony"]
    },
    {
        name: "Three of Cups",
        suit: "Cups",
        emoji: "🥂",
        upright: "Celebration, friendship, creativity",
        reversed: "Overindulgence, gossip, isolation",
        description: "The Three of Cups represents celebration, friendship, and creative collaboration. It's a card of joyful gatherings.",
        keywords: ["celebration", "friendship", "community", "creativity", "social events"]
    },
    {
        name: "Four of Cups",
        suit: "Cups",
        emoji: "🧘",
        upright: "Meditation, contemplation, apathy",
        reversed: "Retreat, withdrawal, reevaluation",
        description: "The Four of Cups represents contemplation, meditation, and turning inward. It suggests a period of introspection.",
        keywords: ["contemplation", "apathy", "meditation", "reevaluation", "withdrawal"]
    },
    {
        name: "Ace of Pentacles",
        suit: "Pentacles",
        emoji: "💰",
        upright: "Opportunity, prosperity, new venture",
        reversed: "Lost opportunity, missed chance, lack of planning",
        description: "The Ace of Pentacles represents new financial and career opportunities, prosperity, and abundance.",
        keywords: ["opportunity", "prosperity", "new venture", "abundance", "manifestation"]
    },
    {
        name: "Two of Pentacles",
        suit: "Pentacles",
        emoji: "⚖️",
        upright: "Balance, adaptability, time management",
        reversed: "Disorganization, financial loss, overcommitting",
        description: "The Two of Pentacles represents balancing multiple priorities, adaptability, and juggling responsibilities.",
        keywords: ["balance", "adaptability", "priorities", "time management", "flexibility"]
    },
    {
        name: "Three of Pentacles",
        suit: "Pentacles",
        emoji: "👷",
        upright: "Teamwork, collaboration, learning",
        reversed: "Lack of teamwork, disorganized, poor planning",
        description: "The Three of Pentacles represents teamwork, collaboration, and building something of lasting value.",
        keywords: ["teamwork", "collaboration", "learning", "implementation", "mastery"]
    },
    {
        name: "Four of Pentacles",
        suit: "Pentacles",
        emoji: "💎",
        upright: "Security, conservatism, control",
        reversed: "Greed, materialism, self-protection",
        description: "The Four of Pentacles represents security, stability, and holding onto resources. It can indicate financial conservatism.",
        keywords: ["security", "conservatism", "control", "saving", "possessiveness"]
    },
    {
        name: "Ace of Swords",
        suit: "Swords",
        emoji: "⚔️",
        upright: "Breakthrough, clarity, sharp mind",
        reversed: "Confusion, brutality, chaos",
        description: "The Ace of Swords represents mental clarity, truth, and breakthrough. It cuts through confusion and illusion.",
        keywords: ["clarity", "breakthrough", "truth", "mental force", "justice"]
    },
    {
        name: "Two of Swords",
        suit: "Swords",
        emoji: "⚖️",
        upright: "Difficult choices, indecision, stalemate",
        reversed: "Lesser of two evils, no right choice, confusion",
        description: "The Two of Swords represents difficult decisions, stalemates, and being at a crossroads. It suggests a need for balance.",
        keywords: ["choices", "indecision", "stalemate", "balance", "truce"]
    },
    {
        name: "Three of Swords",
        suit: "Swords",
        emoji: "💔",
        upright: "Heartbreak, emotional pain, sorrow",
        reversed: "Recovery, forgiveness, moving on",
        description: "The Three of Swords represents heartbreak, emotional pain, and grief. It indicates a period of sadness or loss.",
        keywords: ["heartbreak", "sorrow", "grief", "pain", "separation"]
    },
    {
        name: "Four of Swords",
        suit: "Swords",
        emoji: "🛌",
        upright: "Rest, restoration, contemplation",
        reversed: "Restlessness, burnout, stagnation",
        description: "The Four of Swords represents rest, recovery, and contemplation. It suggests a need for mental peace and recuperation.",
        keywords: ["rest", "recuperation", "contemplation", "relaxation", "meditation"]
    },
    {
        name: "Ace of Wands",
        suit: "Wands",
        emoji: "🔥",
        upright: "Inspiration, new opportunities, growth",
        reversed: "Delays, lack of passion, setbacks",
        description: "The Ace of Wands represents new inspiration, opportunities, and creative energy. It sparks enthusiasm and action.",
        keywords: ["inspiration", "new opportunities", "growth", "energy", "potential"]
    },
    {
        name: "Two of Wands",
        suit: "Wands",
        emoji: "🗺️",
        upright: "Planning, discovery, decisions",
        reversed: "Fear of unknown, lack of planning",
        description: "The Two of Wands represents planning, discovery, and making decisions about the future. It's about exploring possibilities.",
        keywords: ["planning", "discovery", "decisions", "future planning", "progress"]
    },
    {
        name: "Three of Wands",
        suit: "Wands",
        emoji: "🚢",
        upright: "Expansion, foresight, overseas opportunities",
        reversed: "Delays, obstacles, disappointment",
        description: "The Three of Wands represents expansion, foresight, and exploring new horizons. It suggests looking beyond current boundaries.",
        keywords: ["expansion", "foresight", "opportunities", "exploration", "growth"]
    },
    {
        name: "Four of Wands",
        suit: "Wands",
        emoji: "🎉",
        upright: "Celebration, harmony, homecoming",
        reversed: "Lack of support, transition, home conflict",
        description: "The Four of Wands represents celebration, harmony, and stability. It's a card of joyful reunions and happy occasions.",
        keywords: ["celebration", "harmony", "home", "community", "joy"]
    }
];

// App State
let currentReading = [];
let question = "";

// DOM Elements
const questionInput = document.getElementById('questionInput');
const drawCardBtn = document.getElementById('drawCardBtn');
const drawThreeBtn = document.getElementById('drawThreeBtn');
const clearBtn = document.getElementById('clearBtn');
const cardsContainer = document.getElementById('cardsContainer');
const explanationContainer = document.getElementById('explanationContainer');
const readingSummary = document.getElementById('readingSummary');
const cardModal = document.getElementById('cardModal');
const modalContent = document.getElementById('modalContent');

// Backend API configuration
const BACKEND_API_URL = window.tarotConfig?.BACKEND_API_URL || "http://localhost:8081/api/interpret";

// Cache for interpretations to avoid repeated API calls for same card/question
const interpretationCache = new Map();

// Get card interpretation using backend API
async function getCardInterpretation(card, question) {
    // Create a cache key
    const cacheKey = `${card.name}-${card.isReversed ? 'reversed' : 'upright'}-${question}`;
    
    // Check cache first
    if (interpretationCache.has(cacheKey)) {
        return interpretationCache.get(cacheKey);
    }
    
    try {
        // Prepare request payload for backend
        const requestPayload = {
            card: {
                name: card.name,
                suit: card.suit,
                emoji: card.emoji,
                upright: card.upright,
                reversed: card.reversed,
                description: card.description,
                keywords: card.keywords,
                isReversed: card.isReversed,
                position: card.position || "Current"
            },
            question: question
        };
        
        // Make API call to backend
        const response = await fetch(BACKEND_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestPayload)
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Backend request failed with status ${response.status}: ${errorText}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
            throw new Error(`Backend error: ${data.error}`);
        }
        
        if (!data.interpretation) {
            throw new Error('No interpretation returned from backend');
        }
        
        const interpretation = data.interpretation.trim();
        
        // Cache the interpretation
        interpretationCache.set(cacheKey, interpretation);
        
        return interpretation;
        
    } catch (error) {
        console.error('Error calling backend API:', error);
        
        // Fallback to local interpretation if backend fails
        return getLocalInterpretation(card, question);
    }
}

// Fallback local interpretation function
function getLocalInterpretation(card, question) {
    const lowerQuestion = question.toLowerCase();
    
    // Simple context detection
    let context = "general";
    if (lowerQuestion.includes("love") || lowerQuestion.includes("relationship")) context = "love";
    else if (lowerQuestion.includes("career") || lowerQuestion.includes("work")) context = "career";
    else if (lowerQuestion.includes("money") || lowerQuestion.includes("finance")) context = "finance";
    else if (lowerQuestion.includes("health") || lowerQuestion.includes("wellness")) context = "health";
    
    const interpretations = {
        love: `In matters of love, ${card.name} ${card.isReversed ? 'suggests reflecting on emotional patterns' : 'indicates openness to connection'}.`,
        career: `Professionally, ${card.name} ${card.isReversed ? 'advises careful consideration of your path' : 'points to opportunities for growth'}.`,
        finance: `Financially, ${card.name} ${card.isReversed ? 'cautions against impulsive decisions' : 'suggests potential for abundance'}.`,
        health: `For wellness, ${card.name} ${card.isReversed ? 'emphasizes listening to your body' : 'indicates vitality and balance'}.`,
        general: `Regarding your question, ${card.name} offers ${card.isReversed ? 'insight into underlying dynamics' : 'guidance for your path forward'}.`
    };
    
    return `${interpretations[context]} The card's message in its ${card.isReversed ? 'reversed' : 'upright'} position is: "${card.isReversed ? card.reversed : card.upright}".`;
}

// Show card details in modal
async function showCardDetails(card) {
    // Show loading state in modal
    modalContent.innerHTML = `
        <div class="modal-card-header">
            <h2>${card.emoji} ${card.name}</h2>
            <p class="card-suit-modal">${card.suit} ${card.isReversed ? '(Reversed)' : '(Upright)'}</p>
        </div>
        <div class="modal-card-content">
            <div class="modal-card-meaning">
                <h3><i class="fas fa-star"></i> ${card.isReversed ? 'Reversed Meaning' : 'Upright Meaning'}</h3>
                <p>${card.isReversed ? card.reversed : card.upright}</p>
            </div>
            <div class="modal-card-description">
                <h3><i class="fas fa-book"></i> Description</h3>
                <p>${card.description}</p>
            </div>
            <div class="modal-card-keywords">
                <h3><i class="fas fa-tags"></i> Keywords</h3>
                <div class="keywords-modal">
                    ${card.keywords.map(keyword => `<span class="keyword-modal">${keyword}</span>`).join('')}
                </div>
            </div>
            <div class="modal-card-advice">
                <h3><i class="fas fa-lightbulb"></i> Advice <span class="loading-small"><i class="fas fa-spinner fa-spin"></i> Generating...</span></h3>
                <p class="advice-loading">Consulting DeepSeek AI for personalized guidance...</p>
            </div>
        </div>
    `;
    cardModal.style.display = 'flex';
    
    // Get AI interpretation
    try {
        const interpretation = await getCardInterpretation(card, question);
        
        // Update modal with interpretation
        const adviceSection = modalContent.querySelector('.modal-card-advice');
        adviceSection.innerHTML = `
            <h3><i class="fas fa-lightbulb"></i> Advice</h3>
            <p>${interpretation}</p>
        `;
    } catch (error) {
        console.error('Error getting interpretation for modal:', error);
        // Update with fallback
        const adviceSection = modalContent.querySelector('.modal-card-advice');
        adviceSection.innerHTML = `
            <h3><i class="fas fa-lightbulb"></i> Advice</h3>
            <p>The ${card.name} in its ${card.isReversed ? 'reversed' : 'upright'} position suggests: "${card.isReversed ? card.reversed : card.upright}". While we couldn't generate an AI interpretation at this moment, consider how this traditional meaning applies to your question about "${question}".</p>
        `;
    }
}

// Close modal
function closeModal() {
    cardModal.style.display = 'none';
}

// Clear all cards and reset
function clearAll() {
    currentReading = [];
    questionInput.value = '';
    question = "";
    updateCardsDisplay();
    updateExplanationDisplay();
    updateReadingSummary();
    localStorage.removeItem('tarotReading');
    localStorage.removeItem('tarotQuestion');
}

// Save reading to localStorage
function saveReading() {
    localStorage.setItem('tarotReading', JSON.stringify(currentReading));
    localStorage.setItem('tarotQuestion', question);
}

// Load saved reading from localStorage
function loadSavedReading() {
    const savedReading = localStorage.getItem('tarotReading');
    const savedQuestion = localStorage.getItem('tarotQuestion');
    
    if (savedReading) {
        currentReading = JSON.parse(savedReading);
        question = savedQuestion || "";
        questionInput.value = question;
        updateCardsDisplay();
        updateExplanationDisplay();
        updateReadingSummary();
    }
}

// Helper functions for footer links
function showAbout() {
    modalContent.innerHTML = `
        <h2><i class="fas fa-info-circle"></i> About Mystic Tarot Reader</h2>
        <div class="modal-about">
            <p>This tarot reading application is designed for entertainment and self-reflection purposes. The interpretations provided are based on traditional tarot symbolism and are meant to offer guidance, not predictions.</p>
            <p>Remember that tarot cards are tools for introspection. The most powerful insights come from your own intuition and how the cards resonate with your personal situation.</p>
            <p>All card meanings and interpretations are based on traditional Rider-Waite symbolism with modern adaptations.</p>
        </div>
    `;
    cardModal.style.display = 'flex';
}

function showCardList() {
    let cardListHTML = '<h2><i class="fas fa-list"></i> All Tarot Cards</h2><div class="card-list-container">';
    
    tarotDeck.forEach(card => {
        cardListHTML += `
            <div class="card-list-item">
                <span class="card-list-emoji">${card.emoji}</span>
                <span class="card-list-name">${card.name}</span>
                <span class="card-list-suit">${card.suit}</span>
            </div>
        `;
    });
    
    cardListHTML += '</div>';
    modalContent.innerHTML = cardListHTML;
    cardModal.style.display = 'flex';
}

function resetApp() {
    if (confirm("Are you sure you want to reset the application? This will clear your current reading and question.")) {
        clearAll();
    }
}

// Initialize the app
function init() {
    drawCardBtn.addEventListener('click', () => drawCards(1));
    drawThreeBtn.addEventListener('click', () => drawCards(3));
    clearBtn.addEventListener('click', clearAll);
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === cardModal) {
            closeModal();
        }
    });
    
    // Load any saved reading from localStorage
    loadSavedReading();
    
    // Initialize the app
    updateCardsDisplay();
    updateExplanationDisplay();
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Scroll to cards section
function scrollToCardsSection() {
    const cardsSection = document.getElementById('cardsSection');
    if (cardsSection) {
        cardsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Draw cards function
function drawCards(numCards) {
    question = questionInput.value.trim();
    
    if (question === "") {
        question = "General guidance";
    }
    
    currentReading = [];
    
    for (let i = 0; i < numCards; i++) {
        const randomIndex = Math.floor(Math.random() * tarotDeck.length);
        const card = {...tarotDeck[randomIndex]};
        
        // Determine if card is reversed (approximately 30% chance)
        card.isReversed = Math.random() < 0.3;
        
        // For three-card spread, assign positions
        if (numCards === 3) {
            const positions = ["Past", "Present", "Future"];
            card.position = positions[i];
        } else {
            card.position = "Current";
        }
        
        currentReading.push(card);
    }
    
    // Save to localStorage
    saveReading();
    
    // Update UI
    updateCardsDisplay();
    updateExplanationDisplay();
    updateReadingSummary();
    
    // Scroll to cards section after a short delay to allow DOM updates
    setTimeout(scrollToCardsSection, 100);
}

// Update cards display
function updateCardsDisplay() {
    cardsContainer.innerHTML = '';
    
    if (currentReading.length === 0) {
        cardsContainer.innerHTML = `
            <div class="placeholder">
                <div class="placeholder-icon">
                    <i class="fas fa-hand-sparkles"></i>
                </div>
                <p>Your cards will appear here after you draw</p>
                <p class="placeholder-sub">Each card comes with a detailed interpretation</p>
            </div>
        `;
        return;
    }
    
    currentReading.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = `tarot-card ${card.isReversed ? 'reversed' : ''}`;
        cardElement.innerHTML = `
            ${card.position ? `<div class="card-position">${card.position}</div>` : ''}
            ${card.isReversed ? '<div class="reversed-indicator">Reversed</div>' : ''}
            <div class="card-suit">${card.emoji}</div>
            <h3 class="card-name">${card.name}</h3>
            <div class="card-meaning">${card.isReversed ? card.reversed : card.upright}</div>
            <div class="card-suit">${card.suit}</div>
        `;
        
        cardElement.addEventListener('click', () => showCardDetails(card));
        cardsContainer.appendChild(cardElement);
    });
}

// Update explanation display
async function updateExplanationDisplay() {
    explanationContainer.innerHTML = '';
    
    if (currentReading.length === 0) {
        explanationContainer.innerHTML = `
            <div class="empty-explanation">
                <i class="fas fa-feather-alt"></i>
                <p>Draw cards to see their meanings and how they relate to your question</p>
            </div>
        `;
        return;
    }
    
    // Show loading state
    explanationContainer.innerHTML = `
        <div class="loading-explanation">
            <div class="loading-spinner">
                <i class="fas fa-crystal-ball fa-spin"></i>
            </div>
            <p>Consulting the cards for insights...</p>
            <p class="loading-sub">Generating personalized interpretations with DeepSeek AI</p>
            <p class="loading-sub">Please wait while we interpret all ${currentReading.length} card${currentReading.length > 1 ? 's' : ''}...</p>
        </div>
    `;
    
    try {
        // Get all interpretations first (process in parallel for efficiency)
        const interpretationPromises = currentReading.map(card => 
            getCardInterpretation(card, question).catch(error => {
                console.error(`Error getting interpretation for ${card.name}:`, error);
                // Return a fallback interpretation if API fails
                return `The ${card.name} suggests ${card.isReversed ? 'reflection on internal matters' : 'forward movement in your situation'}. While we couldn't generate a personalized AI interpretation at this moment, the card's traditional meaning offers guidance: "${card.isReversed ? card.reversed : card.upright}".`;
            })
        );
        
        // Wait for ALL interpretations to complete
        const interpretations = await Promise.all(interpretationPromises);
        
        // Clear loading state
        explanationContainer.innerHTML = '';
        
        // Create and append all explanations at once
        currentReading.forEach((card, index) => {
            const interpretation = interpretations[index];
            
            const explanationElement = document.createElement('div');
            explanationElement.className = 'card-explanation';
            explanationElement.innerHTML = `
                <h3>
                    <span class="card-icon">${card.emoji}</span>
                    ${card.name} ${card.isReversed ? '(Reversed)' : '(Upright)'}
                    ${card.position ? `<span style="font-size: 0.9rem; color: #82aaff; margin-left: 10px;">- ${card.position}</span>` : ''}
                </h3>
                <div class="explanation-text">
                    <p><strong>Meaning:</strong> ${card.isReversed ? card.reversed : card.upright}</p>
                    <p>${card.description}</p>
                    <p><strong>How this relates to your question:</strong> ${interpretation}</p>
                </div>
                <div class="keywords">
                    ${card.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
                </div>
            `;
            explanationContainer.appendChild(explanationElement);
        });
        
    } catch (error) {
        console.error('Error generating interpretations:', error);
        
        // Fallback: show basic card information if everything fails
        explanationContainer.innerHTML = '';
        currentReading.forEach(card => {
            const explanationElement = document.createElement('div');
            explanationElement.className = 'card-explanation';
            explanationElement.innerHTML = `
                <h3>
                    <span class="card-icon">${card.emoji}</span>
                    ${card.name} ${card.isReversed ? '(Reversed)' : '(Upright)'}
                    ${card.position ? `<span style="font-size: 0.9rem; color: #82aaff; margin-left: 10px;">- ${card.position}</span>` : ''}
                </h3>
                <div class="explanation-text">
                    <p><strong>Meaning:</strong> ${card.isReversed ? card.reversed : card.upright}</p>
                    <p>${card.description}</p>
                    <p><strong>How this relates to your question:</strong> The ${card.name} suggests ${card.isReversed ? 'reflection on internal matters' : 'forward movement in your situation'}. The card's traditional meaning offers guidance: "${card.isReversed ? card.reversed : card.upright}".</p>
                </div>
                <div class="keywords">
                    ${card.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
                </div>
            `;
            explanationContainer.appendChild(explanationElement);
        });
    }
}

// Update reading summary
function updateReadingSummary() {
    if (currentReading.length === 0) {
        readingSummary.innerHTML = '';
        return;
    }
    
    const cardNames = currentReading.map(card => 
        `${card.name} ${card.isReversed ? '(R)' : ''}`
    ).join(', ');
    
    const summaryText = currentReading.length === 1 
        ? `You drew <strong>${cardNames}</strong> in response to your question about "${question}". This card offers specific guidance for your situation.`
        : `You drew <strong>${cardNames}</strong> in response to your question about "${question}". This spread provides a comprehensive view of your situation.`;
    
    readingSummary.innerHTML = `
        <h3><i class="fas fa-scroll"></i> Reading Summary</h3>
        <p>${summaryText}</p>
    `;
}
