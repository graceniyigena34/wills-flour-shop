import { useState } from "react";
import { MessageSquareHeart, Star, X, Send } from "lucide-react";

const FEEDBACK_EMAIL = "hello@willscassava.com";

export function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [followup, setFollowup] = useState(true);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  function reset() {
    setRating(0); setHover(0); setName(""); setEmail(""); setPhone("");
    setMessage(""); setFollowup(true); setStatus("idle"); setError(null);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (rating < 1) { setError("Please select a star rating."); return; }
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Name, email, and message are required."); return;
    }
    setStatus("sending");
    const subject = `Website feedback — ${rating}★ from ${name.trim()}`;
    const body = [
      `Rating: ${rating}/5`,
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      phone.trim() ? `Phone: ${phone.trim()}` : null,
      `Okay to follow up: ${followup ? "Yes" : "No"}`,
      "",
      message.trim(),
    ].filter(Boolean).join("\n");
    window.location.href =
      `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
    setTimeout(() => { setOpen(false); reset(); }, 1800);
  }

  return (
    <>
      <button
        type="button"
        aria-label="Give feedback"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/25 transition-transform hover:scale-105 hover:bg-bark md:bottom-7 md:right-7"
      >
        <MessageSquareHeart className="h-6 w-6" />
        <span className="sr-only">Share feedback</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/30 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-label="Share your feedback"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-t-3xl bg-background p-6 shadow-2xl sm:rounded-3xl sm:p-7"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-secondary"
            >
              <X className="h-4 w-4" />
            </button>

            {status === "sent" ? (
              <div className="py-8 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-leaf-soft text-leaf">
                  <MessageSquareHeart className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif text-2xl text-primary">Thank you!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your feedback has been received. We&rsquo;ll reach out if we need any clarification.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <span className="text-xs font-medium uppercase tracking-widest text-accent">Your feedback</span>
                <h3 className="mt-1 font-serif text-2xl text-primary">How was our flour?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Shared privately with our team — never published.
                </p>

                <div className="mt-5 flex items-center gap-1.5" role="radiogroup" aria-label="Star rating">
                  {[1, 2, 3, 4, 5].map((n) => {
                    const active = (hover || rating) >= n;
                    return (
                      <button
                        key={n}
                        type="button"
                        role="radio"
                        aria-checked={rating === n}
                        aria-label={`${n} star${n > 1 ? "s" : ""}`}
                        onMouseEnter={() => setHover(n)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(n)}
                        className="rounded-md p-1 transition-transform hover:scale-110"
                      >
                        <Star
                          className={`h-7 w-7 ${active ? "fill-accent text-accent" : "text-muted-foreground/40"}`}
                        />
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 grid gap-3">
                  <Input label="Name" value={name} onChange={setName} placeholder="Your full name" required maxLength={120} />
                  <Input label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" required maxLength={255} />
                  <Input label="Phone (optional)" value={phone} onChange={setPhone} placeholder="+250 ..." maxLength={40} />
                  <label className="block">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</span>
                    <textarea
                      required rows={3} maxLength={2000} value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you loved or what could be better..."
                      className="mt-1.5 w-full resize-none rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
                    />
                  </label>
                  <label className="flex items-start gap-2 text-xs text-muted-foreground">
                    <input
                      type="checkbox"
                      checked={followup}
                      onChange={(e) => setFollowup(e.target.checked)}
                      className="mt-0.5 h-4 w-4 accent-[var(--color-accent)]"
                    />
                    <span>It&rsquo;s okay to contact me if you need more details.</span>
                  </label>
                </div>

                {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-bark disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : <>Send feedback <Send className="h-4 w-4" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function Input({
  label, value, onChange, type = "text", placeholder, required, maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
      />
    </label>
  );
}
