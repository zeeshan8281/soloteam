import { Lead, P, H2, Bullets, Callout, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — Pricing",
  description: "Flat monthly tiers, no token math.",
};

export default function Pricing() {
  return (
    <article>
      <PageHead kicker="docs / pricing" title="Pricing">
        <Lead>Flat monthly tiers on our keys. No credits, no usage bills, no surprises.</Lead>
      </PageHead>

      <div className="space-y-5">
        <H2>Tiers</H2>
        <Bullets
          items={[
            <><b className="text-neutral-900">Starter — $49/mo.</b> 3 agents of your choice.</>,
            <><b className="text-neutral-900">Full team — $99/mo.</b> All 5 active specialists.</>,
            <><b className="text-neutral-900">Team — coming soon.</b> For small teams that outgrow a single seat.</>,
          ]}
        />

        <H2>What&apos;s included</H2>
        <Bullets
          items={[
            "All inference on our keys — you never pay per token or manage an API.",
            "Connected tools (Notion, Gmail, Calendar) at no extra cost.",
            "Shared memory and human-approved actions.",
          ]}
        />

        <Callout tone="tip" title="Why flat pricing">
          <P>The most common complaint about AI-agent tools is unpredictable, usage-based bills. A flat monthly price answers that directly: you know exactly what you pay, and you never get a surprise invoice for a busy week.</P>
        </Callout>

        <P>
          These numbers sit in the validated band for agent platforms, with $49 at the solo-founder impulse threshold —
          low enough to just try, useful enough to keep.
        </P>
      </div>

      <PageNav prev={{ href: "/docs/faq", label: "FAQ" }} />
    </article>
  );
}
