# Build stage for Go backend
FROM golang:1.24-alpine AS go-builder

WORKDIR /app

# Copy go mod files
COPY backend/go.mod ./
RUN go mod download

# Copy source code
COPY backend/ ./

# Build the Go binary
RUN CGO_ENABLED=0 GOOS=linux go build -o tarot-backend

# Frontend and runtime stage
FROM nginx:alpine

# Install supervisord to manage both nginx and Go backend
RUN apk add --no-cache supervisor

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static files
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY config.prod.js /usr/share/nginx/html/config.js

# Copy Go binary from builder stage
COPY --from=go-builder /app/tarot-backend /usr/local/bin/tarot-backend

# Create supervisor configuration
RUN mkdir -p /etc/supervisor/conf.d
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Create startup script
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Expose port 80
EXPOSE 80

# Start supervisord
CMD ["/start.sh"]
