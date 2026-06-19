import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Leaf,
  Sparkles,
  ShieldCheck,
  MapPin,
  HeartHandshake,
  FlaskConical,
  ArrowRight,
  Quote,
  MessageCircle,
} from "lucide-react";
import hero from "@/assets/hero-flour.jpeg";
import bowl from "@/assets/flour-bowl.jpeg";
import field from "@/assets/cassava-field.jpeg";
import family from "@/assets/family-kitchen.jpeg";
import farmer from "@/assets/farmer.jpeg";
import peeling from "@/assets/peeling.jpeg";
import drying from "@/assets/drying.jpeg";
import grinding from "@/assets/grinding.jpeg";
import team from "@/assets/team-packaging.jpeg";
import pastries from "@/assets/pastries.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Will's Cassava Flour — Pure. Natural. Healthy." },
      {
        name: "description",
        content:
          "Premium chemical-free cassava flour from Rwanda. Gluten-free, nutrient-rich, and hygienically processed for families and businesses.",
      },
      { property: "og:title", content: "Will's Cassava Flour" },
      { property: "og:description", content: "Pure. Natural. Healthy Cassava Flour from Rwanda." },
    ],
  }),
  component: HomePage,
});

const features = [
  {
    icon: Leaf,
    title: "Gluten Free",
    text: "Naturally free of gluten — gentle on digestion and friendly for every diet.",
  },
  {
    icon: Sparkles,
    title: "100% Natural",
    text: "No additives. No bleaching. Just the goodness of the cassava root.",
  },
  {
    icon: HeartHandshake,
    title: "Rich in Nutrients",
    text: "A wholesome source of carbohydrates, fibre and resistant starch.",
  },
  {
    icon: FlaskConical,
    title: "No Chemicals",
    text: "Processed using clean water and traditional methods — never harsh chemicals.",
  },
  {
    icon: MapPin,
    title: "Locally Produced",
    text: "Grown and milled in Africa, supporting local farmers and communities.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienically Processed",
    text: "Every batch passes through a clean, food-safe production line.",
  },
];

