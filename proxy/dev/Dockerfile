FROM nginx:alpine
# Add custom nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 3000
EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]