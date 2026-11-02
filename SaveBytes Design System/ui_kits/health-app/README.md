# SaveBytes Health — web app UI kit

Click-through recreation of the clinic EHR described in section 11 of `source/SAVEBYTES_DESIGN_SYSTEM.md` (no production UI exists yet; this follows the spec's component and data rules exactly, with fictional Indian clinic data). Target: 1280 × 720 laptop, compact density.

- `index.html` — app shell, routing (persisted), toasts, white-label toggle (SaveBytes blue ↔ example tenant "Arogya Clinic", which swaps only the brand scale and shows "Powered by SaveBytes").
- `Shell.jsx` — SideNav + TopBar (patient search combobox, tenant switch, account menu).
- `QueueScreen.jsx` — OPD queue with tabs; click booked → check in, checked in → vitals dialog (BMI calculated), others → consult. Register-patient drawer.
- `ConsultScreen.jsx` — patient banner + allergy strip, vitals strip, AI draft note (accept/edit/discard), ICD-10 diagnosis search, prescription with repeat-last, void-line dialog, sign dialog → signed record. Lab results tab (skeleton → table) and past visits.
- `AppointmentsScreen.jsx` — date/doctor filters, dense table, pagination.
- `data.jsx` — fictional patients, queue, medicines, diagnoses, labs.

Patients and Settings are intentionally empty — the spec does not define them.
