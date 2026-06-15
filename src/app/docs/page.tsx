import Link from "next/link";
import { Lead, P, H2, Bullets, Callout, PageHead, PageNav } from "./components";

export const metadata = {
  title: "SoloTeam Docs — Overview",
  description: "What SoloTeam is, who it's for, and how to use these docs.",
};

export default function DocsOverview() {
  return (
    <article>
      <PageHead kicker="docs / overview" title="Welcome to SoloTeam">
        <Lead>
          SoloTeam is a small team of AI specialists that lives inside your Slack. You talk to them like
          teammates — they remember your business, connect to your tools, and do real work you approve.
          These docs explain everything, in plain language, no technical background needed.
        </Lead>
      </PageHead>

      <div className="space-y-4">
        <H2>The one-paragraph version</H2>
        <P>
          You @mention SoloTeam in a Slack channel and ask for something — &quot;research our competitors,&quot;
          &quot;draft a reply to this customer,&quot; &quot;what&apos;s on my calendar?&quot; A specialist answers, using everything
          it remembers about your company plus your connected tools (Notion, Gmail, Calendar). If it wants to
          send an email or publish a doc, it shows you a draft with an <b className="text-neutral-900">Approve</b> /
          Reject button first. Nothing leaves the building without your yes.
        </P>

        <H2>Who it&apos;s for</H2>
        <P>
          Solo founders and small teams who can&apos;t (or don&apos;t want to) hire a person for every function yet.
          You get an ops person, a strategist, a marketer, a support rep, and a designer — for the price of a
          software tool, not a salary.
        </P>

        <H2>The mental model (read this once)</H2>
        <Bullets
          items={[
            <><b className="text-neutral-900">A team, not a chatbot.</b> Five specialists, each with a job. A router sends your message to the right one — you don&apos;t have to pick.</>,
            <><b className="text-neutral-900">One shared memory.</b> What one agent learns, they all know. You never re-explain your business.</>,
            <><b className="text-neutral-900">A channel is a workspace.</b> Each Slack channel has its own private memory and its own connected tools. Great for separating projects or clients.</>,
            <><b className="text-neutral-900">It asks before it acts.</b> Reading and advising are free and instant. Anything that goes outward — email, a published doc, a post — waits for your approval.</>,
          ]}
        />

        <Callout tone="tip" title="New here? Start with these three">
          <P>
            <Link href="/docs/getting-started" className="text-accent">Getting started</Link> (add it + your first
            message) → <Link href="/docs/how-it-works" className="text-accent">How it works</Link> (what happens
            behind the scenes) → <Link href="/docs/connecting" className="text-accent">Connecting your tools</Link>{" "}
            (hook up Notion, Gmail, Calendar). Fifteen minutes and you&apos;re running.
          </P>
        </Callout>

        <H2>How these docs are organized</H2>
        <Bullets
          items={[
            <><b className="text-neutral-900">Start here</b> — get up and running and understand the basics.</>,
            <><b className="text-neutral-900">Integrations</b> — step-by-step guides to connect each tool, with troubleshooting.</>,
            <><b className="text-neutral-900">Using SoloTeam</b> — commands, approvals, memory, channels, the daily brief.</>,
            <><b className="text-neutral-900">Reference</b> — troubleshooting, FAQ, pricing.</>,
          ]}
        />
      </div>

      <PageNav next={{ href: "/docs/getting-started", label: "Getting started" }} />
    </article>
  );
}
