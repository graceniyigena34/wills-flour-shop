import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import packages from "@/assets/hero-flour.jpeg";
import pastries from "@/assets/pastries.jpg";
import bowl from "@/assets/flour-bowl.jpeg";

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

const products = [
  {
    size: "1kg",
    title: "Family Pack",
    price: "Best for",
    desc: "Small family package — ideal for everyday cooking and trial use.",
    best: ["1–3 person households", "Weekly baking", "First-time customers"],
  },
  {
    size: "2kg",
    title: "Household Pack",
    price: "Most loved",
    desc: "Medium household package — our most popular size for regular families.",
    best: ["4–6 person households", "Frequent baking", "Best value per gram"],
    featured: true,
  },
  {
    size: "5kg",
    title: "Restaurant Pack",
    price: "For pros",
    desc: "Large package designed for restaurants, bakeries and small businesses.",
    best: ["Bakeries & cafés", "Catering", "Bulk users"],
  },
];

function ProductsPage() {
  return (
    <div>
      <section className="container-x py-20 md:py-28">
        <span className="eyebrow">Products</span>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">
          A size for <span className="italic text-accent">every kitchen</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Whether you bake weekly at home or run a busy bakery, we&rsquo;ve got the right pack of
          pure cassava flour for you.
        </p>
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
          {products.map((p) => (
            <div
              key={p.size}
              className={`flex flex-col rounded-3xl border p-8 ${p.featured ? "border-accent bg-leaf-soft/40 shadow-xl shadow-accent/10" : "border-border bg-background"}`}
            >
              {p.featured && (
                <span className="self-start rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  Most popular
                </span>
              )}
              <p className="mt-4 text-xs uppercase tracking-widest text-accent">{p.price}</p>
              <h3 className="mt-2 font-serif text-5xl text-primary">{p.size}</h3>
              <p className="mt-1 text-lg text-foreground">{p.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {p.best.map((b) => (
                  <li key={b} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-leaf" /> {b}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/250793017746?text=${encodeURIComponent(
                  `Hello Will's Cassava Flour! 👋 I'd like to order the ${p.size} ${p.title} of cassava flour. Is it available?`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-bark"
              >
                Order on WhatsApp <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="eyebrow">How to use</span>
            <h2 className="mt-3 text-4xl md:text-5xl">
              Endless ways to <span className="italic text-accent">cook & bake</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cassava flour is wonderfully versatile. Substitute it for wheat in traditional and
              modern recipes alike — from comfort foods to elegant pastries.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { name: "Ugali", text: "Classic stiff porridge, smooth and satisfying." },
                { name: "Pastries & rolls", text: "Light, golden bakes the whole family loves." },
                { name: "Pancakes", text: "Fluffy, naturally gluten-free breakfasts." },
                { name: "Thickener", text: "Perfect for stews, sauces and soups." },
              ].map((u) => (
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
              <h2 className="text-3xl md:text-4xl">Become a distributor.</h2>
              <p className="mt-3 text-muted-foreground">
                Supermarkets, shops and resellers — partner with us to bring Will&rsquo;s Cassava
                Flour to more kitchens.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-bark"
            >
              Start a partnership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
