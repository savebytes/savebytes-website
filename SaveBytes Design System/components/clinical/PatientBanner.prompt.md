Full-width banner fixed to the top of every single-patient screen: name, age/gender, Born, MRN and Mobile in mono, allergy strip, visit status.

```jsx
<PatientBanner name="Priya Deshmukh" age="34 y" gender="Female" born="14 Aug 1991" mrn="0004-2817" mobile="98201 44718"
  allergies={[{substance:'Penicillin',reaction:'rash'}]} status="in-consult" />
```

- `allergies={[]}` → "No known allergies"; omitted → "Allergies not recorded".
