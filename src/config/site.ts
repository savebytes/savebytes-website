/** Single source of truth for company-level facts. Values in [brackets] are placeholders from the brief. */
export const site = {
  name: 'SaveBytes',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://savebytes.in',
  locale: 'en_IN',
  tagline: 'Software that wastes nothing.',
  description: 'SaveBytes builds fast, focused software from Navi Mumbai, starting with an EHR for Indian clinics.',
  email: { address: 'hello@savebytes.in', label: '[hello@savebytes.in]', href: 'mailto:hello@savebytes.in' },
  whatsapp: { number: '918789286009', label: '+91 87892 86009', href: 'https://wa.me/918789286009?text=' + encodeURIComponent('Hi, I would like to know more about SaveBytes Health.') },
  social: {
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ankit-singh-72b744225/' },
    instagram: { label: 'Instagram', href: 'https://www.instagram.com/advaiticc' },
    // portfolio: { label: 'Portfolio', href: '' },  // add when the portfolio link is ready, then add it to socialLinks below
  },
  location: 'Navi Mumbai, Maharashtra',
  founder: { name: 'Ankit Singh', role: 'Founder & CEO' },
} as const;

/** Ordered list used by the footer, contact and about sections. Add an entry here to show a new profile everywhere. */
export const socialLinks = [
  { id: 'whatsapp', icon: 'message-circle', label: 'WhatsApp', text: site.whatsapp.label, href: site.whatsapp.href },
  { id: 'linkedin', icon: 'linkedin', label: 'LinkedIn', text: 'Ankit Singh', href: site.social.linkedin.href },
  { id: 'instagram', icon: 'instagram', label: 'Instagram', text: '@advaiticc', href: site.social.instagram.href },
] as const;
