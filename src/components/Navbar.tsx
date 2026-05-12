import { Link, NavLink } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 font-semibold text-foreground group">
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-[0_0_20px_oklch(0.68_0.25_295/0.5)] transition-transform group-hover:scale-105">
        <span className="h-2 w-2 rounded-full bg-white/90 shadow-[0_0_10px_white]" />
      </span>
      <span className="tracking-tight text-[15px]">Lume</span>
    </Link>
  );
}

const linkCls = "text-[13px] font-medium text-muted-foreground hover:text-foreground transition-all px-3 py-1.5 rounded-full";
const activeCls = "text-foreground bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]";

export function Navbar() {
  const navLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${linkCls} ${activeCls}` : linkCls;

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/[0.1] bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Logo />

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.05] bg-white/[0.02] p-1 shadow-inner">
          <NavLink to="/" end className={navLink}>Home</NavLink>
          <NavLink to="/features" className={navLink}>Features</NavLink>
          <NavLink to="/download" className={navLink}>Download</NavLink>
          <NavLink to="/market" className={navLink}>Market</NavLink>
          <a href="https://dsc.gg/lume" className={linkCls} target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="#" className={linkCls}>Changelog</a>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden sm:inline text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
            Login
          </Link>
          <Link
            to="/download"
            className="pill px-4 py-1.5 text-sm font-medium text-foreground hover:bg-white/10 transition-colors border-primary/40 shadow-[0_0_20px_oklch(0.68_0.25_295/0.25)]"
          >
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}
