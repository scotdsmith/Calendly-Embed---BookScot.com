export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-primary text-primary-foreground backdrop-blur supports-[backdrop-filter]:bg-primary/95">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#1a47a8] to-[#0d2b6e] text-[11px] font-bold tracking-wide shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]">
            AI
          </span>
          <span className="text-[16px] font-semibold tracking-tight">
            Automated Inbound
          </span>
        </div>

        {/* Postmark — direct-mail flourish */}
        <span className="flex size-9 rotate-[-8deg] items-center justify-center rounded-full border border-dashed border-white/40 text-center font-mono text-[7px] font-semibold uppercase leading-[1.1] tracking-wider text-white/75">
          SC
          <br />
          296
        </span>
      </div>
    </header>
  )
}
