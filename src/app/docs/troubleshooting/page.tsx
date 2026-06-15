import { Lead, P, H2, Table, Code, Callout, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — Troubleshooting",
  description: "Common issues and how to fix them, by area.",
};

export default function Troubleshooting() {
  return (
    <article>
      <PageHead kicker="docs / troubleshooting" title="Troubleshooting">
        <Lead>The quick fixes for the things people actually hit, grouped by area. Most take ten seconds.</Lead>
      </PageHead>

      <div className="space-y-5">
        <H2>It&apos;s not replying</H2>
        <Table
          head={["Symptom", "Fix"]}
          rows={[
            ["No reply in a channel", <>Make sure SoloTeam is a member: <Code>/invite @SoloTeam</Code>. In a normal channel it only acts on @mentions or threads it&apos;s in.</>],
            ["No reply in a private channel", <>Private channels require an explicit <Code>/invite @SoloTeam</Code> — it can&apos;t see one it isn&apos;t in.</>],
            ["Replied once, then silent on follow-ups", "Reply inside the same thread — it follows threads it started. A brand-new top-level message needs an @mention again (unless auto-reply is on)."],
            ["I want it to reply to everything", <>Run <Code>always reply</Code> in that channel; <Code>mute</Code> to revert.</>],
          ]}
        />

        <H2>Notion</H2>
        <Table
          head={["Symptom", "Fix"]}
          rows={[
            ["\"Connected but no pages shared\"", <>You skipped page selection at connect. In Notion: page → <Code>•••</Code> → Connections → Add SoloTeam. Or <Code>disconnect notion</Code> and reconnect, picking pages.</>],
            ["\"No page matched X\"", "Use the page's real title, or ask \"what's in our notion?\" to list exact names."],
            ["Publish failed — no page to publish under", "Share at least one page with SoloTeam (••• → Connections), then approve again."],
            ["Wrong workspace", <><Code>disconnect notion</Code> → <Code>connect notion</Code> → pick the right one.</>],
          ]}
        />

        <H2>Gmail & Calendar</H2>
        <Table
          head={["Symptom", "Fix"]}
          rows={[
            ["\"Access blocked / app being tested\"", "Your Google account must be added as a test user during the pilot. Ask your SoloTeam admin to add it, then retry."],
            ["\"Google hasn't verified this app\"", <>Expected for the pilot. Click <Code>Advanced</Code> → <Code>Go to SoloTeam</Code> → Allow. It&apos;s safe.</>],
            ["Reads come back empty / error", <>You may have connected the wrong Google account. <Code>disconnect google</Code> and reconnect with the right one.</>],
          ]}
        />

        <H2>Approvals</H2>
        <Table
          head={["Symptom", "Fix"]}
          rows={[
            ["Clicked Approve, nothing happened", "You may not be an approver for that channel. Ask the channel owner to run \"add approver @you.\""],
            ["A teammate can't approve", <>The owner runs <Code>add approver @teammate</Code> in that channel.</>],
            ["An action executed twice?", "It can't — approvals are single-use; a second click is ignored."],
          ]}
        />

        <H2>Answers seem off</H2>
        <Table
          head={["Symptom", "Fix"]}
          rows={[
            ["It doesn't know something about us", <>Tell it once — &quot;remember that …&quot; — or connect Notion and have it read your docs. Check with <Code>what do you remember?</Code></>],
            ["Wrong specialist answered", <>Force one by starting with a handle, e.g. <Code>@design …</Code></>],
            ["A long answer got cut off", "Ask it to \"continue\" — it'll pick up where it left off."],
          ]}
        />

        <Callout tone="info" title="Still stuck?">
          <P>If something&apos;s genuinely broken (not just a setup step), it may be a brief service issue. Try again in a minute; persistent problems are worth flagging to your SoloTeam contact.</P>
        </Callout>
      </div>

      <PageNav
        prev={{ href: "/docs/proactive", label: "Daily brief" }}
        next={{ href: "/docs/faq", label: "FAQ" }}
      />
    </article>
  );
}
