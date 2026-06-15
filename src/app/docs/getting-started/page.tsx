import { Lead, P, H2, Steps, Bullets, Callout, Cmd, Code, Screen, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — Getting started",
  description: "Add SoloTeam to Slack and send your first message.",
};

export default function GettingStarted() {
  return (
    <article>
      <PageHead kicker="docs / getting started" title="Getting started">
        <Lead>From zero to your first answer in about two minutes. No setup, no config files — just Slack.</Lead>
      </PageHead>

      <div className="space-y-5">
        <H2>What you need</H2>
        <Bullets
          items={[
            <>A Slack workspace with SoloTeam installed. During the pilot we handle the install for you — you&apos;ll see <b className="text-neutral-900">SoloTeam</b> available as an app in your workspace.</>,
            <>A channel to work in (a normal channel, a private one, or a direct message — all work).</>,
          ]}
        />

        <H2>Step 1 — Invite SoloTeam to a channel</H2>
        <P>In the channel where you want help, type:</P>
        <Cmd>(or run) /invite @SoloTeam</Cmd>
        <P>
          Use Slack&apos;s <Code>/invite</Code> command, or just @mention SoloTeam in the channel — Slack will offer to add
          it. You can also click SoloTeam in your sidebar and message it directly as a DM.
        </P>
        <Screen>
          A small grey line appears: <i>&quot;added SoloTeam to #your-channel.&quot;</i> SoloTeam is now a member and can see
          new messages in this channel.
        </Screen>

        <H2>Step 2 — Say hi</H2>
        <P>Ask it anything to confirm it&apos;s alive:</P>
        <Cmd>what can you do?</Cmd>
        <Screen>
          One of the specialists replies in a thread, introducing the team and what it can help with. If you get a
          reply, you&apos;re connected.
        </Screen>

        <H2>What happens automatically the first time</H2>
        <P>The first time someone talks to SoloTeam in a channel, two things happen quietly:</P>
        <Bullets
          items={[
            <><b className="text-neutral-900">The channel becomes its own private workspace.</b> It gets its own memory and its own connected tools, separate from every other channel. (More in <i>Channels &amp; privacy</i>.)</>,
            <><b className="text-neutral-900">You become its approver.</b> As the first person to talk, you&apos;re the one who can approve actions. You can add teammates later. (More in <i>Approvals</i>.)</>,
          ]}
        />

        <H2>Step 3 — Give it context (recommended)</H2>
        <P>
          SoloTeam gets dramatically more useful once it knows your business. You can just tell it, and it remembers
          forever:
        </P>
        <Cmd>we&apos;re building a flat-priced AI team for solo founders. our voice is direct, no fluff. remember that.</Cmd>
        <P>Or point it at something it can read — your website, or your Notion once connected:</P>
        <Cmd>read our website soloteam.vercel.app and remember what we do</Cmd>

        <H2>How to talk to it</H2>
        <Bullets
          items={[
            <><b className="text-neutral-900">@mention in a channel</b> — the normal way. A router picks the right specialist automatically.</>,
            <><b className="text-neutral-900">In a thread</b> — once it&apos;s replied in a thread, just keep replying; you don&apos;t need to re-@mention, and it stays with the same specialist.</>,
            <><b className="text-neutral-900">Force a specialist</b> — start with a handle, e.g. <Code>@biz what should we charge?</Code> sends it straight to the strategy agent.</>,
            <><b className="text-neutral-900">Direct message</b> — DM SoloTeam for a private 1:1; it replies to every message there, no @mention needed.</>,
          ]}
        />

        <Callout tone="tip" title="You don't have to pick an agent">
          <P>Just describe what you need. SoloTeam figures out whether it&apos;s an ops, strategy, marketing, support, or design question and routes it. Only add an @handle when you want to override that.</P>
        </Callout>

        <Callout tone="info" title="Private channels">
          <P>SoloTeam works in private channels too — you just have to <Code>/invite @SoloTeam</Code> into them (it can&apos;t see a private channel it isn&apos;t a member of).</P>
        </Callout>
      </div>

      <PageNav
        prev={{ href: "/docs", label: "Overview" }}
        next={{ href: "/docs/how-it-works", label: "How it works" }}
      />
    </article>
  );
}
