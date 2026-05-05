## Lume — Minecraft PvP Client Landing Site

A dark, purple-glow marketing site for "Lume", inspired by Reflect's hero composition. (IT IS NOT A CHEAT CLIENT)

### Pages

- **/** — Hero landing
- **/features** — Feature showcase
- **/download** — Download options

### Shared

- **Navbar** (sticky, pill-shaped center nav): Lume logo (with glowing orb mark), links: Features, Download, Market, Discord, Changelog. Right side: "Login" + "Download" CTA button.
- **Footer**: Minimal — logo, small nav, copyright, social icons.

### Landing (/)

- Pill badge: "✦ New: 1.21.11 support"
- H1: **"Illuminate your performance."**
- Sub: "The fastest, cleanest Minecraft PvP client. Built for Crystal, Mace, Sword and Axe PvP."
- CTA buttons: "Download for free" (primary purple) + "View features" (ghost)
- Hero visual: glowing purple orb/portal (radial gradient + blur, layered with subtle particles) — replicates the black-hole glow from the reference, with a mock client UI window peeking up from the bottom (search bar styled as Lume's in-game module menu showing "ClickGUI", modules like Sprint, Reach, KillAura listed).
- Logo strip: "Trusted by 5,000+ Players and 10+ Servers" with fake server logos (Hypixel-style logos of Hypixel, DonutSMP, HugoSMP, PVPClub, etc).
- Feature teaser strip (3 cards): Performance, Customization, Safety.

### /features

- Grid of 6 features with icons + glow accents:
  - **Combat** — ComboCounter, Client based HitReg, No Distractions 
  - **Visual** — Clean, Responsive Menus and a smooth user interface
  - **Performance** — FPS boost, optimized for low-end PCs, Sodium integrated
  - **Mod Support** — add your own mods (we are not responsible for any bans or such because of custom mods that are not affiliated with the client), customize your themes ("your in control")
- Alternating feature rows with mock screenshots (CSS-rendered panels).

### /download

- Three OS cards: Windows, macOS, Linux — each with download button (placeholder #), version, file size, system requirements.
- Installation steps (3-step visual guide).
- Supported Minecraft versions list.

### Visual style

- Background: near-black (`oklch(0.12 0.02 280)`), subtle radial purple gradient.
- Primary: vivid purple (`oklch(0.65 0.25 295)`), glow via box-shadow + blur.
- Pill-shaped buttons and nav, soft borders (`white/10`), backdrop blur.
- Inter font, large tight-tracked headline.
- Glow orb: stacked radial gradients + `blur-3xl`, no external images needed.

### Technical notes

- Routes: `src/routes/index.tsx`, `src/routes/features.tsx`, `src/routes/download.tsx`.
- Shared `Navbar` and `Footer` components in `src/components/`.
- Update `src/styles.css` `:root` to dark-by-default purple palette (or apply `dark` class on root).
- Update `__root.tsx` head meta (title: "Lume — Minecraft PvP Client").
- All "Download" links are `#` placeholders.