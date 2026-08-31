import { Lead, P, H2, Bullets, Cmd, Code, Callout, FAQ, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — Channels & privacy",
  description: "How channels isolate memory and tools, plus private channels and auto-reply.",
};

export default function Channels() {
  return (
    <article>
      <PageHead kicker="docs / channels & privacy" title="Channels & privacy">
        <Lead>
          A Slack channel is SoloTeam&apos;s unit of separation. Each channel is its own private workspace — its own memory,
          its own connected tools, its own approvers. Use that to keep things cleanly apart.
        </Lead>
      </PageHead>

      <div className="space-y-5">
        <H2>One channel = one private workspace</H2>
        <P>Everything is scoped to the channel it happens in:</P>
        <Bullets
          items={[
            <><b className="text-neutral-900">Memory</b> — what&apos;s learned in <Code>#acme</Code> stays in <Code>#acme</Code>.</>,
            <><b className="text-neutral-900">Connected tools</b> — the Notion/Gmail connected in a channel is only used there.</>,
            <><b className="text-neutral-900">Approvers</b> — each channel has its own list of who can approve actions.</>,
          ]}
        />

        <H2>How to use that</H2>
        <Bullets
          items={[
            <><b className="text-neutral-900">A channel per client</b> — connect that client&apos;s tools there; the agents never cross client data.</>,
            <><b className="text-neutral-900">A channel per project</b> — keep each project&apos;s docs, decisions, and inbox separate.</>,
            <><b className="text-neutral-900">A personal DM</b> — your own private space; it replies to everything, no @mention needed.</>,
          ]}
        />

        <Callout tone="info" title="No cross-channel bleed">
          <P>There&apos;s deliberately no sharing between channels. If you want two pieces of work to share context, do them in the same channel. If you want them firewalled, use separate channels.</P>
        </Callout>

        <H2>Private channels</H2>
        <P>
          SoloTeam works in private channels — you just have to <Code>/invite @SoloTeam</Code> into each one (it can&apos;t
          read a private channel it isn&apos;t a member of). Once invited, it behaves exactly like in a public channel.
        </P>

        <H2>Auto-reply mode</H2>
        <P>
          By default, SoloTeam replies when you @mention it or in a thread it&apos;s already in. In a dedicated channel you
          can have it reply to <i>every</i> message:
        </P>
        <Cmd>always reply</Cmd>
        <P>And turn it back off with:</P>
        <Cmd>mute</Cmd>
        <P>
          Auto-reply is great for a focused channel that&apos;s effectively a chat with your team. Leave it off in busy
          shared channels so it only speaks when called.
        </P>

        <H2>FAQ</H2>
        <FAQ
          items={[
            ["Can I move memory from one channel to another?", "Not directly. Re-state the key facts in the new channel (\"remember that …\") and they'll be saved there."],
            ["Does it read messages I didn't address to it?", <>In a normal channel it acts on @mentions and threads it&apos;s in. With <Code>always reply</Code> on, it responds to every message in that channel — only turn that on where you want it.</>],
            ["Is one workspace enough for my whole team?", "For the pilot, yes — give each person/project/client their own channel inside your workspace. Installing into separate workspaces is on the roadmap."],
          ]}
        />
      </div>

      <PageNav
        prev={{ href: "/docs/memory", label: "Shared memory" }}
        next={{ href: "/docs/proactive", label: "Daily brief" }}
      />
    </article>
  );
}
