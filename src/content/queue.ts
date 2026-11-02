export const QUEUE = [
  { token: 6, name: 'Rohan Patil', age: '52 y', sex: 'M', reason: 'Follow-up, BP', time: '10:15 am', status: 'signed' },
  { token: 7, name: 'Priya Deshmukh', age: '34 y', sex: 'F', reason: 'Fever, 3 days', time: '10:30 am', status: 'in-consult' },
  { token: 8, name: 'Aarav Joshi', age: '6 y', sex: 'M', reason: 'Cough', time: '10:45 am', status: 'vitals' },
  { token: 9, name: 'Sunita Naik', age: '61 y', sex: 'F', reason: 'Diabetes review', time: '11:00 am', status: 'arrived' },
  { token: 10, name: 'Imran Shaikh', age: '29 y', sex: 'M', reason: 'Back pain', time: '11:15 am', status: 'booked' },
];

/** Fictional patient details for the hero's consult card, keyed by queue token. */
export const PATIENTS: Record<number, {
  born: string; mrn: string; mobile: string; gender: string;
  allergies: { substance: string; reaction?: string }[];
  vitals: { label: string; value: string | number; unit: string; flag?: string; time?: string }[];
}> = {
  6: { born: '02 Jun 1973', mrn: '0004-2809', mobile: '98190 22457', gender: 'Male', allergies: [], vitals: [] },
  7: { born: '14 Aug 1991', mrn: '0004-2817', mobile: '98201 44718', gender: 'Female', allergies: [{ substance: 'Penicillin', reaction: 'rash' }], vitals: [] },
  8: { born: '21 Nov 2019', mrn: '0004-2822', mobile: '97020 31864', gender: 'Male', allergies: [], vitals: [] },
  9: { born: '09 Jan 1964', mrn: '0004-2826', mobile: '98336 70512', gender: 'Female', allergies: [{ substance: 'Sulfa drugs', reaction: 'rash' }], vitals: [] },
  10: { born: '30 Apr 1996', mrn: '0004-2831', mobile: '99203 58146', gender: 'Male', allergies: [], vitals: [] },
};
