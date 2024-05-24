#!/bin/sh

# Check if SSL certificate and key exist
if [ -f "/etc/letsencrypt/live/repainter.nl/fullchain.pem" ] && [ -f "/etc/letsencrypt/live/repainter.nl/privkey.pem" ]; then
    # Copy the SSL config if certificates exist
    cp /path/to/ssl_cert.conf /etc/nginx/conf.d/ssl_cert.conf
    echo "SSL certificates found. SSL configuration applied."
else
    echo "SSL certificates not found. Skipping SSL configuration."
fi

# Start Nginx in the foreground
nginx -g 'daemon off;'
