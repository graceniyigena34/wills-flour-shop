import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import farmer from "@/assets/farmer.jpeg";
import teamPhoto from "@/assets/Team.jpeg";
import family from "@/assets/family-kitchen.jpeg";
import { useLanguage } from "@/lib/i18n";

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
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div>
      <section className="container-x py-20 md:py-28">
        <span className="eyebrow">{a.eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">
          {a.h1a}{" "}
          <span className="italic text-accent">{a.h1italic}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{a.intro}</p>
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
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-leaf-soft text-leaf">
                <Target className="h-5 w-5" />
              </span>
              <h2 className="text-3xl">{a.missionTitle}</h2>
            </div>
            <p className="mt-3 text-muted-foreground">{a.missionText}</p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-leaf-soft text-leaf">
                <Eye className="h-5 w-5" />
              </span>
              <h2 className="text-3xl">{a.visionTitle}</h2>
            </div>
            <p className="mt-3 text-muted-foreground">{a.visionText}</p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-leaf-soft text-leaf">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <h2 className="text-3xl">{a.objectivesTitle}</h2>
            </div>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {[a.obj1, a.obj2, a.obj3, a.obj4].map((o) => (
                <li key={o} className="flex gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-leaf" /> {o}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-leaf-soft text-leaf">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <h2 className="text-3xl">{a.impactTitle}</h2>
            </div>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {[a.imp1, a.imp2, a.imp3, a.imp4].map((o) => (
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
          <span className="eyebrow">{a.teamEyebrow}</span>
          <h2 className="mt-3 text-4xl md:text-5xl">{a.teamTitle}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{a.teamText}</p>
          <img
            src={teamPhoto}
            alt="Will's Cassava Flour team"
            loading="lazy"
            className="mt-6 w-full rounded-3xl object-contain"
          />
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <span className="eyebrow">{a.communityEyebrow}</span>
        <h2 className="mt-3 text-4xl md:text-5xl">{a.communityTitle}</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { title: a.story1Title, text: a.story1Text, role: a.story1Role },
            { title: a.story2Title, text: a.story2Text, role: a.story2Role },
            { title: a.story3Title, text: a.story3Text, role: a.story3Role },
          ].map((s) => (
            <article key={s.title} className="rounded-3xl border border-border bg-background p-7">
              <p className="text-xs uppercase tracking-widest text-accent">{s.title}</p>
              <p className="mt-4 text-foreground">&ldquo;{s.text}&rdquo;</p>
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
