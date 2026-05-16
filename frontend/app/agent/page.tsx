import Header from '../components/Header';
import PlanBuilder from '../components/PlanBuilder';

export const metadata = {
  title: 'Agent Builder — Chittansh AI',
  description:
    "Describe your workflow — by text, voice or video. Our agent matches it to a shipped demo and drafts a tailored 8-week plan in 60 seconds.",
};

export default function AgentPage() {
  return (
    <>
      <Header />

      <main className="agent-canvas">
        <div className="container agent-canvas__head">
          <span className="pill-kicker">AGENT BUILDER · LIVE</span>
          <h1 className="agent-canvas__title">
            Describe your workflow. <em>Get a tailored plan.</em>
          </h1>
          <p className="agent-canvas__lede">
            By text, voice or short video — our agent matches it to a shipped demo and drafts an
            8-week plan in 60 seconds. Then decide if a 30-min call is worth your time.
          </p>
        </div>

        <div className="container agent-stage">
          <PlanBuilder />
        </div>

        <div className="container agent-foot">
          <span>Output is a draft — we refine it on the call.</span>
          <span className="agent-foot__how">
            Prefer email? <a href="mailto:hello@chittanshai.com">hello@chittanshai.com</a>
          </span>
        </div>
      </main>
    </>
  );
}
