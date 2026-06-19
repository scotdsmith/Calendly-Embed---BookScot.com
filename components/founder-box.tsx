import { BadgeCheck } from 'lucide-react'

const credentials = [
  'Named a top course creator on Teachable by SmartPassiveIncome',
  'Featured in industry press on B2B sales strategy',
  'Enrolled 600+ students in his online university in under a week',
  '15+ years in direct response · 1,000+ agency founders coached',
]

export function FounderBox() {
  return (
    <section aria-labelledby="founder-heading" className="mx-auto max-w-2xl">
      {/* Johnson box — double-ruled direct-mail frame */}
      <div className="rounded-2xl border-2 border-primary bg-card p-1 shadow-[0_8px_30px_rgba(13,43,110,0.10)]">
        <div className="rounded-xl border border-dashed border-primary/35 p-5 sm:p-7">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            * * * Who you&apos;re meeting with * * *
          </p>

          <h2
            id="founder-heading"
            className="mt-3 text-balance text-center text-[clamp(1.4rem,5.5vw,1.9rem)] font-bold leading-tight tracking-tight text-primary-deep"
          >
            You&apos;re talking straight with Scot Smith.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-pretty text-center text-[15px] leading-relaxed text-foreground/85">
            Founder of <strong className="font-semibold text-primary-deep">Automated Inbound</strong> — the
            done-for-you paid traffic agency in Greenville, SC that delivers exclusive, never-shared inbound
            leads to mortgage brokers and loan officers through Google and Meta. Every engagement is anchored
            by a <strong className="font-semibold text-primary-deep">90-day, 2x pipeline guarantee.</strong>
          </p>

          {/* Credentials */}
          <ul className="mx-auto mt-5 grid max-w-md gap-2.5 text-left">
            {credentials.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span className="text-[13.5px] leading-snug text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          {/* Perforated divider */}
          <div className="my-5 border-t border-dashed border-border" />

          <p className="mx-auto max-w-xl text-pretty text-center text-[13.5px] leading-relaxed text-muted-foreground">
            A direct response marketer who&apos;s spent years advising Series A/B SaaS teams on outbound and
            pipeline systems, Scot now teaches agency founders through Rainmaker University and partners on
            My Polished Profile, helping loan officers control what prospects find when they get Googled.
          </p>
        </div>
      </div>
    </section>
  )
}
