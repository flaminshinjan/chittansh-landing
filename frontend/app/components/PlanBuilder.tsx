'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Mode = 'text' | 'voice' | 'video';

type Plan = {
  summary: string;
  approach: string;
  demo: { name: string; why: string };
  sprint: string[];
  build: string[];
  question: string;
};

type ResultState = Plan & { label: string };

const SAMPLE: ResultState = {
  summary:
    'Voice agent containing returns & exchanges end-to-end on inbound calls, 30%+ deflection target.',
  approach:
    'Streaming voice on your existing telephony. Tool-use over your OMS so refunds and exchanges close on the call, not in a follow-up queue. Sub-1.4s latency budget end-to-end.',
  demo: {
    name: 'Echo Returns',
    why: 'Same shape as your stack — sub-1.4s latency, OMS-backed actions, clean escalation when policy gets ambiguous.',
  },
  sprint: [
    'Map top 8 call reasons by volume + margin',
    'Latency + tool-use POC on staging line',
    'Compliance + recording review path',
  ],
  build: [
    'Live on one number, 5% of traffic',
    'OMS tool-use locked + tested in prod',
    'Human handoff + transcript review baked in',
  ],
  question:
    'Which call reasons would make you uncomfortable letting an agent close end-to-end — and why?',
  label: '02 · Sample plan · drafted live for an example workflow',
};

const CHIPS = [
  {
    label: 'Voice for returns',
    text: 'We get 4,000 inbound support calls a month for returns and exchanges on our DTC store. Want to contain 30%+ end-to-end with voice.',
  },
  {
    label: 'Advisor copilot',
    text: 'Our advisors spend 2 hours per client writing suitability rationales. We want a copilot that drafts the memo with citations, compliance-ready.',
  },
  {
    label: 'Internal RAG',
    text: "Internal teams need to search across our 14k regulator filings, contracts and internal wiki. Today it's grep + tribal knowledge. Want a RAG copilot they actually trust.",
  },
  {
    label: 'Claims triage',
    text: 'Our claims adjusters handle motor + health FNOLs. We want an agent that triages, flags fraud signals, and gives them one screen to act on.',
  },
  {
    label: 'Editorial drafting',
    text: 'Editorial desk wants to turn wire stories into in-house briefs at deadline pace. Voice-locked, every fact cited back to source.',
  },
];

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8787';

const fmtTime = (sec: number) =>
  `${Math.floor(sec / 60)}:${String(Math.floor(sec % 60)).padStart(2, '0')}`;

