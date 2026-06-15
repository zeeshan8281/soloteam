import Link from "next/link";
import type { ReactNode } from "react";
import { DocsSidebar } from "./sidebar";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex-1">
      <div className="relative mx-auto max-w-6xl">
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

        <div className="grid border-t border-line lg:grid-cols-[230px_1fr]">
          <aside className="hidden border-r border-line px-6 py-12 sm:px-8 lg:block">
            <DocsSidebar />
          </aside>
          <div className="px-6 py-12 sm:px-12 sm:py-16">{children}</div>
        </div>

        <footer className="border-t border-line">
          <div className="px-6 py-10 font-mono text-xs text-neutral-400 sm:px-10">
            © 2026 SoloTeam — built by a solo founder, obviously.
          </div>
        </footer>
      </div>
    </main>
  );
}
