import { Quote, Star } from 'lucide-react'

type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
  result: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I almost skipped the call. Twenty minutes in, Scot had pulled real VA demand in my zips that I'd never seen. We closed three of the first batch of leads in month one.",
    name: 'Marcus D.',
    role: 'Branch Manager · Columbia, SC',
    initials: 'MD',
    result: '3 closings, first month',
  },
  {
    quote:
      "Every other 'lead' company sold me the same recycled list. These come in real time and they're mine alone. My contact rate went from praying to picking up the phone.",
    name: 'Renee T.',
    role: 'Loan Officer · Charlotte, NC',
    initials: 'RT',
    result: '2.1x contact rate',
  },
  {
    quote:
      "Even if I hadn't signed up, the landing page he built me was worth the half hour. I did sign up. Best ROI decision I made all year.",
    name: 'James P.',
    role: 'Mortgage Broker · Atlanta, GA',
    initials: 'JP',
    result: 'Doubled volume in 90 days',
  },
]

export function SocialProofBox() {
  return (
    <section aria-labelledby="social-proof-heading" className="mx-auto max-w-2xl">
      {/* Johnson box — double-ruled direct-mail frame */}
      <div className="rounded-2xl border-2 border-primary bg-card p-1 shadow-[0_8px_30px_rgba(13,43,110,0.10)]">
        <div className="rounded-xl border border-dashed border-primary/35 p-5 sm:p-7">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            * * * From brokers who took the call * * *
          </p>

          <h2
            id="social-proof-heading"
            className="mt-3 text-balance text-center text-[clamp(1.4rem,5.5vw,1.9rem)] font-bold leading-tight tracking-tight text-primary-deep"
          >
            They booked. Then they doubled.
          </h2>

          {/* Star rating row */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            <div className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-[13px] font-medium text-muted-foreground">
              Rated 5.0 by mortgage pros across the Southeast
            </span>
          </div>

          {/* Testimonial cards */}
          <div className="mt-6 flex flex-col gap-3.5">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="relative overflow-hidden rounded-xl border border-border bg-background p-4 sm:p-5"
              >
                <Quote
                  className="absolute right-3 top-3 size-7 text-primary/10"
                  aria-hidden
                />
                <blockquote className="text-pretty text-[14.5px] leading-relaxed text-foreground/90">
                  {t.quote}
                </blockquote>

                <figcaption className="mt-4 flex items-center gap-3 border-t border-dashed border-border pt-3.5">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-[13px] font-bold tracking-wide text-primary-foreground"
                    aria-hidden
                  >
                    {t.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-semibold tracking-tight text-primary-deep">
                      {t.name}
                    </p>
                    <p className="truncate text-[12.5px] text-muted-foreground">{t.role}</p>
                  </div>
                  <span className="hidden shrink-0 rounded-full bg-secondary px-3 py-1 text-[11.5px] font-semibold text-secondary-foreground sm:inline-block">
                    {t.result}
                  </span>
                </figcaption>

                {/* Result chip on mobile (below, full width feel) */}
                <span className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-[11.5px] font-semibold text-secondary-foreground sm:hidden">
                  {t.result}
                </span>
              </figure>
            ))}
          </div>

          {/* Perforated divider + closer */}
          <div className="my-5 border-t border-dashed border-border" />
          <p className="text-center text-[13px] leading-relaxed text-muted-foreground">
            The next slot on the calendar could be yours. The call is free, and you keep everything
            either way.
          </p>
        </div>
      </div>
    </section>
  )
}
