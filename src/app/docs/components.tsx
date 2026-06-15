import Link from "next/link";
import type { ReactNode } from "react";

/* ── Shared docs UI. Plain, readable, consistent with the site. ── */

export const Lead = ({ children }: { children: ReactNode }) => (
  <p className="mb-6 max-w-2xl font-mono text-[14px] leading-relaxed text-neutral-700">{children}</p>
);

export const P = ({ children }: { children: ReactNode }) => (
  <p className="max-w-2xl font-mono text-[13px] leading-[1.75] text-neutral-600">{children}</p>
);

export const H2 = ({ id, children }: { id?: string; children: ReactNode }) => (
  <h2 id={id} className="scroll-mt-24 pt-2 font-mono text-[17px] font-semibold text-neutral-900">
    {children}
  </h2>
);

export const H3 = ({ id, children }: { id?: string; children: ReactNode }) => (
  <h3 id={id} className="scroll-mt-24 font-mono text-[14px] font-semibold text-neutral-900">
    {children}
  </h3>
);

export const Code = ({ children }: { children: ReactNode }) => (
  <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[12px] text-neutral-800">{children}</code>
);

/** A Slack message you'd type, rendered like a chat input. */
export const Cmd = ({ children }: { children: ReactNode }) => (
  <div className="my-2 max-w-2xl border border-line bg-surface px-3.5 py-2.5 font-mono text-[12.5px] text-neutral-800">
    <span className="text-accent">@SoloTeam</span> {children}
  </div>
);

export const Steps = ({ items }: { items: ReactNode[] }) => (
  <ol className="my-2 max-w-2xl space-y-3 font-mono text-[13px] leading-[1.7] text-neutral-600">
    {items.map((it, i) => (
      <li key={i} className="flex gap-3.5">
        <span className="flex-none select-none font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
        <span>{it}</span>
      </li>
    ))}
  </ol>
);

export const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className="my-2 max-w-2xl space-y-2 font-mono text-[13px] leading-[1.7] text-neutral-600">
    {items.map((it, i) => (
      <li key={i} className="flex gap-3">
        <span className="flex-none select-none text-accent">•</span>
        <span>{it}</span>
      </li>
    ))}
  </ul>
);

type Tone = "tip" | "warn" | "info";
const toneStyle: Record<Tone, string> = {
  tip: "border-accent",
  warn: "border-[#c2691d]",
  info: "border-neutral-300",
};
const toneLabel: Record<Tone, string> = {
  tip: "text-accent",
  warn: "text-[#c2691d]",
  info: "text-neutral-500",
};

/** Boxed callout. tone: tip (default) | warn | info. */
export const Callout = ({ tone = "tip", title, children }: { tone?: Tone; title: string; children: ReactNode }) => (
  <div className={`my-4 max-w-2xl border-l-2 ${toneStyle[tone]} bg-surface px-4 py-3`}>
    <p className={`mb-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] ${toneLabel[tone]}`}>{title}</p>
    <div className="space-y-2 font-mono text-[12.5px] leading-[1.7] text-neutral-600">{children}</div>
  </div>
);

/** What you'll see on screen — a described mock, so non-technical readers know they're on track. */
export const Screen = ({ children }: { children: ReactNode }) => (
  <div className="my-3 max-w-2xl border border-dashed border-line bg-[#faf9f6] px-4 py-3">
    <p className="mb-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-neutral-400">What you&apos;ll see</p>
    <div className="font-mono text-[12.5px] leading-[1.7] text-neutral-600">{children}</div>
  </div>
);

/** Two-column reference table (commands, fields, troubleshooting). */
export const Table = ({ head, rows }: { head: [string, string]; rows: [ReactNode, ReactNode][] }) => (
  <div className="my-3 max-w-2xl overflow-hidden border border-line">
    <div className="grid grid-cols-[minmax(160px,260px)_1fr] border-b border-line bg-surface">
      <div className="px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-neutral-500">{head[0]}</div>
      <div className="px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-neutral-500">{head[1]}</div>
    </div>
    {rows.map((r, i) => (
      <div key={i} className={`grid grid-cols-[minmax(160px,260px)_1fr] ${i % 2 ? "bg-surface/40" : ""}`}>
        <div className="px-4 py-2.5 font-mono text-[12.5px] text-accent">{r[0]}</div>
        <div className="px-4 py-2.5 font-mono text-[12.5px] leading-[1.6] text-neutral-600">{r[1]}</div>
      </div>
    ))}
  </div>
);

export const FAQ = ({ items }: { items: [string, ReactNode][] }) => (
  <div className="my-2 max-w-2xl divide-y divide-line border-y border-line">
    {items.map(([q, a], i) => (
      <div key={i} className="py-4">
        <p className="mb-1.5 font-mono text-[13px] font-semibold text-neutral-900">{q}</p>
        <div className="font-mono text-[12.5px] leading-[1.7] text-neutral-600">{a}</div>
      </div>
    ))}
  </div>
);

/** Prev / next footer links between doc pages. */
export const PageNav = ({
  prev,
  next,
}: {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}) => (
  <div className="mt-16 flex max-w-2xl items-stretch justify-between gap-4 border-t border-line pt-6">
    {prev ? (
      <Link href={prev.href} className="group flex-1 border border-line px-4 py-3 hover:border-accent">
        <span className="block font-mono text-[10.5px] uppercase tracking-wider text-neutral-400">← Previous</span>
        <span className="font-mono text-[13px] text-neutral-700 group-hover:text-accent">{prev.label}</span>
      </Link>
    ) : (
      <span className="flex-1" />
    )}
    {next ? (
      <Link href={next.href} className="group flex-1 border border-line px-4 py-3 text-right hover:border-accent">
        <span className="block font-mono text-[10.5px] uppercase tracking-wider text-neutral-400">Next →</span>
        <span className="font-mono text-[13px] text-neutral-700 group-hover:text-accent">{next.label}</span>
      </Link>
    ) : (
      <span className="flex-1" />
    )}
  </div>
);

/** Standard page header. */
export const PageHead = ({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) => (
  <div className="mb-8">
    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-neutral-500">
      <span className="text-accent">/ </span>
      {kicker}
    </p>
    <h1 className="display text-3xl font-semibold text-neutral-900 sm:text-4xl">{title}</h1>
    {children ? <div className="mt-4">{children}</div> : null}
  </div>
);
