import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/Logo.jpeg";
import { useLanguage, Lang } from "@/lib/i18n";

const languages: { code: Lang; label: string; full: string }[] = [
  { code: "en", label: "EN", full: "English" },
  { code: "rw", label: "RW", full: "Kinyarwanda" },
  { code: "sw", label: "SW", full: "Swahili" },
];

const navKeys = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/process", key: "process" },
  { to: "/products", key: "products" },
  { to: "/gallery", key: "gallery" },
  { to: "/faq", key: "faq" },
  { to: "/contact", key: "contact" },
] as const;

function LangDropdown() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = languages.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Switch language"
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background shadow-sm transition-colors hover:bg-leaf-soft"
      >
        <Globe className="h-4 w-4 text-primary" />
        <span className="sr-only">{current.full}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 min-w-[140px] overflow-hidden rounded-2xl border border-border bg-background shadow-lg">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-leaf-soft ${
                lang === l.code ? "font-semibold text-primary" : "text-foreground/70"
              }`}
            >
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                lang === l.code ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/60"
              }`}>
                {l.label}
              </span>
              {l.full}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-x flex h-24 items-center justify-between">
        <Link
          to="/"
          className="flex items-center text-primary"
          aria-label="Will's Cassava Flour — home"
        >
          <img src={logo} alt="Will's Cassava Flour" className="h-20 w-auto object-contain" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navKeys.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/70 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {t.nav[n.key]}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <LangDropdown />
          <Link
            to="/products"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-bark"
          >
            {t.nav.shopNow}
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-primary md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="container-x flex flex-col py-3">
            {navKeys.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-foreground/80"
                activeProps={{ className: "text-primary font-medium" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {t.nav[n.key]}
              </Link>
            ))}
            <div className="mt-3 flex gap-2 border-t border-border/60 pt-3">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setOpen(false); }}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    lang === l.code
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-foreground/60 hover:text-primary"
                  }`}
                >
                  {l.full}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
