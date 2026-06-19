'use server'

export type BookingState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}

const TIME_WINDOWS: Record<string, string> = {
  morning: 'Morning (8am–11am)',
  midday: 'Midday (11am–2pm)',
  afternoon: 'Afternoon (2pm–5pm)',
}

export async function submitBooking(
  _prev: BookingState,
  formData: FormData,
): Promise<BookingState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const company = String(formData.get('company') ?? '').trim()
  const zips = String(formData.get('zips') ?? '').trim()
  const volume = String(formData.get('volume') ?? '').trim()
  const date = String(formData.get('date') ?? '').trim()
  const timeWindow = String(formData.get('timeWindow') ?? '').trim()
  const notes = String(formData.get('notes') ?? '').trim()

  // Honeypot — bots fill hidden fields, humans don't.
  if (String(formData.get('company_url') ?? '').length > 0) {
    return { status: 'success' }
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  if (!name || !emailValid || !phone || !date || !timeWindow) {
    return {
      status: 'error',
      message: 'Please fill in your name, a valid email, phone, date, and a time window.',
    }
  }

  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL

  if (!webhookUrl) {
    return {
      status: 'error',
      message:
        'Booking is not configured yet. Please add a ZAPIER_WEBHOOK_URL environment variable.',
    }
  }

  const prettyDate = (() => {
    const d = new Date(`${date}T12:00:00`)
    return Number.isNaN(d.getTime())
      ? date
      : d.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
  })()

  const payload = {
    name,
    email,
    phone,
    company,
    zips,
    monthlyVolume: volume,
    preferredDate: date,
    preferredDateFormatted: prettyDate,
    preferredTimeWindow: TIME_WINDOWS[timeWindow] ?? timeWindow,
    notes,
    source: 'automatedinbound.com — strategy call form',
    submittedAt: new Date().toISOString(),
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      throw new Error(`Webhook responded with ${res.status}`)
    }

    return {
      status: 'success',
      message: `Thanks ${name.split(' ')[0]} — we'll confirm your ${prettyDate} slot by email shortly.`,
    }
  } catch (err) {
    console.log('[v0] booking webhook error:', err)
    return {
      status: 'error',
      message:
        'Something went wrong sending your request. Please try again or call us directly.',
    }
  }
}
