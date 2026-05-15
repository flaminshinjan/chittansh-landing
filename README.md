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
- `/case-studies`              — index of demos with case studies (CMS-driven)
- `/case-studies/[slug]`       — single case study (CMS-driven)
- `/studio`                    — embedded Sanity Studio (content editor)
- `POST /api/plan`  — backend endpoint, body `{ "input": "..." }`
- `GET  /health`    — backend health check

## Content (Sanity CMS)

Demos and the shipping log live in **Sanity**. Add/edit them at `/studio` —
nothing on the home page or `/case-studies` is hardcoded any more.

### One-time CMS setup

1. Create a project at <https://www.sanity.io/manage>. Note the `projectId`.
2. Generate an **Editor** token (Manage → API → Tokens). This is only needed
   for the seed script and any future writes.
3. Fill `frontend/.env.local`:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=...
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_WRITE_TOKEN=...        # only for `npm run seed`
   ```

4. Add the Studio URL to the project's CORS origins in Manage → API → CORS:
   - `http://localhost:3000` (dev)
   - your production URL (e.g. `https://chittansh.ai`)

5. Seed the existing demos & ship-log entries into the new dataset:

   ```bash
   cd frontend
   npm run seed
   ```

6. Open <http://localhost:3000/studio> to edit.

### Content model

- **demo** — every demo is treated as an article. Identity (num, slug, badge),
  card body (summary, stack, metric, CTAs), media (loom / image / embed), and
  an optional full case study (problem, what-we-built, impact, why-it-matters).
  Toggle `featuredOnHome` to show it on `/`, and `caseStudy.enabled` to expose
  `/case-studies/[slug]`.
- **shipLogEntry** — independent collection for the shipping log on `/`.
  Date, status, domain, brief, optional link.

## Env

| Var | Where | Purpose |
|---|---|---|
| `ANTHROPIC_API_KEY` | backend | Required. The Anthropic API key the Mastra agent uses. |
| `ANTHROPIC_MODEL`   | backend | Optional. Defaults to `claude-sonnet-4-5-20250929`. |
| `PORT`              | backend | Optional. Defaults to `8787`. |
| `CORS_ORIGIN`       | backend | Optional. Defaults to `*`. Tighten in prod. |
| `NEXT_PUBLIC_API_URL` | frontend | Optional. Defaults to `http://localhost:8787`. |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | frontend | Required for CMS content. |
| `NEXT_PUBLIC_SANITY_DATASET`    | frontend | Defaults to `production`. |
| `NEXT_PUBLIC_SANITY_API_VERSION`| frontend | Defaults to `2024-10-01`. |
| `SANITY_WRITE_TOKEN`            | frontend (server-only) | Required for `npm run seed`. |
