// agency. — landing page. smfs.ai-grade refined terminal, LIGHT: warm paper + ink,
// left-aligned editorial, bold grotesk headlines paired with monospace technical accents,
// hairline margin frame, registration crosses where rules intersect, spec-sheet honesty.

import IMac from "./iMac";

// Slack workspace invite — drop the real invite URL here.
const SLACK_INVITE = "https://join.slack.com/t/soloteamavengers/shared_invite/zt-40k47s006-WCMjuJ~ZWY5JHLTcrRXHPw";

const AGENTS: { handle: string; role: string; does: string; acts: string; soon?: boolean }[] = [
  { handle: "@ops", role: "Operations", does: "back-office, SOPs, vendor coordination, the busywork", acts: "drafts + sends email (you approve)" },
  { handle: "@biz", role: "Business / Strategy", does: "pricing, positioning, competitor moves, what to build next", acts: "strategy memos · publishes to Notion" },
  { handle: "@marketing", role: "Marketing", does: "posts, launch copy, SEO briefs, the content calendar", acts: "drafts launch emails · drafts posts & threads" },
  { handle: "@support", role: "Customer Support", does: "replies in your voice, complaint → bug list", acts: "drafts replies · summarizes issues" },
  { handle: "@design", role: "Design", does: "landing critiques, brand direction, build-ready UI specs", acts: "design specs + briefs · asset checklists" },
  { handle: "@finance", role: "Finance", does: "runway math, invoice chasing, plain-English P&L", acts: "coming soon", soon: true },
];

const SPECS: [string, string][] = [
  ["agents", "3 on starter · up to 5 on pilot"],
  ["interface", "Slack-first — agents join your workspace as @mentionable members"],
  ["memory", "persistent, per-company. one shared brain across every agent"],
  ["actions", "email (draft + send) · Notion publishing · post drafts — all human-approved"],
  ["models", "frontier models on our keys. no API setup, no token math"],
  ["approval", "every outbound action is opt-in. nothing ships without you"],
  ["data", "your business context stays yours. never used for training"],
  ["onboarding", "one brief. every agent reads it. ~10 min to live"],
];

const COMPARE: { dim: string; agency: string; contractor: string; chatgpt: string }[] = [
  { dim: "cost / month", agency: "$49–$99", contractor: "$2,000+", chatgpt: "$20" },
  { dim: "knows your business", agency: "persistent shared memory", contractor: "weeks of ramp-up", chatgpt: "forgets every chat" },
  { dim: "takes real actions", agency: "yes — you approve", contractor: "yes", chatgpt: "no" },
  { dim: "domains covered", agency: "up to 5", contractor: "1", chatgpt: "general" },
  { dim: "available", agency: "24/7", contractor: "business hours", chatgpt: "24/7" },
  { dim: "ramp time", agency: "minutes", contractor: "weeks", chatgpt: "n/a" },
];

const STEPS: { cmd: string; title: string; out: string }[] = [
  { cmd: "/invite @SoloTeam", title: "Add them to your Slack.", out: "Your agents join your workspace as members you @mention — no new app, no new tab to forget." },
  { cmd: "@SoloTeam read our site & remember what we do", title: "Brief them once.", out: "Tell them what you're building, or point them at your site — they read it and remember it forever, shared across the whole team." },
  { cmd: "@marketing draft our launch thread", title: "Put them to work.", out: "@mention any agent. They draft, propose, and wait. You approve. Then they ship." },
];

const FAQS: [string, string][] = [
  ["Is this just ChatGPT with system prompts?", "No. Each agent has persistent memory of your business that compounds over time, a real domain playbook, and the ability to take approved actions — send email, publish to Notion, draft posts. A chat session forgets you. Your team doesn't."],
  ["Do agents act without my approval?", "Never. Agents draft and propose; you approve. Every outbound action — every email, post, and published doc — requires an explicit yes."],
  ["Do I need my own API keys?", "No. Inference runs on our keys and is baked into the flat monthly price. You never think about tokens."],
  ["Where do I talk to my agents?", "In your Slack. During the pilot, agents join your workspace as members you @mention — no new app, no new tab to forget. A dedicated web workspace comes later."],
  ["What's in the pilot?", "Start with 3 agents of your choice, expand to 5. Limited seats — we onboard founders in small batches so every team gets tuned properly."],
];

