import Link from "next/link";

export const metadata = {
  title: "SoloTeam — Docs",
  description: "Set up SoloTeam, connect your tools, and run your AI team — integration guides, commands, and troubleshooting.",
};

interface Section {
  id: string;
  title: string;
  body: React.ReactNode;
}

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[13px] leading-relaxed text-neutral-600">{children}</p>
);

const Code = ({ children }: { children: React.ReactNode }) => (
  <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[12px] text-neutral-800">{children}</code>
);

/** A Slack command line, styled like the message you'd type. */
const Cmd = ({ children }: { children: React.ReactNode }) => (
  <div className="my-2 border border-line bg-surface px-3 py-2 font-mono text-[12.5px] text-neutral-800">
    <span className="text-accent">@SoloTeam</span> {children}
  </div>
);

const Steps = ({ items }: { items: React.ReactNode[] }) => (
  <ol className="my-1 space-y-2 font-mono text-[13px] leading-relaxed text-neutral-600">
    {items.map((it, i) => (
      <li key={i} className="flex gap-3">
        <span className="flex-none font-semibold text-accent">{i + 1}.</span>
        <span>{it}</span>
      </li>
    ))}
  </ol>
);

/** A boxed callout for gotchas / fixes. */
const Callout = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="my-3 border-l-2 border-accent bg-surface px-4 py-3">
    <p className="mb-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent">{label}</p>
    <div className="space-y-1.5 font-mono text-[12.5px] leading-relaxed text-neutral-600">{children}</div>
  </div>
);

