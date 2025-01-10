FROM node:16

# Set the working directory to /app for initial setup
WORKDIR /mapping-components-practice

# Copy package.json files and install dependencies
COPY package*.json ./
RUN npm install

# Change to another directory for the actual app code
WORKDIR /mapping-components-practice/src

# Copy the source code into /app/src
COPY . .

# Expose the port and start the application
# EXPOSE 3000
# CMD ["npm", "run"]

# # Expose the port for Vite (default is 5173)
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]