// honest roadmap — capabilities not live yet
const ROADMAP: { name: string; detail: string }[] = [
  { name: "@finance", detail: "runway math, invoice chasing, plain-English P&L" },
  { name: "calendar", detail: "@ops books & manages meetings — Google Calendar" },
  { name: "inbox triage", detail: "@support reads and replies to your real inbox — Gmail" },
  { name: "post scheduling", detail: "@marketing schedules posts to X & LinkedIn, not just drafts" },
  { name: "proactive briefings", detail: "scheduled digests & monitoring — not just on-demand" },
  { name: "web workspace", detail: "a dedicated app beyond Slack" },
];

// section wrapper: top hairline + registration crosses at the rule intersections
function Section({
  id,
  slug,
  fig,
  children,
  className = "",
}: {
  id?: string;
  slug?: string;
  fig?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative border-t border-line ${className}`}>
      <div className="px-6 py-20 sm:px-10 sm:py-24">
        {slug && (
          <div className="mb-12 flex items-baseline justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-neutral-500">
              <span className="text-accent">/ </span>
              {slug}
            </p>
            {fig && <p className="font-mono text-[11px] text-neutral-400">{fig}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <div className="relative mx-auto max-w-5xl">
        {/* ── nav ── */}
        <nav className="sticky top-0 z-50 border-b border-line bg-[#f6f5f1]/85 backdrop-blur">
          <div className="flex items-center justify-between px-6 py-3.5 sm:px-10">
            <a href="#" className="font-mono text-sm font-semibold tracking-tight text-neutral-900">
              Solo<span className="text-accent">Team</span>
            </a>
            <div className="hidden gap-7 font-mono text-xs text-neutral-500 sm:flex">
              <a href="#roster" className="hover:text-neutral-900">roster</a>
              <a href="#how" className="hover:text-neutral-900">how</a>
              <a href="#compare" className="hover:text-neutral-900">vs.</a>
              <a href="#pricing" className="hover:text-neutral-900">pricing</a>
              <a href="/docs" className="hover:text-neutral-900">docs</a>
              <a href="/changelog" className="hover:text-neutral-900">changelog</a>
            </div>
            <a
              href="#pricing"
              className="border border-accent/60 px-3 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent hover:text-white"
            >
              join pilot →
            </a>
          </div>
        </nav>

        {/* ── hero ── */}
        <section className="dotgrid relative overflow-hidden">
          <div className="mx-auto max-w-3xl px-6 pb-6 pt-20 text-center sm:pt-28">
            <p className="mb-7 inline-flex items-center gap-2 border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-neutral-600">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
              pilot · seats: limited
            </p>
            <h1 className="display mx-auto max-w-3xl text-[2.9rem] font-semibold tracking-tight text-neutral-900 sm:text-[4.5rem]">
              Your first five hires are <span className="text-accent">agents</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
              For solo founders and small teams. Deploy a team of AI agents — ops, strategy,
              design, marketing, support — that share one memory of your business and do real
              work you approve.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#pricing"
                className="rounded-full bg-accent px-6 py-3 font-mono text-[13px] font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                deploy your team →
              </a>
              <a
                href={SLACK_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-[13px] text-neutral-700 transition-colors hover:border-neutral-400"
              >
                <svg width="15" height="15" viewBox="0 0 122.8 122.8" aria-hidden="true">
                  <path fill="#36C5F0" d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"/>
                  <path fill="#2EB67D" d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"/>
                  <path fill="#ECB22E" d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"/>
                  <path fill="#E01E5A" d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"/>
                </svg>
                add to Slack
              </a>
            </div>
          </div>

          {/* the product */}
          <div className="mx-auto max-w-3xl px-6 pb-20 pt-8">
            <IMac />
            <p className="mx-auto mt-7 max-w-md text-center font-mono text-[13px] leading-relaxed text-neutral-500">
              one desktop · one shared memory · every action waits for your <span className="text-accent">approval</span>
            </p>
          </div>
        </section>

        {/* ── stats ── */}
        <Section>
          <div className="-my-4 grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x">
            {[
              ["7+", "roles you cover alone"],
              ["3→5", "agents on your team"],
              ["1", "shared memory"],
              ["100%", "actions you approve"],
            ].map(([stat, label], i) => (
              <div key={label} className={`py-4 ${i % 2 === 1 ? "pl-5" : ""} ${i >= 2 ? "border-t border-line pt-8 sm:border-t-0 sm:pt-4" : ""} sm:px-6`}>
                <p className="font-mono text-3xl font-semibold text-accent sm:text-4xl">{stat}</p>
                <p className="mt-2 font-mono text-[11px] leading-relaxed text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── the case ── */}
        <Section slug="the case" fig="00 / context">
          <h2 className="display max-w-2xl text-3xl font-semibold text-neutral-900 sm:text-[2.6rem]">
            Solo doesn&apos;t have to mean alone.
          </h2>
          <p className="mt-5 max-w-lg font-mono text-[13px] leading-relaxed text-neutral-600">
            You cover seven roles and do none of them well enough. A contractor costs $2k+
            and takes weeks to ramp. A chatbot forgets you between tabs. There&apos;s a gap —
            we&apos;re it.
          </p>
        </Section>

        {/* ── roster ── */}
        <Section id="roster" slug="the roster" fig="01 / six specialists">
          <h2 className="display max-w-2xl text-3xl font-semibold text-neutral-900 sm:text-[2.6rem]">
            Pick three. Expand to five.
          </h2>
          <p className="mt-5 max-w-lg font-mono text-[13px] leading-relaxed text-neutral-600">
            Each onboards from the same company brief and builds memory from day one.
          </p>

          <div className="mt-12 border border-line">
            <div className="hidden grid-cols-[120px_160px_1fr_1fr] border-b border-line bg-surface px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-neutral-500 sm:grid">
              <span>handle</span>
              <span>role</span>
              <span>does</span>
              <span>acts <span className="text-neutral-400">(approved)</span></span>
            </div>
            {AGENTS.map((a, i) => (
              <div
                key={a.handle}
                className={`spec-row grid gap-1 px-4 py-4 font-mono text-[13px] sm:grid-cols-[120px_160px_1fr_1fr] sm:gap-4 ${i !== 0 ? "border-t border-line" : ""}`}
              >
                <span className={a.soon ? "text-neutral-400" : "text-accent"}>{a.handle}</span>
                <span className={a.soon ? "text-neutral-400" : "text-neutral-800"}>
                  {a.role}
                  {a.soon && (
                    <span className="ml-2 rounded-sm border border-line px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-neutral-400">
                      soon
                    </span>
                  )}
                </span>
                <span className="text-neutral-500">{a.does}</span>
                <span className={a.soon ? "text-neutral-400" : "text-neutral-500"}>{a.acts}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── architecture ── */}
        <Section slug="architecture" fig="02 / data flow">
          <h2 className="display max-w-2xl text-3xl font-semibold text-neutral-900 sm:text-[2.6rem]">
            One brief. One memory. Every action through you.
          </h2>
          <p className="mt-5 max-w-lg font-mono text-[13px] leading-relaxed text-neutral-600">
            What @biz decides, @marketing knows. Every outbound action flows through a
            single approval gate: you.
          </p>

          <div className="mt-12">
            <div className="flex flex-wrap gap-2">
              {AGENTS.map((a) => (
                <span key={a.handle} className="border border-line bg-surface px-3 py-1.5 font-mono text-xs text-neutral-700">
                  {a.handle}
                </span>
              ))}
            </div>
            <div className="ml-5 h-7 w-px bg-line" />
            <div className="flex flex-wrap items-stretch gap-3 sm:gap-0">
              <div className="border border-line bg-surface px-5 py-4 sm:w-72">
                <p className="font-mono text-[13px] text-neutral-900">shared company memory</p>
                <p className="mt-1 font-mono text-[11px] text-neutral-400">brief · decisions · voice · history</p>
              </div>
            </div>
            <div className="ml-5 h-7 w-px bg-line" />
            <div className="inline-block border border-accent/50 bg-accent/5 px-5 py-4">
              <p className="font-mono text-[13px] text-neutral-900">you <span className="text-accent">[approve]</span></p>
              <p className="mt-1 font-mono text-[11px] text-neutral-500">nothing ships without you</p>
            </div>
          </div>
        </Section>

        {/* ── how it works ── */}
        <Section id="how" slug="how it works" fig="03 / ~10 min">
          <h2 className="display max-w-2xl text-3xl font-semibold text-neutral-900 sm:text-[2.6rem]">
            Hired in minutes. Useful for months.
          </h2>
          <div className="mt-12 border border-line">
            {STEPS.map((s, i) => (
              <div key={s.cmd} className={`grid gap-3 px-5 py-6 sm:grid-cols-[1fr_1.4fr] sm:gap-8 ${i !== 0 ? "border-t border-line" : ""}`}>
                <div>
                  <span className="font-mono text-xs text-neutral-400">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 font-mono text-[15px] font-semibold text-neutral-900">{s.title}</h3>
                  <code className="mt-3 inline-block bg-surface px-2.5 py-1 font-mono text-xs text-neutral-700">
                    <span className="text-accent">›</span> {s.cmd}
                  </code>
                </div>
                <p className="font-mono text-[13px] leading-relaxed text-neutral-600">{s.out}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── compare ── */}
        <Section id="compare" slug="vs. the alternatives" fig="04 / benchmark">
          <h2 className="display max-w-2xl text-3xl font-semibold text-neutral-900 sm:text-[2.6rem]">
            What you&apos;d weigh us against.
          </h2>
          <div className="mt-12 overflow-x-auto border border-line">
            <table className="w-full border-collapse font-mono text-[13px]">
              <thead>
                <tr className="border-b border-line bg-surface text-left text-[10px] uppercase tracking-wider">
                  <th className="px-4 py-2.5 font-normal text-neutral-400"></th>
                  <th className="px-4 py-2.5 font-normal text-accent">SoloTeam</th>
                  <th className="px-4 py-2.5 font-normal text-neutral-500">a contractor</th>
                  <th className="px-4 py-2.5 font-normal text-neutral-500">raw ChatGPT</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={row.dim} className={`spec-row ${i !== 0 ? "border-t border-line" : ""}`}>
                    <td className="px-4 py-3.5 text-neutral-500">{row.dim}</td>
                    <td className="bg-accent/[0.06] px-4 py-3.5 text-neutral-900">{row.agency}</td>
                    <td className="px-4 py-3.5 text-neutral-400">{row.contractor}</td>
                    <td className="px-4 py-3.5 text-neutral-400">{row.chatgpt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ── specs ── */}
        <Section id="specs" slug="on the record" fig="05 / spec sheet">
          <h2 className="display max-w-2xl text-3xl font-semibold text-neutral-900 sm:text-[2.6rem]">
            Specs, not promises.
          </h2>
          <div className="mt-12 border border-line">
            {SPECS.map(([key, value], i) => (
              <div key={key} className={`spec-row grid gap-1 px-4 py-3.5 font-mono text-[13px] sm:grid-cols-[150px_1fr] ${i !== 0 ? "border-t border-line" : ""}`}>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400">{key}</span>
                <span className="text-neutral-700">{value}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 font-mono text-[11px] text-neutral-400">
            <span className="text-accent">▸</span> human-in-the-loop by design. agents propose, founders approve.
          </p>
        </Section>

        {/* ── roadmap / coming soon ── */}
        <Section id="roadmap" slug="coming soon" fig="06 / on the roadmap">
          <h2 className="display max-w-2xl text-3xl font-semibold text-neutral-900 sm:text-[2.6rem]">
            What&apos;s next.
          </h2>
          <p className="mt-5 max-w-lg font-mono text-[13px] leading-relaxed text-neutral-600">
            Live today: chat, shared memory, web research, email, Notion, post drafts — all
            approved by you. These are next on the build.
          </p>
          <div className="mt-12 border border-line">
            {ROADMAP.map((r, i) => (
              <div
                key={r.name}
                className={`spec-row grid items-center gap-1 px-4 py-4 font-mono text-[13px] sm:grid-cols-[200px_1fr_70px] ${i !== 0 ? "border-t border-line" : ""}`}
              >
                <span className="text-neutral-800">{r.name}</span>
                <span className="text-neutral-500">{r.detail}</span>
                <span className="justify-self-start rounded-sm border border-line px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-neutral-400 sm:justify-self-end">
                  soon
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── pricing ── */}
        <Section id="pricing" slug="pricing" fig="07 / flat tiers">
          <h2 className="display max-w-2xl text-3xl font-semibold text-neutral-900 sm:text-[2.6rem]">
            Flat. Monthly. No token math.
          </h2>
          <p className="mt-5 max-w-lg font-mono text-[13px] leading-relaxed text-neutral-600">
            Inference runs on our keys and it&apos;s baked in. Compare it to the other option:
            a single part-time hire.
          </p>

          <div className="mt-12 grid border border-line sm:grid-cols-3">
            <div className="p-7">
              <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">starter</p>
              <p className="mt-3 font-mono text-4xl font-semibold text-neutral-900">
                $49<span className="text-base font-normal text-neutral-400">/mo</span>
              </p>
              <ul className="mt-6 space-y-2.5 font-mono text-[13px] text-neutral-600">
                {["3 agents of your choice", "shared company memory", "email drafts + Notion + scheduling", "unlimited chat"].map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-accent">+</span> {f}</li>
                ))}
              </ul>
              <a href="mailto:zeeshan8281@gmail.com?subject=SoloTeam%20pilot%20%E2%80%94%20starter" className="mt-7 block border border-line py-2.5 text-center font-mono text-[13px] text-neutral-800 transition-colors hover:border-neutral-400">
                join waitlist
              </a>
            </div>
            <div className="relative border-t border-line bg-surface p-7 sm:border-l sm:border-t-0">
              <span className="absolute right-7 top-7 border border-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">pilot</span>
              <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">full team</p>
              <p className="mt-3 font-mono text-4xl font-semibold text-neutral-900">
                $99<span className="text-base font-normal text-neutral-400">/mo</span>
              </p>
              <ul className="mt-6 space-y-2.5 font-mono text-[13px] text-neutral-600">
                {["5 agents — the whole roster minus one", "everything in starter", "priority onboarding (we tune your brief)", "early access to new actions"].map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-accent">+</span> {f}</li>
                ))}
              </ul>
              <a href="mailto:zeeshan8281@gmail.com?subject=SoloTeam%20pilot%20%E2%80%94%20full%20team" className="mt-7 block bg-accent py-2.5 text-center font-mono text-[13px] font-semibold text-white transition-opacity hover:opacity-90">
                join the pilot →
              </a>
            </div>
            <div className="relative border-t border-line p-7 sm:border-l sm:border-t-0">
              <span className="absolute right-7 top-7 border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-400">soon</span>
              <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">team</p>
              <p className="mt-3 font-mono text-4xl font-semibold text-neutral-400">
                $199<span className="text-base font-normal text-neutral-400">/mo</span>
              </p>
              <ul className="mt-6 space-y-2.5 font-mono text-[13px] text-neutral-500">
                {["everything in full team", "multiple seats + roles", "shared team workspace", "priority support"].map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-neutral-400">+</span> {f}</li>
                ))}
              </ul>
              <a href="mailto:zeeshan8281@gmail.com?subject=SoloTeam%20%E2%80%94%20notify%20me%20(team%20plan)" className="mt-7 block border border-line py-2.5 text-center font-mono text-[13px] text-neutral-500 transition-colors hover:border-neutral-400">
                notify me →
              </a>
            </div>
          </div>
          <p className="mt-5 font-mono text-[11px] text-neutral-400">
            <span className="text-accent">▸</span> for solo founders &amp; small teams · more plans coming soon.
          </p>
        </Section>

        {/* ── faq ── */}
        <Section id="faq" slug="faq" fig="08 / fair questions">
          <h2 className="display max-w-2xl text-3xl font-semibold text-neutral-900 sm:text-[2.6rem]">
            Fair questions.
          </h2>
          <div className="mt-12 border border-line">
            {FAQS.map(([q, a], i) => (
              <details key={q} className={`spec-row group px-4 py-4 ${i !== 0 ? "border-t border-line" : ""}`}>
                <summary className="flex cursor-pointer list-none items-center gap-2 font-mono text-[13px] text-neutral-900">
                  <span className="text-accent transition-transform group-open:rotate-90">▸</span>
                  {q}
                </summary>
                <p className="mt-3 pl-5 font-mono text-[13px] leading-relaxed text-neutral-600">{a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* ── final cta ── */}
        <Section>
          <div className="dotgrid -mx-6 -my-20 px-6 py-24 text-center sm:-mx-10 sm:-my-24 sm:px-10">
            <h2 className="display mx-auto max-w-xl text-4xl font-semibold text-neutral-900 sm:text-5xl">
              Stop doing seven jobs.
            </h2>
            <p className="mx-auto mt-5 max-w-md font-mono text-[13px] leading-relaxed text-neutral-600">
              Deploy your first three agents this week. Briefed, in your Slack, and useful by Friday.
            </p>
            <a href="#pricing" className="mt-9 inline-block bg-accent px-6 py-3 font-mono text-[13px] font-semibold text-white transition-opacity hover:opacity-90">
              deploy your team →
            </a>
          </div>
        </Section>

        {/* ── footer ── */}
        <footer className="border-t border-line">
          <div className="flex flex-col items-start justify-between gap-4 px-6 py-10 font-mono sm:flex-row sm:items-center sm:px-10">
            <div>
              <p className="text-sm font-semibold text-neutral-900">Solo<span className="text-accent">Team</span></p>
              <p className="mt-1 text-xs text-neutral-400">the team you don&apos;t have to hire.</p>
            </div>
            <p className="text-xs text-neutral-400">© 2026 — built by a solo founder, obviously.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
