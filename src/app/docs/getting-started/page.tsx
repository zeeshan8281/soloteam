import { Lead, P, H2, Bullets, Callout, Cmd, Code, Screen, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — Getting started",
  description: "Set up the first client-update workflow in Slack.",
};

export default function GettingStarted() {
  return (
    <article>
      <PageHead kicker="docs / getting started" title="Getting started">
        <Lead>During the pilot, we configure one real client channel with you and produce the first useful draft together.</Lead>
      </PageHead>

      <div className="space-y-5">
        <H2>What you need</H2>
        <Bullets
          items={[
            <>A Slack workspace where an admin can approve the assisted pilot install.</>,
            <>One client channel with enough delivery context to draft a real update.</>,
            <>The authoritative sources for that client — for example a project board, reporting tool, Notion workspace, or calendar.</>,
          ]}
        />

        <H2>Step 1 — Complete assisted installation</H2>
        <P>We review client isolation, requested Slack scopes, approvers, and the destination before activating the first workflow.</P>
        <H2>Step 2 — Invite SoloTeam to the client channel</H2>
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

        <H2>Step 3 — Draft the first client update</H2>
        <P>Use real channel context so the first output tests the workflow rather than a generic demo:</P>
        <Cmd>draft this week&apos;s client update: completed work, current status, blockers, decisions, and next actions</Cmd>
        <Screen>
          SoloTeam posts a draft for review. Check every fact, the client scope, and the intended destination before approving it.
        </Screen>

        <H2>What happens automatically the first time</H2>
        <P>The first time someone talks to SoloTeam in a channel, two things happen quietly:</P>
        <Bullets
          items={[
            <><b className="text-neutral-900">The channel becomes its own private workspace.</b> It gets its own memory and its own connected tools, separate from every other channel. (More in <i>Channels &amp; privacy</i>.)</>,
            <><b className="text-neutral-900">You become its approver.</b> As the first person to talk, you&apos;re the one who can approve actions. You can add teammates later. (More in <i>Approvals</i>.)</>,
          ]}
        />

        <H2>Step 4 — Confirm authoritative context</H2>
        <P>
          Tell SoloTeam which sources are authoritative for this client and what belongs in the weekly update:
        </P>
        <Cmd>for Acme, use this channel and the connected launch board. our client voice is direct and concise. remember that.</Cmd>
        <P>Missing facts or heavy manual corrections are pilot signals. Add a new integration only when the same source gap repeatedly blocks the workflow.</P>

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
