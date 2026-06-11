// A modern 24" iMac, built from scratch in CSS/JSX — not a borrowed photo. Green to match
// the brand. The screen runs "agencyOS": a clean desktop with the agent team at work.

function Dot({ c }: { c: string }) {
  return <span className="h-[6px] w-[6px] rounded-full" style={{ background: c }} />;
}

export default function IMac() {
  return (
    <div className="mx-auto w-full max-w-[560px] [perspective:1600px]">
      {/* ── display unit ── */}
      <div
        className="relative rounded-[26px] p-[13px] pb-[52px] shadow-[0_30px_60px_-15px_rgba(16,40,30,0.28),0_8px_20px_-8px_rgba(0,0,0,0.15)]"
        style={{ background: "linear-gradient(180deg,#fdfdfd,#f4f5f4)" }}
      >
        {/* the screen */}
        <div className="relative aspect-[16/9.6] overflow-hidden rounded-[12px] bg-black ring-1 ring-black/30">
          {/* wallpaper */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 90% at 20% 0%, #d6f3e3 0%, #a9e7cf 35%, #7fd9c4 60%, #6fb9d6 100%)",
            }}
          />
          {/* screen sheen */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent" />

          {/* menu bar */}
          <div className="relative flex items-center justify-between bg-white/55 px-2.5 py-1 backdrop-blur-md">
            <div className="flex items-center gap-2 font-mono text-[7px] text-neutral-800 sm:text-[8px]">
              <span className="text-[8px] font-bold text-[#0a8f57]">◆</span>
              <span className="font-semibold">SoloTeam</span>
              <span className="hidden text-neutral-500 sm:inline">File</span>
              <span className="hidden text-neutral-500 sm:inline">Edit</span>
              <span className="hidden text-neutral-500 sm:inline">Team</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[7px] text-neutral-700 sm:text-[8px]">
              <span>􀙇</span>
              <span>9:41</span>
            </div>
          </div>

          {/* desktop window — the #hq thread */}
          <div className="absolute left-1/2 top-[20%] w-[68%] -translate-x-1/2 overflow-hidden rounded-[8px] bg-white/90 shadow-[0_12px_30px_rgba(20,50,40,0.25)] backdrop-blur">
            <div className="flex items-center gap-1.5 border-b border-black/5 bg-white/70 px-2.5 py-1.5">
              <Dot c="#ff5f57" />
              <Dot c="#febc2e" />
              <Dot c="#28c840" />
              <span className="ml-1.5 font-mono text-[7px] text-neutral-500 sm:text-[8px]"># hq</span>
            </div>
            <div className="space-y-2 px-3 py-2.5">
              <Row who="@marketing" tone="#0a8f57" text="Launch thread drafted — 9 posts." approve />
              <Row who="@ops" tone="#2563eb" text="Vendor booked for Thursday." approve />
              <Row who="@support" tone="#7c3aed" text="3 replies ready in your voice." approve />
            </div>
          </div>

          {/* dock */}
          <div className="absolute bottom-1.5 left-1/2 flex -translate-x-1/2 items-end gap-1.5 rounded-[10px] bg-white/35 px-2 py-1 backdrop-blur-md">
            {["#0a8f57", "#2563eb", "#7c3aed", "#e0892b", "#0891b2"].map((c, i) => (
              <span
                key={i}
                className="h-3.5 w-3.5 rounded-[5px] shadow-sm sm:h-4 sm:w-4"
                style={{ background: `linear-gradient(160deg, ${c}, ${c}cc)` }}
              />
            ))}
          </div>
        </div>

        {/* chin */}
        <div
          className="absolute inset-x-0 bottom-0 flex h-[40px] items-center justify-center rounded-b-[26px]"
          style={{ background: "linear-gradient(180deg,#bfe9d3,#a7ddc4)" }}
        >
          <span className="font-mono text-[10px] font-semibold tracking-tight text-[#0a8f57]/80">
            Solo<span className="text-[#0a8f57]">Team</span>
          </span>
        </div>
      </div>

      {/* ── stand ── */}
      <div
        className="mx-auto h-[26px] w-[120px] rounded-b-[3px]"
        style={{ background: "linear-gradient(180deg,#e6e7e6,#c7cac8)" }}
      />
      <div
        className="mx-auto h-[8px] w-[240px] rounded-[5px]"
        style={{ background: "linear-gradient(180deg,#d3d6d4,#b4b8b6)" }}
      />
      {/* contact shadow */}
      <div className="mx-auto mt-2 h-5 w-[300px] rounded-[50%] bg-black/15 blur-xl" />
    </div>
  );
}

function Row({
  who,
  tone,
  text,
  approve,
}: {
  who: string;
  tone: string;
  text: string;
  approve?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 flex-none rounded-full sm:h-3.5 sm:w-3.5" style={{ background: tone }} />
      <div className="min-w-0 flex-1">
        <p className="truncate font-mono text-[7px] sm:text-[8px]">
          <span className="font-semibold" style={{ color: tone }}>{who}</span>{" "}
          <span className="text-neutral-600">{text}</span>
        </p>
      </div>
      {approve && (
        <span className="flex-none rounded-[3px] bg-[#0a8f57] px-1.5 py-[1px] font-mono text-[6px] font-semibold text-white sm:text-[7px]">
          approve
        </span>
      )}
    </div>
  );
}
