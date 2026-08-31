// SoloTeam v2 landing: a focused, Slack-native client-operations workflow.

import { ArrowRight, Check, X, Minus, Brain, Hash, ShieldCheck } from "lucide-react";
import CopyCommand from "./CopyCommand";
import ThemeToggle from "./ThemeToggle";
import SlackDemo from "./SlackDemo";

// Assisted setup is the safest path while the pilot proves isolation and trust.
const CALENDLY = "https://calendly.com/zeeshan8281/30min";
const PILOT_URL = CALENDLY;

const AGENTS: { handle: string; role: string; does: string }[] = [
  { handle: "@ops", role: "Operations", does: "back-office, SOPs, vendor coordination — the busywork" },
  { handle: "@biz", role: "Strategy", does: "pricing, positioning, competitor moves, what to build next" },
  { handle: "@marketing", role: "Marketing", does: "posts, launch copy, SEO briefs, the content calendar" },
  { handle: "@support", role: "Support", does: "replies in your voice, complaint → bug list" },
  { handle: "@design", role: "Design", does: "landing critiques, brand direction, build-ready specs" },
];

type Cell = { ok: boolean | "mid"; note: string };
const MATRIX: { dim: string; us: Cell; manual: Cell; suite: Cell; builder: Cell }[] = [
  { dim: "Turns Slack context into an update", us: { ok: true, note: "the workflow" }, manual: { ok: true, note: "by hand" }, suite: { ok: "mid", note: "needs inputs" }, builder: { ok: "mid", note: "needs setup" } },
  { dim: "Tracks the follow-up", us: { ok: true, note: "included" }, manual: { ok: "mid", note: "easy to miss" }, suite: { ok: true, note: "in projects" }, builder: { ok: "mid", note: "you build it" } },
  { dim: "Human approval before sending", us: { ok: true, note: "required" }, manual: { ok: true, note: "inherent" }, suite: { ok: "mid", note: "varies" }, builder: { ok: "mid", note: "configure it" } },
  { dim: "Works where delivery happens", us: { ok: true, note: "inside Slack" }, manual: { ok: true, note: "inside Slack" }, suite: { ok: false, note: "another system" }, builder: { ok: "mid", note: "integration" } },
  { dim: "Needs a system replacement", us: { ok: true, note: "no" }, manual: { ok: true, note: "no" }, suite: { ok: false, note: "often" }, builder: { ok: true, note: "no" } },
];

const CAPABILITIES: [string, string][] = [
  ["client-scoped context", "keeps each client workflow grounded in its own channel"],
  ["approval gate", "nothing consequential leaves without a named human"],
  ["weekly updates", "scheduled drafts for status, blockers, decisions, and next actions"],
  ["connected context", "bring in approved Notion and Google sources during setup"],
  ["assisted onboarding", "we configure the first workflow with you"],
];

const FAQS: [string, string][] = [
  ["Is this another reporting dashboard?", "No. Keep the reporting and project tools you already use. SoloTeam turns the operating context around them into a client-ready update, approval request, and owned follow-up."],
  ["Do agents act without my approval?", "Never. Agents draft and propose; you approve. Every outbound action requires an explicit yes."],
  ["Do I need my own API keys?", "No. Inference runs on our keys, baked into the flat price. You never think about tokens."],
  ["Do I have to replace my project tools?", "No. SoloTeam is a coordination layer inside Slack. During assisted setup, we identify which existing sources remain authoritative for each client."],
  ["What's in the pilot?", "Up to five active client channels, one weekly update-and-follow-through workflow, approval gating, and assisted setup for $99/month."],
];

// ── Figma-style selection handles around inline content ──
function Sel({ children }: { children: React.ReactNode }) {
  return (
    <span className="sel">
      {children}
      <i className="sel-h -left-1 -top-1" />
      <i className="sel-h -right-1 -top-1" />
      <i className="sel-h -bottom-1 -left-1" />
      <i className="sel-h -bottom-1 -right-1" />
    </span>
  );
}

