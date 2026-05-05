import { useEffect, useRef, useState } from "react";

export function HeroOrb() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.readyState >= 2) setLoaded(true);
    const onReady = () => setLoaded(true);
    v.addEventListener("loadeddata", onReady);
    v.play().catch(() => {});
    return () => v.removeEventListener("loadeddata", onReady);
  }, []);

  return (
    <div className="relative mx-auto mt-20 h-[640px] w-screen max-w-none left-1/2 -translate-x-1/2">
      {/* full-bleed video background */}
      <video
        ref={videoRef}
        src="/hero.webm"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ mixBlendMode: "screen" }}
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* mock client window centered over the black hole */}
      <div
        className={`absolute left-1/2 top-1/2 w-[92%] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card/40 p-3 backdrop-blur-2xl shadow-[0_30px_80px_-20px_oklch(0.5_0.25_295/0.6)] transition-opacity duration-[1400ms] ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-between rounded-xl bg-background/40 px-4 py-2.5">
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
            <div key={m} className="flex items-center justify-between rounded-lg border border-border bg-background/30 px-3 py-2">
              <span className="text-foreground/90">{m}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_oklch(0.68_0.25_295)]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
