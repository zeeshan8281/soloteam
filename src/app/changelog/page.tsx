import Link from "next/link";

export const metadata = {
  title: "SoloTeam — Changelog",
  description: "What shipped, version by version.",
};

interface Release {
  version: string;
  date: string;
  title: string;
  tag: "shipped" | "live" | "beta";
  items: string[];
}

const RELEASES: Release[] = [
  {
    version: "1.2",
    date: "2026-06-15",
    title: "Connect your tools in one click",
    tag: "live",
    items: [
      "Connect your own Notion, Gmail & Calendar with one click — no API keys, nothing technical. Just say “connect notion” or “connect google” and authorize in your browser.",
      "Each channel links its own tools, so a client channel reads that client's workspace — never crossed.",
      "Your agents now read your Notion docs, triage your inbox, and check your calendar — then draft with that context.",
      "Built on a connection framework, so more integrations (CRM, Linear, and more) plug in fast.",
    ],
  },
  {
    version: "1.1",
    date: "2026-06-15",
    title: "The team gets proactive",
    tag: "live",
    items: [
      "Daily brief — turn it on in any channel (“daily brief on”) and your team posts a short morning summary: what’s waiting on your approval and what moved. Off by default.",
      "Agents read your Notion — point them at a doc or topic and they pull it up and use it, not just publish to it.",
      "Agents consult each other — @biz can pull in @marketing mid-answer instead of you re-routing.",
      "“What do you remember?” — ask any channel what it knows and see the shared brain at a glance.",
      "Coming soon: Gmail & calendar reading (inbox triage, meeting prep) — wiring up next.",
    ],
  },
  {
    version: "1.0",
    date: "2026-06-14",
    title: "Hardened for real use",
    tag: "live",
    items: [
      "Research that finishes — longer asks like “find 10 founders to cold-DM” run to a complete answer instead of cutting out mid-thought.",
      "Reply-to-everything mode — say “always reply” in a channel and the team responds without being @mentioned; “mute” to switch back.",
      "Approver controls — the first person in a channel becomes its approver; add teammates with “add approver @name”. Only approvers can approve or reject an outbound action.",
      "Sharper routing — messages land with the right agent (no more “marketing” reaching the strategy desk).",
      "Steadier under load — no duplicate replies, approvals never fire twice, and in-progress answers survive a redeploy.",
    ],
  },
  {
    version: "0.9",
    date: "2026-06-13",
    title: "A private brain per channel",
    tag: "live",
    items: [
      "Memory is now scoped per Slack channel — give each teammate or project its own channel and its own isolated memory, no cross-talk.",
      "Spin up a new context just by @mentioning the bot in a fresh channel.",
    ],
  },
  {
    version: "0.8",
    date: "2026-06-12",
    title: "Real actions, wired up",
    tag: "live",
    items: [
      "Email actually sends on approval (Resend).",
      "Notion publishing live — drafts publish straight into your workspace, formatted with headings.",
      "Live web research (Tavily) — @biz and @marketing can pull current market/competitor data.",
      "Smarter memory: semantic recall surfaces the most relevant facts, not just the latest.",
    ],
  },
  {
    version: "0.7",
    date: "2026-06-12",
    title: "Honest by default",
    tag: "shipped",
    items: [
      "Every claim on the site now maps to something the product actually does.",
      "Added a public roadmap — calendar, inbox triage, post scheduling, and more, clearly marked coming soon.",
      "Cleaner Slack output — replies render properly instead of raw markdown.",
    ],
  },
  {
    version: "0.6",
    date: "2026-06-11",
    title: "Agentic tools + thread continuity",
    tag: "live",
    items: [
      "Agents can now read any web page (fetch_url) — point one at your site and it learns the company.",
      "search_memory / save_memory: agents look things up and write durable facts to the shared brain on demand.",
      "Ranked recall — pulls the most relevant memories, not just the most recent.",
      "Thread & DM continuity: follow up without re-tagging once the bot is in a thread.",
    ],
  },
  {
    version: "0.5",
    date: "2026-06-11",
    title: "Live in Slack",
    tag: "live",
    items: [
      "SoloTeam joins your workspace as an @mentionable teammate.",
      "Six (now five) domain agents with role playbooks; a router picks who answers.",
      "Human-approval gate: every outbound action posts an Approve / Reject card — nothing ships without you.",
      "@finance moved to coming soon.",
    ],
  },
  {
    version: "0.4",
    date: "2026-06-11",
    title: "Backend + shared memory",
    tag: "shipped",
    items: [
      "TypeScript backend (Node 20, Express) on Railway, Postgres-backed.",
      "Shared company memory — every agent reads and writes one brain, with semantic recall.",
      "Multi-tenant, scoped per company / Slack workspace.",
    ],
  },
  {
    version: "0.3",
    date: "2026-06-11",
    title: "Pricing validated",
    tag: "shipped",
    items: [
      "Deep market research across 26 sources confirmed the $49 / $99 flat tiers.",
      "Identified the white space: no one offers memory-sharing, multi-role agents priced flat for solo founders.",
      "Added a coming-soon Team plan.",
    ],
  },
  {
    version: "0.2",
    date: "2026-06-11",
    title: "The machine",
    tag: "shipped",
    items: [
      "Custom 24-inch iMac hero, built in code, running a live agent desktop.",
      "Broadened positioning to solo founders and small teams.",
    ],
  },
  {
    version: "0.1",
    date: "2026-06-11",
    title: "Landing page",
    tag: "shipped",
    items: [
      "First public page — refined-terminal aesthetic, the roster, the pitch.",
      "Deployed at soloteam.vercel.app.",
    ],
  },
];

