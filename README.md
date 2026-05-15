# chittansh-landing

Landing site for chittansh.ai with a live **Plan Builder** agent on the home page.

```
chittansh-landing/
├── agent/        Mastra Plan Builder agent (Anthropic Claude)
├── backend/      Bun HTTP server, exposes POST /api/plan
├── frontend/     Next.js 14 (App Router), ports test/*.html verbatim
└── test/         Original static HTML — reference, unchanged
```

## Architecture

```
Browser ──▶ Next.js (3000) ──fetch──▶ Bun (8787) ──▶ Mastra Agent ──▶ Anthropic
```

The frontend submits the workflow description to the backend, which calls
the Mastra-wrapped `planBuilderAgent` and returns a structured `Plan`
(summary, approach, closest demo, 3-week sprint, 8-week build, next question).

## Prerequisites

- **Node 20+** (frontend, build, install)
- **Bun 1.1+** (backend runtime — uses `Bun.serve`). Install with `curl -fsSL https://bun.sh/install | bash`
- Anthropic API key

## First-time setup

```bash
# from repo root
npm install                       # installs all workspaces (bun install also works)
cp .env.example backend/.env      # add your ANTHROPIC_API_KEY
cp .env.example frontend/.env.local
```

## Dev

Two terminals:

```bash
# terminal 1 — backend (Bun + Mastra agent)
cd backend && bun run dev

# terminal 2 — frontend (Next.js)
cd frontend && npm run dev
```

Open http://localhost:3000.

## What's wired

- `/`               — home, with live Plan Builder (text · voice · video input)
- `/about`          — about page
- `/services`       — services page
- `/case-studies`   — case studies page
- `POST /api/plan`  — backend endpoint, body `{ "input": "..." }`
- `GET  /health`    — backend health check

## Env

| Var | Where | Purpose |
|---|---|---|
| `ANTHROPIC_API_KEY` | backend | Required. The Anthropic API key the Mastra agent uses. |
| `ANTHROPIC_MODEL`   | backend | Optional. Defaults to `claude-sonnet-4-5-20250929`. |
| `PORT`              | backend | Optional. Defaults to `8787`. |
| `CORS_ORIGIN`       | backend | Optional. Defaults to `*`. Tighten in prod. |
| `NEXT_PUBLIC_API_URL` | frontend | Optional. Defaults to `http://localhost:8787`. |
