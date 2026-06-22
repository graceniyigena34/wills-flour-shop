import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import packages from "@/assets/hero-flour.jpeg";
import pastries from "@/assets/pastries.jpeg";
import bowl from "@/assets/flour-bowl.jpeg";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Will's Cassava Flour" },
      {
        name: "description",
        content:
          "Choose from 1kg family, 2kg household, and 5kg restaurant packs of premium cassava flour.",
      },
      { property: "og:title", content: "Will's Cassava Flour Products" },
      { property: "og:description", content: "1kg, 2kg and 5kg packages for every kitchen." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { t } = useLanguage();
  const p = t.products;

  const products = [
    {
      size: "1kg",
      badge: p.p1Badge,
      title: p.p1Title,
      desc: p.p1Desc,
      best: [p.p1b1, p.p1b2, p.p1b3],
    },
    {
      size: "2kg",
      badge: p.p2Badge,
      title: p.p2Title,
      desc: p.p2Desc,
      best: [p.p2b1, p.p2b2, p.p2b3],
      featured: true,
    },
    {
      size: "5kg",
      badge: p.p3Badge,
      title: p.p3Title,
      desc: p.p3Desc,
      best: [p.p3b1, p.p3b2, p.p3b3],
    },
  ];

  const uses = [
    { name: p.use1Name, text: p.use1Text },
    { name: p.use2Name, text: p.use2Text },
    { name: p.use3Name, text: p.use3Text },
    { name: p.use4Name, text: p.use4Text },
  ];

  return (
    <div>
      <section className="container-x py-20 md:py-28">
        <span className="eyebrow">{p.eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">
          {p.h1a} <span className="italic text-accent">{p.h1italic}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{p.intro}</p>
      </section>

      <section className="container-x">
        <img
          src={packages}
          alt="Will's Cassava Flour 2kg packages"
          loading="lazy"
          className="aspect-[16/9] w-full rounded-3xl bg-cream object-contain"
        />
      </section>

      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((prod) => (
            <div
              key={prod.size}
              className={`flex flex-col rounded-3xl border p-8 ${prod.featured ? "border-accent bg-leaf-soft/40 shadow-xl shadow-accent/10" : "border-border bg-background"}`}
            >
              {prod.featured && (
                <span className="self-start rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {p.mostPopular}
                </span>
              )}
              <p className="mt-4 text-xs uppercase tracking-widest text-accent">{prod.badge}</p>
              <h3 className="mt-2 font-serif text-5xl text-primary">{prod.size}</h3>
              <p className="mt-1 text-lg text-foreground">{prod.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">{prod.desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {prod.best.map((b) => (
                  <li key={b} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-leaf" /> {b}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/+250793017746?text=${encodeURIComponent(
                  `Hello Will's Cassava Flour! 👋 I'd like to order the ${prod.size} ${prod.title} of cassava flour. Is it available?`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-bark"
              >
                {p.orderBtn} <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="eyebrow">{p.howEyebrow}</span>
            <h2 className="mt-3 text-4xl md:text-5xl">
              {p.howTitle} <span className="italic text-accent">{p.howItalic}</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">{p.howText}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {uses.map((u) => (
                <div key={u.name} className="rounded-2xl border border-border bg-background p-4">
                  <p className="font-serif text-lg text-primary">{u.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{u.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            <img
              src={pastries}
              alt="Golden pastries made with cassava flour"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
            <img
              src={bowl}
              alt="Cassava flour in a wooden bowl"
              loading="lazy"
              className="aspect-[16/9] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* DISTRIBUTOR CTA */}
      <section className="container-x py-20">
        <div className="rounded-[2rem] border border-border bg-cream p-10 md:p-14">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl">{p.distTitle}</h2>
              <p className="mt-3 text-muted-foreground">{p.distText}</p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-bark"
            >
              {p.distBtn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
