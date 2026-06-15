import Link from "next/link";
import { Lead, P, H2, Steps, Bullets, Cmd, Code, Callout, FAQ, PageHead, PageNav } from "../components";

export const metadata = {
  title: "SoloTeam Docs — Approvals",
  description: "Who can approve actions, and how the approval gate keeps you safe.",
};

export default function Approvals() {
  return (
    <article>
      <PageHead kicker="docs / approvals" title="Approvals & permissions">
        <Lead>
          Every outbound action waits for a human yes. Here&apos;s who can give it and how to manage that — so the right
          people can approve, and no one else can.
        </Lead>
      </PageHead>

      <div className="space-y-5">
        <H2>What needs approval</H2>
        <Bullets
          items={[
            <><b className="text-neutral-900">Needs approval:</b> sending email, publishing to Notion, posting to social — anything outbound.</>,
            <><b className="text-neutral-900">Never needs approval:</b> answering questions, researching, reading your docs/inbox/calendar, giving advice. Reading is always free and instant.</>,
          ]}
        />

        <H2>Who can approve — the approver list</H2>
        <P>
          Each channel has a list of <b className="text-neutral-900">approvers</b>. Only they can click Approve/Reject. The
          first person to talk to SoloTeam in a channel is automatically added as its first approver, so you can approve
          right away without any setup.
        </P>

        <H2>Adding & removing approvers</H2>
        <P>The channel owner can add teammates:</P>
        <Cmd>add approver @teammate</Cmd>
        <Cmd>remove approver @teammate</Cmd>
        <Steps
          items={[
            <>@mention SoloTeam with <Code>add approver</Code> and the person&apos;s @handle.</>,
            <>They can now approve/reject actions in that channel.</>,
            <>Use <Code>remove approver</Code> to revoke.</>,
          ]}
        />

        <Callout tone="info" title="What a non-approver sees">
          <P>If someone who isn&apos;t an approver clicks Approve on a card, the action does <b className="text-neutral-900">not</b> fire — they get a quiet, private note saying only approvers can decide, and to ask the channel owner to add them.</P>
        </Callout>

        <H2>Why it works this way</H2>
        <P>
          The biggest worry with AI agents is that they&apos;ll do something wrong on their own. The approval gate makes that
          impossible: an agent can only ever <i>propose</i>. Combined with{" "}
          <Link href="/docs/channels" className="text-accent">per-channel isolation</Link>, it means the wrong person
          can&apos;t approve the wrong thing in the wrong place.
        </P>

        <H2>FAQ</H2>
        <FAQ
          items={[
            ["I'm a solo founder — do I need to set this up?", "No. You're automatically the approver of any channel you start. The approver list only matters when teammates join."],
            ["Can I require two approvers?", "Not yet — a single approver clicks today. Multi-approver flows are a possible future addition."],
            ["Someone left the team — what do I do?", <>Run <Code>remove approver @them</Code> in each channel they could approve in.</>],
          ]}
        />
      </div>

      <PageNav
        prev={{ href: "/docs/commands", label: "Command reference" }}
        next={{ href: "/docs/memory", label: "Shared memory" }}
      />
    </article>
  );
}
