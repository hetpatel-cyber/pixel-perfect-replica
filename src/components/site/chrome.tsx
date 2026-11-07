import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Globe, MessageCircle } from "lucide-react";
import { BRAND, NAV, waLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${BRAND.name} home`}>
      <span className="relative grid h-9 w-9 place-items-center">
        <span className="orb absolute inset-0" />
        <span className="relative h-3 w-3 rounded-full bg-primary-foreground" />
      </span>
      <span className={cn("font-display text-xl", light ? "text-ink-foreground" : "text-foreground")}>
        {BRAND.short}<span className="text-gold">.</span>
      </span>
    </Link>
  );
}

export function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (solid) return;
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [solid]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled || open ? "border-b bg-background/90 backdrop-blur-md" : "bg-transparent")}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-primary">Home</Link>
          {NAV.map((n) => (
            <a key={n.href} href={`/${n.href}`} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <label className="hidden items-center gap-1.5 text-sm text-muted-foreground md:flex">
            <Globe className="h-4 w-4" aria-hidden />
            <span className="sr-only">Language</span>
            <select className="bg-transparent outline-none" defaultValue="en" aria-label="Language">
              <option value="en">EN</option><option value="ar">AR</option><option value="fr">FR</option><option value="ru">RU</option>
            </select>
          </label>
          <Link to="/book" className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ink-foreground transition hover:bg-primary sm:inline-flex">Book Consultation</Link>
          <button className="grid h-10 w-10 place-items-center rounded-full border xl:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t bg-background px-5 pb-8 pt-4 xl:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {[{ label: "Home", href: "#top" }, ...NAV].map((n) => (
              <a key={n.href} href={`/${n.href}`} onClick={() => setOpen(false)} className="border-b py-4 font-display text-2xl">{n.label}</a>
            ))}
          </nav>
          <Link to="/book" onClick={() => setOpen(false)} className="mt-6 flex justify-center rounded-full bg-primary py-4 font-semibold text-primary-foreground">Book Consultation</Link>
        </div>
      )}
    </header>
  );
}

export function WhatsAppFab() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-lift transition hover:scale-105">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function Tilt({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className={cn("transition-transform duration-300 will-change-transform", className)}
      onMouseMove={(e) => {
        const el = ref.current; if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
      }}
      onMouseLeave={() => { if (ref.current) ref.current.style.transform = ""; }}>
      {children}
    </div>
  );
}
