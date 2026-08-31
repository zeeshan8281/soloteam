import Link from "next/link";
import { Lead, P, H2, Bullets, Table, Screen, Callout, FAQ, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — Outbound actions",
  description: "How SoloTeam sends email, publishes to Notion, and posts — always with your approval.",
};

export default function Outbound() {
  return (
    <article>
      <PageHead kicker="docs / integrations / actions" title="Outbound actions">
        <Lead>
          Anything that leaves the building — an email, a published doc, a social post — is an &quot;action.&quot; Every action
          is drafted first and waits for your <b className="text-neutral-900">Approve</b>. This is the safety core of the
          product.
        </Lead>
      </PageHead>

      <div className="space-y-5">
        <H2>The flow, every time</H2>
        <P>Whenever an agent decides an action is needed, it doesn&apos;t just do it. It:</P>
        <Bullets
          items={[
            "Drafts the full thing (recipient, subject, body — or the post, or the page).",
            "Posts an Approve / Reject card in the thread.",
            "Waits. Nothing happens until you click.",
            "On Approve, it executes and the card updates with the result (e.g. \"✅ email sent\"). On Reject, nothing happens.",
          ]}
        />
        <Screen>
          <div className="space-y-1">
            <div><b className="text-neutral-900">@marketing drafted an action — your call.</b></div>
            <div>Post → X: &quot;We just shipped one-click Notion + Gmail…&quot;</div>
            <div className="mt-2 flex gap-2">
              <span className="rounded-sm border border-accent px-2 py-0.5 text-accent">Approve</span>
              <span className="rounded-sm border border-line px-2 py-0.5 text-neutral-500">Reject</span>
            </div>
          </div>
        </Screen>

        <H2>What it can send</H2>
        <Table
          head={["Action", "How it works"]}
          rows={[
            ["Email", "Agents draft an email in your voice; on Approve, it sends. Try: \"@support draft a reply to this refund request.\""],
            ["Notion publish", <>Drafts a page; on Approve, publishes to your connected Notion. See <Link href="/docs/notion" className="text-accent">Notion</Link>.</>],
            ["Social post", "Drafts a post; on Approve, posts to the connected account (e.g. X), when that account has posting access."],
          ]}
        />

        <H2>Who can approve</H2>
        <P>
          Only a channel&apos;s <b className="text-neutral-900">approvers</b> can click Approve/Reject. A non-approver who clicks
          gets a quiet note and the action never fires. See{" "}
          <Link href="/docs/approvals" className="text-accent">Approvals</Link> to manage who that is.
        </P>

        <Callout tone="tip" title="It will never claim it sent something it didn't">
          <P>An agent only ever says it <i>drafted</i> something for approval — it won&apos;t tell you an email is &quot;sent&quot; until you&apos;ve actually approved it and it executed. If you didn&apos;t click Approve, it didn&apos;t go out.</P>
        </Callout>

        <H2>FAQ</H2>
        <FAQ
          items={[
            ["Can I edit a draft before approving?", "Tell the agent what to change in the thread (\"make it warmer, drop the last line\") and it redrafts a fresh card. Approve the version you like."],
            ["What if I approve by mistake?", "Email/posts execute on approve, so treat Approve like hitting send. If you're unsure, Reject and ask for changes first."],
            ["Does it batch-send or message lists?", "No. Actions are one-at-a-time and human-approved by design — there's no silent mass-sending."],
          ]}
        />
      </div>

      <PageNav
        prev={{ href: "/docs/gmail-calendar", label: "Gmail & Calendar" }}
        next={{ href: "/docs/commands", label: "Command reference" }}
      />
    </article>
  );
}
