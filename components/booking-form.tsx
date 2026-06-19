'use client'

import { useActionState, useId, useState } from 'react'
import {
  CalendarCheck,
  Check,
  ChevronRight,
  Loader2,
  Sparkles,
  Sunrise,
  Sun,
  Sunset,
  Video,
} from 'lucide-react'
import { submitBooking, type BookingState } from '@/app/actions'

const initialState: BookingState = { status: 'idle' }

const timeWindows = [
  { value: 'morning', label: 'Morning', hint: '8–11am', icon: Sunrise },
  { value: 'midday', label: 'Midday', hint: '11–2pm', icon: Sun },
  { value: 'afternoon', label: 'Afternoon', hint: '2–5pm', icon: Sunset },
]

const volumes = [
  'Just me — under $1M/mo',
  '$1M – $3M/mo',
  '$3M – $6M/mo',
  '$6M – $10M/mo',
  '$10M+/mo',
]

function todayISO() {
  const d = new Date()
  const tz = d.getTimezoneOffset() * 60000
  return new Date(d.getTime() - tz).toISOString().slice(0, 10)
}

export function BookingForm() {
  const [state, formAction, pending] = useActionState(submitBooking, initialState)
  const [timeWindow, setTimeWindow] = useState('')
  const formId = useId()

  if (state.status === 'success') {
    return (
      <section
        aria-label="Request received"
        className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_24px_60px_-20px_rgba(13,43,110,0.35)]"
      >
        <div className="flex flex-col items-center px-6 py-16 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25">
            <Check className="size-8" aria-hidden />
          </span>
          <h2 className="mt-6 text-balance text-2xl font-bold tracking-tight text-primary-deep">
            You&apos;re on the calendar list.
          </h2>
          <p className="mt-3 max-w-sm text-pretty leading-relaxed text-muted-foreground">
            {state.message}
          </p>
          <p className="mt-6 flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-[13px] font-medium text-secondary-foreground">
            <Sparkles className="size-4 text-accent" aria-hidden />
            Keep an eye on your inbox for the confirmation.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      aria-label="Request your strategy call"
      className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_24px_60px_-20px_rgba(13,43,110,0.35)]"
    >
      {/* App-sheet grabber */}
      <div className="flex justify-center bg-card pt-3">
        <span className="h-1.5 w-10 rounded-full bg-foreground/15" aria-hidden />
      </div>

      {/* iOS-style title row */}
      <div className="flex items-center justify-between gap-3 px-5 pb-4 pt-3">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <CalendarCheck className="size-5" aria-hidden />
          </div>
          <div className="leading-tight">
            <p className="text-[15px] font-semibold tracking-tight text-primary-deep">
              Request your call
            </p>
            <p className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Booking this week
            </p>
          </div>
        </div>
        <span className="hidden items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-[12px] font-medium text-secondary-foreground sm:inline-flex">
          <Video className="size-3.5" aria-hidden /> 30 min · video
        </span>
      </div>

      {/* Perforated direct-mail divider */}
      <div className="perforated-edge h-3.5 w-full" aria-hidden />

      <form action={formAction} className="flex flex-col gap-6 p-5 sm:p-6">
        {/* Honeypot */}
        <input
          type="text"
          name="company_url"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="sr-only"
        />

        {/* Group: about you */}
        <fieldset className="flex flex-col gap-3">
          <legend className="mb-1 px-1 text-[12px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
            About you
          </legend>
          <div className="overflow-hidden rounded-2xl border border-border bg-background/60">
            <Field
              id={`${formId}-name`}
              name="name"
              label="Full name"
              placeholder="Jordan Mills"
              autoComplete="name"
              required
            />
            <Divider />
            <Field
              id={`${formId}-email`}
              name="email"
              type="email"
              label="Email"
              placeholder="you@brokerage.com"
              autoComplete="email"
              inputMode="email"
              required
            />
            <Divider />
            <Field
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              label="Mobile"
              placeholder="(800) 671-0334"
              autoComplete="tel"
              inputMode="tel"
              required
            />
            <Divider />
            <Field
              id={`${formId}-company`}
              name="company"
              label="Company"
              placeholder="Optional"
              autoComplete="organization"
            />
          </div>
        </fieldset>

        {/* Group: your market */}
        <fieldset className="flex flex-col gap-3">
          <legend className="mb-1 px-1 text-[12px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
            Your market
          </legend>
          <div className="overflow-hidden rounded-2xl border border-border bg-background/60">
            <Field
              id={`${formId}-zips`}
              name="zips"
              label="Zip codes you serve"
              placeholder="29601, 29605, 29609"
              inputMode="numeric"
            />
            <Divider />
            <SelectField
              id={`${formId}-volume`}
              name="volume"
              label="Monthly volume"
              options={volumes}
            />
          </div>
        </fieldset>

        {/* Group: pick a time */}
        <fieldset className="flex flex-col gap-3">
          <legend className="mb-1 px-1 text-[12px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
            Preferred time
          </legend>

          <div className="overflow-hidden rounded-2xl border border-border bg-background/60">
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <label
                htmlFor={`${formId}-date`}
                className="text-[15px] font-medium text-foreground"
              >
                Date
              </label>
              <input
                id={`${formId}-date`}
                name="date"
                type="date"
                min={todayISO()}
                required
                className="rounded-lg bg-transparent text-right text-[15px] font-medium text-primary-deep outline-none [color-scheme:light] focus:text-primary"
              />
            </div>
          </div>

          {/* Segmented time window — very iOS */}
          <input type="hidden" name="timeWindow" value={timeWindow} required />
          <div
            role="radiogroup"
            aria-label="Preferred time window"
            className="grid grid-cols-3 gap-2 rounded-2xl border border-border bg-background/60 p-2"
          >
            {timeWindows.map((w) => {
              const Icon = w.icon
              const active = timeWindow === w.value
              return (
                <button
                  key={w.value}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setTimeWindow(w.value)}
                  className={`flex min-h-[68px] flex-col items-center justify-center gap-1 rounded-xl px-2 py-3 text-center transition-all ${
                    active
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:bg-secondary'
                  }`}
                >
                  <Icon className="size-5" aria-hidden />
                  <span className="text-[13px] font-semibold leading-none">
                    {w.label}
                  </span>
                  <span
                    className={`text-[11px] leading-none ${
                      active ? 'text-primary-foreground/80' : 'text-muted-foreground/70'
                    }`}
                  >
                    {w.hint}
                  </span>
                </button>
              )
            })}
          </div>
        </fieldset>

        {/* Notes */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor={`${formId}-notes`}
            className="px-1 text-[12px] font-bold uppercase tracking-[0.12em] text-muted-foreground"
          >
            Anything we should know?
          </label>
          <textarea
            id={`${formId}-notes`}
            name="notes"
            rows={3}
            placeholder="Loan types, current lead sources, biggest bottleneck…"
            className="rounded-2xl border border-border bg-background/60 px-4 py-3 text-[15px] leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-ring focus:bg-card"
          />
        </div>

        {state.status === 'error' && (
          <p
            role="alert"
            className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-[14px] font-medium text-destructive"
          >
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-[16px] font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all active:scale-[0.99] disabled:opacity-70"
        >
          {pending ? (
            <>
              <Loader2 className="size-5 animate-spin" aria-hidden />
              Sending your request…
            </>
          ) : (
            <>
              Request my strategy call
              <ChevronRight className="size-5 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </>
          )}
        </button>

        <p className="text-center text-[12.5px] leading-relaxed text-muted-foreground">
          We&apos;ll confirm your exact time by email. No spam, ever — just the
          details for your call.
        </p>
      </form>
    </section>
  )
}

function Field({
  id,
  label,
  ...props
}: {
  id: string
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3">
      <label htmlFor={id} className="shrink-0 text-[15px] font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        className="w-full min-w-0 bg-transparent text-right text-[15px] text-primary-deep outline-none placeholder:text-muted-foreground/55"
        {...props}
      />
    </div>
  )
}

function SelectField({
  id,
  label,
  options,
  ...props
}: {
  id: string
  label: string
  options: string[]
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3">
      <label htmlFor={id} className="shrink-0 text-[15px] font-medium text-foreground">
        {label}
      </label>
      <select
        id={id}
        defaultValue=""
        className="max-w-[60%] bg-transparent text-right text-[15px] font-medium text-primary-deep outline-none [color-scheme:light]"
        {...props}
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}

function Divider() {
  return <div className="ml-4 h-px bg-border" aria-hidden />
}
