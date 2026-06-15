import { Lead, P, H2, Steps, Bullets, Table, Cmd, Code, Callout, Screen, FAQ, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — Notion",
  description: "Connect Notion to SoloTeam: setup, reading, publishing, and troubleshooting.",
};

export default function NotionDocs() {
  return (
    <article>
      <PageHead kicker="docs / integrations / notion" title="Notion">
        <Lead>
          Connect Notion and your agents can read your docs (pull up a memo, spec, or wiki page) and publish new pages
          for you after approval. This is the full walkthrough.
        </Lead>
      </PageHead>

      <div className="space-y-5">
        <H2>What you can do once it&apos;s connected</H2>
        <Bullets
          items={[
            <><b className="text-neutral-900">Read</b> — &quot;what&apos;s in our Notion?&quot;, &quot;read our launch plan and summarize it.&quot; The agent finds and opens the page.</>,
            <><b className="text-neutral-900">Publish</b> — &quot;draft a competitor breakdown and publish it to Notion.&quot; You get an approval card; on approve, a new Notion page is created.</>,
          ]}
        />

        <H2>Setup</H2>
        <Steps
          items={[
            <>In the channel where you want it, run: <Cmd>connect notion</Cmd></>,
            <>Click the <b className="text-neutral-900">Connect Notion</b> link SoloTeam posts.</>,
            <>A Notion screen opens asking which pages to share. <b className="text-neutral-900">Select the pages you want SoloTeam to access.</b> This is the step people miss — if you don&apos;t pick any pages, SoloTeam connects but can&apos;t see anything.</>,
            <>Click <b className="text-neutral-900">Allow access</b>. You&apos;ll land on a &quot;✅ Connected&quot; page.</>,
            <>Back in Slack, confirm with <Code>integrations</Code> — Notion should be listed.</>,
          ]}
        />
        <Screen>
          On the Notion authorize screen there&apos;s a <b className="text-neutral-900">&quot;Select pages&quot;</b> button. Click it and
          tick the pages (and their sub-pages) you&apos;re happy for SoloTeam to read and write. You can change this later.
        </Screen>

        <H2>Using it — read</H2>
        <Cmd>what&apos;s in our notion?</Cmd>
        <P>Lists every page SoloTeam can see — a good first check.</P>
        <Cmd>read our onboarding SOP from notion and summarize the key steps</Cmd>
        <P>Finds the page by name and pulls its content into the answer.</P>

        <H2>Using it — publish</H2>
        <Cmd>@biz draft a one-pager on our pricing strategy and publish it to notion</Cmd>
        <P>
          The agent writes the page, then posts an <b className="text-neutral-900">Approve / Reject</b> card. On approve, the
          page is created in your Notion (under a page you shared) and the card confirms with a link.
        </P>

        <H2>Sharing more pages later</H2>
        <P>To let SoloTeam see a page you didn&apos;t include at connect time:</P>
        <Steps
          items={[
            <>Open the page in Notion.</>,
            <>Click the <Code>•••</Code> menu (top-right).</>,
            <>Choose <Code>Connections</Code> → <b className="text-neutral-900">Add SoloTeam</b>.</>,
            <>Sub-pages inherit access automatically.</>,
          ]}
        />

        <H2>Troubleshooting</H2>
        <Table
          head={["Symptom", "Fix"]}
          rows={[
            [<>&quot;I&apos;m connected but no pages are shared&quot;</>, "You skipped page selection during connect. Share pages via the ••• → Connections menu (above), or disconnect and reconnect, picking pages this time."],
            [<>&quot;No page matched X&quot;</>, "Notion search is keyword-based. Use the page's real title, or run \"what's in our notion?\" to see exact names, then ask for one."],
            [<>Wrong workspace connected</>, <>Run <Code>disconnect notion</Code>, then <Code>connect notion</Code> and choose the right workspace.</>],
            [<>Publish failed: no page to publish under</>, "SoloTeam publishes under a page you shared. Share at least one page (••• → Connections → Add SoloTeam), then approve again."],
            [<>Want to revoke access entirely</>, <>Run <Code>disconnect notion</Code> in the channel, or remove SoloTeam from the integration in your Notion settings.</>],
          ]}
        />

        <Callout tone="tip" title="Best first move">
          <P>Right after connecting, share your main wiki/docs page and run <Code>@SoloTeam read our notion and remember the key facts about our company</Code>. Now every agent has that context for good.</P>
        </Callout>

        <H2>FAQ</H2>
        <FAQ
          items={[
            ["Can it edit my existing pages?", <>It creates new pages on approval. It reads existing ones but doesn&apos;t silently edit them — and any write is gated by an approval card.</>],
            ["Is my whole Notion exposed?", <>No. Only the specific pages you select during connect (plus their sub-pages). Everything else is invisible to SoloTeam.</>],
            ["Does each channel need its own Notion connection?", <>Yes — connections are per channel. That&apos;s deliberate, so a client channel only ever touches that client&apos;s workspace.</>],
          ]}
        />
      </div>

      <PageNav
        prev={{ href: "/docs/connecting", label: "Connecting your tools" }}
        next={{ href: "/docs/gmail-calendar", label: "Gmail & Calendar" }}
      />
    </article>
  );
}
