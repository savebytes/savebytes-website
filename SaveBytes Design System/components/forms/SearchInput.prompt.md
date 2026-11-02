Search field with leading icon and clear button; pass `options` to make it a keyboard-navigable combobox (patient lookup, medicine picker).

```jsx
<SearchInput placeholder="Name, mobile or clinic number" options={[{value:'p1',label:'Priya Deshmukh',meta:'0004-2817'}]} onSelect={o => open(o)} />
```
