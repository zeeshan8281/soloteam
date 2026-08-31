"use client";

import { useState } from "react";
import { Check, Hash, Pencil } from "lucide-react";

type Agent = { handle: string; color: string; initial: string };
type Message = { agent: Agent; time: string; text: string; action?: string; sent?: boolean };
type Scenario = { label: string; channel: string; prompt: string; messages: Message[]; typing: Agent };

const OPS: Agent = { handle: "@ops", color: "#e0892b", initial: "O" };
const SUPPORT: Agent = { handle: "@support", color: "#7c3aed", initial: "S" };
const BIZ: Agent = { handle: "@biz", color: "#0891b2", initial: "B" };

const SCENARIOS: Scenario[] = [
  {
    label: "Client update",
    channel: "client-acme",
    prompt: "draft this week's client update",
    typing: OPS,
    messages: [
      { agent: OPS, time: "4:02", text: "Drafted this week’s update from the client channel and connected notes.", action: "Review status · blockers · decisions · next actions" },
      { agent: BIZ, time: "4:03", text: "Two decisions still need the client: homepage direction and launch date." },
      { agent: SUPPORT, time: "4:04", text: "Follow-up is ready for the approved destination.", action: "Send update to client", sent: true },
    ],
  },
  {
    label: "Follow-up",
    channel: "client-acme",
    prompt: "what are we waiting on?",
    typing: SUPPORT,
    messages: [
      { agent: SUPPORT, time: "10:12", text: "Acme still owes final homepage copy and approval on the launch date." },
      { agent: OPS, time: "10:13", text: "I drafted one message with both requests and clear owners.", action: "Review client follow-up" },
      { agent: BIZ, time: "10:14", text: "Project risk stays low if both arrive by Thursday." },
    ],
  },
  {
    label: "Daily briefing",
    channel: "agency-ops",
    prompt: "brief me on client risk",
    typing: BIZ,
    messages: [
      { agent: BIZ, time: "8:30", text: "Three client channels need attention today; Acme is the only launch risk." },
      { agent: OPS, time: "8:31", text: "Two approvals are waiting and one next action has no owner.", action: "Open today’s action list" },
      { agent: SUPPORT, time: "8:32", text: "No outbound messages will send until you review them." },
    ],
  },
];

function Avatar({ agent }: { agent: Agent }) {
  return (
    <span
      className="flex h-7 w-7 flex-none items-center justify-center rounded-md font-mono text-[12px] font-semibold text-white"
      style={{ background: agent.color }}
    >
      {agent.initial}
    </span>
  );
}

function ActionCard({ label, sent = false }: { label: string; sent?: boolean }) {
  return (
    <div className="mt-2 rounded-lg border border-line bg-surface px-3 py-2.5">
      <p className="font-mono text-[11px] text-neutral-500">{label}</p>
      <div className="mt-2 flex items-center gap-2">
        {sent ? (
          <span className="flex items-center gap-1.5 rounded-md bg-accent-soft px-2.5 py-1 font-mono text-[11px] font-medium text-accent">
            <Check size={12} strokeWidth={3} /> Approved · sent
          </span>
        ) : (
          <>
            <span className="flex items-center gap-1.5 rounded-md bg-accent px-2.5 py-1 font-mono text-[11px] font-medium text-white">
              <Check size={12} strokeWidth={3} /> Approve
            </span>
            <span className="flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-neutral-500">
              <Pencil size={11} /> Edit
            </span>
          </>
        )}
      </div>
    </div>
  );
}

function MessageRow({ message, delay }: { message: Message; delay: number }) {
  return (
    <div className="msg-in flex gap-2.5" style={{ animationDelay: `${delay}s` }}>
      <Avatar agent={message.agent} />
      <div className="min-w-0 flex-1">
        <p className="flex items-baseline gap-2">
          <span className="font-mono text-[12px] font-semibold" style={{ color: message.agent.color }}>{message.agent.handle}</span>
          <span className="font-mono text-[10px] text-neutral-400">{message.time}</span>
        </p>
        <div className="mt-1 text-[13px] leading-snug text-neutral-700">
          {message.text}
          {message.action ? <ActionCard label={message.action} sent={message.sent} /> : null}
        </div>
      </div>
    </div>
  );
}

export default function SlackDemo() {
  const [active, setActive] = useState(0);
  const scenario = SCENARIOS[active];

  return (
    <div className="slack-demo overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_70px_-30px_rgba(20,40,90,0.35)]">
      <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 flex items-center gap-1 font-mono text-[12px] font-semibold text-neutral-600">
          <Hash size={13} className="text-accent" /> {scenario.channel}
        </span>
        <span className="ml-auto font-mono text-[10px] text-neutral-400">approval on</span>
      </div>

      <div className="flex gap-1 border-b border-line bg-white px-3 py-2" aria-label="Workflow demo scenarios">
        {SCENARIOS.map((item, index) => (
          <button
            key={item.label}
            type="button"
            aria-pressed={active === index}
            onClick={() => setActive(index)}
            className={`rounded-md px-2.5 py-1.5 font-mono text-[10px] transition-colors ${active === index ? "bg-accent text-white" : "text-neutral-400 hover:bg-surface hover:text-neutral-700"}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div key={active} className="space-y-4 px-4 py-5">
        {scenario.messages.map((message, index) => (
          <MessageRow key={`${message.time}-${message.agent.handle}`} message={message} delay={0.1 + index * 0.45} />
        ))}
        <div className="msg-in flex items-center gap-2.5" style={{ animationDelay: "1.6s" }}>
          <Avatar agent={scenario.typing} />
          <span className="flex items-center gap-1.5 font-mono text-[12px] text-neutral-400">
            {scenario.typing.handle} is tracking follow-through
            <span className="flex gap-0.5">
              {[0, 0.3, 0.6].map((delay) => <span key={delay} className="pulse-dot h-1 w-1 rounded-full bg-neutral-400" style={{ animationDelay: `${delay}s` }} />)}
            </span>
          </span>
        </div>
      </div>

      <div className="border-t border-line px-4 py-3">
        <div className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 font-mono text-[12px] text-neutral-400">
          <span className="text-accent">›</span>
          <span>@SoloTeam {scenario.prompt}</span>
          <span className="cursor-blink ml-0.5 text-accent">▍</span>
        </div>
      </div>
    </div>
  );
}
