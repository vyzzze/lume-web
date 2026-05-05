export function HeroOrb() {
  return (
    <div className="relative mx-auto mt-20 h-[480px] w-full max-w-5xl overflow-hidden">
      {/* ambient bloom behind everything */}
      <div className="absolute left-1/2 top-[42%] h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.28_295/0.55),oklch(0.4_0.25_290/0.25)_35%,transparent_70%)] blur-3xl" />

      {/* starfield particles */}
      {[...Array(80)].map((_, i) => {
        const size = Math.random() < 0.85 ? 1 : 2;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 85}%`,
              left: `${Math.random() * 100}%`,
              width: size,
              height: size,
              opacity: 0.2 + Math.random() * 0.7,
              boxShadow: "0 0 3px rgba(255,255,255,0.8)",
            }}
          />
        );
      })}

      {/* THE BLACK HOLE — built bottom-up:
          1. wide accretion glow (elliptical, very bright)
          2. thin bright ring
          3. dark event horizon disc
          4. top arc highlight (the bright crown over the hole) */}
      <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2">
        {/* outer accretion bloom — wide ellipse */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
          style={{
            width: 720,
            height: 280,
            background:
              "radial-gradient(ellipse at 50% 50%, oklch(0.92 0.12 300 / 0.9) 0%, oklch(0.7 0.28 295 / 0.7) 18%, oklch(0.5 0.28 290 / 0.45) 38%, transparent 70%)",
            filter: "blur(24px)",
          }}
        />

        {/* mid glow tightening toward the ring */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
          style={{
            width: 460,
            height: 200,
            background:
              "radial-gradient(ellipse at 50% 50%, oklch(0.98 0.08 300 / 1) 0%, oklch(0.75 0.25 298 / 0.85) 25%, oklch(0.55 0.28 290 / 0.5) 55%, transparent 80%)",
            filter: "blur(10px)",
          }}
        />

        {/* the bright thin ring (the photon ring) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 280,
            height: 280,
            border: "2px solid oklch(0.97 0.06 300 / 0.95)",
            boxShadow:
              "0 0 30px 6px oklch(0.85 0.18 300 / 0.9), 0 0 80px 18px oklch(0.65 0.28 295 / 0.7), inset 0 0 40px oklch(0.95 0.1 300 / 0.4)",
          }}
        />

        {/* event horizon — pitch black disc, slightly smaller than the ring */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 252,
            height: 252,
            background:
              "radial-gradient(circle at 50% 45%, oklch(0.05 0 0) 60%, oklch(0.08 0.02 290) 100%)",
            boxShadow: "inset 0 0 60px oklch(0 0 0)",
          }}
        />

        {/* bright crown — extra hot spot on top of the ring */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 rounded-[50%]"
          style={{
            width: 320,
            height: 60,
            marginTop: -160,
            background:
              "radial-gradient(ellipse at 50% 50%, oklch(1 0.05 300 / 0.9), oklch(0.8 0.2 300 / 0.5) 40%, transparent 75%)",
            filter: "blur(8px)",
          }}
        />

        {/* horizontal light streak through the ring — gravitational lensing feel */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 560,
            height: 6,
            background:
              "linear-gradient(90deg, transparent, oklch(0.95 0.1 300 / 0.7) 35%, oklch(1 0.05 300 / 0.9) 50%, oklch(0.95 0.1 300 / 0.7) 65%, transparent)",
            filter: "blur(2px)",
          }}
        />
      </div>

      {/* mock client window peeking up from the bottom */}
      <div className="absolute bottom-0 left-1/2 w-[92%] max-w-3xl -translate-x-1/2 translate-y-12 rounded-2xl border border-border bg-card/70 p-3 backdrop-blur-xl shadow-[0_30px_80px_-20px_oklch(0.5_0.25_295/0.5)]">
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
