import { Lead, P, H2, Bullets, Callout, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — Pricing",
  description: "Pilot pricing by active client workflow.",
};

export default function Pricing() {
  return (
    <article>
      <PageHead kicker="docs / pricing" title="Pricing">
        <Lead>Pay for active client workflows, not named agents or token bundles.</Lead>
      </PageHead>

      <div className="space-y-5">
        <H2>Tiers</H2>
        <Bullets
          items={[
            <><b className="text-neutral-900">Assisted pilot — $99/mo.</b> Up to 5 active client channels.</>,
            <><b className="text-neutral-900">Growth test — $149/mo.</b> Up to 10 active client channels.</>,
          ]}
        />

        <H2>What&apos;s included</H2>
        <Bullets
          items={[
            "All inference on our keys — you never pay per token or manage an API.",
            "Weekly client update and follow-through workflow.",
            "Client-scoped context and human-approved outbound actions.",
            "White-glove setup during the pilot.",
          ]}
        />

        <Callout tone="tip" title="Why active client channels">
          <P>The value grows with the number of client relationships receiving a reliable update and follow-through loop. Internal seats and specialist count do not change the price.</P>
        </Callout>

        <P>
          These are pilot test prices, not a claim of proven willingness to pay. Renewal and repeat approved output will determine the long-term packaging.
        </P>
      </div>

      <PageNav
        prev={{ href: "/docs/faq", label: "FAQ" }}
        next={{ href: "/docs/research", label: "The research behind it" }}
      />
    </article>
  );
}
