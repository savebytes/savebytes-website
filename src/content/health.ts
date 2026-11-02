export const VISIT_STEPS = [
  ['Book or walk in.', 'The receptionist finds the patient by name, mobile or clinic number, or registers them in under a minute.', 'booked'],
  ['Check in.', 'A token number is assigned and the queue updates on every screen in the clinic, live.', 'arrived'],
  ['Vitals.', 'The nurse records BP, pulse, temperature, SpO₂ and weight. BMI is calculated for you.', 'vitals'],
  ['Consult.', "The doctor sees vitals, allergies and past visits next to the note. Diagnosis by name or ICD-10 code. Medicines from your clinic's own list, with dose, 1-0-1 frequency, timing and duration.", 'in-consult'],
  ['Sign and hand over.', "The visit is locked when signed. A prescription PDF with your clinic's logo is ready immediately and can be sent to the patient's phone.", 'signed'],
];

export const WORKSPACE = [
  ['user-plus', 'Register', 'Reception registers the patient once. Every counter sees the same record.', 'First release'],
  ['calendar-clock', 'Appointment', 'Booked with the right doctor, or added to the queue as a walk-in.', 'First release'],
  ['file-pen-line', 'Consult', 'The doctor reviews past visits, writes the Rx and orders tests (CBC, X-ray, whatever is needed) from the same screen.', 'First release'],
  ['flask-conical', 'Lab', 'The order is already waiting at the lab. The technician uploads the report against it. Urgent orders go to the top.', 'Planned'],
  ['bell', 'Results back', 'The report lands on the patient chart and the doctor who asked for it is told it is ready.', 'Planned'],
  ['package-check', 'Pharmacy', 'The pharmacy dispenses from the signed prescription. Nobody retypes it.', 'Planned'],
];

export const FAQ = [
  ['Will it slow me down?', "It's built around a single consult screen. Your favourite medicines and “repeat last prescription” are one click. We measure speed the way you would: seconds per patient."],
  ["Who can see my patients' data?", 'Only the people you give access to, by role. Each clinic\u2019s records live in their own isolated space, and every view and change is logged.'],
  ['What if I want to leave?', 'Your records are stored in FHIR, an open international format. You can export all of it.'],
    ["My staff aren't very technical.", "If they can use WhatsApp, they can use this. We'll set it up with you, in person, in Navi Mumbai and Mumbai."],
  ['What about ABDM and ABHA?', "It's on our roadmap. We'll say more when it's actually connected, not before."],
];

/** Hero demo data: the consult card on the Health page (fictional). */
export const HERO_VITALS = [
  { label: 'BP', value: '142/92', unit: 'mmHg', flag: 'high' },
  { label: 'Pulse', value: 78, unit: 'bpm', time: '10:12 am' },
  { label: 'Temp', value: '100.8', unit: '°F', flag: 'high' },
  { label: 'SpO₂', value: 98, unit: '%', time: '10:12 am' },
];
export const HERO_RX = [
  { name: 'Dolo', strength: '650 mg', form: 'Tablet', generic: 'Paracetamol', dose: '1 tab', frequency: '1-0-1', when: 'After food', duration: '5 days' },
];
