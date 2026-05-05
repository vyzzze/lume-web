import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.readyState >= 2) setLoaded(true);
    const onReady = () => setLoaded(true);
    v.addEventListener("loadeddata", onReady);
    return () => v.removeEventListener("loadeddata", onReady);
  }, []);

  return (
    <footer className="w-full mt-5">
      {/* 1. ORB CONTAINER */}
      <div className="relative h-[520px] w-screen w-max-none z-0 left-1/2 -translate-x-1/2 overflow-hidden">
        <video
          ref={videoRef}
          src="/hero.webm"
          autoPlay
          muted
          loop
          playsInline
          style={{ mixBlendMode: "screen" }}
          className={`
            absolute bottom-[-540px] left-1/2 w-screen max-w-none -translate-x-1/2 
            transition-opacity duration-[1400ms] ease-out
            ${loaded ? "opacity-100" : "opacity-0"
          } [mask-image:linear-gradient(to_top,black_0%,black_70%,transparent_100%)]`}
        />
      </div>

      {/* 2. THE FOOTER LINE & LINKS (This creates the sharp cut) */}
      <div className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Left: Branding */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_10px_oklch(0.68_0.25_295)]"></span>
            </div>
            <span className="text-sm font-medium tracking-tight text-white">
              Lume <span className="ml-1 text-white/40 font-normal">© 2026</span>
            </span>
          </div>

          {/* Right: Navigation */}
          <nav className="flex items-center gap-x-8 text-[13px] font-medium text-white/60">
            <Link to="/features" className="transition-colors hover:text-white">Features</Link>
            <Link to="/download" className="transition-colors hover:text-white">Download</Link>
            <a href="#" className="transition-colors hover:text-white">Discord</a>
            <a href="#" className="transition-colors hover:text-white">Changelog</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}