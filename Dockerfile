FROM mcr.microsoft.com/playwright:v1.60.0-jammy

WORKDIR /app

# Install project dependencies first for better layer caching.
COPY package*.json ./
RUN npm ci

# Copy project files.
COPY . .

# Default command runs the Playwright test suite.
CMD ["npx", "playwright", "test"]