const steps = [
  {
    n: "01",
    title: "Harvesting",
    img: farmer,
    text: "Mature cassava roots are hand-harvested from trusted farms.",
  },
  {
    n: "02",
    title: "Peeling",
    img: peeling,
    text: "Roots are carefully peeled to keep only the pure white flesh.",
  },
  {
    n: "03",
    title: "Soaking",
    img: bowl,
    text: "Soaked in clean water to remove natural compounds and impurities.",
  },
  {
    n: "04",
    title: "Drying",
    img: drying,
    text: "Sun-dried on raised racks until perfectly crisp and ready.",
  },
  {
    n: "05",
    title: "Grinding",
    img: grinding,
    text: "Stone-milled into the soft, silky flour our customers love.",
  },
  {
    n: "06",
    title: "Packaging",
    img: team,
    text: "Sealed in food-safe bags for freshness from our mill to your kitchen.",
  },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary/30">
        <div className="container-x grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-accent" /> Rwanda • Est.2025{" "}
            </span>
            <h1 className="mt-5 text-balance text-5xl leading-[1.05] md:text-7xl">
              Pure. Natural.
              <br />
              <span className="italic text-accent">Healthy</span> cassava flour.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              100% Chemical-Free Cassava Flour — Bringing the Natural Goodness of African Cassava to
              Every Kitchen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-bark"
              >
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center rounded-full border border-primary/20 bg-background px-6 py-3 text-sm font-medium text-primary hover:border-primary/40"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-leaf-soft px-6 py-3 text-sm font-medium text-primary hover:bg-leaf/20"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
              <div>
                <p className="font-serif text-2xl text-primary">100%</p>
                <p className="text-muted-foreground">Chemical free</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-primary">6-step</p>
                <p className="text-muted-foreground">Pure process</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-primary">3 sizes</p>
                <p className="text-muted-foreground">For every need</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-cassava/40 blur-2xl" />
            <img
              src={hero}
              alt="Bag of Will's Cassava Flour with cassava roots"
              width={1600}
              height={1200}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl shadow-primary/10"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background p-4 shadow-xl md:block">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Loved by</p>
              <p className="font-serif text-2xl text-primary">2,400+ families</p>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND INTRO */}
      <section className="container-x py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img
            src={field}
            alt="Lush cassava field in Rwanda"
            width={1600}
            height={900}
            loading="lazy"
            className="aspect-[5/4] w-full rounded-3xl object-cover"
          />
          <div>
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-4 text-4xl md:text-5xl">
              A small mill with a <span className="italic text-accent">big mission</span>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Will&rsquo;s Cassava Flour was born from a simple idea: families deserve flour they
              can trust. We work closely with African cassava farmers and cooperatives, ensuring
              every batch is produced with care, quality, and sustainability at its heart.
            </p>
            <p className="mt-3 text-muted-foreground">
              Beyond producing premium cassava flour, we are committed to creating opportunities for
              women in agriculture. We proudly partner with women farmers and women-led cooperatives,
              providing reliable markets for their cassava and helping strengthen livelihoods across
              rural communities.
            </p>
            <p className="mt-3 text-muted-foreground">
              Our mission is to bring healthy, natural, and premium cassava flour to kitchens and
              bakeries across Africa and beyond, while empowering African women farmers through
              inclusive and sustainable agricultural partnerships.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
            >
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHTS */}
      <section className="bg-cream/60 py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Featured</span>
              <h2 className="mt-3 text-4xl md:text-5xl">Crafted for every kitchen.</h2>
            </div>
            <Link to="/products" className="text-sm font-medium text-accent hover:underline">
              View all products →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                img: bowl,
                title: "Pure White Flour",
                text: "Silky, fine-milled and ready to bake.",
              },
              {
                img: hero,
                title: "Family Packaging",
                text: "Premium 2kg kraft packs — pure cassava flour.",
              },
              {
                img: pastries,
                title: "Endless Recipes",
                text: "From ugali to pastries, breads and beyond.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="group overflow-hidden rounded-3xl bg-background shadow-sm ring-1 ring-border"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container-x py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why choose us</span>
          <h2 className="mt-3 text-4xl md:text-5xl">
            Six reasons families <span className="italic text-accent">trust</span> us.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-leaf-soft text-leaf">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <span className="eyebrow">Our process</span>
              <h2 className="mt-3 text-4xl md:text-5xl">
                From root to flour — in <span className="italic text-accent">six honest steps</span>
                .
              </h2>
            </div>
            <Link to="/process" className="text-sm font-medium text-accent hover:underline">
              See the full process →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.slice(0, 6).map((s) => (
              <div
                key={s.n}
                className="overflow-hidden rounded-2xl bg-background ring-1 ring-border"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-widest text-accent">
                    Step {s.n}
                  </p>
                  <h3 className="mt-1 text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Voices we love</span>
          <h2 className="mt-3 text-4xl md:text-5xl">What our customers say.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              q: "The texture is incredible — my bread turns out soft every time.",
              a: "Aline, Kigali",
            },
            {
              q: "Finally a gluten-free flour my whole family enjoys without compromise.",
              a: "Joseph, Musanze",
            },
            {
              q: "We&rsquo;ve switched our entire bakery to Will&rsquo;s. The quality is unmatched.",
              a: "Chef Marie, Nyamirambo",
            },
          ].map((t, i) => (
            <figure key={i} className="rounded-3xl border border-border bg-background p-7">
              <Quote className="h-6 w-6 text-leaf" />
              <blockquote
                className="mt-3 text-foreground"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${t.q}&rdquo;` }}
              />
              <figcaption className="mt-4 text-sm text-muted-foreground">— {t.a}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="container-x pb-20 md:pb-28">
        <div className="grid gap-3 md:grid-cols-4">
          {[family, field, team, pastries].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className={`w-full rounded-2xl object-cover ${i % 2 ? "aspect-[3/4]" : "aspect-square"}`}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center text-primary-foreground md:px-16 md:py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-cassava">Order today</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-4xl text-primary-foreground md:text-6xl">
            Healthy flour for <span className="italic text-cassava">healthy families.</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-cassava px-6 py-3 text-sm font-medium text-primary hover:bg-cassava-deep"
            >
              Order Today <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/250793017746?text=${encodeURIComponent(
                "Hello Will's Cassava Flour! 👋 I'd like to place an order for cassava flour. Could you share the available pack sizes and prices?",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cassava/40 px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-cassava/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
