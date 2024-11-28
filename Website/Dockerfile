FROM nginx:alpine
WORKDIR /usr/share/nginx/html
# Copy all files from current directory to working dir in image
COPY . .
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]