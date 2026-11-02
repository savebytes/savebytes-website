Centred modal (radius-lg, shadow-lg, 48% navy overlay, Esc closes); use for confirmations and short forms.

```jsx
<Dialog open={open} onClose={close} title="Void this line?" description="It stays in the record, struck through."
  footer={<><Button variant="secondary" onClick={close}>Cancel</Button><Button variant="danger">Void line</Button></>}>…</Dialog>
```
