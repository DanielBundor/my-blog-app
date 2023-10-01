# Dockerfile for My Blog App

# Use a base image (e.g., a lightweight Linux distribution)
FROM nginx:alpine

# Copy application files to the container
COPY app/ /usr/share/nginx/html/

# Expose the port the application will run on (default for Nginx)
EXPOSE 80

# Define the command to start the container
CMD ["nginx", "-g", "daemon off;"]

