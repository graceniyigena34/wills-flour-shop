import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
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
import farmer from "@/assets/farmer.jpeg";
import peeling from "@/assets/peeling.jpeg";
import drying from "@/assets/drying.jpeg";
import grinding from "@/assets/grinding.jpeg";
import packaging from "@/assets/packaging process.jpeg";
import pastries from "@/assets/pastries.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Will's Cassava Flour Pure Natural Healthy" },
      {
        name: "description",
        content:
          "Premium chemical free cassava flour from Rwanda. Gluten-free, nutrient-rich, and hygienically processed for families and businesses.",
      },
      { property: "og:title", content: "Will's Cassava Flour" },
      { property: "og:description", content: "Pure Natural Healthy Cassava Flour from Rwanda" },
    ],
  }),
  component: HomePage,
});


function HomePage() {
  const { t } = useLanguage();
  const h = t.home;

  const features = [
    { icon: Leaf, title: h.feat1Title, text: h.feat1Text },
    { icon: Sparkles, title: h.feat2Title, text: h.feat2Text },
    { icon: HeartHandshake, title: h.feat3Title, text: h.feat3Text },
    { icon: FlaskConical, title: h.feat4Title, text: h.feat4Text },
    { icon: MapPin, title: h.feat5Title, text: h.feat5Text },
    { icon: ShieldCheck, title: h.feat6Title, text: h.feat6Text },
  ];

  const steps = [
    { n: "01", title: h.step1Title, img: farmer, text: h.step1Text },
    { n: "02", title: h.step2Title, img: peeling, text: h.step2Text },
    { n: "03", title: h.step3Title, img: bowl, text: h.step3Text },
    { n: "04", title: h.step4Title, img: drying, text: h.step4Text },
    { n: "05", title: h.step5Title, img: grinding, text: h.step5Text },
    { n: "06", title: h.step6Title, img: packaging, text: h.step6Text },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary/30">
        <div className="container-x grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-accent" /> {h.eyebrow}{" "}
            </span>
            <h1 className="mt-5 text-balance text-5xl leading-[1.05] md:text-7xl">
              {h.h1a}
              <br />
              <span className="italic text-accent">{h.h1b}</span> {h.h1c}
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">{h.sub}</p>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
              <div>
                <p className="font-serif text-2xl text-primary">100%</p>
                <p className="text-muted-foreground">{h.stat1}</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-primary">6-step</p>
                <p className="text-muted-foreground">{h.stat2}</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-primary">3 sizes</p>
                <p className="text-muted-foreground">{h.stat3}</p>
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
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{h.lovedBy}</p>
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
            <span className="eyebrow">{h.ourStory}</span>
            <h2 className="mt-4 text-4xl md:text-5xl">
              {h.missionTitle} <span className="italic text-accent">{h.missionItalic}</span>
            </h2>
            <p className="mt-5 text-muted-foreground">{h.storyP1}</p>
            <p className="mt-3 text-muted-foreground">{h.storyP2}</p>
            <p className="mt-3 text-muted-foreground">{h.storyP3}</p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
            >
              {h.readStory} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHTS */}
      <section className="bg-cream/60 py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">{h.featured}</span>
              <h2 className="mt-3 text-4xl md:text-5xl">{h.craftedTitle}</h2>
            </div>
            <Link to="/products" className="text-sm font-medium text-accent hover:underline">
              {h.viewAll}
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { img: bowl,     title: h.prod1Title, text: h.prod1Text },
              { img: hero,     title: h.prod2Title, text: h.prod2Text },
              { img: pastries, title: h.prod3Title, text: h.prod3Text },
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
          <span className="eyebrow">{h.whyEyebrow}</span>
          <h2 className="mt-3 text-4xl md:text-5xl">
            {h.whyTitle} <span className="italic text-accent">{h.whyItalic}</span> {h.whyEnd}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
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
              <span className="eyebrow">{h.processEyebrow}</span>
              <h2 className="mt-3 text-4xl md:text-5xl">
                {h.processTitle} <span className="italic text-accent">{h.processItalic}</span>
              </h2>
            </div>
            <Link to="/process" className="text-sm font-medium text-accent hover:underline">
              {h.seeProcess}
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
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
                    {h.stepLabel} {s.n}
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
          <span className="eyebrow">{h.voicesEyebrow}</span>
          <h2 className="mt-3 text-4xl md:text-5xl">{h.voicesTitle}</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { q: h.test1Q, a: h.test1A },
            { q: h.test2Q, a: h.test2A },
            { q: h.test3Q, a: h.test3A },
          ].map((testimonial, i) => (
            <figure key={i} className="rounded-3xl border border-border bg-background p-7">
              <Quote className="h-6 w-6 text-leaf" />
              <blockquote className="mt-3 text-foreground">&ldquo;{testimonial.q}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">— {testimonial.a}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="container-x pb-20 md:pb-28">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[field, farmer, packaging, pastries].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center text-primary-foreground md:px-16 md:py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-cassava">{h.orderEyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-4xl text-primary-foreground md:text-6xl">
            {h.ctaTitle} <span className="italic text-cassava">{h.ctaItalic}</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-cassava px-6 py-3 text-sm font-medium text-primary hover:bg-cassava-deep"
            >
              {h.orderBtn} <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/+250785704109?text=${encodeURIComponent(
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
