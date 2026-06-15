import { Lead, P, H2, H3, Bullets, Cmd, Callout, Code, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — The roster",
  description: "The five specialists, what each does, and when to use them.",
};

const AGENTS: { handle: string; name: string; does: string; use: string; examples: string[] }[] = [
  {
    handle: "@ops",
    name: "Operations",
    does: "The back office — SOPs, scheduling, vendor coordination, and the busywork that clogs your day.",
    use: "Logistics, process, follow-ups, anything administrative.",
    examples: ["draft an email to our landlord about the lease", "write an SOP for onboarding a new contractor", "what's on my calendar tomorrow?"],
  },
  {
    handle: "@biz",
    name: "Business / Strategy",
    does: "The strategy brain — pricing, positioning, competitor moves, and what to build next. Opinionated and evidence-aware.",
    use: "Big decisions, market questions, prioritization, strategy memos.",
    examples: ["research our top 3 competitors and how they price", "should we charge $49 or $99?", "draft a strategy memo on our Q3 focus"],
  },
  {
    handle: "@marketing",
    name: "Marketing",
    does: "Growth content — posts, launch copy, SEO briefs, the content calendar — in your voice.",
    use: "Anything you'd publish or promote.",
    examples: ["draft a launch thread for our new feature", "write 5 SEO title ideas for 'AI for founders'", "turn this update into a LinkedIn post"],
  },
  {
    handle: "@support",
    name: "Customer Support",
    does: "Inbox triage and replies in your voice, and turning complaints into a prioritized bug/issue list.",
    use: "Customer replies, ticket triage, turning feedback into action.",
    examples: ["draft a reply to this angry customer", "summarize the complaints from this week into a bug list", "any emails today that need a reply?"],
  },
  {
    handle: "@design",
    name: "Design",
    does: "Landing-page critiques, brand direction, and build-ready UI specs and asset checklists.",
    use: "Visual and brand feedback, UI specs, design direction.",
    examples: ["critique our landing page above the fold", "write a UI spec for a pricing page", "what's an on-brand color palette for us?"],
  },
];

export default function Roster() {
  return (
    <article>
      <PageHead kicker="docs / the roster" title="The roster">
        <Lead>
          Five specialists, each with a real job. They share one memory and all your connected tools, so handing work
          between them is seamless. A sixth — @finance — is coming soon.
        </Lead>
      </PageHead>

      <div className="space-y-8">
        {AGENTS.map((a) => (
          <div key={a.handle} className="space-y-2">
            <H3>
              <span className="text-accent">{a.handle}</span> · {a.name}
            </H3>
            <P>{a.does}</P>
            <P>
              <span className="text-neutral-900">Use it for:</span> {a.use}
            </P>
            <div className="space-y-1.5 pt-1">
              {a.examples.map((ex) => (
                <Cmd key={ex}>{ex}</Cmd>
              ))}
            </div>
          </div>
        ))}

        <div className="space-y-2">
          <H3>
            <span className="text-neutral-400">@finance</span> · coming soon
          </H3>
          <P>Runway math, invoice chasing, and plain-English P&amp;L. Held back until we can do it responsibly — it&apos;s on the roadmap.</P>
        </div>

        <H2>Two things worth knowing</H2>
        <Bullets
          items={[
            <><b className="text-neutral-900">They consult each other.</b> @biz can pull in @marketing mid-answer when a question spans both — you don&apos;t have to relay.</>,
            <><b className="text-neutral-900">You rarely need to name one.</b> Just ask; the router picks. Use <Code>@biz</Code>, <Code>@design</Code>, etc. only to force a specific specialist.</>,
          ]}
        />

        <Callout tone="tip" title="Not sure who to ask?">
          <P>Don&apos;t overthink it. @mention SoloTeam with your question in plain words — the right specialist will pick it up, and if it&apos;s really a different domain, they&apos;ll loop in the teammate who owns it.</P>
        </Callout>
      </div>

      <PageNav
        prev={{ href: "/docs/how-it-works", label: "How it works" }}
        next={{ href: "/docs/connecting", label: "Connecting your tools" }}
      />
    </article>
  );
}