export default function PlanBuilder() {
  const [mode, setMode] = useState<Mode>('text');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState<ResultState>(SAMPLE);
  const [stepIndex, setStepIndex] = useState(0);
  const [fresh, setFresh] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const startSteps = useCallback(() => {
    setStepIndex(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setStepIndex(i);
      if (i >= 3) window.clearInterval(id);
    }, 1200);
    return () => window.clearInterval(id);
  }, []);

  const runAgent = useCallback(
    async (userText: string, shake: () => void) => {
      const text = userText.trim();
      if (text.length < 12) {
        shake();
        return;
      }
      setError(false);
      setLoading(true);
      const stopSteps = startSteps();

      try {
        const res = await fetch(`${API_URL}/api/plan`, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ input: text }),
        });
        if (!res.ok) throw new Error(`status ${res.status}`);
        const data = (await res.json()) as Plan;
        if (!data?.summary || !data?.demo?.name) throw new Error('missing fields');

        await new Promise((r) => setTimeout(r, 700));
        stopSteps();
        setLoading(false);
        setResult({
          ...data,
          label: '02 · Your plan · drafted in the last 30 seconds',
        });
        setFresh(false);
        window.requestAnimationFrame(() => setFresh(true));
      } catch (err) {
        console.error('agent error', err);
        stopSteps();
        setLoading(false);
        setError(true);
      }
    },
    [startSteps]
  );

  const handleTextSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const el = textareaRef.current;
      runAgent(input, () => {
        if (!el) return;
        el.classList.add('shake');
        window.setTimeout(() => el.classList.remove('shake'), 600);
        el.focus();
      });
    },
    [input, runAgent]
  );

  const handleRestart = useCallback(() => {
    setLoading(false);
    setError(false);
    setInput('');
    setResult(SAMPLE);
    setFresh(false);
    textareaRef.current?.focus();
  }, []);

  return (
    <section className="plan-card" id="agent" aria-label="Plan Builder">

      <header className="plan-card__bar">
        <div className="plan-card__bar-l">
          <img className="plan-card__avatar" src="/logo.png" alt="" />
          <div className="plan-card__title-wrap">
            <h2 className="plan-card__title">Plan Builder</h2>
            <span className="plan-card__sub">Match your workflow to a shipped demo · ~25s</span>
          </div>
        </div>
        <div></div>
        <div className="plan-card__stats">
          <div className="plan-card__stat"><b>6</b><em>demos</em></div>
          <div className="plan-card__stat"><b>27</b><em>shipped</em></div>
        </div>
      </header>

      <div className="plan-card__split">

        {/* INPUT */}
        <div className="plan-card__input">
          <div className="plan-step">
            <span className="dot"></span>
            <span>01 · Describe your workflow</span>
          </div>

          <div className="plan-tabs" role="tablist" aria-label="Input mode">
            {(['text', 'voice', 'video'] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                className={`plan-tab${mode === m ? ' is-active' : ''}`}
                data-mode={m}
                role="tab"
                aria-selected={mode === m}
                onClick={() => setMode(m)}
              >
                {m === 'text' && (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 7 4 4 20 4 20 7" />
                    <line x1="9" y1="20" x2="15" y2="20" />
                    <line x1="12" y1="4" x2="12" y2="20" />
                  </svg>
                )}
                {m === 'voice' && (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="3" width="6" height="12" rx="3" />
                    <path d="M5 11a7 7 0 0 0 14 0" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                  </svg>
                )}
                {m === 'video' && (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="6" width="14" height="12" rx="2" />
                    <polygon points="16 10 22 6 22 18 16 14" />
                  </svg>
                )}
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </button>
            ))}
          </div>

          {/* TEXT */}
          <div className={`plan-mode${mode === 'text' ? ' is-active' : ''}`} data-pane="text">
            <div className="plan-chips" role="group" aria-label="Quick starts">
              {CHIPS.map((c) => (
                <button
                  key={c.label}
                  type="button"
                  className="plan-chip"
                  data-prefill={c.text}
                  onClick={() => {
                    setInput(c.text);
                    textareaRef.current?.focus();
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <form className="plan-textarea-wrap" id="agent-form" onSubmit={handleTextSubmit}>
              <label className="visually-hidden" htmlFor="agent-input">Describe your workflow</label>
              <textarea
                ref={textareaRef}
                id="agent-input"
                className="plan-textarea"
                rows={6}
                placeholder="Industry · team · current pain. One paragraph is enough — the more concrete, the sharper the plan."
                maxLength={900}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleTextSubmit(e as unknown as React.FormEvent);
                  }
                }}
              />
            </form>
            <div className="plan-foot">
              <span className="plan-hint">⏎ to run · never stored</span>
              <button type="button" className="plan-submit" id="agent-submit" onClick={() => handleTextSubmit({ preventDefault() {} } as React.FormEvent)}>
                Draft my plan <span className="arr">→</span>
              </button>
            </div>
          </div>

          <VoicePane active={mode === 'voice'} runAgent={runAgent} />
          <VideoPane active={mode === 'video'} runAgent={runAgent} />
        </div>

        {/* RESULT */}
        <div className="plan-card__result" id="agent-result-col">
          <div className="plan-step">
            <span className="dot dot--alt"></span>
            <span id="agent-state-label">{result.label}</span>
          </div>

          <div className={`plan-result${fresh ? ' is-fresh' : ''}`} id="agent-result">
            <div className="plan-result__row">
              <span className="plan-result__label">Summary</span>
              <p className="plan-result__summary" id="r-summary">{result.summary}</p>
            </div>
            <div className="plan-result__row">
              <span className="plan-result__label">How we&rsquo;d approach it</span>
              <p className="plan-result__approach" id="r-approach">{result.approach}</p>
            </div>

            <div className="plan-demo-card">
              <div className="plan-demo-card__head">
                <span className="plan-result__label">Closest demo · start here</span>
                <span className="plan-demo-card__badge">LIVE</span>
              </div>
              <h4 className="plan-demo-card__name" id="r-demo-name">{result.demo.name}</h4>
              <p className="plan-demo-card__why" id="r-demo-why">{result.demo.why}</p>
            </div>

            <div className="plan-phases">
              <div className="plan-phase">
                <span className="plan-result__label">Wk 1–3 · Thesis</span>
                <ul id="r-sprint">
                  {result.sprint.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div className="plan-phase">
                <span className="plan-result__label">Wk 4–12 · Build</span>
                <ul id="r-build">
                  {result.build.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
            </div>

            <div className="plan-question">
              <span className="plan-result__label">What we&rsquo;d ask on the call</span>
              <p id="r-question">{result.question}</p>
            </div>

            <div className="plan-cta">
              <a
                href="mailto:hello@chittanshai.com?subject=Demo%20plan%20followup"
                className="plan-cta__btn"
              >
                Book a 30-min call <span className="arr">→</span>
              </a>
              <button type="button" className="plan-restart" onClick={handleRestart}>
                ← Reset to sample
              </button>
            </div>
          </div>

          <div className={`plan-overlay${loading ? ' is-on' : ''}`} id="agent-loading">
            <div className="plan-loading-card">
              <div className="plan-loading-title">Drafting your plan</div>
              <div className="plan-steps">
                {[
                  { i: 1, t: 'Reading input' },
                  { i: 2, t: 'Searching demo catalogue' },
                  { i: 3, t: 'Composing plan' },
                ].map((s) => {
                  const isActive = stepIndex === s.i - 1 || (stepIndex >= 3 && s.i === 3);
                  const isDone = stepIndex > s.i - 1 && !(stepIndex >= 3 && s.i === 3);
                  return (
                    <div
                      key={s.i}
                      className={`plan-step-row${isActive ? ' is-active' : ''}${isDone ? ' is-done' : ''}`}
                      data-step={s.i}
                    >
                      <span className="plan-step-row__i">0{s.i}</span>
                      <span>{s.t}</span>
                      <span className="plan-step-row__mark"></span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={`plan-overlay${error ? ' is-on' : ''}`} id="agent-error">
            <div className="plan-loading-card plan-error">
              <p>
                Something went sideways. The frontier is unstable today — email{' '}
                <a href="mailto:hello@chittanshai.com">hello@chittanshai.com</a> and we&rsquo;ll draft your plan by hand.
              </p>
              <button type="button" className="plan-restart" onClick={handleRestart}>
                ← Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== VOICE PANE ===================== */

function VoicePane({
  active,
  runAgent,
}: {
  active: boolean;
  runAgent: (text: string, shake: () => void) => void;
}) {
  const [recording, setRecording] = useState(false);
  const [statusText, setStatusText] = useState('Tap to record · ~30s');
  const [timeText, setTimeText] = useState('0:00');
  const [transcript, setTranscript] = useState('');
  const [hint, setHint] = useState("Uses your browser's speech recognition");
  const [supported, setSupported] = useState(true);

  const barsRef = useRef<HTMLDivElement | null>(null);
  const trOutRef = useRef<HTMLDivElement | null>(null);
  const recogRef = useRef<any>(null);
  const finalTextRef = useRef('');
  const interimRef = useRef('');
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef(0);
  const timerRef = useRef<number>(0);
  const startedAtRef = useRef(0);

  useEffect(() => {
    const SR =
      (typeof window !== 'undefined' &&
        ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)) ||
      null;
    if (!SR) {
      setSupported(false);
      setHint('Speech recognition not supported here — type instead');
    }
  }, []);

  useEffect(() => {
    const w = barsRef.current;
    if (!w || w.childElementCount > 0) return;
    for (let i = 0; i < 16; i++) w.appendChild(document.createElement('span'));
  }, []);

  const stopVisualizer = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = 0;
    const bars = barsRef.current?.querySelectorAll('span');
    bars?.forEach((b) => ((b as HTMLElement).style.transform = 'scaleY(0.15)'));
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
      analyserRef.current = null;
    }
  }, []);

  const startVisualizer = useCallback(async () => {
    try {
      streamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      const Ctx = (window.AudioContext || (window as any).webkitAudioContext) as typeof AudioContext;
      audioCtxRef.current = new Ctx();
      const src = audioCtxRef.current.createMediaStreamSource(streamRef.current);
      analyserRef.current = audioCtxRef.current.createAnalyser();
      analyserRef.current.fftSize = 64;
      src.connect(analyserRef.current);
      const data = new Uint8Array(analyserRef.current.frequencyBinCount);
      const bars = barsRef.current?.querySelectorAll('span');
      const loop = () => {
        if (!analyserRef.current || !bars) return;
        analyserRef.current.getByteFrequencyData(data);
        bars.forEach((b, i) => {
          const v = data[i] / 255;
          (b as HTMLElement).style.transform = `scaleY(${Math.max(0.15, v)})`;
        });
        rafRef.current = requestAnimationFrame(loop);
      };
      loop();
    } catch {}
  }, []);

  const renderText = useCallback(() => {
    const combined = (finalTextRef.current + (interimRef.current ? ' ' + interimRef.current : '')).trim();
    setTranscript(combined);
  }, []);

  const stop = useCallback(() => {
    setRecording(false);
    const rec = recogRef.current;
    if (rec) {
      try { rec.stop(); } catch {}
      recogRef.current = null;
    }
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = 0;
    setStatusText(finalTextRef.current ? 'Stopped · review or run' : 'Tap to record · ~30s');
    stopVisualizer();
  }, [stopVisualizer]);

  const start = useCallback(async () => {
    if (!supported) return;
    finalTextRef.current = '';
    interimRef.current = '';
    renderText();

    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const rec = new SR();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = 'en-US';

    rec.onresult = (ev: any) => {
      interimRef.current = '';
      for (let i = ev.resultIndex; i < ev.results.length; i++) {
        const r = ev.results[i];
        if (r.isFinal) {
          finalTextRef.current += (finalTextRef.current ? ' ' : '') + r[0].transcript.trim();
        } else {
          interimRef.current += r[0].transcript;
        }
      }
      renderText();
    };
    rec.onerror = (e: any) => {
      setStatusText('Error: ' + (e.error || 'mic'));
      stop();
    };
    rec.onend = () => {
      if (recogRef.current) { try { rec.start(); } catch {} }
    };
    try { rec.start(); } catch {}
    recogRef.current = rec;

    setRecording(true);
    setStatusText('Listening · tap to stop');
    startedAtRef.current = performance.now();
    timerRef.current = window.setInterval(() => {
      setTimeText(fmtTime((performance.now() - startedAtRef.current) / 1000));
    }, 250);
    startVisualizer();
  }, [renderText, startVisualizer, stop, supported]);

  const handleSubmit = useCallback(() => {
    const text = (trOutRef.current?.textContent || transcript).trim();
    runAgent(text, () => {
      const el = trOutRef.current;
      if (!el) return;
      el.classList.add('shake');
      window.setTimeout(() => el.classList.remove('shake'), 600);
    });
  }, [runAgent, transcript]);

  return (
    <div className={`plan-mode${active ? ' is-active' : ''}`} data-pane="voice">
      <div className="voice-pad">
        <button
          type="button"
          className={`voice-mic${recording ? ' is-on' : ''}${supported ? '' : ' is-disabled'}`}
          id="voice-mic"
          aria-label="Tap to record"
          disabled={!supported}
          onClick={() => (recording ? stop() : start())}
        >
          <span className="voice-mic__ring"></span>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="3" width="6" height="12" rx="3" />
            <path d="M5 11a7 7 0 0 0 14 0" />
            <line x1="12" y1="18" x2="12" y2="22" />
          </svg>
        </button>
        <div className="voice-pad__meta">
          <span className="voice-status" id="voice-status">{statusText}</span>
          <span className="voice-time" id="voice-time">{timeText}</span>
        </div>
        <div className="voice-bars" id="voice-bars" aria-hidden="true" ref={barsRef}></div>
      </div>
      <div className="voice-transcript">
        <span className="voice-transcript-label">Transcript</span>
        <div
          ref={trOutRef}
          id="voice-transcript-out"
          className="voice-transcript-out"
          contentEditable
          suppressContentEditableWarning
          data-placeholder="Your transcript will appear here — editable before you submit."
        >
          {transcript}
        </div>
      </div>
      <div className="plan-foot">
        <span className="plan-hint" id="voice-hint">{hint}</span>
        <button type="button" className="plan-submit" id="voice-submit" onClick={handleSubmit}>
          Draft my plan <span className="arr">→</span>
        </button>
      </div>
    </div>
  );
}

/* ===================== VIDEO PANE ===================== */

function VideoPane({
  active,
  runAgent,
}: {
  active: boolean;
  runAgent: (text: string, shake: () => void) => void;
}) {
  const [status, setStatus] = useState('Camera off');
  const [timeText, setTimeText] = useState('0:00');
  const [recBadge, setRecBadge] = useState(false);
  const [overlayHidden, setOverlayHidden] = useState(false);
  const [recordBtnLabel, setRecordBtnLabel] = useState('● Record');
  const [recordBtnDisabled, setRecordBtnDisabled] = useState(true);
  const [stopBtnDisabled, setStopBtnDisabled] = useState(true);
  const [resetBtnDisabled, setResetBtnDisabled] = useState(true);
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(true);
  const [note, setNote] = useState('');

  const previewRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const mrRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const blobRef = useRef<Blob | null>(null);
  const startedAtRef = useRef(0);
  const timerRef = useRef<number>(0);

  const enable = useCallback(async () => {
    try {
      streamRef.current = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280 },
        audio: true,
      });
      if (previewRef.current) {
        previewRef.current.srcObject = streamRef.current;
      }
      setOverlayHidden(true);
      setStatus('Camera on · tap record');
      setRecordBtnDisabled(false);
    } catch {
      setStatus('Permission denied');
    }
  }, []);

  const start = useCallback(() => {
    if (!streamRef.current) return;
    chunksRef.current = [];
    let mr: MediaRecorder;
    try {
      mr = new MediaRecorder(streamRef.current, { mimeType: 'video/webm' });
    } catch {
      mr = new MediaRecorder(streamRef.current);
    }
    mr.ondataavailable = (ev) => { if (ev.data && ev.data.size > 0) chunksRef.current.push(ev.data); };
    mr.onstop = () => {
      blobRef.current = new Blob(chunksRef.current, { type: 'video/webm' });
      setStatus(`Recorded · ${fmtTime((performance.now() - startedAtRef.current) / 1000)} · attached`);
      setStopBtnDisabled(true);
      setRecordBtnDisabled(false);
      setRecordBtnLabel('● Re-record');
      setResetBtnDisabled(false);
      setSubmitBtnDisabled(false);
      setRecBadge(false);
      if (previewRef.current) {
        previewRef.current.srcObject = null;
        previewRef.current.src = URL.createObjectURL(blobRef.current);
        previewRef.current.controls = true;
        previewRef.current.muted = false;
        previewRef.current.play().catch(() => {});
      }
    };
    mr.start(200);
    mrRef.current = mr;
    startedAtRef.current = performance.now();
    timerRef.current = window.setInterval(() => {
      setTimeText(fmtTime((performance.now() - startedAtRef.current) / 1000));
    }, 250);
    setStatus('Recording');
    setRecBadge(true);
    setRecordBtnDisabled(true);
    setStopBtnDisabled(false);
  }, []);

  const stop = useCallback(() => {
    if (mrRef.current && mrRef.current.state !== 'inactive') mrRef.current.stop();
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = 0;
  }, []);

  const reset = useCallback(() => {
    if (blobRef.current && previewRef.current) {
      try { URL.revokeObjectURL(previewRef.current.src); } catch {}
    }
    blobRef.current = null;
    chunksRef.current = [];
    if (previewRef.current) {
      previewRef.current.controls = false;
      previewRef.current.srcObject = streamRef.current;
      previewRef.current.muted = true;
      previewRef.current.play().catch(() => {});
    }
    setTimeText('0:00');
    setRecordBtnLabel('● Record');
    setRecordBtnDisabled(!streamRef.current);
    setStopBtnDisabled(true);
    setResetBtnDisabled(true);
    setSubmitBtnDisabled(true);
    setStatus(streamRef.current ? 'Camera on · tap record' : 'Camera off');
  }, []);

  const handleSubmit = useCallback(() => {
    const trimmed = note.trim();
    const text = trimmed
      ? `[Video pitch attached · ${fmtTime((performance.now() - startedAtRef.current) / 1000)} long.] ${trimmed}`
      : '[Video pitch attached. Please review on the call and propose a plan based on what you see and hear.] User did not attach a text note.';
    runAgent(text, () => {});
  }, [note, runAgent]);

  useEffect(() => {
    return () => {
      if (streamRef.current) streamRef.current.getTracks().forEach((t) => t.stop());
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className={`plan-mode${active ? ' is-active' : ''}`} data-pane="video">
      <div className="video-pad">
        <video
          ref={previewRef}
          id="video-preview"
          className="video-preview"
          autoPlay
          muted
          playsInline
        />
        <div className={`video-overlay${overlayHidden ? ' is-hidden' : ''}`} id="video-overlay">
          <button className="video-cta" type="button" id="video-cta" onClick={enable}>
            Enable camera
          </button>
          <span className="video-hint">We&rsquo;ll attach a 30–60s pitch to your inquiry</span>
        </div>
        <div className={`video-rec${recBadge ? ' is-on' : ''}`} id="video-rec-indicator">
          <span></span>REC <em id="video-time">{timeText}</em>
        </div>
      </div>
      <div className="video-controls">
        <button
          type="button"
          className="video-btn"
          id="video-record"
          disabled={recordBtnDisabled}
          onClick={() => { if (blobRef.current) reset(); start(); }}
        >
          {recordBtnLabel}
        </button>
        <button
          type="button"
          className="video-btn video-btn--ghost"
          id="video-stop"
          disabled={stopBtnDisabled}
          onClick={stop}
        >
          ■ Stop
        </button>
        <button
          type="button"
          className="video-btn video-btn--ghost"
          id="video-reset"
          disabled={resetBtnDisabled}
          onClick={reset}
        >
          ↺ Reset
        </button>
        <span className="video-status" id="video-status">{status}</span>
      </div>
      <div className="plan-textarea-wrap video-note">
        <textarea
          id="video-note"
          className="plan-textarea"
          rows={3}
          placeholder="Optional — one line of context to send with the video."
          maxLength={400}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div className="plan-foot">
        <span className="plan-hint">Video stays local until you submit</span>
        <button
          type="button"
          className="plan-submit"
          id="video-submit"
          disabled={submitBtnDisabled}
          onClick={handleSubmit}
        >
          Draft my plan <span className="arr">→</span>
        </button>
      </div>
    </div>
  );
}
