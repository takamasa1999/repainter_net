FROM nginx:alpine-slim

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

WORKDIR /etc/nginx/conf.d/
# Add custom nginx config
COPY ./ssl_cert.conf /ssl_cert.conf
COPY ./nginx.conf /default.conf

EXPOSE 80 
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