const tagStyle: Record<Release["tag"], string> = {
  live: "border-accent text-accent",
  shipped: "border-line text-neutral-500",
  beta: "border-line text-neutral-500",
};

export default function Changelog() {
  return (
    <main className="flex-1">
      <div className="relative mx-auto max-w-5xl">
        <nav className="sticky top-0 z-50 border-b border-line bg-[#f6f5f1]/85 backdrop-blur">
          <div className="flex items-center justify-between px-6 py-3.5 sm:px-10">
            <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-neutral-900">
              Solo<span className="text-accent">Team</span>
            </Link>
            <div className="flex gap-7 font-mono text-xs text-neutral-500">
              <Link href="/docs" className="hover:text-neutral-900">docs</Link>
              <Link href="/changelog" className="text-neutral-900">changelog</Link>
              <Link href="/" className="hover:text-neutral-900">home →</Link>
            </div>
          </div>
        </nav>

        <section className="border-t border-line">
          <div className="px-6 py-20 sm:px-10 sm:py-24">
            <p className="mb-12 font-mono text-[11px] uppercase tracking-[0.28em] text-neutral-500">
              <span className="text-accent">/ </span>changelog
            </p>
            <h1 className="display max-w-2xl text-3xl font-semibold text-neutral-900 sm:text-5xl">
              What shipped.
            </h1>
            <p className="mt-5 max-w-lg font-mono text-[13px] leading-relaxed text-neutral-600">
              Built in the open, fast. Newest first.
            </p>

            <div className="mt-14 border border-line">
              {RELEASES.map((r, i) => (
                <div key={r.version} className={`grid gap-4 px-5 py-7 sm:grid-cols-[140px_1fr] sm:gap-8 ${i !== 0 ? "border-t border-line" : ""}`}>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-semibold text-neutral-900">v{r.version}</span>
                      <span className={`rounded-sm border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${tagStyle[r.tag]}`}>
                        {r.tag}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[11px] text-neutral-400">{r.date}</p>
                  </div>
                  <div>
                    <h2 className="font-mono text-[15px] font-semibold text-neutral-900">{r.title}</h2>
                    <ul className="mt-3 space-y-2 font-mono text-[13px] leading-relaxed text-neutral-600">
                      {r.items.map((it) => (
                        <li key={it} className="flex gap-2">
                          <span className="text-accent">+</span> {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-line">
          <div className="px-6 py-10 font-mono text-xs text-neutral-400 sm:px-10">
            © 2026 SoloTeam — built by a solo founder, obviously.
          </div>
        </footer>
      </div>
    </main>
  );
}
