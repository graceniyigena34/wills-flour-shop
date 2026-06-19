import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import farmer from "@/assets/farmer.jpeg";
import teamPhoto from "@/assets/Team.jpeg";
import family from "@/assets/family-kitchen.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Will's Cassava Flour" },
      {
        name: "description",
        content: "Our story, mission and the people behind Rwanda's trusted cassava flour brand.",
      },
      { property: "og:title", content: "About Will's Cassava Flour" },
      { property: "og:description", content: "Meet the team and farmers behind every bag." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="container-x py-20 md:py-28">
        <span className="eyebrow">Our story</span>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">
          A family idea grown into{" "}
          <span className="italic text-accent">Rwanda&rsquo;s healthiest flour</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Will&rsquo;s Cassava Flour started in a small Rwandan kitchen — a search for flour that
          was clean, honest and naturally good. Today, that same standard guides every batch we
          mill.
        </p>
      </section>

      <section className="container-x grid gap-10 pb-20 md:grid-cols-2">
        <img
          src={farmer}
          alt="Farmer harvesting cassava"
          loading="lazy"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
        />
        <div className="space-y-8">
          <div>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-leaf-soft text-leaf">
              <Target className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-3xl">Our mission</h2>
            <p className="mt-3 text-muted-foreground">
              To provide healthy, natural, and high-quality cassava flour to families and businesses
              — every single day.
            </p>
          </div>
          <div>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-leaf-soft text-leaf">
              <Eye className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-3xl">Our vision</h2>
            <p className="mt-3 text-muted-foreground">
              To become the leading cassava flour brand in Africa and beyond, known for purity,
              fairness, and craftsmanship
            </p>
          </div>
          <div>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-leaf-soft text-leaf">
              <CheckCircle2 className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-3xl">Our objectives</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {[
                "Promote healthy living through natural foods",
                "Support African local farmers especially women with fair pay",
                "Deliver consistent, quality products to every customer",
                "Build a sustainable model for African agriculture",
              ].map((o) => (
                <li key={o} className="flex gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-leaf" /> {o}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-leaf-soft text-leaf">
              <CheckCircle2 className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-3xl">Our Impact</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {[
                "Supporting women cassava farmers and cooperatives",
                "Creating sustainable income opportunities in rural communities",
                "Promoting quality agricultural practices",
                "Building a stronger and more inclusive cassava value chain across Africa",
              ].map((o) => (
                <li key={o} className="flex gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-leaf" /> {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-x">
          <span className="eyebrow">Our team</span>
          <h2 className="mt-3 text-4xl md:text-5xl">The hands behind every bag.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every member of our team wears proper uniforms, hairnets, gloves and boots — because
            hygiene isn&rsquo;t optional, it&rsquo;s our promise.
          </p>
          <img
            src={teamPhoto}
            alt="Will's Cassava Flour team"
            loading="lazy"
            className="mt-6 w-full rounded-3xl object-contain"
          />
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <span className="eyebrow">Why quality matters to us</span>
        <h2 className="mt-3 text-4xl md:text-5xl">Stories from our community.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "The Farmer",
              text: "&ldquo;For the first time, our cassava reaches families that truly value it. We grow with pride.&rdquo;",
              role: "Jean-Bosco, Farmer Partner",
            },
            {
              title: "The Miller",
              text: "&ldquo;I see each batch from peel to package. Cleanliness isn&rsquo;t a step — it&rsquo;s how I work every day.&rdquo;",
              role: "Claudine, Production Lead",
            },
            {
              title: "The Family",
              text: "&ldquo;Will&rsquo;s flour made gluten-free cooking simple. Our children eat better, and so do we.&rdquo;",
              role: "The Mukamana Family",
            },
          ].map((s) => (
            <article key={s.title} className="rounded-3xl border border-border bg-background p-7">
              <p className="text-xs uppercase tracking-widest text-accent">{s.title}</p>
              <p className="mt-4 text-foreground" dangerouslySetInnerHTML={{ __html: s.text }} />
              <p className="mt-6 text-sm text-muted-foreground">— {s.role}</p>
            </article>
          ))}
        </div>
        <img
          src={family}
          alt="A family baking with cassava flour"
          loading="lazy"
          className="mt-16 aspect-[16/7] w-full rounded-3xl object-cover"
        />
      </section>
    </div>
  );
}
