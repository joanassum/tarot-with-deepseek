// Configuration for Tarot Card Reader App
// This file loads configuration from environment variables
// In a production setup, these would be set by the build process or server

// Default configuration (will be overridden by environment variables if available)
const config = {
    BACKEND_API_URL: "http://localhost:8081/api/interpret"
};

// Try to load configuration from window._env if available (set by server)
if (typeof window !== 'undefined' && window._env) {
    Object.assign(config, window._env);
}

// Export the configuration
window.tarotConfig = config;
