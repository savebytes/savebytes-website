/** Single source of truth for company-level facts. Values in [brackets] are placeholders from the brief. */
export const site = {
  name: 'SaveBytes',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://savebytes.in',
  locale: 'en_IN',
  tagline: 'Quiet software for busy places.',
  description: 'SaveBytes builds focused software from Navi Mumbai, starting with patient records for clinics.',
  // Interim address. Swap for hello@savebytes.in once that mailbox exists (this is the only place to change).
  email: { address: 'ankit.singh4x@gmail.com', label: 'ankit.singh4x@gmail.com', href: 'mailto:ankit.singh4x@gmail.com' },
  whatsapp: { number: '918789286009', label: '+91 87892 86009', href: 'https://wa.me/918789286009?text=' + encodeURIComponent('Hi, I would like to know more about SaveBytes Health.') },
  social: {
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ankit-singh-72b744225/' },
    instagram: { label: 'Instagram', href: 'https://www.instagram.com/advaiticc' },
    x: { label: 'X', href: 'https://x.com/singhankitt_' },
    portfolio: { label: 'Portfolio', href: 'https://ankit.savebytes.in/' },
  },
  location: 'Navi Mumbai, Maharashtra',
  founder: { name: 'Ankit Singh', role: 'Founder & CEO' },
} as const;

/** Ordered list used by the footer, contact and about sections. Add an entry here to show a new profile everywhere. */
export const socialLinks = [
  { id: 'whatsapp', icon: 'message-circle', label: 'WhatsApp', text: site.whatsapp.label, href: site.whatsapp.href },
  { id: 'linkedin', icon: 'linkedin', label: 'LinkedIn', text: 'Ankit Singh', href: site.social.linkedin.href },
  { id: 'instagram', icon: 'instagram', label: 'Instagram', text: '@advaiticc', href: site.social.instagram.href },
  { id: 'x', icon: 'x-twitter', label: 'X', text: '@singhankitt_', href: site.social.x.href },
  { id: 'portfolio', icon: 'globe', label: 'Portfolio', text: 'ankit.savebytes.in', href: site.social.portfolio.href },
] as const;
