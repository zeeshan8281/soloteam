import type { ReactNode } from "react";
import { Lead, P, H2, Bullets, Callout, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — Market research",
  description: "The evidence and open questions behind SoloTeam's small-agency client-operations focus.",
};

function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">{children}</a>;
}

export default function Research() {
  return (
    <article>
      <PageHead kicker="docs / research" title="The evidence behind the wedge">
        <Lead>
          September 2026 research moved SoloTeam from a generic “AI team” proposition to a narrower hypothesis:
          small agencies will pay for a reliable Slack-to-client-update and follow-through workflow.
        </Lead>
      </PageHead>

      <div className="space-y-6">
        <Callout tone="info" title="What is proven — and what is not">
          <P>
            The broader small-agency population, recurring reporting cadence, Slack fragmentation, and competitive
            feature sets are externally supported. The exact number of qualified Slack-heavy agencies, willingness to
            pay $99/$149, and the product&apos;s time savings remain pilot hypotheses.
          </P>
        </Callout>

        <H2>1. Small agencies are numerous and founder-dependent</H2>
        <P>
          U.S. Census counted 15,512 advertising-agency establishments in 2023; 88.5% had fewer than 20 employees.
          Promethean Research likewise describes a fragmented digital-agency market where founders at sub-25-person
          firms remain involved in sales and support work.
        </P>

        <H2>2. Client communication is recurring and retention-sensitive</H2>
        <P>
          In AgencyAnalytics&apos; 2026 benchmark survey, 69% of respondents reported monthly and another 19% weekly or
          bi-weekly. Ninety-seven percent rated accurate reporting important or extremely important to retention.
          Clients valued human discussion as much as static reports, so SoloTeam targets the communication and
          follow-through loop rather than dashboard generation alone.
        </P>

        <H2>3. Slack is both the context source and the failure surface</H2>
        <P>
          ZenPilot&apos;s agency-operations survey found Slack was the most frequently praised communication tool and the
          most frequently named tool needing improvement. Tasks stay in chat, decisions disappear in threads, and
          context fails to reach the formal system of record. A pilot must still verify that each client&apos;s authoritative
          facts are actually available in Slack or approved connected sources.
        </P>

        <H2>4. “Agents, memory, tools, and approvals” are not enough differentiation</H2>
        <P>
          Public offers from Lindy, Relevance AI, Taskade, Sintra, Dust, and Slack already converge on those features.
          SoloTeam therefore leads with an opinionated agency workflow, client-scoped context, and visible human
          accountability. The specialist team remains implementation, not the headline.
        </P>

        <H2>5. Pricing is a test</H2>
        <P>
          AgencyAnalytics provides a useful precedent for per-client pricing, but not proof that agencies will pay
          SoloTeam. The $99 five-channel pilot and $149 ten-channel growth offer are validation cells. Paid renewal and
          recurring approved output decide the durable price.
        </P>

        <H2>Decision gates for the first cohort</H2>
        <Bullets
          items={[
            "First usable draft within one business day of assisted installation.",
            "At least 70% of drafts approved with light edits.",
            "Repeated weekly use without founder prompting.",
            "No severe cross-client context leak or unauthorized outbound action.",
            "Paid continuation after the pilot.",
          ]}
        />

        <H2>Primary sources</H2>
        <div className="max-w-2xl space-y-1.5 font-mono text-[12.5px] leading-[1.7] text-neutral-600">
          <p><Source href="https://data.census.gov/table/CBP2023.CB2300CBP?q=541810">U.S. Census — 2023 County Business Patterns</Source></p>
          <p><Source href="https://prometheanresearch.com/digital-agency-industry-report/">Promethean Research — 2026 Digital Agency Industry Report</Source></p>
          <p><Source href="https://www.zenpilot.com/state-of-agency-operations/2026/">ZenPilot — State of Agency Operations 2026</Source></p>
          <p><Source href="https://agencyanalytics.com/agency-benchmarks-2026">AgencyAnalytics — 2026 Marketing Agency Benchmarks</Source></p>
          <p><Source href="https://www.census.gov/library/stories/2026/05/ai-use-businesses.html">U.S. Census — AI use by business size</Source></p>
          <p><Source href="https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/04/empowering-smes-in-the-age-of-ai_7f58652c/bf5a9816-en.pdf">OECD — Empowering SMEs in the age of AI</Source></p>
          <p><Source href="https://www.lindy.ai/">Lindy</Source> · <Source href="https://relevanceai.com/docs/get-started/pricing">Relevance AI</Source> · <Source href="https://help.taskade.com/en/articles/8958455-taskade-ai-usage">Taskade</Source></p>
          <p><Source href="https://agencyanalytics.com/pricing">AgencyAnalytics pricing</Source> · <Source href="https://www.teamwork.com/pricing/">Teamwork pricing</Source> · <Source href="https://productive.io/pricing/">Productive pricing</Source></p>
        </div>
      </div>

      <PageNav prev={{ href: "/docs/pricing", label: "Pricing" }} />
    </article>
  );
}
