import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Automated Inbound — Book a Call',
    short_name: 'Automated Inbound',
    description:
      'Book a paid traffic strategy call with Automated Inbound.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f1f4fb',
    theme_color: '#0d2b6e',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
