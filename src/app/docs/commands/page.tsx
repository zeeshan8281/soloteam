import { Lead, P, H2, Table, Cmd, Code, Callout, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — Command reference",
  description: "Every command you can say to SoloTeam.",
};

export default function Commands() {
  return (
    <article>
      <PageHead kicker="docs / commands" title="Command reference">
        <Lead>
          SoloTeam mostly understands plain English — but a few short commands control its settings and connections.
          Say them as an @mention in a channel (or plainly in a DM).
        </Lead>
      </PageHead>

      <div className="space-y-5">
        <H2>Connections</H2>
        <Table
          head={["Command", "What it does"]}
          rows={[
            [<Code>connect notion</Code>, "Start a one-click Notion connection for this channel"],
            [<Code>connect google</Code>, "Connect Gmail + Calendar (read-only) for this channel"],
            [<Code>disconnect notion</Code>, "Remove this channel's Notion connection (also: disconnect google)"],
            [<Code>integrations</Code>, "List what's connected here and what's available"],
          ]}
        />

        <H2>Memory</H2>
        <Table
          head={["Command", "What it does"]}
          rows={[
            [<Code>what do you remember?</Code>, "Show what this channel has saved about your business"],
            [<>&quot;remember that …&quot;</>, "Save a fact/decision to memory (just say it naturally)"],
          ]}
        />

        <H2>Channel behavior</H2>
        <Table
          head={["Command", "What it does"]}
          rows={[
            [<Code>always reply</Code>, "Reply to every message in this channel — no @mention needed"],
            [<Code>mute</Code>, "Go back to replying only when @mentioned"],
            [<Code>daily brief on</Code>, "Post a short morning summary here once a day"],
            [<Code>brief off</Code>, "Stop the daily brief"],
          ]}
        />

        <H2>Approvals</H2>
        <Table
          head={["Command", "What it does"]}
          rows={[
            [<>add approver <span className="text-neutral-500">@user</span></>, "Let a teammate approve/reject actions in this channel"],
            [<>remove approver <span className="text-neutral-500">@user</span></>, "Revoke a teammate's approval rights"],
          ]}
        />

        <H2>Forcing a specialist</H2>
        <P>Start your message with a handle to route it directly:</P>
        <Cmd>@biz what should we charge for the team plan?</Cmd>
        <P>
          Handles: <Code>@ops</Code> <Code>@biz</Code> <Code>@marketing</Code> <Code>@support</Code> <Code>@design</Code>.
          Leave it off and the router picks for you.
        </P>

        <Callout tone="tip" title="You don't need commands for the real work">
          <P>Commands are just for settings and connections. The actual work is plain language: &quot;research our competitors,&quot; &quot;draft a reply,&quot; &quot;what&apos;s on my calendar,&quot; &quot;publish this to Notion.&quot; The agents pick the right tools themselves.</P>
        </Callout>
      </div>

      <PageNav
        prev={{ href: "/docs/outbound", label: "Outbound actions" }}
        next={{ href: "/docs/approvals", label: "Approvals" }}
      />
    </article>
  );
}
