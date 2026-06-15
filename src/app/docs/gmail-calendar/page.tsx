import { Lead, P, H2, Steps, Bullets, Table, Cmd, Code, Callout, Screen, FAQ, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — Gmail & Calendar",
  description: "Connect Google so SoloTeam can read your inbox and schedule (read-only).",
};

export default function GoogleDocs() {
  return (
    <article>
      <PageHead kicker="docs / integrations / google" title="Gmail & Calendar">
        <Lead>
          Connect Google and your agents can read your inbox and calendar — triage email, find a specific message,
          summarize what needs a reply, and prep for your day. Read-only by design.
        </Lead>
      </PageHead>

      <div className="space-y-5">
        <Callout tone="info" title="Read-only — on purpose">
          <P>SoloTeam reads Gmail and Calendar but never sends or changes anything in them. If you want to send an email, the agent drafts it and you approve it through the separate email action — so reading your inbox can never silently send mail on your behalf.</P>
        </Callout>

        <H2>What you can do once it&apos;s connected</H2>
        <Bullets
          items={[
            <><b className="text-neutral-900">Inbox</b> — &quot;any emails today that need a reply?&quot;, &quot;find the latest email from our investor.&quot;</>,
            <><b className="text-neutral-900">Calendar</b> — &quot;what&apos;s on my calendar this week?&quot;, &quot;am I free Thursday afternoon?&quot;</>,
            <><b className="text-neutral-900">Combine</b> — &quot;read the email from Jane and draft a reply&quot; (drafting the reply is an approval-gated action).</>,
          ]}
        />

        <H2>Setup</H2>
        <Steps
          items={[
            <>In the channel, run: <Cmd>connect google</Cmd></>,
            <>Click the <b className="text-neutral-900">Connect Google</b> link and sign in with the Google account whose inbox/calendar you want.</>,
            <>During the pilot you&apos;ll see a <b className="text-neutral-900">&quot;Google hasn&apos;t verified this app&quot;</b> screen. This is normal and safe — the app just hasn&apos;t finished Google&apos;s public review yet. Click <Code>Advanced</Code>, then <Code>Go to SoloTeam</Code>.</>,
            <>Grant the <b className="text-neutral-900">Gmail (read-only)</b> and <b className="text-neutral-900">Calendar (read-only)</b> permissions.</>,
            <>You&apos;ll land on a &quot;✅ Connected&quot; page. Confirm in Slack with <Code>integrations</Code>.</>,
          ]}
        />
        <Screen>
          The unverified-app warning looks alarming but is expected for a pilot. The real, clickable path is{" "}
          <b className="text-neutral-900">Advanced → Go to SoloTeam (unsafe) → Allow</b>. &quot;Unsafe&quot; here just means
          &quot;not yet Google-reviewed,&quot; not that anything is wrong.
        </Screen>

        <H2>Using it</H2>
        <Cmd>what&apos;s on my calendar this week?</Cmd>
        <Cmd>any important emails in my inbox today?</Cmd>
        <Cmd>find the thread with our designer and summarize where we landed</Cmd>

        <H2>Troubleshooting</H2>
        <Table
          head={["Symptom", "Fix"]}
          rows={[
            [<>&quot;Access blocked / this app is being tested / access_denied&quot;</>, "During the pilot the app is in testing mode, so only approved test-user accounts can connect. Ask your SoloTeam admin to add your Google address as a test user, then try again."],
            [<>Reads return nothing or an error</>, <>You may have authorized a different Google account than the one with the data. Run <Code>disconnect google</Code> and reconnect with the correct account.</>],
            [<>Connected the wrong account</>, <>Run <Code>disconnect google</Code>, then <Code>connect google</Code> and pick the right account at Google&apos;s sign-in step.</>],
            [<>Want to revoke access</>, <>Run <Code>disconnect google</Code> in the channel, or remove SoloTeam at myaccount.google.com → Security → third-party access.</>],
          ]}
        />

        <Callout tone="warn" title="Pilot limitation">
          <P>While the Google app is in testing, only accounts added as test users can connect. That&apos;s fine for the pilot. Full public access requires Google&apos;s verification, which is on the roadmap.</P>
        </Callout>

        <H2>FAQ</H2>
        <FAQ
          items={[
            ["Can SoloTeam send email from my Gmail?", <>No. Google access is read-only. Outbound email is a separate, approval-gated action — see <i>Outbound actions</i>.</>],
            ["Can it edit or delete calendar events?", "No — calendar access is read-only. It can tell you what's on your schedule, not change it."],
            ["Which inbox does it read?", "Whichever Google account you sign in with at connect time. Connect a shared/work inbox if that's what you want triaged."],
          ]}
        />
      </div>

      <PageNav
        prev={{ href: "/docs/notion", label: "Notion" }}
        next={{ href: "/docs/outbound", label: "Outbound actions" }}
      />
    </article>
  );
}
