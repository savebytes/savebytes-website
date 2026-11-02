const PATIENTS = {
  7: { name: 'Priya Deshmukh', age: '34 y', gender: 'Female', born: '14 Aug 1991', mrn: '0004-2817', mobile: '98201 44718', allergies: [{ substance: 'Penicillin', reaction: 'rash' }] },
  6: { name: 'Rohan Patil', age: '52 y', gender: 'Male', born: '02 Jan 1974', mrn: '0004-2822', mobile: '99204 18831', allergies: [] },
  8: { name: 'Aarav Joshi', age: '6 y', gender: 'Male', born: '19 Jun 2019', mrn: '0004-2840', mobile: '98670 55120', allergies: null },
  9: { name: 'Sunita Naik', age: '61 y', gender: 'Female', born: '1965', bornEstimated: true, mrn: '0004-1190', mobile: '97690 22014', allergies: [{ substance: 'Sulfa drugs', reaction: 'hives' }] },
  10: { name: 'Imran Shaikh', age: '29 y', gender: 'Male', born: '30 Nov 1996', mrn: '0004-2830', mobile: '98922 61407', allergies: [] },
  11: { name: 'Kavita Iyer', age: '45 y', gender: 'Female', born: '08 Mar 1981', mrn: '0004-2851', mobile: '99300 47219', allergies: [] },
};
const INITIAL_QUEUE = [
  { token: 5, name: 'Meera Kulkarni', age: '38 y', sex: 'F', reason: 'Thyroid review', time: '10:00 am', status: 'closed' },
  { token: 6, name: 'Rohan Patil', age: '52 y', sex: 'M', reason: 'Follow-up, BP', time: '10:15 am', status: 'signed' },
  { token: 7, name: 'Priya Deshmukh', age: '34 y', sex: 'F', reason: 'Fever, 3 days', time: '10:30 am', status: 'in-consult' },
  { token: 8, name: 'Aarav Joshi', age: '6 y', sex: 'M', reason: 'Cough', time: '10:45 am', status: 'vitals' },
  { token: 9, name: 'Sunita Naik', age: '61 y', sex: 'F', reason: 'Diabetes review', time: '11:00 am', status: 'arrived' },
  { token: 10, name: 'Imran Shaikh', age: '29 y', sex: 'M', reason: 'Back pain', time: '11:15 am', status: 'booked' },
  { token: 11, name: 'Kavita Iyer', age: '45 y', sex: 'F', reason: 'Headache', time: '11:30 am', status: 'booked' },
  { token: 4, name: 'Nikhil Sawant', age: '41 y', sex: 'M', reason: 'Acidity', time: '9:45 am', status: 'noshow' },
];
const MEDICINES = [
  { value: 'dolo', label: 'Dolo 650 mg Tablet', meta: 'Paracetamol', item: { name: 'Dolo', strength: '650 mg', form: 'Tablet', generic: 'Paracetamol', dose: '1 tab', frequency: '1-0-1', when: 'After food', duration: '5 days', instructions: 'If temp above 100 °F' } },
  { value: 'cetzine', label: 'Cetzine 10 mg Tablet', meta: 'Cetirizine', item: { name: 'Cetzine', strength: '10 mg', form: 'Tablet', generic: 'Cetirizine', dose: '1 tab', frequency: '0-0-1', when: 'After food', duration: '5 days' } },
  { value: 'pan', label: 'Pan 40 mg Tablet', meta: 'Pantoprazole', item: { name: 'Pan', strength: '40 mg', form: 'Tablet', generic: 'Pantoprazole', dose: '1 tab', frequency: '1-0-0', when: 'Before food', duration: '7 days' } },
  { value: 'azee', label: 'Azee 500 mg Tablet', meta: 'Azithromycin', item: { name: 'Azee', strength: '500 mg', form: 'Tablet', generic: 'Azithromycin', dose: '1 tab', frequency: '1-0-0', when: 'Before food', duration: '3 days' } },
  { value: 'benadryl', label: 'Benadryl Syrup', meta: 'Diphenhydramine', item: { name: 'Benadryl', strength: '', form: 'Syrup', generic: 'Diphenhydramine', dose: '5 ml', frequency: '1-1-1', when: 'After food', duration: '5 days' } },
];
const DIAGNOSES = [
  { value: 'J06.9', label: 'Acute upper respiratory infection', meta: 'J06.9' },
  { value: 'R50.9', label: 'Fever, unspecified', meta: 'R50.9' },
  { value: 'I10', label: 'Essential hypertension', meta: 'I10' },
  { value: 'E11.9', label: 'Type 2 diabetes mellitus', meta: 'E11.9' },
];
const LABS = [
  { test: 'Haemoglobin', value: '10.8', unit: 'g/dL', flag: 'low', range: '12.0–15.5' },
  { test: 'WBC count', value: '11,400', unit: '/µL', flag: 'high', range: '4,000–11,000' },
  { test: 'Platelets', value: '2.4', unit: 'lakh/µL', range: '1.5–4.5' },
  { test: 'CRP', value: '48', unit: 'mg/L', flag: 'critical-high', range: '< 5' },
  { test: 'ESR', value: '18', unit: 'mm/hr', range: '0–20' },
];
Object.assign(window, { PATIENTS, INITIAL_QUEUE, MEDICINES, DIAGNOSES, LABS });
