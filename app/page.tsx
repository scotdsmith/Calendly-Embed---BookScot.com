import { BookingForm } from '@/components/booking-form'
import { BookingHero } from '@/components/booking-hero'
import { FounderBox } from '@/components/founder-box'
import { LeadSampleBox } from '@/components/lead-sample-box'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SocialProofBox } from '@/components/social-proof-box'

export default function Page() {
  return (
    <main className="flex min-h-dvh flex-col">
      <SiteHeader />
      <div className="mx-auto w-full max-w-3xl flex-1 px-4 pb-10 pt-10 sm:px-6 sm:pt-14">
        <BookingHero />
        <div className="mt-10 sm:mt-12">
          <FounderBox />
        </div>
        <div className="mt-10 sm:mt-12">
          <LeadSampleBox />
        </div>
        <div className="mt-10 sm:mt-12">
          <BookingForm />
        </div>
        <div className="mt-10 sm:mt-12">
          <SocialProofBox />
        </div>
      </div>
      <SiteFooter />
    </main>
  )
}
