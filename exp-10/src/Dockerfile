# Use Node.js to build the React app
FROM node:20 AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the entire project into the container
COPY . .

# Build the React project
RUN npm run build

# Use NGINX as the production web server
FROM nginx:latest

# Remove the default NGINX configuration
RUN rm -rf /etc/nginx/conf.d

# Copy custom NGINX configuration (Optional: Create an nginx.conf if needed)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built React files to NGINX's web directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 9999
EXPOSE 9999

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
