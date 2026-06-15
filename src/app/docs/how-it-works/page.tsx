import { Lead, P, H2, Steps, Bullets, Callout, Screen, Code, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — How it works",
  description: "What happens between your message and the reply.",
};

export default function HowItWorks() {
  return (
    <article>
      <PageHead kicker="docs / how it works" title="How it works">
        <Lead>
          No magic to learn — but knowing what happens behind a message helps you get better results and trust what
          comes back.
        </Lead>
      </PageHead>

      <div className="space-y-5">
        <H2>Anatomy of a single message</H2>
        <Steps
          items={[
            <>You @mention SoloTeam in a channel (or DM it).</>,
            <>Your message is verified as genuinely from Slack and acknowledged in under 3 seconds, so Slack never shows an error — the actual thinking happens right after.</>,
            <>A <b className="text-neutral-900">router</b> reads your message and picks the right specialist (ops, strategy, marketing, support, or design).</>,
            <>That specialist thinks with your <b className="text-neutral-900">company memory</b> and brief already in mind, and can use tools mid-thought — search the web, read a Notion page, check your inbox or calendar, or look something up in memory.</>,
            <>It replies in the thread. If it needs to send something outward, it drafts an action and asks you to approve (next section).</>,
          ]}
        />

        <H2>Two kinds of things SoloTeam does</H2>
        <P>This is the most important distinction in the whole product:</P>
        <Bullets
          items={[
            <><b className="text-neutral-900">Reading &amp; advising</b> — answering questions, researching, reading your docs/inbox/calendar, giving recommendations. These happen instantly and never need approval. Reading can&apos;t hurt anything.</>,
            <><b className="text-neutral-900">Actions</b> — sending an email, publishing to Notion, posting to social. Anything that leaves the building. These are always drafted first and wait for your explicit <b className="text-neutral-900">Approve</b>.</>,
          ]}
        />

        <H2>The approval card</H2>
        <P>When an agent wants to take an action, it posts a card instead of doing it:</P>
        <Screen>
          <div className="space-y-1">
            <div><b className="text-neutral-900">@support drafted an action — your call.</b></div>
            <div>Email → jane@acme.com: Re: your refund</div>
            <div className="text-neutral-400">Hi Jane, sorry about the mix-up…</div>
            <div className="mt-2 flex gap-2">
              <span className="rounded-sm border border-accent px-2 py-0.5 text-accent">Approve</span>
              <span className="rounded-sm border border-line px-2 py-0.5 text-neutral-500">Reject</span>
            </div>
          </div>
        </Screen>
        <P>
          Click <b className="text-neutral-900">Approve</b> and it sends, then the card updates to a confirmation
          (&quot;✅ Approved — email sent&quot;). Click <b className="text-neutral-900">Reject</b> and nothing happens. The agent
          never sends on its own.
        </P>

        <H2>How it picks who answers</H2>
        <P>The router decides in this order:</P>
        <Bullets
          items={[
            <><b className="text-neutral-900">You named one</b> — if you start with <Code>@biz</Code>, <Code>@marketing</Code>, etc., that specialist takes it.</>,
            <><b className="text-neutral-900">Keywords</b> — &quot;pricing&quot; → strategy, &quot;refund&quot; → support, &quot;logo&quot; → design.</>,
            <><b className="text-neutral-900">A quick judgment call</b> — if it&apos;s ambiguous, a fast model classifies it.</>,
            <><b className="text-neutral-900">Thread memory</b> — once a thread is going, follow-ups stay with the same specialist so context isn&apos;t lost.</>,
          ]}
        />

        <Callout tone="tip" title="Why the approval gate matters">
          <P>The #1 worry people have with AI agents is that they&apos;ll do something wrong on their own. SoloTeam is built so that can&apos;t happen — an agent can propose, but only a human approves. You get the speed of automation with the safety of a final human check.</P>
        </Callout>
      </div>

      <PageNav
        prev={{ href: "/docs/getting-started", label: "Getting started" }}
        next={{ href: "/docs/roster", label: "The roster" }}
      />
    </article>
  );
}
