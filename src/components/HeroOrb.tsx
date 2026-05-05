export function HeroOrb() {
  return (
    <div className="relative mx-auto mt-16 h-[420px] w-full max-w-5xl">
      {/* outer glow */}
      <div className="absolute left-1/2 top-1/2 h-[340px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.7_0.25_295/0.55),transparent_65%)] blur-2xl" />
      {/* ring */}
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 glow-ring" />
      {/* core */}
      <div className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full glow-orb" />
      {/* inner dark hole */}
      <div className="absolute left-1/2 top-1/2 h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-background shadow-[inset_0_0_30px_oklch(0_0_0)]" />
      {/* particles */}
      {[...Array(40)].map((_, i) => (
        <span
          key={i}
          className="absolute h-px w-px rounded-full bg-white/70"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            opacity: 0.3 + Math.random() * 0.7,
            boxShadow: "0 0 4px white",
          }}
        />
      ))}

      {/* mock client window */}
      <div className="absolute bottom-0 left-1/2 w-[92%] max-w-3xl -translate-x-1/2 translate-y-10 rounded-2xl border border-border bg-card/70 p-3 backdrop-blur-xl shadow-[0_30px_80px_-20px_oklch(0.5_0.25_295/0.4)]">
        <div className="flex items-center justify-between rounded-xl bg-background/60 px-4 py-2.5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
            Search modules…
          </div>
          <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
            <span className="rounded border border-border px-1.5 py-0.5">⌘K</span>
            <span>April 2026</span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-muted-foreground">
          {["Sprint", "Reach", "Combo", "ESP", "FPS Boost", "ClickGUI"].map((m) => (
            <div key={m} className="flex items-center justify-between rounded-lg border border-border bg-background/40 px-3 py-2">
              <span className="text-foreground/90">{m}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_oklch(0.68_0.25_295)]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
