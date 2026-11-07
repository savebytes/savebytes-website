/**
 * Every SaveBytes product, in the order they appear. A new product is one new entry here:
 * it gets its home-page row, its nav link, its own page at /<slug> and a sitemap entry.
 *
 * Page blocks render top to bottom; leave out any block a product has nothing for.
 *   picture: the one rebuilt screen (a component name from src/products/screens)
 *   now:     what the product does today (short lines)
 *   soon:    what is coming, with no dates
 *   data:    how the product treats your data (short lines)
 *   close:   the closing invitation
 */
export const PRODUCTS = [
  {
    slug: 'health',
    name: 'SaveBytes Health',
    nav: 'Health',
    line: 'Patient records for clinics, in one place.',
    status: 'Version 1 is ready.',
    tone: 'health',
    meta: {
      title: 'SaveBytes Health · Patient records for clinics',
      description: 'Patient records for clinics, in one place. Version 1 is ready.',
    },
    picture: 'HealthToday',
    now: {
      title: 'What it does',
      items: [
        ['Registration', 'Find a patient by name, mobile or clinic number, or register a new one.'],
        ['The day’s queue', 'Appointments, walk-ins and tokens, the same on every screen in the clinic.'],
        ['Vitals and consultation', 'The nurse records vitals; the doctor sees them beside the note.'],
        ['Prescriptions', 'Signed by the doctor and printed with the clinic’s name.'],
      ],
    },
    soon: {
      title: 'Coming soon',
      items: ['ABDM', 'Laboratory', 'Pharmacy', 'Patient app'],
    },
    data: {
      title: 'Your records stay yours',
      items: [
        'Each clinic’s records are kept separate from every other clinic.',
        'Staff see only what their role allows.',
        'Every change is recorded, and your records can be exported.',
      ],
    },
    close: { title: 'Run a clinic and want to try it?', action: 'Get in touch' },
  },
];

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
