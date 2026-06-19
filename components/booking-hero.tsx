import { Check, Gift } from 'lucide-react'

const takeaways = [
  {
    title: 'Your market, by the numbers',
    body: 'Real VA and purchase demand in your zip codes — not a generic pitch.',
  },
  {
    title: 'What exclusive leads actually cost',
    body: 'Straight pricing for real-time, never-shared leads in your area.',
  },
  {
    title: 'A 90-day plan to double sales',
    body: 'The exact path, mapped to your loan types and volume goals.',
  },
]

const pills = [
  '30 minutes · video',
  'Straight with the founder',
  'Yours to keep, no obligation',
]

export function BookingHero() {
  return (
    <header className="text-center">
      <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
        Paid Traffic Strategy Call
      </p>
      <h1 className="mt-3 text-balance text-[clamp(2rem,7vw,2.9rem)] font-bold leading-[1.06] tracking-tight text-primary-deep">
        Walk away knowing your real market numbers.
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-pretty text-[clamp(1rem,4vw,1.18rem)] leading-relaxed text-muted-foreground">
        In 30 minutes we&apos;ll map the actual VA and purchase demand in your
        zip codes, show what exclusive leads would cost, and lay out the path to
        doubling your sales. You keep all of it — whether or not we work
        together.
      </p>

      {/* Takeaways */}
      <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
        {takeaways.map((item) => (
          <li
            key={item.title}
            className="flex gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm sm:flex-col sm:gap-2.5"
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Check className="size-3.5" aria-hidden />
            </span>
            <div>
              <strong className="block text-[15px] font-semibold tracking-tight text-primary-deep">
                {item.title}
              </strong>
              <span className="mt-1 block text-[13.5px] leading-snug text-muted-foreground">
                {item.body}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Pills */}
      <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
        {pills.map((pill) => (
          <li
            key={pill}
            className="rounded-full border border-border bg-secondary px-3.5 py-2 text-[13px] font-medium text-secondary-foreground"
          >
            {pill}
          </li>
        ))}
      </ul>

      {/* Bonus — direct-mail "even if it's a no" card */}
      <div className="mx-auto mt-7 max-w-2xl overflow-hidden rounded-2xl border border-dashed border-accent/45 bg-accent/8 text-left">
        <div className="flex gap-3 p-4 sm:p-5">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
            <Gift className="size-5" aria-hidden />
          </span>
          <div>
            <p className="text-[13px] font-bold uppercase tracking-wide text-accent">
              Even if it&apos;s a no
            </p>
            <p className="mt-1 text-[14px] leading-relaxed text-foreground/80">
              Decide paid advertising isn&apos;t the right move right now?
              You&apos;ll still walk away with a professionally designed landing
              page, built for you to run on your own top-level domain. No
              strings, no catch — the call is worth your time either way.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
