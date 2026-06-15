"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NAV: { group: string; items: { href: string; label: string }[] }[] = [
  {
    group: "Start here",
    items: [
      { href: "/docs", label: "Overview" },
      { href: "/docs/getting-started", label: "Getting started" },
      { href: "/docs/how-it-works", label: "How it works" },
      { href: "/docs/roster", label: "The roster" },
    ],
  },
  {
    group: "Integrations",
    items: [
      { href: "/docs/connecting", label: "Connecting your tools" },
      { href: "/docs/notion", label: "Notion" },
      { href: "/docs/gmail-calendar", label: "Gmail & Calendar" },
      { href: "/docs/outbound", label: "Outbound actions" },
    ],
  },
  {
    group: "Using SoloTeam",
    items: [
      { href: "/docs/commands", label: "Command reference" },
      { href: "/docs/approvals", label: "Approvals" },
      { href: "/docs/memory", label: "Shared memory" },
      { href: "/docs/channels", label: "Channels & privacy" },
      { href: "/docs/proactive", label: "Daily brief" },
    ],
  },
  {
    group: "Reference",
    items: [
      { href: "/docs/troubleshooting", label: "Troubleshooting" },
      { href: "/docs/faq", label: "FAQ" },
      { href: "/docs/pricing", label: "Pricing" },
      { href: "/docs/research", label: "Research behind it" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-24 space-y-6">
      {NAV.map((section) => (
        <div key={section.group}>
          <p className="mb-2.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-neutral-400">{section.group}</p>
          <ul className="space-y-1.5">
            {section.items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block border-l-2 pl-3 font-mono text-[12.5px] transition-colors ${
                      active
                        ? "border-accent text-neutral-900"
                        : "border-transparent text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
