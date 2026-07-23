# Use Node 22 (alpine for smaller image size)
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy the server package.json files first to leverage Docker cache
COPY server/package*.json ./server/

# Install server dependencies
RUN cd server && npm install --production

# Copy the rest of the server code
COPY server ./server

# Expose the port your backend runs on (5000)
EXPOSE 5000

# Set the working directory to the server folder
WORKDIR /app/server

# Start the server
CMD ["npm", "start"]
