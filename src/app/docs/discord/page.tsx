import Link from "next/link";
import { Lead, P, H2, Steps, Bullets, Code, Callout, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — Discord setup preview",
  description: "Preview SoloTeam's Discord slash commands, channel privacy, and approval workflow. Server activation is pending.",
};

export default function Discord() {
  return (
    <article>
      <PageHead kicker="docs / integrations / discord" title="Discord setup preview">
        <Lead>
          Work with the same ops, strategy, marketing, support, and design specialists using a single Discord command.
          Each channel keeps its own conversation, memory, and connected tools.
        </Lead>
      </PageHead>

      <div className="space-y-5">
        <Callout tone="info" title="Activation pending">
          <P>
            Discord installation is not open yet. App activation and a live server test
            still need to be completed. These steps describe the workflow after your server is enabled.
            Slack remains the available assisted pilot.
          </P>
        </Callout>

        <H2>Start in a server channel</H2>
        <Steps items={[
          <>A server manager adds SoloTeam to the server once installation is enabled.</>,
          <>A member with Manage Server or Administrator permission runs <Code>/soloteam message:help</Code> in each channel. This makes them the channel&apos;s first approver.</>,
          <>Run <Code>/soloteam message:Draft a launch announcement agent:@marketing</Code>. Choose the agent from Discord&apos;s command options, or include its handle in your message.</>,
          <>Use <Code>/soloteam</Code> again for follow-ups. Ordinary Discord messages are not read by this version.</>,
        ]} />

        <H2>Useful commands</H2>
        <Bullets items={[
          <><Code>/soloteam message:credits</Code> — check this channel&apos;s allowance.</>,
          <><Code>/soloteam message:memory</Code> — see what the team remembers for this channel.</>,
          <><Code>/soloteam message:integrations</Code> — list connected and available tools.</>,
          <><Code>/soloteam message:connect notion</Code> or <Code>connect google</Code> — an approver starts the connection and receives a private authorization link.</>,
          <><Code>/soloteam message:add approver @teammate</Code> — let another member approve drafts. Only an existing approver can change this list.</>,
        ]} />

        <H2>You decide what gets sent</H2>
        <P>
          An email or Notion draft appears with Approve and Reject buttons. A channel approver reviews the draft and
          clicks Approve to execute it, or Reject to discard it. Repeated clicks cannot execute the same draft twice.
          To change a draft, reject it and request a revised version.
        </P>

        <H2>Channel boundaries and current limits</H2>
        <P>
          A Discord channel does not inherit another channel&apos;s memory or connections, including channels in Slack.
          Connect the intended accounts separately. Shared pilot Notion and X accounts are not made available to
          Discord servers.
        </P>
        <P>
          Daily briefs, scheduled weekly updates, and the edit modal remain Slack features. Discord currently uses
          slash commands and Approve / Reject. See <Link href="/docs/approvals" className="text-accent">Approvals</Link> for
          the review model and <Link href="/docs/connecting" className="text-accent">Connecting your tools</Link> for
          account permissions.
        </P>
      </div>

      <PageNav prev={{ href: "/docs/connecting", label: "Connecting your tools" }} next={{ href: "/docs/approvals", label: "Approvals" }} />
    </article>
  );
}
