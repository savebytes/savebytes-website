/** Single source of truth for company-level facts. Values in [brackets] are placeholders from the brief. */
export const site = {
  name: 'SaveBytes',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://savebytes.in',
  locale: 'en_IN',
  tagline: 'Software that wastes nothing.',
  description: 'SaveBytes builds fast, focused software from Navi Mumbai, starting with an EHR for Indian clinics.',
  email: { address: 'hello@savebytes.in', label: '[hello@savebytes.in]', href: 'mailto:hello@savebytes.in' },
  phone: { label: '[+91 phone / WhatsApp]' },
  location: 'Navi Mumbai, Maharashtra',
  founder: { name: 'Ankit Singh', role: 'Founder & CEO' },
} as const;
