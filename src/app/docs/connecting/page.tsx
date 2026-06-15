import Link from "next/link";
import { Lead, P, H2, Steps, Bullets, Table, Cmd, Code, Callout, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — Connecting your tools",
  description: "How SoloTeam connects to Notion, Gmail, Calendar — one click, per channel, no API keys.",
};

export default function Connecting() {
  return (
    <article>
      <PageHead kicker="docs / integrations" title="Connecting your tools">
        <Lead>
          SoloTeam can read and write to the tools you already use. Connecting takes one click and a browser login —
          no API keys, no copying secret tokens, nothing technical.
        </Lead>
      </PageHead>

      <div className="space-y-5">
        <H2>What &quot;connecting&quot; actually means</H2>
        <P>
          Connecting gives SoloTeam permission to use a tool on your behalf — like clicking &quot;Sign in with Google&quot; on
          any website. You log in to the tool, choose what SoloTeam is allowed to see, and that&apos;s it. You never handle
          API keys or paste secrets anywhere. You can revoke it any time.
        </P>

        <H2>Connections are per channel</H2>
        <P>
          This is the important part: each Slack channel connects its <i>own</i> accounts. The Notion you connect in
          <Code>#acme</Code> is only used in <Code>#acme</Code>. Connect a different Notion in <Code>#globex</Code> and the
          two never mix.
        </P>
        <Bullets
          items={[
            <><b className="text-neutral-900">Agencies / consultants</b> — give each client a channel, connect that client&apos;s tools there, and the agents in that channel only ever touch that client&apos;s data.</>,
            <><b className="text-neutral-900">Projects</b> — a channel per project keeps each one&apos;s docs and inbox separate.</>,
            <><b className="text-neutral-900">Just you</b> — connect your own tools in your main channel and you&apos;re done.</>,
          ]}
        />

        <H2>The three commands</H2>
        <Table
          head={["Command", "What it does"]}
          rows={[
            [<Code>connect notion</Code>, "Start a one-click connection (also: connect google)"],
            [<Code>disconnect notion</Code>, "Remove this channel's connection to that tool"],
            [<Code>integrations</Code>, "List what this channel has connected and what's available"],
          ]}
        />
        <Cmd>integrations</Cmd>
        <P>Run that any time to see where you stand in the current channel.</P>

        <H2>What you can connect today</H2>
        <Bullets
          items={[
            <><Link href="/docs/notion" className="text-accent">Notion</Link> — read your pages and publish drafts (read + write).</>,
            <><Link href="/docs/gmail-calendar" className="text-accent">Gmail &amp; Calendar</Link> — read your inbox and schedule (read-only).</>,
            <>More (CRM, Linear, GitHub, and others) are on the roadmap — the connection system is built so new tools plug in quickly.</>,
          ]}
        />

        <H2>How a connection works, start to finish</H2>
        <Steps
          items={[
            <>You run <Code>connect notion</Code> (or <Code>connect google</Code>) in a channel.</>,
            <>SoloTeam posts a <b className="text-neutral-900">Connect</b> link. Click it.</>,
            <>You log in to the tool in your browser and <b className="text-neutral-900">choose what to share</b> (e.g. which Notion pages, or approve Gmail read access).</>,
            <>You&apos;re redirected back to a confirmation page. The connection is now stored for that channel.</>,
            <>Done — the agents in that channel can use the tool. Verify with <Code>integrations</Code>.</>,
          ]}
        />

        <Callout tone="tip" title="Your data stays yours">
          <P>SoloTeam only ever sees what you explicitly authorize during connect — specific Notion pages, read-only Gmail, etc. Tokens are stored per channel and scoped to those permissions. Run <Code>disconnect &lt;tool&gt;</Code> and the access is removed immediately.</P>
        </Callout>
      </div>

      <PageNav
        prev={{ href: "/docs/roster", label: "The roster" }}
        next={{ href: "/docs/notion", label: "Notion" }}
      />
    </article>
  );
}
