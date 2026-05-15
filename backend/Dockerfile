# Bun runtime for the chittansh-backend (uses Bun.serve).
# Build context: repo root.
FROM oven/bun:1.3-alpine

WORKDIR /app

# Workspace manifests first for cache efficiency. Frontend manifest is
# copied (but not its source) so Bun's workspace resolver doesn't bail
# on the "frontend" entry in the root package.json.
COPY package.json ./
COPY agent/package.json ./agent/
COPY backend/package.json ./backend/
COPY frontend/package.json ./frontend/

RUN bun install --no-save

# Source.
COPY agent ./agent
COPY backend ./backend

WORKDIR /app/backend
ENV PORT=8787
EXPOSE 8787

CMD ["bun", "run", "src/index.ts"]
