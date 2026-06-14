import Link from "next/link";

export const metadata = {
  title: "SoloTeam — Docs",
  description: "How SoloTeam works, the agent roster, the architecture, and the research behind it.",
};

interface Section {
  id: string;
  title: string;
  body: React.ReactNode;
}

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[13px] leading-relaxed text-neutral-600">{children}</p>
);

const SECTIONS: Section[] = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <div className="space-y-3">
        <P>
          SoloTeam is a team of AI agents for solo founders and small teams. They join your Slack as
          @mentionable members, share one persistent memory of your business, and do real work you
          approve — drafting emails, publishing docs, scheduling posts. Advice is free; every outbound
          action waits for your explicit yes.
        </P>
        <P>
          The design principle is simple: a chatbot forgets you between tabs and a contractor costs
          $2k+ and takes weeks to ramp. SoloTeam sits in the gap — a real, memory-backed team for the
          price of a tool.
        </P>
      </div>
    ),
  },
  {
    id: "roster",
    title: "The roster",
    body: (
      <div className="space-y-3">
        <P>Five active specialists (a sixth, @finance, is coming soon). Each onboards from the same company brief and builds shared memory from day one:</P>
        <ul className="space-y-1.5 font-mono text-[13px] text-neutral-600">
          {[
            ["@ops", "back-office, SOPs, vendor coordination, the busywork"],
            ["@biz", "pricing, positioning, competitor moves, what to build next"],
            ["@marketing", "posts, launch copy, SEO briefs, the content calendar"],
            ["@support", "replies in your voice, complaint → bug list"],
            ["@design", "landing critiques, brand direction, build-ready UI specs"],
          ].map(([h, d]) => (
            <li key={h} className="flex gap-3">
              <span className="w-24 flex-none text-accent">{h}</span>
              <span className="text-neutral-500">{d}</span>
            </li>
          ))}
        </ul>
        <P>You don&apos;t need to name the agent — just @mention SoloTeam and a router picks who answers. Add an @handle only to force a specific one.</P>
      </div>
    ),
  },
  {
    id: "how",
    title: "How a turn works",
    body: (
      <div className="space-y-3">
        <P>
          1. You @mention SoloTeam in a channel (or DM it). 2. The request is signature-verified and
          acknowledged in under 3 seconds. 3. The router picks an agent. 4. The agent thinks with your
          company brief + the relevant shared memory in context, and can fetch a URL or search memory
          mid-thought. 5. It replies in-thread.
        </P>
        <P>
          If it wants to take an outbound action, it drafts it and posts an{" "}
          <span className="text-accent">Approve</span> / Reject card. On approve, the action executes
          and the card updates with the result. Nothing leaves the building without you.
        </P>
      </div>
    ),
  },
  {
    id: "memory",
    title: "Shared memory",
    body: (
      <div className="space-y-3">
        <P>
          Every agent reads and writes one shared company memory — what @biz decides, @marketing knows.
          Facts, decisions, and your voice are saved as the team works and pulled back into context on
          every turn, so you never re-explain yourself.
        </P>
        <P>
          Retrieval is semantic: ask &quot;what did we decide on pricing?&quot; and it surfaces the right
          memory, not just the most recent one.
        </P>
      </div>
    ),
  },
  {
    id: "architecture",
    title: "Architecture",
    body: (
      <div className="space-y-3">
        <P>
          TypeScript backend (Node 20, Express) on Railway. Claude powers the agents (frontier models on
          our keys — no API setup for you). PostgreSQL holds company data and the shared memory. Slack is
          the interface for the pilot; a dedicated web workspace comes later.
        </P>
        <pre className="overflow-x-auto border border-line bg-surface p-4 font-mono text-[11px] leading-relaxed text-neutral-600">
{`  @ops  @biz  @marketing  @support  @design
    └──────┬─────────┬──────────┘
           ▼
   shared company memory   ← brief · decisions · voice · history
           ▼
        you  [approve]     ← every outbound action`}
        </pre>
      </div>
    ),
  },
  {
    id: "pricing",
    title: "Pricing",
    body: (
      <div className="space-y-3">
        <P>
          Flat monthly tiers on our keys — no token math. Starter $49/mo (3 agents), Full team $99/mo
          (5 agents). A Team plan is coming soon.
        </P>
        <P>
          These numbers were validated against the market (see research below): they sit squarely in
          the credible $50–$200 band for agent platforms, with $49 at the solo-founder impulse
          threshold.
        </P>
      </div>
    ),
  },
  {
    id: "research",
    title: "The research behind it",
    body: (
      <div className="space-y-3">
        <P>Before building, we ran deep research across 26 sources on the AI-agent market. The findings shaped every decision:</P>
        <ul className="space-y-2.5 font-mono text-[13px] leading-relaxed text-neutral-600">
          {[
            ["Pricing validated", "$49/$99 lands in the credible band. Sintra's AI team is $39/$97; Lindy is $49.99–$199.99. WTP sweet spot for solo operators is ~$29–$199."],
            ["The white space", "Incumbents are either single-function and enterprise-priced (Artisan/11x at $1K–$7K/mo) or multi-agent but siloed (Sintra's helpers don't share context). No one offers memory-sharing, multi-role agents priced flat for solos."],
            ["Flat pricing is a wedge", "The category's #2 pain is credit anxiety — unpredictable usage bills. A flat tier on our keys answers it directly: no credits, no surprises."],
            ["Reliability is the #1 objection", "~half of surveyed agent buyers cite reliability first. That's exactly why SoloTeam is advisor + human-approved actions — we lead with the approval gate, never overpromise autonomy."],
            ["Roles by demand", "Founders delegate marketing, ops, and support first. The starter defaults there."],
            ["Stack", "Domain-specific agents beat general ones; persistent memory + a small set of guarded actions is the durable pattern."],
          ].map(([h, d]) => (
            <li key={h as string}>
              <span className="text-neutral-900">{h}</span> — <span className="text-neutral-500">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];

export default function Docs() {
  return (
    <main className="flex-1">
      <div className="relative mx-auto max-w-5xl">
        <nav className="sticky top-0 z-50 border-b border-line bg-[#f6f5f1]/85 backdrop-blur">
          <div className="flex items-center justify-between px-6 py-3.5 sm:px-10">
            <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-neutral-900">
              Solo<span className="text-accent">Team</span>
            </Link>
            <div className="flex gap-7 font-mono text-xs text-neutral-500">
              <Link href="/docs" className="text-neutral-900">docs</Link>
              <Link href="/changelog" className="hover:text-neutral-900">changelog</Link>
              <Link href="/" className="hover:text-neutral-900">home →</Link>
            </div>
          </div>
        </nav>

        <section className="border-t border-line">
          <div className="grid lg:grid-cols-[200px_1fr]">
            {/* contents */}
            <aside className="hidden border-r border-line px-6 py-20 sm:px-10 lg:block">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                <span className="text-accent">/ </span>docs
              </p>
              <nav className="sticky top-24 space-y-2 font-mono text-[12px]">
                {SECTIONS.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="block text-neutral-500 hover:text-neutral-900">
                    {s.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* body */}
            <div className="px-6 py-20 sm:px-10 sm:py-24">
              <h1 className="display max-w-2xl text-3xl font-semibold text-neutral-900 sm:text-5xl">
                Docs.
              </h1>
              <p className="mt-5 max-w-lg font-mono text-[13px] leading-relaxed text-neutral-600">
                How SoloTeam works, what&apos;s under the hood, and the research it&apos;s built on.
              </p>
              <div className="mt-12 space-y-14">
                {SECTIONS.map((s) => (
                  <section key={s.id} id={s.id} className="scroll-mt-24">
                    <h2 className="mb-4 font-mono text-[15px] font-semibold text-neutral-900">
                      <span className="text-accent">#</span> {s.title}
                    </h2>
                    {s.body}
                  </section>
                ))}
              </div>
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
