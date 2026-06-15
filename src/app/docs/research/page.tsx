import { Lead, P, H2, H3, Bullets, Callout, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — The research behind it",
  description: "The market, pricing, and product research SoloTeam is built on — two rounds, with sources.",
};

const Source = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">
    {children}
  </a>
);

export default function Research() {
  return (
    <article>
      <PageHead kicker="docs / research" title="The research behind it">
        <Lead>
          SoloTeam isn&apos;t built on vibes. Every major decision — the price, the approval gate, the shared memory,
          which agents exist — traces back to research. Here&apos;s the evidence, in detail, across two rounds.
        </Lead>
      </PageHead>

      <div className="space-y-6">
        <Callout tone="tip" title="The short version">
          <P>
            The market has a clear gap (memory-sharing, multi-role agents, flat-priced for solo operators), two
            recurring pains we answer directly (unpredictable bills + unreliable autonomy), and a clear next move
            (connect to the tools founders already use). Details below.
          </P>
        </Callout>

        {/* ── ROUND 1 ── */}
        <H2>Round 1 — pricing &amp; positioning (26 sources, pre-build)</H2>
        <P>
          Before writing a line of code, we ran deep research across 26 sources on the AI-agent market for founders and
          small teams. Six findings shaped the product:
        </P>

        <H3>1. The $49 / $99 price is validated</H3>
        <P>
          The tiers sit squarely in the credible band for agent platforms. Sintra&apos;s &quot;AI team&quot; runs $39/$97; Lindy
          spans $49.99–$199.99. Willingness-to-pay for solo operators clusters around $29–$199, and $49 sits right at
          the impulse threshold — low enough to try without a meeting, useful enough to keep.
        </P>

        <H3>2. There&apos;s a real white space</H3>
        <P>
          Incumbents fall into two camps. Single-function tools are enterprise-priced — Artisan and 11x run roughly
          $1,000–$7,000/mo for one role. Multi-agent tools exist, but their agents are siloed: Sintra&apos;s helpers don&apos;t
          share context with each other. <b className="text-neutral-900">No one offers memory-sharing, multi-role agents,
          priced flat, aimed at solo founders.</b> That&apos;s the gap SoloTeam occupies.
        </P>

        <H3>3. Flat pricing is a wedge, not just a number</H3>
        <P>
          The category&apos;s second-biggest pain is <b className="text-neutral-900">credit anxiety</b> — usage-based bills
          that spike unpredictably. A flat tier on our keys answers it directly: no credits, no token math, no surprise
          invoice for a busy week.
        </P>

        <H3>4. Reliability is the #1 objection</H3>
        <P>
          About half of surveyed agent buyers name reliability as their first concern. That single fact is why SoloTeam
          is an <b className="text-neutral-900">advisor with human-approved actions</b>, not an autonomous bot. We lead
          with the approval gate and never overpromise autonomy.
        </P>

        <H3>5. Roles, ranked by demand</H3>
        <P>
          Founders delegate <b className="text-neutral-900">marketing, ops, and support</b> first — so the Starter tier
          defaults there, and those agents got the most attention.
        </P>

        <H3>6. The durable architecture</H3>
        <P>
          Across the research, one pattern repeats: domain-specific agents beat general ones, and the lasting design is{" "}
          <b className="text-neutral-900">persistent memory plus a small set of guarded actions</b> — exactly SoloTeam&apos;s
          shape.
        </P>

        {/* ── ROUND 2 ── */}
        <H2>Round 2 — the 2026 market scan</H2>
        <P>
          A fresh scan of the 2026 landscape both validated the original bets and pointed at what to add next.
        </P>

        <H3>Cost/credit anxiety is now proven at scale</H3>
        <P>
          71–72% of organizations have <b className="text-neutral-900">exceeded their AI-agent budgets</b>, and ~71% say
          running agents costs more than building them. Flat pricing isn&apos;t a nicety — it&apos;s the antidote to the
          category&apos;s most common regret.
        </P>

        <H3>Agents lack judgment — they need a human loop</H3>
        <P>
          The most-cited failure of 2026 is treating AI agents like autonomous employees: they don&apos;t have the judgment
          to know when to stop and escalate. Only ~13% of organizations have agents in real workflows; 56% are still
          piloting <i>under heavy human supervision</i>. SoloTeam&apos;s draft-then-approve model is precisely the human loop
          the market discovered it needs.
        </P>

        <H3>Integration breadth is the #1 differentiator</H3>
        <P>
          The clearest signal of all: <b className="text-neutral-900">&quot;if AI isn&apos;t connected to your existing systems,
          it&apos;s just another tab people forget to open.&quot;</b> Founders want their agents wired into the tools where work
          already happens — CRM (HubSpot), payments (Stripe), scheduling (Calendly), e-commerce (Shopify), accounting
          (QuickBooks), product (Linear/GitHub). SoloTeam&apos;s one-click OAuth framework is built so each of these is a
          small, fast add.
        </P>

        <H3>Verticalization wins</H3>
        <P>
          Industry-specific agents (legal, healthcare, finance) command premium pricing, face less competition, and show
          <b className="text-neutral-900"> 3–5× higher retention</b> than horizontal tools — a strong case for vertical
          packs (e.g. an agency/multi-client mode) once the core lands.
        </P>

        <H3>The market is growing fast</H3>
        <P>
          The AI-agent market was ~$8.5B in 2025 and is projected to reach ~$52.6B by 2030 — the tailwind is real;
          execution and trust are the differentiators.
        </P>

        {/* ── IMPLICATIONS ── */}
        <H2>What we&apos;re building because of it</H2>
        <Bullets
          items={[
            <><b className="text-neutral-900">More integrations, fast</b> — HubSpot, Stripe, Calendly, Shopify next, on the OAuth framework. (Answers the #1 differentiator.)</>,
            <><b className="text-neutral-900">Scheduled / recurring tasks</b> — &quot;every Monday draft the update&quot; — the biggest daily-use hook.</>,
            <><b className="text-neutral-900">Starter playbooks</b> — deploy a ready-made recipe and customize, to cut time-to-value.</>,
            <><b className="text-neutral-900">File &amp; attachment reading</b> — decks, contracts, specs dropped in Slack.</>,
          ]}
        />

        <H2>Sources</H2>
        <div className="max-w-2xl space-y-1.5 font-mono text-[12.5px] leading-[1.7] text-neutral-600">
          <p><Source href="https://www.datarobot.com/resources/unmet-ai-needs-survey-2026/">DataRobot — Unmet AI Needs Survey 2026</Source></p>
          <p><Source href="https://www.business.com/articles/ai-usage-smb-workplace-study/">Business.com — 2026 Small Business AI Outlook</Source></p>
          <p><Source href="https://www.taskade.com/blog/ai-agents-solopreneurs">Taskade — AI Agents for Solopreneurs 2026</Source></p>
          <p><Source href="https://wearepresta.com/ai-agent-startup-ideas-2026-15-profitable-opportunities-to-launch-now/">Presta — AI Agent Startup Ideas 2026</Source></p>
          <p><Source href="https://arahi.ai/blog/best-ai-agents-for-business-2026">Arahi AI — Best AI Agents for Business 2026</Source></p>
          <p><Source href="https://integrateiq.com/blogs/hubspot-integrations/">IntegrateIQ — HubSpot Integrations 2026</Source></p>
          <p className="text-neutral-400">Plus the original 26-source pricing/positioning study (internal).</p>
        </div>
      </div>

      <PageNav prev={{ href: "/docs/pricing", label: "Pricing" }} />
    </article>
  );
}
