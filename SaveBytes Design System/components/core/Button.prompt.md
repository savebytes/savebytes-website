Action button in five variants and three sizes; use one primary per view.

```jsx
<Button>Join early access</Button>
<Button variant="secondary" iconRight="arrow-right">See what we're building</Button>
<Button variant="ghost" size="sm" icon="printer">Print</Button>
<Button variant="danger">Void line</Button>
<Button loading>Saving</Button>
```

- Labels in sentence case, no exclamation marks.
- `loading` swaps the leading icon for the Split byte loader and keeps the label.
- `link` variant renders inline link styling with no padding.
