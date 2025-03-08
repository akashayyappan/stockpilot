# Use Node.js base image
FROM node:22

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy all files to container
COPY . .

# Expose port
EXPOSE 5001

# Start the application
CMD ["node", "server.js"]