Bordered data table with sunken header, 44px (or 36px dense) rows and mono right-aligned numbers; use for any list of records.

```jsx
<Table dense columns={[{key:'name',label:'Patient'},{key:'mrn',label:'MRN',mono:true},{key:'amt',label:'Amount (₹)',numeric:true}]} rows={rows} onRowClick={open} />
```