const SECTIONS: Section[] = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <div className="space-y-3">
        <P>
          SoloTeam is a team of AI agents for solo founders and small teams. They join your Slack as
          @mentionable members, share one persistent memory of your business, connect to your tools, and
          do real work you approve — drafting emails, publishing docs, reading your inbox and calendar.
          Advice is free; every outbound action waits for your explicit yes.
        </P>
        <P>{`This page is the operator's manual: how to add SoloTeam, connect each tool, the full command set, and what to do when something doesn't work.`}</P>
      </div>
    ),
  },
  {
    id: "getting-started",
    title: "Getting started",
    body: (
      <div className="space-y-3">
        <P>Three things happen the first time you talk to SoloTeam in a channel:</P>
        <Steps
          items={[
            <>
              <b className="text-neutral-900">Invite it.</b> In any channel, run <Code>/invite @SoloTeam</Code> (or just{" "}
              <Code>@mention</Code> it). You can also DM it directly.
            </>,
            <>
              <b className="text-neutral-900">That channel becomes its own workspace.</b> Each channel has its own private,
              isolated memory and its own connected tools — so a client channel never bleeds into another.
            </>,
            <>
              <b className="text-neutral-900">You become its approver.</b> The first person to talk in a channel is set as the
              approver who can green-light actions. Add teammates later (see Approvals).
            </>,
          ]}
        />
        <P>{`From there, just @mention SoloTeam and a router picks the right specialist. Add an @handle (e.g. @biz) only to force a specific one.`}</P>
      </div>
    ),
  },
  {
    id: "roster",
    title: "The roster",
    body: (
      <div className="space-y-3">
        <P>Five active specialists (a sixth, @finance, is coming soon). All share the same memory and tools:</P>
        <ul className="space-y-1.5 font-mono text-[13px] text-neutral-600">
          {[
            ["@ops", "back-office, SOPs, vendor coordination, the busywork"],
            ["@biz", "pricing, positioning, competitor moves, what to build next"],
            ["@marketing", "posts, launch copy, SEO briefs, the content calendar"],
            ["@support", "replies in your voice, complaint → bug list"],
            ["@design", "landing critiques, brand direction, build-ready UI specs"],
          ].map(([h, d]) => (
            <li key={h} className="flex gap-3">
              <span className="w-24 flex-none text-accent">{h}</span>
              <span className="text-neutral-500">{d}</span>
            </li>
          ))}
        </ul>
        <P>{`Agents can consult each other mid-answer — @biz can pull in @marketing without you re-routing. Inside a thread, follow-ups stick with the same agent so context isn't lost.`}</P>
      </div>
    ),
  },
  {
    id: "integrations",
    title: "Connecting your tools",
    body: (
      <div className="space-y-3">
        <P>{`SoloTeam connects to your tools with one click — OAuth, no API keys, nothing technical. Connections are per channel: each channel links its own accounts, so the agents in a client's channel read that client's Notion and never anything else.`}</P>
        <P>Three commands manage every integration:</P>
        <Cmd>connect notion</Cmd>
        <Cmd>disconnect notion</Cmd>
        <Cmd>integrations</Cmd>
        <P>
          <Code>integrations</Code> lists what this channel has connected and what&apos;s available to connect. The detailed
          per-tool guides are below.
        </P>
        <Callout label="How it stays private">
          <P>{`Each channel stores its own access tokens, scoped to only the pages/accounts you authorize. Disconnecting removes the token immediately. SoloTeam only ever sees what you explicitly share during the connect step.`}</P>
        </Callout>
      </div>
    ),
  },
  {
    id: "notion",
    title: "Notion",
    body: (
      <div className="space-y-4">
        <div className="space-y-2">
          <P>
            <b className="text-neutral-900">What it does.</b> Agents read your Notion pages (pull up a memo, spec, or wiki
            page mid-thought) and publish drafts to Notion after your approval (competitor breakdowns, strategy memos,
            meeting notes).
          </P>
        </div>
        <div className="space-y-2">
          <p className="font-mono text-[12px] uppercase tracking-wider text-neutral-500">Setup</p>
          <Steps
            items={[
              <>In the channel, run <Cmd>connect notion</Cmd></>,
              <>Click the <b className="text-neutral-900">Connect Notion</b> link it posts.</>,
              <>
                Authorize in your browser. <b className="text-neutral-900">Select the pages you want SoloTeam to access</b> —
                this is the important step; it only ever sees pages you share here.
              </>,
              <>Done — the token is stored for this channel. Confirm with <Code>integrations</Code>.</>,
            ]}
          />
        </div>
        <div className="space-y-2">
          <p className="font-mono text-[12px] uppercase tracking-wider text-neutral-500">Using it</p>
          <Cmd>what&apos;s in our notion?</Cmd>
          <Cmd>read our launch plan from notion and summarize it</Cmd>
          <Cmd>@biz draft a competitor breakdown and publish it to notion</Cmd>
          <P>{`Reading lists/opens pages instantly. Publishing always produces an Approve/Reject card first — nothing is written to Notion without your yes.`}</P>
        </div>
        <div className="space-y-2">
          <p className="font-mono text-[12px] uppercase tracking-wider text-neutral-500">Add more pages later</p>
          <P>
            In Notion, open the page → <Code>•••</Code> menu → <Code>Connections</Code> → add <b className="text-neutral-900">SoloTeam</b>.
            Sub-pages inherit access.
          </P>
        </div>
        <Callout label="Troubleshooting">
          <P>
            <b className="text-neutral-900">{`"Connected but no pages shared"`}</b> — you skipped page selection during connect. Share
            pages via the <Code>•••</Code> → Connections menu above.
          </P>
          <P>
            <b className="text-neutral-900">{`"No page matched X"`}</b> — SoloTeam lists everything it can see so you can name one;
            Notion search is keyword-based, so try the page&apos;s real title.
          </P>
          <P>
            <b className="text-neutral-900">Wrong workspace / want to re-pick pages</b> — <Code>disconnect notion</Code> then{" "}
            <Code>connect notion</Code> again.
          </P>
        </Callout>
      </div>
    ),
  },
  {
    id: "google",
    title: "Gmail & Calendar",
    body: (
      <div className="space-y-4">
        <div className="space-y-2">
          <P>
            <b className="text-neutral-900">What it does.</b> Read-only access to your Gmail and Google Calendar. Agents triage
            your inbox, find a specific email, summarize what needs a reply, check your schedule, and prep for meetings.
          </P>
          <Callout label="Read-only by design">
            <P>{`SoloTeam reads Gmail and Calendar but never sends or edits from them. Outbound email goes through the separate, human-approved email drafts (below) — so reading your inbox can never silently send anything.`}</P>
          </Callout>
        </div>
        <div className="space-y-2">
          <p className="font-mono text-[12px] uppercase tracking-wider text-neutral-500">Setup</p>
          <Steps
            items={[
              <>In the channel, run <Cmd>connect google</Cmd></>,
              <>Click <b className="text-neutral-900">Connect Google</b> and sign in.</>,
              <>
                You&apos;ll see a <b className="text-neutral-900">{`"Google hasn't verified this app"`}</b> screen — this is normal for
                the pilot. Click <Code>Advanced</Code> → <Code>Go to SoloTeam</Code> → <Code>Allow</Code>.
              </>,
              <>Grant the Gmail + Calendar (read-only) permissions. Done.</>,
            ]}
          />
        </div>
        <div className="space-y-2">
          <p className="font-mono text-[12px] uppercase tracking-wider text-neutral-500">Using it</p>
          <Cmd>what&apos;s on my calendar this week?</Cmd>
          <Cmd>any emails today that need a reply?</Cmd>
          <Cmd>find the latest email from our investor and draft a follow-up</Cmd>
        </div>
        <Callout label="Troubleshooting">
          <P>
            <b className="text-neutral-900">{`"Access blocked: app not verified / access_denied"`}</b> — during the pilot the app is
            in testing mode, so your Google account must be added as an approved test user. Ask your SoloTeam admin to add it.
          </P>
          <P>
            <b className="text-neutral-900">Reads come back empty or error</b> — you may have authorized a different Google
            account than the one with the data. <Code>disconnect google</Code> and reconnect with the right account.
          </P>
          <P>
            <b className="text-neutral-900">Connected the wrong account</b> — <Code>disconnect google</Code>, then{" "}
            <Code>connect google</Code> and pick the correct one at the Google sign-in step.
          </P>
        </Callout>
      </div>
    ),
  },
  {
    id: "outbound",
    title: "Outbound actions (email, posts)",
    body: (
      <div className="space-y-3">
        <P>{`Anything that leaves the building is an action, and every action is gated by an Approve / Reject card. The agent drafts, you decide, then it executes and the card updates with the result.`}</P>
        <ul className="space-y-2 font-mono text-[13px] text-neutral-600">
          {[
            ["Email", "Agents draft emails in your voice; on Approve, the email sends. Ask: “@support draft a reply to this refund request.”"],
            ["Notion publish", "Drafts a page; on Approve, publishes to your connected Notion (see above)."],
            ["Social posts", "Drafts a post; on Approve, it's posted to the connected account (X), when the account has write access."],
          ].map(([h, d]) => (
            <li key={h} className="flex gap-3">
              <span className="w-28 flex-none text-accent">{h}</span>
              <span className="text-neutral-500">{d}</span>
            </li>
          ))}
        </ul>
        <Callout label="Who can approve">
          <P>{`Only a channel's approvers can click Approve/Reject — see Approvals. A non-approver clicking the button gets a quiet nudge, and the action never fires.`}</P>
        </Callout>
      </div>
    ),
  },
  {
    id: "commands",
    title: "Command reference",
    body: (
      <div className="space-y-3">
        <P>{`Everything you can say to SoloTeam (always as an @mention in a channel, or plainly in a DM):`}</P>
        <div className="overflow-hidden border border-line">
          {[
            ["connect <tool>", "Start a one-click connection (notion, google)"],
            ["disconnect <tool>", "Remove this channel's connection"],
            ["integrations", "List connected + available tools"],
            ["what do you remember?", "Show this channel's saved memory"],
            ["daily brief on / brief off", "Toggle the proactive morning summary"],
            ["always reply / mute", "Reply to every message vs. only when @mentioned"],
            ["add approver @user", "Let a teammate approve actions"],
            ["remove approver @user", "Revoke approval rights"],
          ].map(([c, d], i) => (
            <div key={c} className={`grid gap-3 px-4 py-2.5 sm:grid-cols-[230px_1fr] ${i % 2 ? "bg-surface/50" : ""}`}>
              <code className="font-mono text-[12.5px] text-accent">{c}</code>
              <span className="font-mono text-[12.5px] text-neutral-500">{d}</span>
            </div>
          ))}
        </div>
        <P>{`Beyond commands, just talk: "research our top 3 competitors", "read our roadmap from notion", "what's on my calendar". The agents pick the right tools themselves.`}</P>
      </div>
    ),
  },
  {
    id: "approvals",
    title: "Approvals & permissions",
    body: (
      <div className="space-y-3">
        <P>{`Every outbound action — email, Notion publish, social post — requires an explicit Approve. Advice and reading are always free; only sending/publishing is gated.`}</P>
        <P>
          <b className="text-neutral-900">Approvers.</b> The first person to talk in a channel becomes its approver. Only
          approvers can click Approve/Reject. Manage the list with:
        </P>
        <Cmd>add approver @teammate</Cmd>
        <Cmd>remove approver @teammate</Cmd>
        <Callout label="Why it works this way">
          <P>{`Reliability and control are the #1 thing operators worry about with AI agents. The approval gate means an agent can never send the wrong email or post the wrong thing on its own — it can only ever propose.`}</P>
        </Callout>
      </div>
    ),
  },
  {
    id: "proactive",
    title: "Proactive daily brief",
    body: (
      <div className="space-y-3">
        <P>{`SoloTeam can post a short morning brief — what's awaiting your approval and what moved recently — once a day in a channel. It's off by default.`}</P>
        <Cmd>daily brief on</Cmd>
        <Cmd>brief off</Cmd>
        <P>{`Turn it on in your main working channel so the team surfaces what needs attention without you asking.`}</P>
      </div>
    ),
  },
  {
    id: "channels",
    title: "Channels, memory & privacy",
    body: (
      <div className="space-y-3">
        <P>
          <b className="text-neutral-900">One channel = one private brain.</b> Memory, connected tools, and approvers are all
          scoped per channel. Give each project, client, or teammate its own channel and they stay completely isolated — no
          cross-talk.
        </P>
        <P>
          <b className="text-neutral-900">Shared within a channel.</b> Inside a channel, all five agents read and write the same
          memory — what @biz decides, @marketing knows. Retrieval is semantic: ask {`"what did we decide on pricing?"`} and it
          surfaces the right fact, not just the latest message.
        </P>
        <P>
          <b className="text-neutral-900">Private channels.</b> SoloTeam works in private channels too — just{" "}
          <Code>/invite @SoloTeam</Code> into them (it has to be a member to read the thread).
        </P>
        <P>
          <b className="text-neutral-900">Auto-reply.</b> By default the bot answers when @mentioned or in a thread it started.
          Run <Code>always reply</Code> in a dedicated channel to have it respond to every message; <Code>mute</Code> reverts.
        </P>
      </div>
    ),
  },
  {
    id: "architecture",
    title: "Architecture",
    body: (
      <div className="space-y-3">
        <P>
          TypeScript backend (Node 20, Express) on Railway. Claude powers the agents — frontier models on our keys, no API
          setup for you. PostgreSQL holds company data, the shared memory, and your per-channel tool connections (OAuth tokens,
          scoped to what you authorize). Slack is the interface for the pilot.
        </P>
        <pre className="overflow-x-auto border border-line bg-surface p-4 font-mono text-[11px] leading-relaxed text-neutral-600">
{`  @ops  @biz  @marketing  @support  @design
    └──────┬─────────┬──────────┘
           ▼
   shared memory  +  your tools (Notion · Gmail · Calendar)
           ▼
        you  [approve]     ← every outbound action`}
        </pre>
      </div>
    ),
  },
  {
    id: "pricing",
    title: "Pricing",
    body: (
      <div className="space-y-3">
        <P>
          Flat monthly tiers on our keys — no token math. Starter $49/mo (3 agents), Full team $99/mo (5 agents). A Team plan
          is coming soon.
        </P>
      </div>
    ),
  },
  {
    id: "research",
    title: "The research behind it",
    body: (
      <div className="space-y-3">
        <P>Before building, we ran deep research across 26 sources on the AI-agent market. The findings shaped every decision:</P>
        <ul className="space-y-2.5 font-mono text-[13px] leading-relaxed text-neutral-600">
          {[
            ["Pricing validated", "$49/$99 lands in the credible band. Sintra's AI team is $39/$97; Lindy is $49.99–$199.99."],
            ["The white space", "Incumbents are single-function and enterprise-priced, or multi-agent but siloed. No one offers memory-sharing, multi-role agents priced flat for solos."],
            ["Flat pricing is a wedge", "The category's #2 pain is credit anxiety — unpredictable bills. A flat tier on our keys answers it: no credits, no surprises."],
            ["Reliability is the #1 objection", "~half of agent buyers cite reliability first. That's why SoloTeam is advisor + human-approved actions — we lead with the approval gate."],
          ].map(([h, d]) => (
            <li key={h as string}>
              <span className="text-neutral-900">{h}</span> — <span className="text-neutral-500">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];

export default function Docs() {
  return (
    <main className="flex-1">
      <div className="relative mx-auto max-w-5xl">
        <nav className="sticky top-0 z-50 border-b border-line bg-[#f6f5f1]/85 backdrop-blur">
          <div className="flex items-center justify-between px-6 py-3.5 sm:px-10">
            <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-neutral-900">
              Solo<span className="text-accent">Team</span>
            </Link>
            <div className="flex gap-7 font-mono text-xs text-neutral-500">
              <Link href="/docs" className="text-neutral-900">docs</Link>
              <Link href="/changelog" className="hover:text-neutral-900">changelog</Link>
              <Link href="/" className="hover:text-neutral-900">home →</Link>
            </div>
          </div>
        </nav>

        <section className="border-t border-line">
          <div className="grid lg:grid-cols-[210px_1fr]">
            {/* contents */}
            <aside className="hidden border-r border-line px-6 py-20 sm:px-10 lg:block">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                <span className="text-accent">/ </span>docs
              </p>
              <nav className="sticky top-24 space-y-2 font-mono text-[12px]">
                {SECTIONS.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="block text-neutral-500 hover:text-neutral-900">
                    {s.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* body */}
            <div className="px-6 py-20 sm:px-10 sm:py-24">
              <h1 className="display max-w-2xl text-3xl font-semibold text-neutral-900 sm:text-5xl">Docs.</h1>
              <p className="mt-5 max-w-lg font-mono text-[13px] leading-relaxed text-neutral-600">
                Set up SoloTeam, connect your tools, and put your AI team to work.
              </p>
              <div className="mt-12 space-y-14">
                {SECTIONS.map((s) => (
                  <section key={s.id} id={s.id} className="scroll-mt-24">
                    <h2 className="mb-4 font-mono text-[15px] font-semibold text-neutral-900">
                      <span className="text-accent">#</span> {s.title}
                    </h2>
                    {s.body}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-line">
          <div className="px-6 py-10 font-mono text-xs text-neutral-400 sm:px-10">
            © 2026 SoloTeam — built by a solo founder, obviously.
          </div>
        </footer>
      </div>
    </main>
  );
}
