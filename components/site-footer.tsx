export function SiteFooter() {
  return (
    <footer className="mt-12 bg-primary text-center text-primary-foreground">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <p className="text-[13px] leading-relaxed text-white/85">
          100 S Main St, Ste 800, Greenville, SC 29601
        </p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13px]">
          <a
            href="tel:+18006710334"
            className="font-medium underline-offset-4 hover:underline"
          >
            (800) 671-0334
          </a>
          <span className="text-white/30" aria-hidden>
            ·
          </span>
          <a
            href="mailto:hello@automatedinbound.com"
            className="font-medium underline-offset-4 hover:underline"
          >
            hello@automatedinbound.com
          </a>
        </p>
        <p className="mt-5 text-[12px] text-white/50">
          © 2026 Automated Inbound LLC · Greenville, SC
        </p>
      </div>
    </footer>
  )
}
