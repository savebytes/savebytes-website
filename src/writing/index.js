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
    slug: 'why-fhir-and-medplum',
    title: 'Why we chose FHIR and Medplum instead of our own schema',
    summary: 'Inventing a proprietary healthcare schema feels fast on day one. It becomes a trap by day three hundred. Here is why we bet on boring, open standards.',
    date: '2026-11-10',
    body: [
      'Every engineer starting a healthcare project faces the exact same temptation: look at FHIR, recoil at its complexity, and decide to write a custom Postgres schema instead.',
      'It seems completely reasonable on day one. A standard FHIR Patient resource has dozens of nested fields for telecom systems, contact relationships, multiple identifiers, and marital status extensions. Why bother with all that JSON when a simple table with id, name, phone, date_of_birth, and gender takes twenty lines of SQL?',
      'You build the initial schema in an afternoon. It feels fast, clean, and elegant. But healthcare data is deceptive: it appears simple only until real clinical practice arrives.',
      '## The day-300 trap',
      'By month six, edge cases begin accumulating. A patient has a legal name, a preferred name, an ABHA address under Ayushman Bharat, a local clinic record number, and an MRN from a referral hospital. Your simple phone column is now an array, and gender needs to distinguish between administrative gender and biological sex for lab reference ranges.',
      'Then clinical observations arrive. A blood pressure reading is not just a single integer: it is systolic, diastolic, the patient’s position, cuff size, and a timestamp. A prescription is not just a text field with a drug name: it requires active molecules, brand formulations, dosage quantities, duration, refill limits, substitution permissions, and structured instructions.',
      'And then comes interoperability. When you need to integrate with an external diagnostic lab, connect to an imaging PACS server, or integrate with India’s ABDM gateway, you discover that every external system speaks FHIR.',
      'If you built a proprietary schema, you are now forced to spend months maintaining an ad-hoc, brittle translation engine that maps your internal columns into FHIR bundles. You became an interoperability company by accident—and a bad one.',
      '## Choosing boring plumbing',
      'FHIR (Fast Healthcare Interoperability Resources) is not clever; it is battle-tested. It represents more than a decade of international consensus on how clinical data actually behaves in the real world.',
      'Instead of reinventing that wheel, we chose to make SaveBytes FHIR-native from the very first commit, using Medplum as our open-source backend backbone.',
      'Medplum handles the undifferentiated heavy lifting of healthcare software: compliant FHIR R4 storage, strict schema validation, cryptographic audit trails, and role-based access controls. It treats healthcare data not as arbitrary blobs, but as strongly typed, validated medical resources.',
      'By delegating the plumbing to an open standard, we gained immediate structural rigor that would have taken a dedicated backend team years to build from scratch.',
      '## Where the engineering actually belongs',
      'The competitive advantage of clinical software is never its database schema. The doctor in the consultation room does not care whether your database uses Postgres JSONB or relational foreign keys.',
      'What the doctor cares about is latency. Can they find an allergy in twenty milliseconds? Can they type three letters of an antibiotic and see the exact pediatric formulation appear in the next animation frame? Does the interface keep working when the clinic broadband drops out?',
      'Choosing FHIR and Medplum freed us to spend one hundred percent of our engineering bandwidth where it matters most: client-side performance, local-first offline caching, zero-layout-shift rendering, and ergonomic keyboard navigation.',
      '## The anti-lock-in promise',
      'There is a deeper ethical reason to build on open standards.',
      'For decades, legacy practice management vendors in India have held clinic records hostage. If a clinic wanted to switch software, they were handed encrypted SQL dumps, charged exorbitant "data migration fees," or simply told that export was impossible.',
      'When software is natively built on FHIR, data lock-in disappears. A clinic’s patients, appointments, encounters, and prescriptions are already structured in the global open standard. If a doctor ever decides to leave SaveBytes, they can export their complete archive in standard FHIR JSON with a single click and import it into any compliant system in the world.',
      'We believe trust is earned through speed, reliability, and craft—not by trapping customer data behind closed doors.',
    ],
  },
  {
    slug: 'quiet-software',
    title: 'Quiet Software',
    summary: 'Why tools should behave like physical instruments: zero unnecessary modals, no decorative noise, and software that refuses to interrupt.',
    date: '2026-11-09',
    body: [
      'Almost every modern piece of enterprise software is terrified that you will forget it exists.',
      'It pops up banners asking you to try new features. It drops a modal into the middle of your screen asking how likely you are to recommend it to a colleague. It animates badges, paints cards in saturated gradients, and displays celebratory illustrations when you complete a routine form. It behaves not like a tool, but like an attention-seeking product trying to prove that its engineering committee was busy.',
      'In consumer software, this is merely annoying. Inside an examination room or a busy outpatient clinic, it is destructive.',
      '## Tools vs. feeds',
      'Consider the physical instruments a doctor relies on: a stethoscope, a reflex hammer, a blood pressure cuff, a prescription pad. None of these tools ping. None of them slide into your peripheral vision to announce an update. They have no notification feeds and no celebratory confetti.',
      'A stethoscope waits in absolute silence on the desk. You pick it up, place it against a chest, hear heart sounds with unvarnished clarity, and set it down. It does not ask you to rate the experience. It does not try to retain your attention.',
      'Physical instruments are quiet because they are built for professionals doing serious work. Software used by clinicians under pressure should hold itself to the exact same standard.',
      '## The cult of engagement',
      'Why did medical software become so loud in the first place?',
      'Over the last fifteen years, enterprise product design absorbed the worst habits of consumer social feeds: measuring "daily active engagement," "time on screen," and "feature adoption rates." If a user spent ten minutes navigating a screen, product dashboards called it high engagement.',
      'In a clinic, the opposite is true. Time spent staring at a screen is time stolen from looking at a patient. A doctor looking down at a laptop is not "engaged"—they are obstructed. The best clinical software is software that gets the doctor back to looking at the patient as fast as humanly possible.',
      '## Principles of restraint',
      'Building quiet software requires an aggressive commitment to omission. It means deciding what never belongs in the product:',
      '1. No unsolicited modals. A dialog box should only lock the screen if a prescription contains a dangerous drug-allergy interaction or lethal contraindication. It should never appear to confirm that a routine record was saved. If a save succeeds, the system should simply save it and remain quiet.',
      '2. Zero decorative noise. Gradients, glowing drop-shadows, and floating pastel cards have no place in clinical software. They add visual friction and tire the eyes over an eight-hour shift. High-contrast typography, clean borders, and crisp tabular alignment allow doctors to scan labs and dosages without cognitive strain.',
      '3. Speed is silence. Sluggish software is loud. A three-hundred-millisecond loading spinner is a cognitive interruption; a sub-fifty-millisecond response feels like thought. When inputs respond instantaneously, the machine disappears and thought translates directly into documentation.',
      '4. Keyboard first. Moving a hand from the keyboard to the mouse breaks clinical cadence. Searching a medicine, selecting a dosage, specifying frequency, and issuing a prescription should happen through predictable, ergonomic keystrokes—competing with the raw speed of a pen on paper.',
      '## Respecting the room',
      'A consultation room is an intimate, high-stakes space. A patient is often anxious, vulnerable, or in pain. A doctor has only a few minutes to synthesize medical history, listen to symptoms, and decide on a course of care.',
      'In that room, software has only one legitimate role: to be a silent, dependable instrument that catches errors, preserves records, and gets out of the way.',
      'Software does not need to be loud to be transformative. It just needs to be quiet.',
    ],
  },
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
