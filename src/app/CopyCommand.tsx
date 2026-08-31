"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyCommand({ cmd }: { cmd: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-line bg-surface px-4 py-3">
      <code className="truncate font-mono text-[13px] text-neutral-700">
        <span className="select-none text-accent">$ </span>
        {cmd}
      </code>
      <button
        onClick={() => {
          navigator.clipboard?.writeText(cmd);
          setCopied(true);
          setTimeout(() => setCopied(false), 1400);
        }}
        className="flex-none text-neutral-400 transition-colors hover:text-accent"
        aria-label="copy command"
      >
        {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
      </button>
    </div>
  );
}
