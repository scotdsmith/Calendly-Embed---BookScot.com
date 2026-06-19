import {
  CalendarClock,
  CircleDollarSign,
  Clock,
  Home,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  TrendingUp,
  User,
} from 'lucide-react'

type LeadField = {
  icon: typeof User
  label: string
  value: string
}

const contactFields: LeadField[] = [
  { icon: User, label: 'Full name', value: 'Marcus Holloway' },
  { icon: Phone, label: 'Mobile (verified)', value: '(864) 555-0192' },
  { icon: Mail, label: 'Email (verified)', value: 'm.holloway@gmail.com' },
  { icon: MapPin, label: 'Property zip', value: 'Greenville, SC 29607' },
]

const intentFields: LeadField[] = [
  { icon: Home, label: 'Loan purpose', value: 'VA purchase — primary home' },
  { icon: CircleDollarSign, label: 'Price range', value: '$385K · 0% down (VA)' },
  { icon: TrendingUp, label: 'Credit band', value: 'Self-reported 720–759' },
  { icon: CalendarClock, label: 'Timeline', value: 'Pre-approval in 30 days' },
]

export function LeadSampleBox() {
  return (
    <section aria-labelledby="lead-sample-heading" className="mx-auto max-w-2xl">
      {/* Johnson box — double-ruled direct-mail frame */}
      <div className="rounded-2xl border-2 border-primary bg-card p-1 shadow-[0_8px_30px_rgba(13,43,110,0.10)]">
        <div className="rounded-xl border border-dashed border-primary/35 p-5 sm:p-7">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            * * * What lands in your inbox * * *
          </p>

          <h2
            id="lead-sample-heading"
            className="mt-3 text-balance text-center text-[clamp(1.4rem,5.5vw,1.9rem)] font-bold leading-tight tracking-tight text-primary-deep"
          >
            This is one exclusive lead.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-pretty text-center text-[15px] leading-relaxed text-foreground/85">
            Not a name and a phone number. Every lead arrives fully qualified, verified, and
            <strong className="font-semibold text-primary-deep"> sent only to you</strong> — in real time,
            the second they raise their hand.
          </p>

          {/* Live-lead card */}
          <div className="mx-auto mt-6 max-w-xl overflow-hidden rounded-xl border border-border bg-background">
            {/* Card header */}
            <div className="flex items-center justify-between gap-3 border-b border-border bg-primary px-4 py-3">
              <div className="flex items-center gap-2 text-primary-foreground">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
                </span>
                <span className="text-[13px] font-semibold tracking-tight">New lead · Just now</span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary-foreground/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
                <Sparkles className="size-3" aria-hidden />
                Exclusive
              </span>
            </div>

            {/* Contact block */}
            <div className="px-4 pt-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Contact
              </p>
              <dl className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {contactFields.map((field) => (
                  <FieldRow key={field.label} {...field} />
                ))}
              </dl>
            </div>

            {/* Perforated divider */}
            <div className="my-4 border-t border-dashed border-border" />

            {/* Intent block */}
            <div className="px-4 pb-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Loan intent
              </p>
              <dl className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {intentFields.map((field) => (
                  <FieldRow key={field.label} {...field} />
                ))}
              </dl>
            </div>

            {/* Footer note */}
            <div className="flex items-center gap-2 border-t border-border bg-secondary px-4 py-3 text-secondary-foreground">
              <Clock className="size-3.5 shrink-0 text-accent" aria-hidden />
              <p className="text-[12.5px] leading-snug">
                Delivered to your CRM and phone in under 60 seconds — never shared, never resold.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FieldRow({ icon: Icon, label, value }: LeadField) {
  return (
    <div className="flex items-start gap-2.5 rounded-lg border border-border bg-card px-3 py-2.5">
      <Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
      <div className="min-w-0">
        <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">{label}</dt>
        <dd className="truncate text-[14px] font-semibold tracking-tight text-primary-deep">{value}</dd>
      </div>
    </div>
  )
}
