# Use an official minimal nginx image based on Alpine Linux
FROM nginx:alpine

# Define the directory to hold the content
WORKDIR /usr/share/nginx/html

# Transfer files from the host to the container
COPY index.html index.html
COPY style.css style.css
COPY script.js script.js

# Make port 80 available to the host
EXPOSE 80

# Launch nginx to run the container
CMD ["nginx", "-g", "daemon off;"]

