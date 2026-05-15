import { buildPlan } from '@chittansh/agent';

const port = Number(process.env.PORT ?? 8787);
const allowedOrigin = process.env.CORS_ORIGIN ?? '*';

const corsHeaders: Record<string, string> = {
  'access-control-allow-origin': allowedOrigin,
  'access-control-allow-methods': 'POST, GET, OPTIONS',
  'access-control-allow-headers': 'content-type',
  'access-control-max-age': '86400',
};

function json(body: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      ...corsHeaders,
      'content-type': 'application/json',
      ...(init.headers as Record<string, string> | undefined),
    },
  });
}

const server = Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);

    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (req.method === 'GET' && url.pathname === '/health') {
      return json({ ok: true, service: 'chittansh-backend' });
    }

    if (req.method === 'POST' && url.pathname === '/api/plan') {
      let body: any;
      try {
        body = await req.json();
      } catch {
        return json({ error: 'invalid_json' }, { status: 400 });
      }

      const input = typeof body?.input === 'string' ? body.input.trim() : '';
      if (input.length < 12) {
        return json({ error: 'input_too_short' }, { status: 400 });
      }
      if (input.length > 4000) {
        return json({ error: 'input_too_long' }, { status: 413 });
      }

      try {
        const plan = await buildPlan(input);
        return json(plan);
      } catch (err) {
        console.error('[plan] agent error:', err);
        return json({ error: 'agent_unavailable' }, { status: 502 });
      }
    }

    return json({ error: 'not_found', path: url.pathname }, { status: 404 });
  },
});

console.log(`▸ chittansh backend listening on http://localhost:${server.port}`);
console.log(`  POST /api/plan   { input: "..." }`);
console.log(`  GET  /health`);
