#!/bin/sh

# Set default environment variables if not set
export DEEPSEEK_API_KEY=${DEEPSEEK_API_KEY:-""}
export DEEPSEEK_API_URL=${DEEPSEEK_API_URL:-"https://api.deepseek.com/v1/chat/completions"}

# Validate required environment variables
if [ -z "$DEEPSEEK_API_KEY" ]; then
    echo "ERROR: DEEPSEEK_API_KEY environment variable is required"
    exit 1
fi

echo "Starting Tarot Backend with DeepSeek API URL: $DEEPSEEK_API_URL"

# Start supervisord
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