function Eyebrow({ children, count }: { children: React.ReactNode; count?: string }) {
  return (
    <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-400">
      <span><span className="text-accent">↳ </span>{children}</span>
      {count && <span className="text-neutral-300">[{count}]</span>}
    </div>
  );
}

function Mark({ cell }: { cell: Cell }) {
  const Icon = cell.ok === true ? Check : cell.ok === "mid" ? Minus : X;
  const tone = cell.ok === true ? "bg-accent text-white" : cell.ok === "mid" ? "bg-neutral-200 text-neutral-500" : "bg-neutral-100 text-neutral-300";
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className={`flex h-5 w-5 items-center justify-center rounded-full ${tone}`}><Icon size={12} strokeWidth={3} /></span>
      <span className="font-mono text-[11px] text-neutral-400">{cell.note}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      {/* nav */}
      <nav className="sticky top-0 z-50 border-b border-line/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 sm:px-10">
          <a href="#" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-neutral-900">
            <span className="text-accent">✳</span> SoloTeam
          </a>
          <div className="hidden gap-7 font-mono text-xs text-neutral-500 sm:flex">
            <a href="#team" className="hover:text-neutral-900">team</a>
            <a href="#how" className="hover:text-neutral-900">how</a>
            <a href="#pricing" className="hover:text-neutral-900">pricing</a>
            <a href="/docs" className="hover:text-neutral-900">docs</a>
            <a href="/changelog" className="hover:text-neutral-900">changelog</a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href={PILOT_URL} target="_blank" rel="noopener noreferrer" className="glow flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-accent-deep">
              Apply for pilot <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </nav>

      {/* hero — text left, the product (a live Slack thread) right */}
      <section className="relative overflow-hidden">
        <div className="dotgrid pointer-events-none absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-16 sm:px-10 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* left: the pitch */}
          <div>
            <a href="#team" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 font-mono text-[11px] text-neutral-500 shadow-sm">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" /> Private pilot · built for small agencies
            </a>
            <h1 className="neon display mt-6 text-[2.7rem] text-neutral-900 sm:text-[4rem]">
              Turn a week of Slack<br className="hidden sm:block" /> into the{" "}
              <Sel><span className="text-accent">client update.</span></Sel>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-500">
              SoloTeam drafts the status, blockers, decisions, and next actions from your client channel.
              You review; it sends and keeps the follow-up moving.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={PILOT_URL} target="_blank" rel="noopener noreferrer" className="glow flex items-center gap-1.5 rounded-xl bg-accent px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-accent-deep">
                Apply for assisted pilot <ArrowRight size={15} />
              </a>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-line bg-white px-5 py-3 text-[14px] font-medium text-neutral-700 transition-colors hover:border-neutral-300">
                Talk to founder
              </a>
            </div>
            <div className="mt-7 max-w-sm">
              <CopyCommand cmd="/invite @SoloTeam" />
            </div>
            <p className="mt-5 font-mono text-[12px] text-neutral-400">$99/month · up to 5 client channels · human approval required</p>
          </div>

          {/* right: the product itself */}
          <div className="lg:pl-2">
            <SlackDemo />
          </div>
        </div>

        {/* honest trust row — role chips, not fake logos */}
        <div className="mx-auto max-w-6xl px-6 pb-16 sm:px-10">
          <div className="border-t border-line/70 pt-8">
            <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-300 sm:text-left">Built for 2–20 person agencies · runs in the Slack you already use</p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[13px] text-neutral-400 sm:justify-start">
              {["client update", "follow-up", "next actions", "approval", "weekly cadence"].map((item) => <span key={item} className="text-neutral-500">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* two cards — what you get */}
      <section className="border-t border-line/70 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <Eyebrow count="01">what you get</Eyebrow>
          <h2 className="display mt-4 max-w-2xl text-3xl text-neutral-900 sm:text-5xl">One client loop. Nothing drops.</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {/* blue gradient card */}
            <div className="glow relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-accent-deep p-8 text-white sm:p-10">
              <Brain className="absolute -right-6 -top-6 text-white/10" size={140} strokeWidth={1} />
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">The weekly update</p>
              <h3 className="mt-3 text-2xl font-semibold">Channel activity becomes client-ready.</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/80">
                SoloTeam gathers completed work, blockers, decisions, and next actions into one draft grounded in the client&apos;s context.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
                {[["1", "client scope"], ["1", "approval"], ["1", "follow-up"]].map(([n, l]) => (
                  <div key={l}><p className="text-2xl font-semibold">{n}</p><p className="font-mono text-[11px] text-white/60">{l}</p></div>
                ))}
              </div>
            </div>
            {/* white card */}
            <div className="rounded-3xl border border-line bg-white p-8 sm:p-10">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400"><Hash size={14} className="text-accent" /> The follow-through</p>
              <h3 className="mt-3 text-2xl font-semibold text-neutral-900">Every next action stays visible.</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-neutral-500">
                Approve the outbound message, assign what remains, and keep the open loop in view without replacing your project system.
              </p>
              <div className="mt-8 space-y-2.5 border-t border-line pt-6">
                {[["01", "Draft from approved context"], ["02", "Review and edit"], ["03", "Send after approval"], ["04", "Track unresolved actions"]].map(([step, label]) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-md bg-accent-soft px-2 py-1 font-mono text-[12px] font-medium text-accent">{step}</span>
                    <span className="font-mono text-[12px] text-neutral-400">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* focused workflow — replaces unsupported contractor savings math */}
      <section className="border-t border-line/70">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div>
            <Eyebrow count="02">the workflow</Eyebrow>
            <h2 className="display mt-4 max-w-3xl text-3xl text-neutral-900 sm:text-5xl">From scattered channel activity to approved follow-through.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-500">
              SoloTeam does one recurring job end to end. It works beside the tools you already use instead of asking you to rebuild the agency around another dashboard.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              ["01", "Collect", "Read the client channel and approved connected sources."],
              ["02", "Draft", "Prepare status, blockers, decisions, and next actions."],
              ["03", "Approve", "Show the destination and wait for a named human."],
              ["04", "Follow through", "Send, schedule, and keep unresolved actions visible."],
            ].map(([n, title, body]) => (
              <div key={n} className="rounded-2xl border border-line bg-surface p-6">
                <span className="font-mono text-sm font-medium text-accent">{n}</span>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900">{title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-neutral-500">{body}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* benchmark-style checklist */}
      <section className="border-t border-line/70 bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
          <Eyebrow count="03">vs. the alternatives</Eyebrow>
          <h2 className="display mt-4 max-w-3xl text-3xl text-neutral-900 sm:text-5xl">A focused layer, not another system to run.</h2>
          <div className="mt-12 overflow-x-auto rounded-2xl border border-line bg-white">
            <div className="grid min-w-[760px] grid-cols-[1.6fr_1fr_1fr_1fr_1fr] border-b border-line bg-surface px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-neutral-400 sm:px-7">
              <span />
              <span className="text-center font-semibold text-accent">SoloTeam</span>
              <span className="text-center">Manual work</span>
              <span className="text-center">Agency suite</span>
              <span className="text-center">Agent builder</span>
            </div>
            {MATRIX.map((r, i) => (
              <div key={r.dim} className={`grid min-w-[760px] grid-cols-[1.6fr_1fr_1fr_1fr_1fr] items-center px-5 py-5 sm:px-7 ${i ? "border-t border-line" : ""}`}>
                <span className="pr-3 text-[14px] text-neutral-800">{r.dim}</span>
                <div className="flex justify-center bg-accent-soft/40"><Mark cell={r.us} /></div>
                <div className="flex justify-center"><Mark cell={r.manual} /></div>
                <div className="flex justify-center"><Mark cell={r.suite} /></div>
                <div className="flex justify-center"><Mark cell={r.builder} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* giant marquee */}
      <section className="overflow-hidden border-y border-line/70 bg-white py-10">
        <div className="marquee">
          {[0, 1].map((k) => (
            <span key={k} className="display whitespace-nowrap px-6 text-[5rem] text-neutral-100 sm:text-[8rem]">
              EVERY&nbsp;CLIENT&nbsp;CURRENT.&nbsp;EVERY&nbsp;NEXT&nbsp;ACTION&nbsp;OWNED.&nbsp;<span className="text-accent/15">·</span>&nbsp;
            </span>
          ))}
        </div>
      </section>

      {/* team */}
      <section id="team" className="border-t border-line/70">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <Eyebrow count="04">the team</Eyebrow>
          <h2 className="display mt-4 max-w-3xl text-3xl text-neutral-900 sm:text-5xl">Specialists behind the workflow—not five bots to manage.</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AGENTS.map((a) => (
              <div key={a.handle} className="group rounded-2xl border border-line bg-white p-6 transition-colors hover:border-accent/40">
                <p className="font-mono text-sm font-medium text-accent">{a.handle}</p>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900">{a.role}</h3>
                <p className="mt-2 font-mono text-[13px] leading-relaxed text-neutral-500">{a.does}</p>
              </div>
            ))}
            <div className="flex items-center justify-center rounded-2xl border border-dashed border-line p-6 text-center">
              <p className="font-mono text-[13px] text-neutral-400"><span className="text-neutral-700">one shared context</span><br />scoped to the client workflow</p>
            </div>
          </div>
        </div>
      </section>

      {/* how */}
      <section id="how" className="border-t border-line/70 bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
          <Eyebrow count="05">how it works</Eyebrow>
          <h2 className="display mt-4 text-3xl text-neutral-900 sm:text-5xl">Your first useful draft, together.</h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              ["01", "Choose one client", "pick the channel + authoritative sources"],
              ["02", "Review the first draft", "check facts, tone, and destination"],
              ["03", "Approve the weekly loop", "send the update + track follow-ups"],
            ].map(([n, t, cmd]) => (
              <div key={n} className="rounded-2xl border border-line bg-white p-6">
                <span className="font-mono text-sm font-medium text-accent">{n}</span>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900">{t}</h3>
                <code className="mt-4 block rounded-lg bg-surface px-3 py-2 font-mono text-[12px] leading-relaxed text-neutral-600"><span className="text-accent">› </span>{cmd}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* pricing */}
      <section id="pricing" className="border-t border-line/70">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
          <Eyebrow count="06">pricing</Eyebrow>
          <h2 className="display mt-4 text-3xl text-neutral-900 sm:text-5xl">Pay for active client workflows, not agents.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-500">Start assisted. Prove the weekly loop on real client work before expanding.</p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {[
              ["Assisted pilot", "$99", ["up to 5 active client channels", "weekly update + follow-through", "human approval gate", "white-glove setup"], true],
              ["Growth test", "$149", ["up to 10 active client channels", "everything in the pilot", "scheduled updates", "unresolved-action tracking"], false],
            ].map(([name, price, feats, hero]) => (
              <div key={name as string} className={`relative rounded-3xl border p-7 ${hero ? "border-accent bg-accent text-white shadow-xl shadow-accent/20" : "border-line bg-white"}`}>
                {hero === true && <span className="absolute -top-3 left-7 rounded-full bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent shadow-sm">most popular</span>}
                <p className={`font-mono text-[11px] uppercase tracking-wider ${hero ? "text-white/70" : "text-neutral-400"}`}>{name as string}</p>
                <p className="mt-3 text-4xl font-semibold">{price as string}{price !== "soon" && <span className={`text-base font-normal ${hero ? "text-white/60" : "text-neutral-400"}`}>/mo</span>}</p>
                <ul className={`mt-6 space-y-2.5 font-mono text-[13px] ${hero ? "text-white/85" : "text-neutral-600"}`}>
                  {(feats as string[]).map((f) => <li key={f} className="flex gap-2"><Check size={15} className={hero ? "text-white" : "text-accent"} /> {f}</li>)}
                </ul>
                <a href={PILOT_URL} target="_blank" rel="noopener noreferrer" className={`mt-8 flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-[13px] font-medium transition-colors ${hero ? "bg-white text-accent hover:bg-white/90" : "glow bg-accent text-white hover:bg-accent-deep"}`}>
                  {hero ? "Apply for pilot" : "Talk through fit"} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* current pilot capabilities */}
      <section className="border-t border-line/70 bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-24 sm:px-10">
          <Eyebrow count="07">available in the pilot</Eyebrow>
          <h2 className="display mt-4 text-3xl text-neutral-900 sm:text-5xl">What works today.</h2>
          <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-white">
            {CAPABILITIES.map(([n, d], i) => (
              <div key={n} className={`flex items-center gap-4 px-6 py-4 font-mono text-[13px] ${i ? "border-t border-line" : ""}`}>
                <span className="text-neutral-900">{n}</span>
                <span className="flex-1 text-neutral-400">{d}</span>
                <span className="rounded-md bg-accent-soft px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent">pilot</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section id="faq" className="border-t border-line/70">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:px-10">
          <Eyebrow count="08">faq</Eyebrow>
          <h2 className="display mt-4 text-3xl text-neutral-900 sm:text-5xl">Fair questions.</h2>
          <div className="mt-10">
            {FAQS.map(([q, a]) => (
              <details key={q} className="group border-t border-line py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-neutral-900">
                  {q}<span className="text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-neutral-500">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* assisted pilot CTA */}
      <section className="border-t border-line/70 bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-28 sm:px-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="display text-4xl text-neutral-900 sm:text-6xl">Start with one<br />real client channel.</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-500">
              We configure the first weekly update with you, verify the source context, and keep every outbound action behind approval.
            </p>
            <a href={PILOT_URL} target="_blank" rel="noopener noreferrer" className="glow mt-8 inline-flex items-center gap-1.5 rounded-xl bg-accent px-6 py-3.5 text-[14px] font-medium text-white transition-colors hover:bg-accent-deep">
              Apply for assisted pilot <ArrowRight size={15} />
            </a>
          </div>
          <div className="glow rounded-3xl bg-gradient-to-br from-accent to-accent-deep p-8 text-white sm:p-10">
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70"><ShieldCheck size={14} /> trust before automation</p>
            <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">You see the source, draft, and destination.</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-white/75">Client scope is configured during onboarding. You can edit every draft, and nothing consequential sends without an explicit approval.</p>
            <div className="mt-8 grid gap-3 border-t border-white/15 pt-6 font-mono text-[12px] text-white/80">
              {["client-scoped context", "destination preview", "named human approval"].map((item) => <span key={item} className="flex items-center gap-2"><Check size={14} /> {item}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* footer with giant wordmark */}
      <footer className="relative overflow-hidden border-t border-line/70 bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-20 sm:px-10">
          <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <a href="#" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-neutral-900"><span className="text-accent">✳</span> SoloTeam</a>
              <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-neutral-500">Slack-native client operations for small agencies.</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">Product</p>
              <ul className="mt-4 space-y-2.5 font-mono text-[13px] text-neutral-500">
                <li><a href="#team" className="hover:text-accent">Team</a></li>
                <li><a href="#how" className="hover:text-accent">How it works</a></li>
                <li><a href="#pricing" className="hover:text-accent">Pricing</a></li>
                <li><a href="/changelog" className="hover:text-accent">Changelog</a></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">Company</p>
              <ul className="mt-4 space-y-2.5 font-mono text-[13px] text-neutral-500">
                <li><a href="/docs" className="hover:text-accent">Docs</a></li>
                <li><a href="#faq" className="hover:text-accent">FAQ</a></li>
                <li><a href="#pricing" className="hover:text-accent">Apply for pilot</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 flex items-center justify-between border-t border-line py-6 font-mono text-[12px] text-neutral-400">
            <span>© 2026 SoloTeam</span>
            <span>every client current · every next action owned</span>
          </div>
        </div>
        {/* giant watermark wordmark */}
        <p className="display pointer-events-none select-none whitespace-nowrap text-center text-[22vw] leading-[0.7] text-neutral-100">SoloTeam.</p>
      </footer>
    </main>
  );
}
