import { Lead, P, H2, Bullets, Cmd, Callout, FAQ, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — Daily brief",
  description: "An optional once-a-day morning summary from your team.",
};

export default function Proactive() {
  return (
    <article>
      <PageHead kicker="docs / daily brief" title="Daily brief">
        <Lead>
          SoloTeam can start your day for you — a short morning summary of what needs your attention. It&apos;s off by
          default; turn it on per channel.
        </Lead>
      </PageHead>

      <div className="space-y-5">
        <H2>What it is</H2>
        <P>
          Once a day, SoloTeam posts a brief in the channel — a few skimmable lines covering what&apos;s waiting on your
          approval and what moved recently. It turns the team from something you poke into something that surfaces work
          to you.
        </P>

        <H2>Turn it on / off</H2>
        <Cmd>daily brief on</Cmd>
        <P>And to stop it:</P>
        <Cmd>brief off</Cmd>

        <H2>What&apos;s in a brief</H2>
        <Bullets
          items={[
            <><b className="text-neutral-900">Awaiting approval</b> — drafts sitting in the channel that need your yes.</>,
            <><b className="text-neutral-900">Recent activity</b> — notable decisions and items from your shared memory.</>,
            "Only real items — if there's nothing worth pinging about, it stays quiet.",
          ]}
        />

        <Callout tone="tip" title="Where to turn it on">
          <P>Enable it in your main working channel — the one where you actually run the business — so the morning brief reflects what matters. Leave it off in side or client channels you check less often.</P>
        </Callout>

        <H2>FAQ</H2>
        <FAQ
          items={[
            ["When does it post?", "Roughly once every 24 hours per channel that has it on. It won't double-post."],
            ["Will it spam me?", "No — it's at most once a day, and it stays silent when there's nothing real to report."],
            ["Is it on by default?", "No. Nothing proactive happens until you explicitly run \"daily brief on\" in a channel."],
          ]}
        />
      </div>

      <PageNav
        prev={{ href: "/docs/channels", label: "Channels & privacy" }}
        next={{ href: "/docs/troubleshooting", label: "Troubleshooting" }}
      />
    </article>
  );
}
