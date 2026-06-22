import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Will's Cassava Flour" },
      {
        name: "description",
        content:
          "Get in touch by phone, WhatsApp, email or visit us in Kigali. Distributors welcome.",
      },
      { property: "og:title", content: "Contact Will's Cassava Flour" },
      {
        property: "og:description",
        content: "Reach us by phone, WhatsApp, email — or partner with us.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await emailjs.sendForm(
        "service_5o5bdzj",
        "template_dks3y3g",
        formRef.current!,
        "6V5Z_4ZcEpnKKXo3V",
      );
      setSent(true);
      setTimeout(() => window.location.reload(), 2000);
    } catch {
      setError("Failed to send. Please try WhatsApp or email directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div>
      <section className="container-x py-20 md:py-28">
        <span className="eyebrow">Contact</span>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">
          Let&rsquo;s <span className="italic text-accent">talk flour</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Questions, orders, partnerships 
           we&rsquo;d love to hear from you.
        </p>
      </section>

      <section className="container-x grid gap-10 pb-24 md:grid-cols-2">
        {/* CONTACT INFO */}
        <div className="space-y-5">
          {[
            { icon: Phone, label: "Call", value: "+250 793 017 746", href: "tel:+250793017746" },
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "Message us anytime",
              href: "https://wa.me/+250793017746",
            },
            {
              icon: Mail,
              label: "Email",
              value: "info@willscassavaflour.rw",
              href: "mailto:info@willscassavaflour.rw",
            },
            { icon: MapPin, label: "Visit", value: "Kigali, Rwanda" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href ?? "#"}
              className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-accent/50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-leaf-soft text-leaf">
                <c.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                <p className="mt-1 font-serif text-lg text-primary">{c.value}</p>
              </div>
            </a>
          ))}

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Our location"
              src="https://www.google.com/maps?q=Kigali,Rwanda&output=embed"
              width="100%"
              height="280"
              loading="lazy"
              className="block"
            />
          </div>
        </div>

        {/* CONTACT FORM */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-background p-7 md:p-9"
        >
          <h2 className="text-2xl">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            For distributors and shops, mention your business in the message.
          </p>

          <div className="mt-6 grid gap-4">
            <Field label="Name">
              <input name="from_name" required className="input" placeholder="Your full name" />
            </Field>
            <Field label="Email">
              <input
                name="from_email"
                required
                type="email"
                className="input"
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Phone">
              <input name="phone" className="input" placeholder="+250 ..." />
            </Field>
            <Field label="Type of inquiry">
              <select name="inquiry_type" className="input">
                <option>General question</option>
                <option>Place an order</option>
                <option>Distributor / wholesale</option>
                <option>Press / media</option>
              </select>
            </Field>
            <Field label="Message">
              <textarea
                name="message"
                required
                rows={4}
                className="input resize-none"
                placeholder="Tell us a bit about what you need..."
              />
            </Field>
          </div>

          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={sending || sent}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-bark disabled:opacity-60"
          >
            {sent ? (
              "Message sent ✓"
            ) : sending ? (
              "Sending…"
            ) : (
              <>
                Send message <Send className="h-4 w-4" />
              </>
            )}
          </button>

          <style>{`.input{width:100%;border:1px solid var(--color-border);background:var(--color-background);border-radius:0.75rem;padding:0.65rem 0.9rem;font-size:0.875rem;color:var(--color-foreground);outline:none;transition:border-color .15s}.input:focus{border-color:var(--color-accent)}`}</style>
        </form>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
