import Link from "next/link";
import { Lead, P, H2, Bullets, Cmd, Callout, FAQ, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — Shared memory",
  description: "How SoloTeam remembers your business, shared across every agent.",
};

export default function Memory() {
  return (
    <article>
      <PageHead kicker="docs / shared memory" title="Shared memory">
        <Lead>
          The thing that makes SoloTeam a team and not a chatbot: one shared memory of your business that every agent
          reads and writes, and that you never have to repeat.
        </Lead>
      </PageHead>

      <div className="space-y-5">
        <H2>What gets remembered</H2>
        <P>As you work, SoloTeam saves the durable things about your business:</P>
        <Bullets
          items={[
            <><b className="text-neutral-900">Facts</b> — what you do, who you sell to, your stack, key people.</>,
            <><b className="text-neutral-900">Decisions</b> — &quot;we decided to price at $99,&quot; &quot;we&apos;re not doing the enterprise tier yet.&quot;</>,
            <><b className="text-neutral-900">Voice</b> — how you write and talk, so drafts sound like you.</>,
          ]}
        />
        <P>It does <b className="text-neutral-900">not</b> save every passing message — just the things worth keeping.</P>

        <H2>One brain, all agents</H2>
        <P>
          What @biz learns, @marketing knows. Decisions made in one conversation show up in the next, with a different
          agent, days later. You explain your business once.
        </P>

        <H2>You can read it and add to it</H2>
        <P>See what a channel knows:</P>
        <Cmd>what do you remember?</Cmd>
        <P>Add something deliberately — just say it:</P>
        <Cmd>remember that our launch date is Sept 1 and our tagline is &quot;your AI team in Slack&quot;</Cmd>

        <H2>Smart recall</H2>
        <P>
          Memory isn&apos;t just the last few messages — it&apos;s searched by meaning. Ask &quot;what did we decide on pricing?&quot;
          and SoloTeam surfaces the right decision from weeks ago, not just whatever was said most recently.
        </P>

        <Callout tone="tip" title="Make it sharp on day one">
          <P>Spend two minutes early: tell it what you&apos;re building, who it&apos;s for, and your voice — or connect <Link href="/docs/notion" className="text-accent">Notion</Link> and have it read your wiki. Every answer afterward gets better because the context is already there.</P>
        </Callout>

        <H2>Memory is per channel</H2>
        <P>
          Each channel has its <i>own</i> separate memory — see{" "}
          <Link href="/docs/channels" className="text-accent">Channels &amp; privacy</Link>. A fact saved in one channel
          isn&apos;t visible in another, which is exactly what you want when channels are different clients or projects.
        </P>

        <H2>FAQ</H2>
        <FAQ
          items={[
            ["Is my data used to train models?", "No. Your business context is yours and isn't used for training."],
            ["Can I delete something it remembered?", "Tell it in the channel — e.g. \"forget that we were considering the $199 tier.\" You can also ask what it remembers to review it."],
            ["Does memory carry across channels?", <>No — it&apos;s isolated per channel by design. Put work you want shared in the same channel.</>],
          ]}
        />
      </div>

      <PageNav
        prev={{ href: "/docs/approvals", label: "Approvals" }}
        next={{ href: "/docs/channels", label: "Channels & privacy" }}
      />
    </article>
  );
}
