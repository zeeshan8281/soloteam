"use client";

import { useState } from "react";

export default function CopyCommand({ cmd }: { cmd: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex items-center justify-between gap-4 border border-line bg-surface px-4 py-3">
      <code className="truncate font-mono text-[13px] text-neutral-800">
        <span className="select-none text-neutral-400">$ </span>
        {cmd}
        <span className="cursor-blink ml-1 inline-block h-3.5 w-[7px] translate-y-0.5 bg-accent align-middle" />
      </code>
      <button
        onClick={() => {
          navigator.clipboard?.writeText(cmd);
          setCopied(true);
          setTimeout(() => setCopied(false), 1400);
        }}
        className="flex-none font-mono text-[11px] uppercase tracking-widest text-neutral-400 transition-colors hover:text-accent"
      >
        {copied ? "copied" : "copy"}
      </button>
    </div>
  );
}
