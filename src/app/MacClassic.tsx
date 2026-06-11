/* eslint-disable @next/next/no-img-element */
// Retro Macintosh Classic — smfs.ai-grade hero object. The beige chassis is a real
// photo; the CRT screen is a live System-7 desktop rebuilt in agency. brand, with the
// three "agent" cursors that are literally what we sell.

// classic black Mac pointer (white-outlined), as an inline SVG
function Pointer() {
  return (
    <svg width="13" height="18" viewBox="0 0 13 18" className="drop-shadow-sm">
      <path d="M1 1 L1 14 L4.2 11 L6.4 16 L8.6 15 L6.4 10 L11 10 Z" fill="#000" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

function Cursor({
  label,
  color,
  className,
  style,
}: {
  label: string;
  color: string;
  className: string;
  style: React.CSSProperties;
}) {
  return (
    <div className={`pointer-events-none absolute z-20 ${className}`} style={style}>
      <Pointer />
      <span
        className="ml-2 -mt-1 inline-block rounded-[3px] px-1.5 py-0.5 font-mono text-[9px] font-semibold text-white shadow sm:text-[10px]"
        style={{ background: color }}
      >
        {label}
      </span>
    </div>
  );
}

// one desktop icon (image + label) in the classic top-right column
function DeskIcon({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex w-12 flex-col items-center gap-0.5 sm:w-14">
      <img src={src} alt="" className="h-7 w-7 select-none object-contain drop-shadow-[1px_1px_0_rgba(0,0,0,0.35)] sm:h-8 sm:w-8" />
      <span className="rounded-[1px] bg-[#5c7da3] px-1 font-mono text-[7px] leading-tight text-white sm:text-[8px]">
        {label}
      </span>
    </div>
  );
}

export default function MacClassic() {
  return (
    <div className="relative mx-auto w-full max-w-[440px] select-none">
      {/* the chassis photo */}
      <img
        src="/mac/macintosh.BonSK-15.webp"
        alt="A Macintosh Classic running agency."
        className="block w-full drop-shadow-[0_24px_45px_rgba(0,0,0,0.16)]"
        draggable={false}
      />

      {/* ── the live CRT screen ── */}
      <div
        className="mac-desktop absolute overflow-hidden"
        style={{ left: "14%", top: "13.8%", width: "71.6%", height: "39.7%" }}
      >
        {/* System 7 menu bar */}
        <div className="flex h-[12%] items-center justify-between bg-neutral-50 px-1.5 font-mono text-[6px] text-neutral-900 sm:text-[7px]">
          <div className="flex items-center gap-1.5">
            <span></span>
            <span className="font-bold">Finder</span>
            <span>File</span>
            <span className="hidden sm:inline">Edit</span>
            <span className="hidden sm:inline">View</span>
            <span className="hidden sm:inline">Special</span>
          </div>
          <span>10:24</span>
        </div>

        {/* desktop icons, classic top-right stack */}
        <div className="absolute right-1 top-[16%] flex flex-col items-end gap-2">
          <DeskIcon src="/mac/macintosh-hd.CgOnFEB2.webp" label="Company Brief" />
          <DeskIcon src="/mac/memory-disk.BXCNJzHz.webp" label="Shared Memory" />
          <DeskIcon src="/mac/pixel-globe.CUYeWhGA.webp" label="#hq · Slack" />
        </div>

        {/* a classic window listing the roster */}
        <div className="absolute left-[7%] top-[24%] w-[52%] border border-black bg-neutral-50 shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
          <div className="mac-titlebar flex items-center gap-1 border-b border-black px-1 py-[3px]">
            <span className="h-[7px] w-[7px] border border-black bg-neutral-50" />
            <span className="flex-1 bg-neutral-50 px-1 text-center font-mono text-[6px] font-bold text-neutral-900 sm:text-[7px]">
              agents
            </span>
          </div>
          <div className="space-y-[3px] px-1.5 py-1.5 font-mono text-[6px] text-neutral-900 sm:text-[7px]">
            {[
              ["@marketing", "drafting launch thread…"],
              ["@ops", "found vendor slot · Thu"],
              ["@support", "3 replies awaiting you"],
            ].map(([who, what]) => (
              <div key={who} className="flex items-center gap-1">
                <span className="h-[5px] w-[5px] flex-none rounded-full bg-[#1f9d55]" />
                <span className="font-bold">{who}</span>
                <span className="truncate text-neutral-500">{what}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── multiplayer agent cursors, over the chassis ── */}
      <Cursor label="@marketing" color="#1f9d55" className="mac-cur-a" style={{ left: "9%", top: "9%" }} />
      <Cursor label="@ops" color="#d9750a" className="mac-cur-b" style={{ left: "82%", top: "47%" }} />
      <Cursor label="@support" color="#8b5cf6" className="mac-cur-c" style={{ left: "16%", top: "61%" }} />
    </div>
  );
}
