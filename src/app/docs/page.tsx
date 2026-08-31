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
          SoloTeam is a Slack-native client-operations copilot for small agencies. It turns client-channel activity
          into a ready-to-approve update, follow-ups, and owned next actions. These docs explain the pilot workflow,
          approval controls, connected context, and specialist capabilities behind it.
        </Lead>
      </PageHead>

      <div className="space-y-4">
        <H2>The one-paragraph version</H2>
        <P>
          In a client channel, ask SoloTeam to draft the weekly update. It gathers completed work, blockers,
          decisions, and next actions from that channel and the sources approved during onboarding. You review the
          draft and destination before anything is sent. The same workflow keeps unresolved follow-ups visible.
        </P>

        <H2>Who it&apos;s for</H2>
        <P>
          Founder-led digital, creative, marketing, and software agencies with 2–20 people, several active clients,
          and recurring update obligations. SoloTeam complements the project and reporting tools you already use.
        </P>

        <H2>The mental model (read this once)</H2>
        <Bullets
          items={[
            <><b className="text-neutral-900">One client workflow first.</b> Start with a weekly update and its follow-through before adding broader automation.</>,
            <><b className="text-neutral-900">Specialists stay behind the workflow.</b> Ops, strategy, marketing, support, and design capabilities share context without giving you five bots to manage.</>,
            <><b className="text-neutral-900">A client channel is a scoped workspace.</b> Its memory and connected sources stay separate from other channels.</>,
            <><b className="text-neutral-900">It asks before it acts.</b> Reading and advising are free and instant. Anything that goes outward — email, a published doc, a post — waits for your approval.</>,
          ]}
        />

        <Callout tone="tip" title="New here? Start with these three">
          <P>
            <Link href="/docs/getting-started" className="text-accent">Getting started</Link> (add it + your first
            message) → <Link href="/docs/how-it-works" className="text-accent">How it works</Link> (what happens
            behind the scenes) → <Link href="/docs/connecting" className="text-accent">Connecting your tools</Link>{" "}
            (review the sources approved during assisted setup).
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
