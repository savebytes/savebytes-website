/**
 * Writing: notes on technology, strategy and how we build. Nothing is published yet, so the
 * Writing page, its nav link and its home-page row stay hidden until the first post is added.
 *
 * To publish, add an entry:
 *   {
 *     slug: 'why-quiet-software',            // the address: /writing/why-quiet-software
 *     title: 'Why quiet software',
 *     summary: 'One sentence shown in the list.',
 *     date: '2026-11-20',                    // ISO date
 *     body: [                                // paragraphs; a string starting with '## ' is a heading
 *       'First paragraph.',
 *       '## A heading',
 *       'Another paragraph.',
 *     ],
 *   }
 */
export const POSTS = [
  {
    slug: 'the-3-minute-opd',
    title: 'The 3-minute OPD: Why doctors keep going back to paper',
    summary: 'A busy clinic has three minutes per patient. Software built with forty modules and fifteen clicks per prescription never had a chance.',
    date: '2026-11-08',
    body: [
      'Walk into almost any private clinic or small hospital OPD in Navi Mumbai or Mumbai around ten in the morning. The waiting room is full. Thirty or forty people are sitting on plastic chairs, holding plastic folders with past blood tests and handwritten slips. If the doctor spends more than four minutes with each patient, the morning clinic will run past three in the afternoon.',
      'On the doctor’s desk there is usually a computer. Sometimes a modern all-in-one desktop, sometimes a laptop pushed into a corner. On its screen is an enterprise clinic management software, running in a browser tab.',
      'Yet ninety percent of what happens during that consultation happens on paper. The doctor listens, asks three or four sharp questions, pulls over a printed prescription pad, and writes with a ballpoint pen: the primary finding, three medicines with dosage frequencies in 1-0-1 shorthand, and a follow-up date. The entire physical act takes forty-five seconds.',
      'The computer sits untouched. In many clinics, a receptionist copies the handwritten pad into the software hours later just so an invoice can be printed or an inventory count adjusted.',
      '## Built to be sold, not to be used',
      'Most electronic health record software in India was not built for the person inside the consultation room. It was built for the administrator who signs the purchase order.',
      'The buyer wants feature checklists: an inventory module, a pharmacy ERP, human resource tracking, billing reconciliation, and forty different analytical dashboards with pie charts. Each module brings its own mandatory fields. Each field brings a dropdown.',
      'By the time that software lands in front of the doctor, prescribing a routine antacid requires six clicks: click Add medication, search the brand name, select the formulation from a dropdown, choose the dosage unit from another dropdown, click into a frequency modal, uncheck "before food", click save, and confirm.',
      'In a room where thirty-five people are waiting and a three-year-old is crying, fifteen clicks per prescription is not a minor inconvenience. It is an operational failure. So the doctor does what any rational professional does under pressure: they push the keyboard away and pick up the pen.',
      '## Software that wastes nothing',
      'In my first year of engineering college, I created a GitHub repository and named it SaveBytes. It started as an engineer’s habit: good software should use less memory, run fewer background loops, and avoid burning CPU cycles on things nobody asked for.',
      'When I began visiting local clinics and talking to doctors about how their day actually runs, that engineering reflex took on a human meaning.',
      'In a busy clinic, latency is not an abstract metric on an analytics graph. Latency is forty seconds stolen from a patient who waited an hour to be heard. Every unnecessary modal, every spinning loading wheel, and every administrative form field that has nothing to do with immediate clinical care wastes someone’s time and patience.',
      'Efficiency in software is not just an aesthetic choice. It is a form of respect: respect for the computer, respect for the doctor’s attention, and respect for the patient’s time.',
      '## The quiet alternative',
      'The answer to bloated clinic software is not to layer more menus, dashboards, or "AI badges" on top of an already broken workflow. The answer is doing fewer things, and doing them with extreme restraint.',
      'It means a single screen that mirrors how a consultation actually moves: the day’s queue, the patient banner with known allergies, today’s vitals recorded by the nurse, and a clean prescription area.',
      'It means keyboard-first speed that can compete with the friction of ink on paper: type three letters of a medicine, hit enter, tab to frequency, tab to duration, and hit enter again. Four seconds, zero popups.',
      'And it means building on open medical data standards (FHIR) underneath, so the clinic truly owns its records and can export them anytime without being locked into a proprietary silo.',
      'Good software should feel like a good assistant: present and reliable the moment you need it, and invisible when you don’t. Until clinic software earns that kind of quiet trust, doctors will keep doing the smartest thing possible.',
      'They will keep reaching for the paper pad.',
    ],
  },
];

export const published = () => [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
export const getPost = (slug) => POSTS.find((p) => p.slug === slug);
export const hasWriting = () => POSTS.length > 0;
