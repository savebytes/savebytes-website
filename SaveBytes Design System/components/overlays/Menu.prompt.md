Dropdown action list from a trigger, with icons, mono shortcuts, dividers and danger items.

```jsx
<Menu align="end" trigger={<Button variant="ghost" size="sm" icon="ellipsis" aria-label="More" />}
  items={[{label:'Repeat last prescription',icon:'repeat'},{divider:true},{label:'Void line',icon:'ban',danger:true}]} />
```
