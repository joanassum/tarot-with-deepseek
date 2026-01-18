// Configuration for Tarot Card Reader App - Production version
// Uses relative path for API calls since both frontend and backend are served from same origin

// Default configuration (will be overridden by environment variables if available)
const config = {
    BACKEND_API_URL: "/api/interpret"
};

// Try to load configuration from window._env if available (set by server)
if (typeof window !== 'undefined' && window._env) {
    Object.assign(config, window._env);
}

// Export the configuration
window.tarotConfig = config;
