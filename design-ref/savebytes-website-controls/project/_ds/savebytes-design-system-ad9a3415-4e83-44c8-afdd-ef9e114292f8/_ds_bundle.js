/* @ds-bundle: {"format":4,"namespace":"SaveBytesDesignSystem_ad9a34","components":[{"name":"AiDraft","sourcePath":"components/clinical/AiDraft.jsx"},{"name":"LabResultsTable","sourcePath":"components/clinical/LabResultsTable.jsx"},{"name":"OpdQueue","sourcePath":"components/clinical/OpdQueue.jsx"},{"name":"PatientBanner","sourcePath":"components/clinical/PatientBanner.jsx"},{"name":"PrescriptionTable","sourcePath":"components/clinical/PrescriptionTable.jsx"},{"name":"ResultFlag","sourcePath":"components/clinical/ResultFlag.jsx"},{"name":"SignedRecord","sourcePath":"components/clinical/SignedRecord.jsx"},{"name":"VISIT_STATES","sourcePath":"components/clinical/VisitStatusBadge.jsx"},{"name":"VisitStatusBadge","sourcePath":"components/clinical/VisitStatusBadge.jsx"},{"name":"VitalsStrip","sourcePath":"components/clinical/VitalsStrip.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Link","sourcePath":"components/core/Link.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"CodeBlock","sourcePath":"components/display/CodeBlock.jsx"},{"name":"Table","sourcePath":"components/display/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"DatePicker","sourcePath":"components/forms/DatePicker.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"FileUpload","sourcePath":"components/forms/FileUpload.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlays/Dialog.jsx"},{"name":"Drawer","sourcePath":"components/overlays/Drawer.jsx"},{"name":"Menu","sourcePath":"components/overlays/Menu.jsx"},{"name":"Popover","sourcePath":"components/overlays/Popover.jsx"}],"sourceHashes":{"components/clinical/AiDraft.jsx":"b73210d3aea5","components/clinical/LabResultsTable.jsx":"351d64ed0ec2","components/clinical/OpdQueue.jsx":"a9140cb7873b","components/clinical/PatientBanner.jsx":"12ed89b74a4c","components/clinical/PrescriptionTable.jsx":"9a66dabcdf71","components/clinical/ResultFlag.jsx":"1c742463d27a","components/clinical/SignedRecord.jsx":"fe9584272e47","components/clinical/VisitStatusBadge.jsx":"a68814594055","components/clinical/VitalsStrip.jsx":"276e66cd5c46","components/core/Button.jsx":"927b4b4a6f39","components/core/Icon.jsx":"714281e5b6ad","components/core/Link.jsx":"6a5fd02acf2f","components/core/Logo.jsx":"9286e0f86003","components/display/Avatar.jsx":"c738dab706df","components/display/Card.jsx":"b83a42dbb0ee","components/display/CodeBlock.jsx":"47dbb96f5f1f","components/display/Table.jsx":"f82a4a41102b","components/feedback/Alert.jsx":"eee0eea4e343","components/feedback/Badge.jsx":"caeb1e6b13f1","components/feedback/EmptyState.jsx":"8dee27885a49","components/feedback/Skeleton.jsx":"0016607160c1","components/feedback/Toast.jsx":"ac8283a7e57b","components/feedback/Tooltip.jsx":"b26b7e4d0963","components/forms/Checkbox.jsx":"a36358a433d0","components/forms/DatePicker.jsx":"a0182a3c1b53","components/forms/Field.jsx":"1c87fedc4fcc","components/forms/FileUpload.jsx":"fddb549fc57e","components/forms/Radio.jsx":"087e60eae9be","components/forms/SearchInput.jsx":"67ffd8825641","components/forms/Select.jsx":"4cc0ec796dee","components/forms/Switch.jsx":"a16b2fdf6f8d","components/forms/TextInput.jsx":"f9e4e768905e","components/forms/Textarea.jsx":"215031e162af","components/navigation/Breadcrumbs.jsx":"10461fd61b69","components/navigation/Pagination.jsx":"811904920fb2","components/navigation/SideNav.jsx":"e378a97ff9db","components/navigation/SiteHeader.jsx":"22667f658866","components/navigation/Stepper.jsx":"d97c1abb411c","components/navigation/Tabs.jsx":"a63c4637edfa","components/overlays/Dialog.jsx":"58a54da0e13a","components/overlays/Drawer.jsx":"c2390425788b","components/overlays/Menu.jsx":"b2981db7b07c","components/overlays/Popover.jsx":"504a8fed3210","ui_kits/health-app/AppointmentsScreen.jsx":"7f14dd8b88fe","ui_kits/health-app/ConsultScreen.jsx":"85366dea04f1","ui_kits/health-app/QueueScreen.jsx":"f4af9f3cb5ef","ui_kits/health-app/Shell.jsx":"ea63ce2137a2","ui_kits/health-app/data.jsx":"202a1ed988eb","ui_kits/website/About.jsx":"3ef96a7ca1a7","ui_kits/website/Contact.jsx":"72e28a187757","ui_kits/website/Health.jsx":"4893bf66ca5f","ui_kits/website/Home.jsx":"b18a3c063e21","ui_kits/website/Sections.jsx":"6ee2574b5bf6"},"inlinedExternals":[],"unexposedExports":[{"name":"controlStyle","sourcePath":"components/forms/Field.jsx"},{"name":"formatDate","sourcePath":"components/forms/DatePicker.jsx"}]} */

(() => {

const __ds_ns = (window.SaveBytesDesignSystem_ad9a34 = window.SaveBytesDesignSystem_ad9a34 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.460.0/icons/';
const cache = {};
const pending = {};
function load(name) {
  if (cache[name] !== undefined) return Promise.resolve(cache[name]);
  if (!pending[name]) {
    pending[name] = fetch(CDN + name + '.svg').then(r => r.ok ? r.text() : '').catch(() => '').then(t => cache[name] = t.replace(/<!--[\s\S]*?-->/g, '').trim());
  }
  return pending[name];
}

/** Lucide icon (CDN), stroke 1.75, inherits currentColor. */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color,
  label,
  style
}) {
  const [raw, setRaw] = React.useState(cache[name] || '');
  React.useEffect(() => {
    let on = true;
    load(name).then(t => on && setRaw(t));
    return () => {
      on = false;
    };
  }, [name]);
  const svg = raw.replace(/width="24"/, 'width="100%"').replace(/height="24"/, 'height="100%"').replace(/stroke-width="[^"]*"/, 'stroke-width="' + strokeWidth + '"');
  return /*#__PURE__*/React.createElement("span", {
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flexShrink: 0,
      color: color || 'currentColor',
      lineHeight: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svg
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/clinical/ResultFlag.jsx
try { (() => {
const FLAGS = {
  high: ['arrow-up', 'High', 'var(--color-warning)'],
  low: ['arrow-down', 'Low', 'var(--color-warning)'],
  'critical-high': ['arrow-up', 'Critical high', 'var(--color-danger)'],
  'critical-low': ['arrow-down', 'Critical low', 'var(--color-danger)']
};

/** Arrow + word + colour for Observation.interpretation. Normal shows nothing (or muted "Normal"). */
function ResultFlag({
  flag,
  showNormal = false
}) {
  const f = FLAGS[flag];
  if (!f) return showNormal ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, "Normal") : null;
  const crit = flag.startsWith('critical');
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      fontSize: 13,
      lineHeight: '18px',
      fontWeight: crit ? 600 : 500,
      color: f[2],
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: f[0],
    size: 14,
    strokeWidth: 2.25
  }), f[1]);
}
Object.assign(__ds_scope, { ResultFlag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/clinical/ResultFlag.jsx", error: String((e && e.message) || e) }); }

// components/clinical/SignedRecord.jsx
try { (() => {
/** Lock icon + "Signed by Dr … · 12 Mar 2026, 11:42 am". Record is read-only. */
function SignedRecord({
  by,
  at,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--color-success-soft)',
      color: 'var(--color-success)',
      fontSize: 13,
      lineHeight: '18px',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "Signed by ", by), " \xB7 ", at));
}
Object.assign(__ds_scope, { SignedRecord });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/clinical/SignedRecord.jsx", error: String((e && e.message) || e) }); }

// components/clinical/VitalsStrip.jsx
try { (() => {
/** Row of vitals cells: label, big mono value, unit, then time or flag. */
function VitalsStrip({
  vitals = [],
  dense = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + vitals.length + ', minmax(0, 1fr))',
      border: '1px solid var(--color-line)',
      borderRadius: 'var(--radius-md)',
      background: '#fff',
      overflow: 'hidden',
      ...style
    }
  }, vitals.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: v.label,
    style: {
      padding: dense ? '8px 12px' : '12px 16px',
      borderLeft: i ? '1px solid var(--color-line)' : 0,
      minWidth: 0,
      background: v.flag && v.flag.startsWith('critical') ? 'var(--color-danger-soft)' : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: '16px',
      color: 'var(--color-text-muted)',
      whiteSpace: 'nowrap'
    }
  }, v.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      columnGap: 4,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: dense ? 18 : 24,
      lineHeight: dense ? '26px' : '32px',
      fontWeight: 500,
      fontVariantNumeric: 'tabular-nums',
      color: v.value == null ? 'var(--navy-300)' : 'var(--color-text)'
    }
  }, v.value == null ? '—' : v.value), v.unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-muted)'
    }
  }, v.unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      minHeight: 18,
      fontSize: 12,
      lineHeight: '18px',
      color: 'var(--color-text-muted)',
      fontFamily: v.flag ? undefined : 'var(--font-mono)'
    }
  }, v.flag && v.flag !== 'normal' ? /*#__PURE__*/React.createElement(__ds_scope.ResultFlag, {
    flag: v.flag
  }) : v.time || (v.note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, v.note) : null)))));
}
Object.assign(__ds_scope, { VitalsStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/clinical/VitalsStrip.jsx", error: String((e && e.message) || e) }); }

// components/core/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline text link. Underline on hover (1px, offset 3px). */
function Link({
  href = '#',
  inverse = false,
  arrow = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: inverse ? 'var(--color-link-inverse)' : 'var(--color-link)',
      textDecoration: hover ? 'underline' : 'none',
      textDecorationThickness: 1,
      textUnderlineOffset: 3,
      display: arrow ? 'inline-flex' : undefined,
      alignItems: 'center',
      gap: 4,
      fontWeight: arrow ? 500 : undefined,
      ...style
    }
  }, rest), children, arrow && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16,
    style: {
      transform: hover ? 'translateX(2px)' : 'none',
      transition: 'transform var(--duration-fast) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Link.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const TONES = {
  brand: {
    l: 'var(--color-brand)',
    r: 'var(--color-brand)',
    word: 'var(--navy-900)',
    prod: 'var(--navy-700)'
  },
  navy: {
    l: 'var(--navy-900)',
    r: 'var(--navy-900)',
    word: 'var(--navy-900)',
    prod: 'var(--navy-700)'
  },
  white: {
    l: '#fff',
    r: '#fff',
    word: '#fff',
    prod: 'var(--navy-200)'
  },
  current: {
    l: 'currentColor',
    r: 'currentColor',
    word: 'currentColor',
    prod: 'currentColor'
  },
  health: {
    l: 'var(--color-brand)',
    r: 'var(--teal-600)',
    word: 'var(--navy-900)',
    prod: 'var(--teal-700)'
  },
  platform: {
    l: 'var(--color-brand)',
    r: 'var(--navy-900)',
    word: 'var(--navy-900)',
    prod: 'var(--navy-700)'
  }
};

/** The Split byte mark (48-grid geometry from the brand spec) with optional wordmark and motion. */
function Logo({
  lockup = 'mark',
  tone = 'brand',
  size = 48,
  product,
  animate = 'none',
  hoverBreathe = false,
  title = 'SaveBytes'
}) {
  const raw = React.useId ? React.useId() : String(Math.random());
  const id = 'sb' + raw.replace(/[^a-zA-Z0-9]/g, '');
  const [hover, setHover] = React.useState(false);
  const t = TONES[tone] || TONES.brand;
  const cutW = size <= 32 ? 6.5 : 5;
  const intro = animate === 'intro';
  const loader = animate === 'loader';
  const breathe = hoverBreathe && hover ? 1.5 : 0;
  const halfTr = {
    transition: 'transform 200ms var(--ease-out)'
  };
  const prodWord = product || (tone === 'health' ? 'Health' : tone === 'platform' ? 'Platform' : null);
  const mark = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 48 48",
    width: size,
    height: size,
    role: lockup === 'mark' ? 'img' : undefined,
    "aria-label": lockup === 'mark' ? title : undefined,
    "aria-hidden": lockup === 'mark' ? undefined : true,
    style: {
      display: 'block',
      flexShrink: 0,
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: id + 'c'
  }, /*#__PURE__*/React.createElement("rect", {
    width: "48",
    height: "48",
    rx: "16"
  })), /*#__PURE__*/React.createElement("mask", {
    id: id + 'm',
    maskUnits: "userSpaceOnUse",
    x: "-8",
    y: "-8",
    width: "64",
    height: "64"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "-8",
    y: "-8",
    width: "64",
    height: "64",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    pathLength: "1",
    d: "M34 -8C34 24 14 24 14 56",
    fill: "none",
    stroke: "#000",
    strokeWidth: cutW,
    style: intro ? {
      strokeDasharray: 1,
      strokeDashoffset: 1,
      animation: 'sb-cut 580ms cubic-bezier(.6,0,.2,1) 320ms forwards'
    } : loader ? {
      strokeDasharray: 1,
      strokeDashoffset: 1,
      animation: 'sb-cut-loop 1400ms cubic-bezier(.6,0,.2,1) infinite'
    } : undefined
  }))), /*#__PURE__*/React.createElement("g", {
    style: intro ? {
      transformBox: 'fill-box',
      transformOrigin: 'center',
      animation: 'sb-land 320ms cubic-bezier(.2,.8,.2,1) both'
    } : undefined
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: 'url(#' + id + 'c)',
    mask: 'url(#' + id + 'm)'
  }, /*#__PURE__*/React.createElement("path", {
    d: "M-8 -8H34C34 24 14 24 14 56H-8Z",
    fill: t.l,
    style: intro ? {
      animation: 'sb-l 700ms cubic-bezier(.3,.7,.3,1) 900ms both'
    } : {
      ...halfTr,
      transform: 'translate(' + -breathe + 'px,' + breathe * 0.4 + 'px)'
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: "M56 -8H34C34 24 14 24 14 56H56Z",
    fill: t.r,
    style: intro ? {
      animation: 'sb-r 700ms cubic-bezier(.3,.7,.3,1) 900ms both'
    } : {
      ...halfTr,
      transform: 'translate(' + breathe + 'px,' + -breathe * 0.4 + 'px)'
    }
  }))));
  if (lockup === 'mark') {
    return /*#__PURE__*/React.createElement("span", {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: 'inline-flex',
        lineHeight: 0
      }
    }, mark);
  }
  const stacked = lockup === 'stacked';
  const wordSize = stacked ? size * 0.5 : size * (40 / 48);
  const wordAnim = intro ? {
    animation: 'sb-word 400ms var(--ease-out) 1200ms both'
  } : undefined;
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": title + (prodWord ? ' ' + prodWord : ''),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      flexDirection: stacked ? 'column' : 'row',
      alignItems: 'center',
      gap: stacked ? size * 0.25 : size * (14 / 48),
      lineHeight: 1
    }
  }, mark, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: wordSize * (11 / 40),
      fontFamily: 'var(--font-sans)',
      fontSize: wordSize,
      letterSpacing: '-0.02em',
      whiteSpace: 'nowrap',
      ...wordAnim
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: t.word
    }
  }, "SaveBytes"), prodWord && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: t.prod
    }
  }, prodWord)));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 'var(--control-sm)',
    padding: '0 12px',
    fontSize: 13,
    lineHeight: '18px',
    gap: 6,
    icon: 16
  },
  md: {
    height: 'var(--control-md)',
    padding: '0 16px',
    fontSize: 14,
    lineHeight: '20px',
    gap: 8,
    icon: 20
  },
  lg: {
    height: 'var(--control-lg)',
    padding: '0 20px',
    fontSize: 16,
    lineHeight: '24px',
    gap: 8,
    icon: 20
  }
};
function look(variant, state) {
  const {
    hover,
    press,
    disabled
  } = state;
  switch (variant) {
    case 'secondary':
      return {
        background: disabled ? 'var(--navy-50)' : press ? 'var(--navy-100)' : hover ? 'var(--navy-50)' : '#fff',
        color: disabled ? 'var(--navy-400)' : 'var(--color-text)',
        border: '1px solid ' + (disabled ? 'var(--color-line-strong)' : 'var(--color-border-control)')
      };
    case 'ghost':
      return {
        background: press ? 'var(--navy-100)' : hover ? 'var(--navy-50)' : 'transparent',
        color: disabled ? 'var(--navy-400)' : 'var(--color-text)',
        border: '1px solid transparent'
      };
    case 'danger':
      return {
        background: disabled ? 'var(--navy-200)' : press ? '#8F0B21' : hover ? '#A60D26' : 'var(--color-danger)',
        color: disabled ? 'var(--navy-500)' : '#fff',
        border: '1px solid transparent'
      };
    case 'link':
      return {
        background: 'transparent',
        color: disabled ? 'var(--navy-400)' : press ? 'var(--color-brand-pressed)' : 'var(--color-link)',
        border: '1px solid transparent',
        padding: 0,
        height: 'auto',
        textDecoration: hover && !disabled ? 'underline' : 'none',
        textUnderlineOffset: 3
      };
    default:
      return {
        background: disabled ? 'var(--navy-200)' : press ? 'var(--color-brand-pressed)' : hover ? 'var(--color-brand-hover)' : 'var(--color-brand)',
        color: disabled ? 'var(--navy-500)' : 'var(--color-on-brand)',
        border: '1px solid transparent'
      };
  }
}

/** Primary, secondary, ghost, danger and link buttons. One primary per view. */
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  href,
  type = 'button',
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const off = disabled || loading;
  const Tag = href ? 'a' : 'button';
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    borderRadius: 'var(--radius-sm)',
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    lineHeight: s.lineHeight,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    cursor: off ? loading ? 'progress' : 'not-allowed' : 'pointer',
    boxSizing: 'border-box',
    transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : off,
    "aria-disabled": off || undefined,
    "aria-busy": loading || undefined,
    onClick: off ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...look(variant, {
        hover: hover && !off,
        press: press && !off,
        disabled
      }),
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: 16,
    tone: "current",
    animate: "loader"
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon === 20 && size === 'sm' ? 16 : size === 'sm' ? 16 : s.icon
  }) : null, children, iconRight && !loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === 'sm' ? 16 : s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/clinical/AiDraft.jsx
try { (() => {
/** Machine-drafted content on warning-soft. Never saved silently. */
function AiDraft({
  title = 'Draft, review before saving',
  children,
  onAccept,
  onEdit,
  onDiscard,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-warning-soft)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      lineHeight: '18px',
      fontWeight: 600,
      color: 'var(--color-warning)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "pencil-line",
    size: 16
  }), title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--color-text)'
    }
  }, children), (onAccept || onEdit || onDiscard) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 4
    }
  }, onAccept && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "check",
    onClick: onAccept
  }, "Accept"), onEdit && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "ghost",
    icon: "pencil",
    onClick: onEdit
  }, "Edit"), onDiscard && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "ghost",
    onClick: onDiscard
  }, "Discard")));
}
Object.assign(__ds_scope, { AiDraft });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/clinical/AiDraft.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
const initials = n => (n || '').split(/\s+/).filter(Boolean).filter(w => !/^dr\.?$/i.test(w)).slice(0, 2).map(w => w[0].toUpperCase()).join('');

/** Initials on blue-50 with blue-900 text, radius-full. */
function Avatar({
  name,
  src,
  size = 32,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": name,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--blue-50)',
      color: 'var(--blue-900)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: Math.round(size * 0.4),
      fontWeight: 600,
      flexShrink: 0,
      overflow: 'hidden',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
/** White surface with line border, radius-md. Optional header (title, subtitle, actions). */
function Card({
  title,
  subtitle,
  actions,
  footer,
  variant = 'product',
  padding,
  elevated = false,
  interactive = false,
  onClick,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const web = variant === 'website';
  const pad = padding !== undefined ? padding : web ? 'var(--space-6)' : 'var(--space-4)';
  return /*#__PURE__*/React.createElement("section", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--color-surface)',
      border: '1px solid ' + (interactive && hover ? 'var(--color-line-strong)' : 'var(--color-line)'),
      borderRadius: web ? 'var(--radius-lg)' : 'var(--radius-md)',
      boxShadow: elevated ? 'var(--shadow-sm)' : 'none',
      cursor: interactive ? 'pointer' : undefined,
      transition: 'border-color var(--duration-fast) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      ...style
    }
  }, (title || actions) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      padding: pad,
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: web ? 24 : 18,
      lineHeight: web ? '32px' : '26px',
      fontWeight: 600,
      letterSpacing: web ? '-0.005em' : 0
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: '18px',
      color: 'var(--color-text-muted)',
      marginTop: 2
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexShrink: 0
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad,
      flex: 1,
      minWidth: 0
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '12px ' + (web ? '24px' : '16px'),
      borderTop: '1px solid var(--color-line)',
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/CodeBlock.jsx
try { (() => {
/** surface-sunken block, Plex Mono 13, radius-md, copy button. */
function CodeBlock({
  code = '',
  language,
  style
}) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard && navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--color-surface-sunken)',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, language && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: '16px',
      color: 'var(--color-text-muted)',
      padding: '10px 14px 0',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, language), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Copy code",
    onClick: copy,
    style: {
      position: 'absolute',
      top: 6,
      right: 6,
      height: 28,
      padding: '0 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      border: '1px solid var(--color-line)',
      background: '#fff',
      borderRadius: 'var(--radius-sm)',
      fontSize: 12,
      color: 'var(--navy-700)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: copied ? 'check' : 'copy',
    size: 14
  }), copied ? 'Copied' : 'Copy'), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: '12px 14px',
      overflowX: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: '20px',
      color: 'var(--color-text)'
    }
  }, /*#__PURE__*/React.createElement("code", null, code)));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/display/Table.jsx
try { (() => {
/** Data table. Header surface-sunken, rows 44px (36 dense), mono right-aligned numbers, hover navy-50, selected brand-soft. */
function Table({
  columns = [],
  rows = [],
  rowKey = 'id',
  dense = false,
  selectedKey,
  onRowClick,
  caption,
  style
}) {
  const [hover, setHover] = React.useState(null);
  const h = dense ? 36 : 44;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--color-line)',
      borderRadius: 'var(--radius-md)',
      overflow: 'auto',
      background: '#fff',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 14,
      lineHeight: '20px'
    }
  }, caption && /*#__PURE__*/React.createElement("caption", {
    style: {
      textAlign: 'left',
      padding: '12px 16px',
      fontWeight: 600
    }
  }, caption), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    scope: "col",
    style: {
      height: dense ? 32 : 36,
      padding: '0 12px',
      background: 'var(--color-surface-sunken)',
      fontSize: 13,
      lineHeight: '18px',
      fontWeight: 500,
      color: 'var(--color-text-secondary)',
      textAlign: c.align || (c.numeric ? 'right' : 'left'),
      whiteSpace: 'nowrap',
      width: c.width,
      borderBottom: '1px solid var(--color-line)'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => {
    const k = r[rowKey] !== undefined ? r[rowKey] : i;
    const sel = selectedKey !== undefined && selectedKey === k;
    return /*#__PURE__*/React.createElement("tr", {
      key: k,
      onClick: onRowClick ? () => onRowClick(r) : undefined,
      onMouseEnter: () => setHover(k),
      onMouseLeave: () => setHover(null),
      style: {
        background: sel ? 'var(--color-brand-soft)' : hover === k ? 'var(--navy-50)' : 'transparent',
        cursor: onRowClick ? 'pointer' : undefined,
        transition: 'background var(--duration-fast) var(--ease-out)'
      }
    }, columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        height: h,
        padding: '0 12px',
        borderBottom: i === rows.length - 1 ? 0 : '1px solid var(--color-line)',
        textAlign: c.align || (c.numeric ? 'right' : 'left'),
        fontFamily: c.mono || c.numeric ? 'var(--font-mono)' : undefined,
        fontVariantNumeric: 'tabular-nums',
        verticalAlign: 'middle',
        color: 'var(--color-text)'
      }
    }, c.render ? c.render(r) : r[c.key])));
  }))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Table.jsx", error: String((e && e.message) || e) }); }

// components/clinical/LabResultsTable.jsx
try { (() => {
/** DiagnosticReport → Observations: test, result (mono, right), flag, reference range. */
function LabResultsTable({
  results = [],
  dense = true,
  title,
  style
}) {
  const rows = results.map((r, i) => ({
    id: i,
    ...r
  }));
  return /*#__PURE__*/React.createElement(__ds_scope.Table, {
    dense: dense,
    caption: title,
    style: style,
    rows: rows,
    columns: [{
      key: 'test',
      label: 'Test'
    }, {
      key: 'value',
      label: 'Result',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontWeight: r.flag && r.flag !== 'normal' ? 500 : 400,
          color: r.flag && r.flag.startsWith('critical') ? 'var(--color-danger)' : undefined
        }
      }, r.value, " ", /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--color-text-muted)',
          fontSize: 12,
          fontWeight: 400
        }
      }, r.unit))
    }, {
      key: 'flag',
      label: 'Flag',
      width: 130,
      render: r => /*#__PURE__*/React.createElement(__ds_scope.ResultFlag, {
        flag: r.flag
      })
    }, {
      key: 'range',
      label: 'Reference range',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          color: 'var(--color-text-muted)',
          fontSize: 13
        }
      }, r.range)
    }]
  });
}
Object.assign(__ds_scope, { LabResultsTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/clinical/LabResultsTable.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const T = {
  info: ['var(--color-info-soft)', 'var(--color-info)', 'info'],
  success: ['var(--color-success-soft)', 'var(--color-success)', 'circle-check'],
  warning: ['var(--color-warning-soft)', 'var(--color-warning)', 'triangle-alert'],
  danger: ['var(--color-danger-soft)', 'var(--color-danger)', 'circle-alert']
};

/** Callout: icon + title + text + optional action. Soft background, no stripe. */
function Alert({
  tone = 'info',
  title,
  children,
  action,
  onClose,
  style
}) {
  const [bg, fg, icon] = T[tone] || T.info;
  return /*#__PURE__*/React.createElement("div", {
    role: tone === 'danger' ? 'alert' : 'status',
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      background: bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: fg,
    style: {
      marginTop: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 600,
      color: tone === 'info' ? 'var(--blue-900)' : fg
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--color-text-secondary)'
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: 0,
      background: 'none',
      padding: 2,
      cursor: 'pointer',
      color: 'var(--navy-600)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const TONE = {
  neutral: ['var(--navy-100)', 'var(--navy-700)', 'var(--navy-700)'],
  brand: ['var(--color-brand-soft)', 'var(--blue-900)', 'var(--color-brand)'],
  success: ['var(--color-success-soft)', 'var(--color-success)', 'var(--color-success)'],
  warning: ['var(--color-warning-soft)', 'var(--color-warning)', 'var(--color-warning)'],
  danger: ['var(--color-danger-soft)', 'var(--color-danger)', 'var(--color-danger)'],
  health: ['var(--color-health-soft)', 'var(--color-health-text)', 'var(--color-health-text)']
};

/** Small status/category label. Soft by default, solid for emphasis. */
function Badge({
  tone = 'neutral',
  variant = 'soft',
  dot = false,
  icon,
  pill = false,
  children,
  style
}) {
  const [soft, text, solid] = TONE[tone] || TONE.neutral;
  const isSolid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 20,
      padding: '0 6px',
      borderRadius: pill ? 9999 : 'var(--radius-xs)',
      background: isSolid ? solid : soft,
      color: isSolid ? '#fff' : text,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: isSolid ? '#fff' : solid
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12,
    strokeWidth: 2
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/clinical/PrescriptionTable.jsx
try { (() => {
const th = {
  height: 32,
  padding: '0 10px',
  background: 'var(--color-surface-sunken)',
  fontSize: 13,
  lineHeight: '18px',
  fontWeight: 500,
  color: 'var(--color-text-secondary)',
  textAlign: 'left',
  whiteSpace: 'nowrap',
  borderBottom: '1px solid var(--color-line)'
};

/** MedicationRequest lines grouped by visit. Frequency in Indian 1-0-1 notation. */
function PrescriptionTable({
  items = [],
  showLegend = true,
  dense = false,
  actions,
  style
}) {
  const td = {
    padding: dense ? '8px 10px' : '10px 10px',
    borderBottom: '1px solid var(--color-line)',
    verticalAlign: 'top',
    fontSize: 14,
    lineHeight: '20px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--color-line)',
      borderRadius: 'var(--radius-md)',
      overflow: 'auto',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      width: 36
    }
  }, "#"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Medicine"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Dose"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Frequency"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "When"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Duration"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Instructions"), actions && /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      width: 40
    },
    "aria-label": "Actions"
  }))), /*#__PURE__*/React.createElement("tbody", null, items.map((m, i) => {
    const v = m.voided;
    const strike = v ? {
      textDecoration: 'line-through',
      color: 'var(--color-text-muted)'
    } : null;
    return /*#__PURE__*/React.createElement("tr", {
      key: i,
      style: {
        background: v ? 'var(--navy-50)' : undefined
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        fontFamily: 'var(--font-mono)',
        color: 'var(--color-text-muted)'
      }
    }, i + 1), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 500,
        ...strike
      }
    }, m.name, " ", m.strength, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 400,
        color: 'var(--color-text-muted)'
      }
    }, m.form)), m.generic && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        lineHeight: '16px',
        color: 'var(--color-text-muted)',
        ...strike
      }
    }, m.generic), v && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      tone: "danger"
    }, "Voided"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--color-text-secondary)'
      }
    }, m.voidReason))), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        fontFamily: 'var(--font-mono)',
        whiteSpace: 'nowrap',
        ...strike
      }
    }, m.dose), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        fontFamily: 'var(--font-mono)',
        fontWeight: 500,
        whiteSpace: 'nowrap',
        ...strike
      }
    }, m.frequency), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        whiteSpace: 'nowrap',
        ...strike
      }
    }, m.when), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        fontFamily: 'var(--font-mono)',
        whiteSpace: 'nowrap',
        ...strike
      }
    }, m.duration), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        color: 'var(--color-text-secondary)',
        ...strike
      }
    }, m.instructions), actions && /*#__PURE__*/React.createElement("td", {
      style: td
    }, actions(m, i)));
  })))), showLegend && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 12,
      lineHeight: '16px',
      color: 'var(--color-text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "1-0-1"), " = morning \u2013 afternoon \u2013 night"));
}
Object.assign(__ds_scope, { PrescriptionTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/clinical/PrescriptionTable.jsx", error: String((e && e.message) || e) }); }

// components/clinical/VisitStatusBadge.jsx
try { (() => {
const VISIT_STATES = {
  booked: ['Booked', 'neutral', 'soft'],
  arrived: ['Checked in', 'brand', 'soft'],
  vitals: ['Vitals taken', 'brand', 'soft'],
  'in-consult': ['In consult', 'brand', 'solid'],
  signed: ['Signed', 'success', 'soft'],
  closed: ['Closed', 'neutral', 'soft'],
  noshow: ['No-show', 'warning', 'soft']
};

/** Badge for an OPD visit state (booked → signed). */
function VisitStatusBadge({
  status = 'booked',
  style
}) {
  const [label, tone, variant] = VISIT_STATES[status] || VISIT_STATES.booked;
  return /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: tone,
    variant: variant,
    icon: status === 'signed' ? 'check' : undefined,
    dot: status === 'in-consult',
    style: style
  }, label);
}
Object.assign(__ds_scope, { VISIT_STATES, VisitStatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/clinical/VisitStatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/clinical/OpdQueue.jsx
try { (() => {
function Row({
  r,
  active,
  onSelect,
  last,
  dense
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onSelect && onSelect(r),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    "aria-current": active || undefined,
    style: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '56px minmax(0,1fr) auto auto',
      alignItems: 'center',
      gap: 16,
      padding: dense ? '8px 16px' : '12px 16px',
      border: 0,
      borderBottom: last ? 0 : '1px solid var(--color-line)',
      background: active ? 'var(--color-brand-soft)' : h ? 'var(--navy-50)' : '#fff',
      textAlign: 'left',
      cursor: onSelect ? 'pointer' : 'default',
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-text)',
      transition: 'background var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: dense ? 20 : 24,
      lineHeight: '32px',
      fontWeight: 500,
      color: active ? 'var(--blue-900)' : 'var(--color-text)'
    }
  }, String(r.token).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 15,
      lineHeight: '22px',
      fontWeight: 600
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      lineHeight: '18px',
      color: 'var(--color-text-muted)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, r.age, " \xB7 ", r.sex, r.reason ? ' · ' + r.reason : '')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--color-text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, r.time), /*#__PURE__*/React.createElement(__ds_scope.VisitStatusBadge, {
    status: r.status
  })));
}

/** OPD queue: token (mono, large), name, age/sex · reason, time, status. Patient in consult highlighted. */
function OpdQueue({
  rows = [],
  activeToken,
  onSelect,
  dense = false,
  style
}) {
  const act = activeToken !== undefined ? activeToken : (rows.find(r => r.status === 'in-consult') || {}).token;
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      border: '1px solid var(--color-line)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: '#fff',
      ...style
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement(Row, {
    key: r.token,
    r: r,
    active: r.token === act,
    onSelect: onSelect,
    last: i === rows.length - 1,
    dense: dense
  })));
}
Object.assign(__ds_scope, { OpdQueue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/clinical/OpdQueue.jsx", error: String((e && e.message) || e) }); }

// components/clinical/PatientBanner.jsx
try { (() => {
const Meta = ({
  label,
  children,
  mono
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'inline-flex',
    gap: 6,
    alignItems: 'baseline',
    whiteSpace: 'nowrap'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 12,
    lineHeight: '16px',
    color: 'var(--color-text-muted)'
  }
}, label), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 14,
    lineHeight: '20px',
    color: 'var(--color-text)',
    fontFamily: mono ? 'var(--font-mono)' : undefined
  }
}, children));

/** Fixed single-patient header: identity + allergy strip + visit status. */
function PatientBanner({
  name,
  age,
  gender,
  born,
  bornEstimated = false,
  mrn,
  mobile,
  allergies,
  status,
  actions,
  style
}) {
  const known = Array.isArray(allergies) && allergies.length > 0;
  const none = Array.isArray(allergies) && allergies.length === 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--color-line)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '12px 20px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 20,
      lineHeight: '28px',
      fontWeight: 600,
      letterSpacing: '-0.005em'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, age, " \xB7 ", gender)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap',
      flex: 1
    }
  }, born && /*#__PURE__*/React.createElement(Meta, {
    label: "Born"
  }, born, bornEstimated ? ' (est.)' : ''), mrn && /*#__PURE__*/React.createElement(Meta, {
    label: "MRN",
    mono: true
  }, mrn), mobile && /*#__PURE__*/React.createElement(Meta, {
    label: "Mobile",
    mono: true
  }, mobile)), status && /*#__PURE__*/React.createElement(__ds_scope.VisitStatusBadge, {
    status: status
  }), actions), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 20px',
      fontSize: 13,
      lineHeight: '18px',
      background: known ? 'var(--color-danger-soft)' : 'var(--color-surface-subtle)',
      color: known ? 'var(--color-danger)' : 'var(--color-text-muted)',
      borderTop: '1px solid ' + (known ? 'transparent' : 'var(--color-line)')
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: known ? 'triangle-alert' : none ? 'check' : 'minus',
    size: 16
  }), known ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, "Known allergies"), ' ', allergies.map((a, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: 'var(--navy-900)'
    }
  }, i ? ' · ' : '', a.substance, a.reaction ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, " (", a.reaction, ")") : null))) : none ? 'No known allergies' : 'Allergies not recorded'));
}
Object.assign(__ds_scope, { PatientBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/clinical/PatientBanner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/** Empty / error state: short sentence, one action. */
function EmptyState({
  icon = 'inbox',
  title,
  children,
  action,
  tone = 'neutral',
  style
}) {
  const c = tone === 'danger' ? 'var(--color-danger)' : 'var(--navy-500)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 8,
      padding: '32px 24px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-sm)',
      background: tone === 'danger' ? 'var(--color-danger-soft)' : 'var(--navy-100)',
      color: c,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: '22px',
      fontWeight: 600,
      marginTop: 4
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--color-text-muted)',
      maxWidth: 420
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
/** navy-100 loading placeholder. Use instead of spinners for content areas. */
function Skeleton({
  width = '100%',
  height = 14,
  radius = 4,
  lines = 1,
  gap = 8,
  style
}) {
  const one = (w, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: w,
      height,
      borderRadius: radius,
      background: 'var(--navy-100)',
      animation: 'sb-skeleton 1.4s ease-in-out infinite',
      ...style
    }
  });
  if (lines <= 1) return one(width, 0);
  return /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-label": "Loading",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap
    }
  }, Array.from({
    length: lines
  }, (_, i) => one(i === lines - 1 ? '60%' : width, i)));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const T = {
  info: ['info', 'var(--blue-400)'],
  success: ['circle-check', '#5FD3A5'],
  warning: ['triangle-alert', '#F5B66B'],
  danger: ['circle-alert', '#FF8A9A']
};

/** Bottom-right notification. Auto-hides after 5s unless tone is danger. */
function Toast({
  tone = 'success',
  children,
  actionLabel,
  onAction,
  onClose,
  duration = 5000,
  floating = false,
  style
}) {
  React.useEffect(() => {
    if (tone === 'danger' || !onClose || !duration) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [tone, onClose, duration]);
  const [icon, c] = T[tone] || T.info;
  return /*#__PURE__*/React.createElement("div", {
    role: tone === 'danger' ? 'alert' : 'status',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 280,
      maxWidth: 420,
      padding: '10px 12px 10px 14px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--navy-900)',
      color: '#fff',
      boxShadow: 'var(--shadow-lg)',
      fontSize: 14,
      lineHeight: '20px',
      animation: 'sb-rise var(--duration-base) var(--ease-out)',
      ...(floating ? {
        position: 'fixed',
        right: 24,
        bottom: 24,
        zIndex: 100
      } : null),
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: c
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), actionLabel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      border: 0,
      background: 'none',
      color: 'var(--blue-400)',
      font: 'inherit',
      fontWeight: 500,
      cursor: 'pointer',
      padding: '4px 6px'
    }
  }, actionLabel), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: 0,
      background: 'none',
      color: 'var(--navy-300)',
      cursor: 'pointer',
      padding: 4,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** navy-900 tooltip with white text on hover/focus. */
function Tooltip({
  label,
  placement = 'top',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 6px)'
  } : {
    bottom: 'calc(100% + 6px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      zIndex: 50,
      background: 'var(--navy-900)',
      color: '#fff',
      fontSize: 12,
      lineHeight: '16px',
      padding: '6px 8px',
      borderRadius: 'var(--radius-xs)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      animation: 'sb-fade var(--duration-base) var(--ease-out)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** 16px checkbox, radius-xs, brand when checked. Supports indeterminate. */
function Checkbox({
  label,
  description,
  checked,
  defaultChecked = false,
  indeterminate = false,
  onChange,
  disabled,
  id
}) {
  const auto = React.useId ? React.useId() : undefined;
  const fid = id || auto;
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const filled = on || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 16,
      height: 16,
      marginTop: 2,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: fid,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    ref: el => el && (el.indeterminate = indeterminate),
    onChange: e => {
      if (checked === undefined) setInner(e.target.checked);
      onChange && onChange(e.target.checked);
    },
    style: {
      position: 'absolute',
      inset: 0,
      margin: 0,
      opacity: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + (filled ? 'var(--color-brand)' : 'var(--color-border-control)'),
      background: filled ? 'var(--color-brand)' : '#fff',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-out)',
      pointerEvents: 'none'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 12,
    strokeWidth: 3
  }) : on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    strokeWidth: 3
  }) : null)), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--color-text)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      lineHeight: '16px',
      color: 'var(--color-text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/** Label above, control, helper or error below. Shared anatomy for every form control. */
function Field({
  label,
  htmlFor,
  helper,
  error,
  required,
  optional,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontSize: 'var(--text-label-size)',
      lineHeight: 'var(--text-label-lh)',
      fontWeight: 500,
      color: 'var(--color-text)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--color-danger)',
      marginLeft: 2
    }
  }, "*"), optional && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-muted)',
      fontWeight: 400,
      marginLeft: 6
    }
  }, "Optional")), children, error ? /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      lineHeight: '16px',
      color: 'var(--color-danger)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-alert",
    size: 16
  }), error) : helper ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: '16px',
      color: 'var(--color-text-muted)'
    }
  }, helper) : null);
}
function controlStyle({
  focus,
  hover,
  error,
  disabled,
  size = 'md',
  mono
}) {
  const h = size === 'sm' ? 'var(--control-sm)' : size === 'lg' ? 'var(--control-lg)' : 'var(--control-md)';
  return {
    height: h,
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 12px',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid ' + (error ? 'var(--color-danger)' : focus ? 'var(--color-brand)' : hover && !disabled ? 'var(--navy-500)' : 'var(--color-border-control)'),
    background: disabled ? 'var(--navy-50)' : '#fff',
    color: disabled ? 'var(--navy-500)' : 'var(--color-text)',
    fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
    fontSize: size === 'lg' ? 16 : size === 'sm' ? 13 : 14,
    lineHeight: '20px',
    outline: 'none',
    boxShadow: focus ? '0 0 0 2px #fff, 0 0 0 4px var(--color-focus-ring)' : 'none',
    transition: 'border-color var(--duration-fast) var(--ease-out)',
    cursor: disabled ? 'not-allowed' : undefined
  };
}
Object.assign(__ds_scope, { Field, controlStyle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/DatePicker.jsx
try { (() => {
const M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const formatDate = d => d ? d.getDate() + ' ' + M[d.getMonth()] + ' ' + d.getFullYear() : '';
const same = (a, b) => a && b && a.toDateString() === b.toDateString();

/** Date field showing "12 Mar 2026" with a calendar popover. Optional time select ("10:30 am"). */
function DatePicker({
  label,
  helper,
  error,
  value,
  defaultValue,
  onChange,
  withTime = false,
  time,
  onTimeChange,
  times,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue || null);
  const v = value !== undefined ? value : inner;
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState(() => {
    const d = v || new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [t, setT] = React.useState(time || '10:30 am');
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = e => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  const pick = d => {
    if (value === undefined) setInner(d);
    onChange && onChange(d);
    setOpen(false);
  };
  const first = (view.getDay() + 6) % 7;
  const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells = Array.from({
    length: first
  }, () => null).concat(Array.from({
    length: days
  }, (_, i) => new Date(view.getFullYear(), view.getMonth(), i + 1)));
  const today = new Date();
  const slots = times || ['9:00 am', '9:30 am', '10:00 am', '10:30 am', '11:00 am', '11:30 am', '12:00 pm', '4:00 pm', '4:30 pm', '5:00 pm', '5:30 pm', '6:00 pm'];
  const navBtn = {
    width: 28,
    height: 28,
    border: 0,
    borderRadius: 4,
    background: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--navy-700)'
  };
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    helper: helper,
    error: error,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o),
    style: {
      ...__ds_scope.controlStyle({
        focus: open,
        error
      }),
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      textAlign: 'left',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar",
    size: 16,
    color: "var(--navy-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: v ? 'var(--color-text)' : 'var(--color-text-muted)'
    }
  }, v ? formatDate(v) : 'DD MMM YYYY')), open && /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": "Choose date",
    style: {
      position: 'absolute',
      zIndex: 30,
      top: 'calc(100% + 4px)',
      left: 0,
      width: 272,
      padding: 12,
      background: '#fff',
      border: '1px solid var(--color-line)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous month",
    style: navBtn,
    onClick: () => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, M[view.getMonth()], " ", view.getFullYear()), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next month",
    style: navBtn,
    onClick: () => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 2,
      textAlign: 'center'
    }
  }, ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      fontSize: 12,
      lineHeight: '24px',
      color: 'var(--color-text-muted)'
    }
  }, d)), cells.map((d, i) => d ? /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: () => pick(d),
    style: {
      height: 32,
      border: same(d, today) && !same(d, v) ? '1px solid var(--color-line-strong)' : '1px solid transparent',
      borderRadius: 4,
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      background: same(d, v) ? 'var(--color-brand)' : 'transparent',
      color: same(d, v) ? '#fff' : 'var(--color-text)'
    }
  }, d.getDate()) : /*#__PURE__*/React.createElement("span", {
    key: i
  }))))), withTime && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 132
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      pointerEvents: 'none',
      color: 'var(--navy-500)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 16
  })), /*#__PURE__*/React.createElement("select", {
    "aria-label": "Time",
    value: time || t,
    onChange: e => {
      setT(e.target.value);
      onTimeChange && onTimeChange(e.target.value);
    },
    style: {
      ...__ds_scope.controlStyle({}),
      appearance: 'none',
      WebkitAppearance: 'none',
      paddingLeft: 36,
      cursor: 'pointer'
    }
  }, slots.map(s => /*#__PURE__*/React.createElement("option", {
    key: s
  }, s))))));
}
Object.assign(__ds_scope, { formatDate, DatePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DatePicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/FileUpload.jsx
try { (() => {
const fmt = b => b > 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(b / 1024)) + ' KB';

/** Drop zone + file list. */
function FileUpload({
  label,
  helper,
  accept,
  multiple = true,
  files: controlled,
  onChange,
  hint = 'PDF, JPG or PNG up to 10 MB'
}) {
  const [inner, setInner] = React.useState([]);
  const files = controlled || inner;
  const set = f => {
    if (!controlled) setInner(f);
    onChange && onChange(f);
  };
  const [drag, setDrag] = React.useState(false);
  const ref = React.useRef(null);
  const add = list => set([...files, ...Array.from(list).map(f => ({
    name: f.name,
    size: f.size
  }))]);
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    helper: helper
  }, /*#__PURE__*/React.createElement("div", {
    onDragOver: e => {
      e.preventDefault();
      setDrag(true);
    },
    onDragLeave: () => setDrag(false),
    onDrop: e => {
      e.preventDefault();
      setDrag(false);
      add(e.dataTransfer.files);
    },
    style: {
      border: '1px dashed ' + (drag ? 'var(--color-brand)' : 'var(--color-border-control)'),
      background: drag ? 'var(--color-brand-soft)' : 'var(--navy-50)',
      borderRadius: 'var(--radius-md)',
      padding: '20px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      transition: 'background var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-sm)',
      background: '#fff',
      border: '1px solid var(--color-line)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--navy-600)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "upload",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: '20px'
    }
  }, "Drop files here or ", /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => ref.current && ref.current.click(),
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      font: 'inherit',
      fontWeight: 500,
      color: 'var(--color-link)',
      cursor: 'pointer'
    }
  }, "browse")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      lineHeight: '16px',
      color: 'var(--color-text-muted)'
    }
  }, hint)), /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "file",
    accept: accept,
    multiple: multiple,
    onChange: e => add(e.target.files),
    style: {
      display: 'none'
    }
  })), files.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, files.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: f.name + i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 10px',
      border: '1px solid var(--color-line)',
      borderRadius: 'var(--radius-sm)',
      fontSize: 14,
      lineHeight: '20px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "file-text",
    size: 16,
    color: "var(--navy-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, f.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--color-text-muted)'
    }
  }, fmt(f.size)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": 'Remove ' + f.name,
    onClick: () => set(files.filter((_, j) => j !== i)),
    style: {
      border: 0,
      background: 'none',
      padding: 4,
      cursor: 'pointer',
      color: 'var(--navy-500)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  }))))));
}
Object.assign(__ds_scope, { FileUpload });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FileUpload.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Radio group. 16px circles, brand when checked. */
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  label,
  direction = 'column',
  disabled
}) {
  const auto = React.useId ? React.useId() : 'r';
  const n = name || auto;
  const [inner, setInner] = React.useState(defaultValue);
  const v = value !== undefined ? value : inner;
  return /*#__PURE__*/React.createElement("fieldset", {
    style: {
      border: 0,
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, label && /*#__PURE__*/React.createElement("legend", {
    style: {
      padding: 0,
      marginBottom: 8,
      fontSize: 13,
      lineHeight: '18px',
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 20 : 8
    }
  }, options.map(o => {
    const val = o.value || o,
      lab = o.label || o,
      on = v === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 14,
        lineHeight: '20px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.55 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        width: 16,
        height: 16,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: n,
      value: val,
      checked: on,
      disabled: disabled,
      onChange: () => {
        if (value === undefined) setInner(val);
        onChange && onChange(val);
      },
      style: {
        position: 'absolute',
        inset: 0,
        margin: 0,
        opacity: 0,
        cursor: 'inherit'
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        border: on ? '5px solid var(--color-brand)' : '1px solid var(--color-border-control)',
        background: '#fff',
        transition: 'border var(--duration-fast) var(--ease-out)',
        pointerEvents: 'none',
        boxSizing: 'border-box'
      }
    })), lab);
  })));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
/** Search / combobox: leading search icon, clear button, optional filtered options list. */
function SearchInput({
  label,
  helper,
  id,
  value,
  defaultValue = '',
  onChange,
  onSelect,
  options,
  placeholder = 'Search',
  size = 'md',
  style
}) {
  const auto = React.useId ? React.useId() : undefined;
  const fid = id || auto;
  const [inner, setInner] = React.useState(defaultValue);
  const v = value !== undefined ? value : inner;
  const set = x => {
    if (value === undefined) setInner(x);
    onChange && onChange(x);
  };
  const [focus, setFocus] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const list = options && v ? options.filter(o => (o.label || o).toLowerCase().includes(v.toLowerCase())).slice(0, 6) : [];
  const open = focus && list.length > 0;
  const pick = o => {
    set(o.label || o);
    onSelect && onSelect(o);
    setFocus(false);
  };
  const cs = __ds_scope.controlStyle({
    focus,
    size
  });
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    htmlFor: fid,
    helper: helper,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      top: 0,
      bottom: 0,
      color: 'var(--navy-500)',
      display: 'flex',
      alignItems: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 16
  })), /*#__PURE__*/React.createElement("input", {
    id: fid,
    role: "combobox",
    "aria-expanded": open,
    "aria-autocomplete": "list",
    value: v,
    placeholder: placeholder,
    onChange: e => {
      set(e.target.value);
      setActive(0);
    },
    onFocus: () => setFocus(true),
    onBlur: () => setTimeout(() => setFocus(false), 120),
    onKeyDown: e => {
      if (!open) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive(a => Math.min(a + 1, list.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive(a => Math.max(a - 1, 0));
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        pick(list[active]);
      }
    },
    style: {
      ...cs,
      paddingLeft: 36,
      paddingRight: v ? 36 : 12
    }
  }), v && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Clear search",
    onClick: () => set(''),
    style: {
      position: 'absolute',
      right: 6,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 28,
      height: 28,
      border: 0,
      background: 'transparent',
      borderRadius: 4,
      color: 'var(--navy-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })), open && /*#__PURE__*/React.createElement("ul", {
    role: "listbox",
    style: {
      position: 'absolute',
      zIndex: 20,
      top: 'calc(100% + 4px)',
      left: 0,
      right: 0,
      margin: 0,
      padding: 4,
      listStyle: 'none',
      background: '#fff',
      border: '1px solid var(--color-line)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)'
    }
  }, list.map((o, i) => /*#__PURE__*/React.createElement("li", {
    key: (o.value || o) + i,
    role: "option",
    "aria-selected": i === active,
    onMouseDown: () => pick(o),
    onMouseEnter: () => setActive(i),
    style: {
      padding: '8px 10px',
      borderRadius: 4,
      fontSize: 14,
      lineHeight: '20px',
      cursor: 'pointer',
      background: i === active ? 'var(--navy-50)' : 'transparent',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, o.label || o), o.meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, o.meta))))));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select with brand styling and a chevron. */
function Select({
  label,
  helper,
  error,
  required,
  optional,
  id,
  options = [],
  placeholder,
  size = 'md',
  disabled,
  style,
  ...rest
}) {
  const auto = React.useId ? React.useId() : undefined;
  const fid = id || auto;
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const cs = __ds_scope.controlStyle({
    focus,
    hover,
    error,
    disabled,
    size
  });
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    htmlFor: fid,
    helper: helper,
    error: error,
    required: required,
    optional: optional,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    disabled: disabled,
    "aria-invalid": !!error || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...cs,
      appearance: 'none',
      WebkitAppearance: 'none',
      paddingRight: 36,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 10,
      color: 'var(--navy-500)',
      display: 'flex',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Toggle switch. Track navy-300 off, brand on. */
function Switch({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled,
  id
}) {
  const auto = React.useId ? React.useId() : undefined;
  const fid = id || auto;
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14,
      lineHeight: '20px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 32,
      height: 18,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: fid,
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (checked === undefined) setInner(e.target.checked);
      onChange && onChange(e.target.checked);
    },
    style: {
      position: 'absolute',
      inset: 0,
      margin: 0,
      opacity: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      background: on ? 'var(--color-brand)' : 'var(--navy-300)',
      transition: 'background var(--duration-fast) var(--ease-out)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 16 : 2,
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-base) var(--ease-out)'
    }
  }))), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line text input with label above. Mono variant for IDs and numbers. */
function TextInput({
  label,
  helper,
  error,
  required,
  optional,
  id,
  size = 'md',
  mono = false,
  icon,
  suffix,
  disabled,
  style,
  inputStyle,
  ...rest
}) {
  const auto = React.useId ? React.useId() : undefined;
  const fid = id || auto;
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const cs = __ds_scope.controlStyle({
    focus,
    hover,
    error,
    disabled,
    size,
    mono
  });
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    htmlFor: fid,
    helper: helper,
    error: error,
    required: required,
    optional: optional,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      color: 'var(--navy-500)',
      display: 'flex',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    disabled: disabled,
    "aria-invalid": !!error || undefined,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...cs,
      paddingLeft: icon ? 36 : 12,
      paddingRight: suffix ? 48 : 12,
      ...inputStyle
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      fontSize: 13,
      color: 'var(--color-text-muted)',
      fontFamily: 'var(--font-mono)',
      pointerEvents: 'none'
    }
  }, suffix)));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input with the same anatomy as TextInput. */
function Textarea({
  label,
  helper,
  error,
  required,
  optional,
  id,
  rows = 4,
  disabled,
  style,
  ...rest
}) {
  const auto = React.useId ? React.useId() : undefined;
  const fid = id || auto;
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const cs = __ds_scope.controlStyle({
    focus,
    hover,
    error,
    disabled
  });
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    htmlFor: fid,
    helper: helper,
    error: error,
    required: required,
    optional: optional,
    style: style
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    disabled: disabled,
    "aria-invalid": !!error || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...cs,
      height: 'auto',
      padding: '10px 12px',
      resize: 'vertical',
      lineHeight: '20px'
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
/** Breadcrumb trail. Last item is the current page. */
function Breadcrumbs({
  items = [],
  onNavigate,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: style
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      listStyle: 'none',
      margin: 0,
      padding: 0,
      fontSize: 13,
      lineHeight: '18px'
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        color: 'var(--color-text)',
        fontWeight: 500
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(it);
        }
      },
      style: {
        color: 'var(--color-text-muted)'
      }
    }, it.label), !last && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14,
      color: "var(--navy-400)"
    }));
  })));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
/** Prev/next with page numbers and a range summary. */
function Pagination({
  page = 1,
  pageCount = 1,
  total,
  pageSize = 20,
  onChange,
  style
}) {
  const go = p => p >= 1 && p <= pageCount && p !== page && onChange && onChange(p);
  const nums = [];
  for (let p = 1; p <= pageCount; p++) if (p === 1 || p === pageCount || Math.abs(p - page) <= 1) nums.push(p);else if (nums[nums.length - 1] !== '…') nums.push('…');
  const btn = (on, dis) => ({
    minWidth: 32,
    height: 32,
    padding: '0 8px',
    border: '1px solid ' + (on ? 'var(--color-brand)' : 'var(--color-line)'),
    background: on ? 'var(--color-brand-soft)' : '#fff',
    color: dis ? 'var(--navy-300)' : on ? 'var(--blue-900)' : 'var(--color-text)',
    borderRadius: 'var(--radius-sm)',
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
    cursor: dis ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  });
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Pagination",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      ...style
    }
  }, total !== undefined ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, (page - 1) * pageSize + 1, "\u2013", Math.min(page * pageSize, total)), " of ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, total)) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous page",
    disabled: page <= 1,
    onClick: () => go(page - 1),
    style: btn(false, page <= 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 16
  })), nums.map((n, i) => n === '…' ? /*#__PURE__*/React.createElement("span", {
    key: 'e' + i,
    style: {
      width: 24,
      textAlign: 'center',
      color: 'var(--color-text-muted)',
      lineHeight: '32px'
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: n,
    type: "button",
    "aria-current": n === page ? 'page' : undefined,
    onClick: () => go(n),
    style: btn(n === page)
  }, n)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next page",
    disabled: page >= pageCount,
    onClick: () => go(page + 1),
    style: btn(false, page >= pageCount)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16
  }))));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
/** Product side navigation. White or navy-900; active item brand-soft + brand text. */
function SideNav({
  items = [],
  active,
  onSelect,
  tone = 'light',
  header,
  footer,
  width = 232,
  style
}) {
  const dark = tone === 'dark';
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Main",
    style: {
      width,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      background: dark ? 'var(--navy-900)' : '#fff',
      borderRight: dark ? 0 : '1px solid var(--color-line)',
      color: dark ? '#fff' : 'var(--color-text)',
      ...style
    }
  }, header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 12px'
    }
  }, header), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: '4px 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1
    }
  }, items.map(it => {
    if (it.section) return /*#__PURE__*/React.createElement("li", {
      key: it.section,
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        lineHeight: '16px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: dark ? 'var(--navy-400)' : 'var(--color-text-muted)',
        padding: '16px 8px 6px'
      }
    }, it.section);
    const on = it.id === active;
    const bg = on ? dark ? 'var(--navy-800)' : 'var(--color-brand-soft)' : hover === it.id ? dark ? 'var(--navy-800)' : 'var(--navy-50)' : 'transparent';
    const fg = on ? dark ? '#fff' : 'var(--blue-700)' : dark ? 'var(--navy-200)' : 'var(--color-text-secondary)';
    return /*#__PURE__*/React.createElement("li", {
      key: it.id
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-current": on ? 'page' : undefined,
      onClick: () => onSelect && onSelect(it.id),
      onMouseEnter: () => setHover(it.id),
      onMouseLeave: () => setHover(null),
      style: {
        width: '100%',
        height: 36,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '0 10px',
        border: 0,
        borderRadius: 'var(--radius-sm)',
        background: bg,
        color: fg,
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: on ? 500 : 400,
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'background var(--duration-fast) var(--ease-out)'
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 20,
      color: on && dark ? 'var(--blue-400)' : undefined
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: on ? fg : dark ? 'var(--navy-400)' : 'var(--color-text-muted)'
      }
    }, it.count)));
  })), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      borderTop: '1px solid ' + (dark ? 'var(--navy-800)' : 'var(--color-line)')
    }
  }, footer));
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
/** Website header: 72px, max 1200, logo left, links, primary CTA right. Transparent until scrolled. */
function SiteHeader({
  links = [],
  active,
  onNavigate,
  ctaLabel = 'Join early access',
  onCta,
  scrolled = false,
  tone = 'brand',
  mobile = false,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(null);
  const nav = (id, e) => {
    if (onNavigate) {
      e && e.preventDefault();
      onNavigate(id);
    }
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      height: 'var(--header-height)',
      background: scrolled || open ? '#fff' : 'transparent',
      borderBottom: '1px solid ' + (scrolled ? 'var(--color-line)' : 'transparent'),
      boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
      transition: 'background var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      height: '100%',
      margin: '0 auto',
      padding: mobile ? '0 20px' : '0 48px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => nav('home', e),
    "aria-label": "SaveBytes home",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    lockup: "horizontal",
    tone: tone,
    size: 28,
    hoverBreathe: true
  })), !mobile && /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Main",
    style: {
      display: 'flex',
      gap: 28,
      marginLeft: 'auto'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: l.href || '#',
    onClick: e => nav(l.id, e),
    onMouseEnter: () => setHover(l.id),
    onMouseLeave: () => setHover(null),
    "aria-current": active === l.id ? 'page' : undefined,
    style: {
      fontSize: 15,
      lineHeight: '22px',
      fontWeight: 500,
      color: active === l.id || hover === l.id ? 'var(--color-text)' : 'var(--color-text-secondary)',
      textDecoration: 'none'
    }
  }, l.label))), !mobile ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: onCta
  }, ctaLabel) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": open ? 'Close menu' : 'Open menu',
    "aria-expanded": open,
    onClick: () => setOpen(o => !o),
    style: {
      marginLeft: 'auto',
      width: 44,
      height: 44,
      border: 0,
      background: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-text)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'x' : 'menu',
    size: 20
  }))), mobile && open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 'var(--header-height) 0 0 0',
      background: '#fff',
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      animation: 'sb-fade var(--duration-base) var(--ease-out)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: l.href || '#',
    onClick: e => nav(l.id, e),
    style: {
      fontSize: 24,
      lineHeight: '32px',
      fontWeight: 600,
      padding: '10px 0',
      color: 'var(--color-text)',
      textDecoration: 'none',
      borderBottom: '1px solid var(--color-line)'
    }
  }, l.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    fullWidth: true,
    onClick: onCta
  }, ctaLabel))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
/** Numbered steps. Done steps show a check, current is brand, upcoming muted. */
function Stepper({
  steps = [],
  current = 0,
  onStepClick,
  orientation = 'horizontal',
  style
}) {
  const vertical = orientation === 'vertical';
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      display: 'flex',
      flexDirection: vertical ? 'column' : 'row',
      gap: vertical ? 0 : 8,
      listStyle: 'none',
      margin: 0,
      padding: 0,
      ...style
    }
  }, steps.map((s, i) => {
    const done = i < current,
      on = i === current;
    const label = typeof s === 'string' ? s : s.label;
    const desc = typeof s === 'string' ? null : s.description;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        flex: vertical ? undefined : 1,
        display: 'flex',
        flexDirection: vertical ? 'row' : 'column',
        gap: vertical ? 12 : 8,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      disabled: !onStepClick,
      onClick: () => onStepClick && onStepClick(i),
      "aria-current": on ? 'step' : undefined,
      style: {
        width: 24,
        height: 24,
        borderRadius: 'var(--radius-xs)',
        border: '1px solid ' + (done || on ? 'var(--color-brand)' : 'var(--color-line-strong)'),
        background: done ? 'var(--color-brand)' : on ? 'var(--color-brand-soft)' : '#fff',
        color: done ? '#fff' : on ? 'var(--blue-900)' : 'var(--color-text-muted)',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        cursor: onStepClick ? 'pointer' : 'default',
        padding: 0
      }
    }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 14,
      strokeWidth: 2.5
    }) : String(i + 1).padStart(2, '0')), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: vertical ? {
        width: 1,
        flex: 1,
        minHeight: 24,
        background: done ? 'var(--color-brand)' : 'var(--color-line)'
      } : {
        height: 1,
        flex: 1,
        background: done ? 'var(--color-brand)' : 'var(--color-line)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: vertical ? 20 : 0,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        lineHeight: '18px',
        fontWeight: 500,
        color: on || done ? 'var(--color-text)' : 'var(--color-text-muted)'
      }
    }, label), desc && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        lineHeight: '16px',
        color: 'var(--color-text-muted)',
        marginTop: 2
      }
    }, desc)));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Underline tabs: active tab in text colour with a 2px brand bar. Optional count. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue || items[0] && items[0].id);
  const v = value !== undefined ? value : inner;
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 24,
      borderBottom: '1px solid var(--color-line)',
      ...style
    }
  }, items.map(it => {
    const on = it.id === v;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      type: "button",
      "aria-selected": on,
      onClick: () => {
        if (value === undefined) setInner(it.id);
        onChange && onChange(it.id);
      },
      onMouseEnter: () => setHover(it.id),
      onMouseLeave: () => setHover(null),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 40,
        padding: 0,
        border: 0,
        background: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        lineHeight: '18px',
        fontWeight: 500,
        color: on || hover === it.id ? 'var(--color-text)' : 'var(--color-text-muted)',
        transition: 'color var(--duration-fast) var(--ease-out)'
      }
    }, it.label, it.count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        lineHeight: '16px',
        padding: '0 5px',
        borderRadius: 4,
        background: on ? 'var(--color-brand-soft)' : 'var(--navy-100)',
        color: on ? 'var(--blue-900)' : 'var(--navy-700)'
      }
    }, it.count), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: on ? 'var(--color-brand)' : 'transparent',
        transition: 'background var(--duration-base) var(--ease-out)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dialog.jsx
try { (() => {
/** Modal dialog: radius-lg, shadow-lg, navy overlay at 48%. */
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  width = 480,
  inline = false
}) {
  React.useEffect(() => {
    if (!open || inline) return;
    const k = e => e.key === 'Escape' && onClose && onClose();
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  }, [open, inline, onClose]);
  if (!open) return null;
  const panel = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": !inline,
    "aria-label": typeof title === 'string' ? title : undefined,
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: 'calc(100vw - 32px)',
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      animation: 'sb-rise var(--duration-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '20px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: '26px',
      fontWeight: 600
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--color-text-muted)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      width: 32,
      height: 32,
      margin: '-4px -8px 0 0',
      border: 0,
      background: 'none',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--navy-600)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px',
      fontSize: 14,
      lineHeight: '20px'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 24px 20px',
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }
  }, footer));
  if (inline) return panel;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90,
      background: 'var(--color-overlay)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      animation: 'sb-fade var(--duration-base) var(--ease-out)'
    }
  }, panel);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Drawer.jsx
try { (() => {
/** Side drawer: full height, shadow-lg, navy overlay. */
function Drawer({
  open,
  onClose,
  title,
  children,
  footer,
  side = 'right',
  width = 420
}) {
  React.useEffect(() => {
    if (!open) return;
    const k = e => e.key === 'Escape' && onClose && onClose();
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90,
      background: 'var(--color-overlay)',
      display: 'flex',
      justifyContent: side === 'left' ? 'flex-start' : 'flex-end',
      animation: 'sb-fade var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined,
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100vw',
      height: '100%',
      background: '#fff',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: side === 'left' ? '0 16px 16px 0' : '16px 0 0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      height: 64,
      padding: '0 20px',
      borderBottom: '1px solid var(--color-line)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      flex: 1,
      fontSize: 18,
      lineHeight: '26px',
      fontWeight: 600
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      width: 32,
      height: 32,
      border: 0,
      background: 'none',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--navy-600)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 20
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px',
      borderTop: '1px solid var(--color-line)',
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Popover.jsx
try { (() => {
/** Anchored white panel (shadow-md). Click trigger to toggle; outside click closes. */
function Popover({
  trigger,
  children,
  open: controlled,
  onOpenChange,
  align = 'start',
  width,
  style
}) {
  const [inner, setInner] = React.useState(false);
  const open = controlled !== undefined ? controlled : inner;
  const set = v => {
    if (controlled === undefined) setInner(v);
    onOpenChange && onOpenChange(v);
  };
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => ref.current && !ref.current.contains(e.target) && set(false);
    const k = e => e.key === 'Escape' && set(false);
    document.addEventListener('mousedown', h);
    document.addEventListener('keydown', k);
    return () => {
      document.removeEventListener('mousedown', h);
      document.removeEventListener('keydown', k);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => set(!open),
    style: {
      display: 'inline-flex'
    }
  }, trigger), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      [align === 'end' ? 'right' : 'left']: 0,
      zIndex: 60,
      width,
      minWidth: 180,
      background: '#fff',
      border: '1px solid var(--color-line)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      animation: 'sb-fade var(--duration-base) var(--ease-out)',
      ...style
    }
  }, typeof children === 'function' ? children(() => set(false)) : children));
}
Object.assign(__ds_scope, { Popover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Popover.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Menu.jsx
try { (() => {
function Item({
  it,
  close
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "menuitem",
    disabled: it.disabled,
    onClick: () => {
      it.onClick && it.onClick();
      close();
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 36,
      padding: '0 10px',
      border: 0,
      borderRadius: 4,
      background: h && !it.disabled ? it.danger ? 'var(--color-danger-soft)' : 'var(--navy-50)' : 'transparent',
      color: it.disabled ? 'var(--navy-400)' : it.danger ? 'var(--color-danger)' : 'var(--color-text)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: '20px',
      cursor: it.disabled ? 'not-allowed' : 'pointer',
      textAlign: 'left'
    }
  }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: 'nowrap'
    }
  }, it.label), it.shortcut && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--color-text-muted)'
    }
  }, it.shortcut));
}

/** Action menu: white, shadow-md, 36px items, optional dividers and danger items. */
function Menu({
  trigger,
  items = [],
  align = 'start',
  open,
  onOpenChange
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Popover, {
    trigger: trigger,
    align: align,
    open: open,
    onOpenChange: onOpenChange
  }, close => /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      padding: 4,
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map((it, i) => it.divider ? /*#__PURE__*/React.createElement("div", {
    key: i,
    role: "separator",
    style: {
      height: 1,
      background: 'var(--color-line)',
      margin: '4px 0'
    }
  }) : /*#__PURE__*/React.createElement(Item, {
    key: i,
    it: it,
    close: close
  }))));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Menu.jsx", error: String((e && e.message) || e) }); }

// ui_kits/health-app/AppointmentsScreen.jsx
try { (() => {
function AppointmentsScreen() {
  const {
    Table,
    DatePicker,
    Pagination,
    Button,
    VisitStatusBadge,
    Select
  } = window.SaveBytesDesignSystem_ad9a34;
  const [page, setPage] = React.useState(1);
  const rows = [['9:45 am', 'Nikhil Sawant', '0004-2810', 'Acidity', 'noshow'], ['10:00 am', 'Meera Kulkarni', '0004-2701', 'Thyroid review', 'closed'], ['10:15 am', 'Rohan Patil', '0004-2822', 'Follow-up, BP', 'signed'], ['10:30 am', 'Priya Deshmukh', '0004-2817', 'Fever, 3 days', 'in-consult'], ['10:45 am', 'Aarav Joshi', '0004-2840', 'Cough', 'vitals'], ['11:00 am', 'Sunita Naik', '0004-1190', 'Diabetes review', 'arrived'], ['11:15 am', 'Imran Shaikh', '0004-2830', 'Back pain', 'booked'], ['11:30 am', 'Kavita Iyer', '0004-2851', 'Headache', 'booked']].map(([t, n, m, r, s], i) => ({
    id: i,
    t,
    n,
    m,
    r,
    s,
    dr: i % 3 === 2 ? 'Dr Rekha Menon' : 'Dr Anil Kulkarni'
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 1040
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(DatePicker, {
    label: "Date",
    defaultValue: new Date(2026, 2, 12),
    style: {
      width: 200
    }
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Doctor",
    options: ['All doctors', 'Dr Anil Kulkarni', 'Dr Rekha Menon'],
    style: {
      width: 220
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    icon: "plus"
  }, "Book appointment")), /*#__PURE__*/React.createElement(Table, {
    dense: true,
    rows: rows,
    columns: [{
      key: 't',
      label: 'Time',
      mono: true,
      width: 100
    }, {
      key: 'n',
      label: 'Patient',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, r.n)
    }, {
      key: 'm',
      label: 'MRN',
      mono: true
    }, {
      key: 'r',
      label: 'Reason'
    }, {
      key: 'dr',
      label: 'Doctor'
    }, {
      key: 's',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(VisitStatusBadge, {
        status: r.s
      })
    }]
  }), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pageCount: 3,
    total: 42,
    pageSize: 14,
    onChange: setPage
  }));
}
window.AppointmentsScreen = AppointmentsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/health-app/AppointmentsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/health-app/ConsultScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ConsultScreen({
  token,
  queue,
  setQueue,
  back,
  toast
}) {
  const DS = window.SaveBytesDesignSystem_ad9a34;
  const {
    PatientBanner,
    VitalsStrip,
    PrescriptionTable,
    SearchInput,
    Textarea,
    AiDraft,
    Button,
    Card,
    Tabs,
    LabResultsTable,
    SignedRecord,
    Breadcrumbs,
    Menu,
    Dialog,
    TextInput,
    Badge,
    Alert,
    Skeleton
  } = DS;
  const row = queue.find(r => r.token === token) || queue[0];
  const p = PATIENTS[token] || {
    name: row.name,
    age: row.age,
    gender: row.sex === 'F' ? 'Female' : 'Male',
    mrn: '0004-' + (2800 + token),
    mobile: '98XXX XXXXX',
    allergies: null
  };
  const signed = row.status === 'signed' || row.status === 'closed';
  const [tab, setTab] = React.useState('consult');
  const [rx, setRx] = React.useState([MEDICINES[0].item]);
  const [dx, setDx] = React.useState([DIAGNOSES[1]]);
  const [draft, setDraft] = React.useState(true);
  const [note, setNote] = React.useState('');
  const [voiding, setVoiding] = React.useState(null);
  const [signing, setSigning] = React.useState(false);
  const [labsLoading, setLabsLoading] = React.useState(true);
  React.useEffect(() => {
    if (tab === 'labs') {
      setLabsLoading(true);
      const t = setTimeout(() => setLabsLoading(false), 700);
      return () => clearTimeout(t);
    }
  }, [tab]);
  const sign = () => {
    setQueue(q => q.map(x => x.token === token ? {
      ...x,
      status: 'signed'
    } : x));
    setSigning(false);
    toast('Visit signed. Prescription PDF ready.');
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(PatientBanner, _extends({}, p, {
    status: row.status,
    actions: signed ? null : /*#__PURE__*/React.createElement(Button, {
      onClick: () => setSigning(true),
      icon: "lock"
    }, "Sign visit")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    onNavigate: back,
    items: [{
      label: 'OPD queue'
    }, {
      label: 'Token ' + String(token).padStart(2, '0') + ' · ' + p.name
    }]
  }), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      id: 'consult',
      label: 'Consult'
    }, {
      id: 'labs',
      label: 'Lab results',
      count: LABS.length
    }, {
      id: 'history',
      label: 'Past visits',
      count: 3
    }]
  }), tab === 'consult' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VitalsStrip, {
    vitals: row.status === 'booked' || row.status === 'arrived' ? [{
      label: 'BP',
      value: null,
      unit: 'mmHg'
    }, {
      label: 'Pulse',
      value: null,
      unit: 'bpm'
    }, {
      label: 'Temp',
      value: null,
      unit: '°F'
    }, {
      label: 'SpO₂',
      value: null,
      unit: '%'
    }, {
      label: 'Weight',
      value: null,
      unit: 'kg'
    }, {
      label: 'BMI',
      value: null,
      unit: 'kg/m²'
    }] : [{
      label: 'BP',
      value: '142/92',
      unit: 'mmHg',
      flag: 'high'
    }, {
      label: 'Pulse',
      value: 78,
      unit: 'bpm',
      time: '10:12 am'
    }, {
      label: 'Temp',
      value: '100.8',
      unit: '°F',
      flag: 'high'
    }, {
      label: 'SpO₂',
      value: 98,
      unit: '%',
      time: '10:12 am'
    }, {
      label: 'Weight',
      value: '64.5',
      unit: 'kg',
      time: '10:12 am'
    }, {
      label: 'BMI',
      value: '24.3',
      unit: 'kg/m²',
      note: 'Calculated'
    }]
  }), signed && /*#__PURE__*/React.createElement(SignedRecord, {
    by: "Dr Anil Kulkarni",
    at: "12 Mar 2026, 10:41 am"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 16,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Notes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, draft && !signed && /*#__PURE__*/React.createElement(AiDraft, {
    onAccept: () => {
      setNote('Fever for 3 days, max 101.4 °F. No cough. Throat congested. No rash.');
      setDraft(false);
    },
    onEdit: () => {
      setNote('Fever for 3 days, max 101.4 °F. No cough. Throat congested. No rash. ');
      setDraft(false);
    },
    onDiscard: () => setDraft(false)
  }, "Fever for 3 days, max 101.4 \xB0F. No cough. Throat congested. No rash."), /*#__PURE__*/React.createElement(Textarea, {
    label: "Complaints and findings",
    rows: 4,
    value: note,
    onChange: e => setNote(e.target.value),
    disabled: signed,
    placeholder: "Type, or accept the draft above"
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Diagnosis"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, !signed && /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Diagnosis name or ICD-10 code",
    options: DIAGNOSES,
    onSelect: o => setDx(d => d.find(x => x.value === o.value) ? d : [...d, o])
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, dx.map(d => /*#__PURE__*/React.createElement("span", {
    key: d.value,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '4px 8px',
      border: '1px solid var(--color-line)',
      borderRadius: 4,
      fontSize: 14
    }
  }, d.label, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--color-text-muted)'
    }
  }, d.meta)))), p.allergies && p.allergies.length > 0 && /*#__PURE__*/React.createElement(Alert, {
    tone: "danger",
    title: 'Allergic to ' + p.allergies.map(a => a.substance).join(', ')
  }, "Check before prescribing.")))), /*#__PURE__*/React.createElement(Card, {
    title: "Prescription",
    subtitle: rx.filter(m => !m.voided).length + ' medicines',
    actions: !signed && /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      icon: "repeat",
      onClick: () => {
        setRx(r => [...r, MEDICINES[1].item]);
        toast('Last prescription repeated');
      }
    }, "Repeat last")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, !signed && /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Add medicine from your clinic list",
    options: MEDICINES,
    onSelect: o => setRx(r => [...r, o.item])
  }), /*#__PURE__*/React.createElement(PrescriptionTable, {
    items: rx,
    actions: signed ? null : (m, i) => m.voided ? null : /*#__PURE__*/React.createElement(Menu, {
      align: "end",
      trigger: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "ghost",
        icon: "ellipsis",
        "aria-label": "Line actions"
      }),
      items: [{
        label: 'Edit line',
        icon: 'pencil'
      }, {
        divider: true
      }, {
        label: 'Void line',
        icon: 'ban',
        danger: true,
        onClick: () => setVoiding(i)
      }]
    })
  })))), tab === 'labs' && (labsLoading ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Skeleton, {
    lines: 5,
    height: 18,
    gap: 14
  })) : /*#__PURE__*/React.createElement(LabResultsTable, {
    title: "CBC + CRP \xB7 10 Mar 2026",
    results: LABS
  })), tab === 'history' && /*#__PURE__*/React.createElement(DS.Table, {
    rows: [{
      id: 1,
      d: '10 Mar 2026',
      r: 'Fever, 1 day',
      dr: 'Dr Anil Kulkarni',
      s: 'signed'
    }, {
      id: 2,
      d: '14 Nov 2025',
      r: 'Acidity',
      dr: 'Dr Anil Kulkarni',
      s: 'closed'
    }, {
      id: 3,
      d: '02 Aug 2025',
      r: 'Annual check-up',
      dr: 'Dr Rekha Menon',
      s: 'closed'
    }],
    columns: [{
      key: 'd',
      label: 'Date',
      mono: true
    }, {
      key: 'r',
      label: 'Reason'
    }, {
      key: 'dr',
      label: 'Doctor'
    }, {
      key: 's',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(DS.VisitStatusBadge, {
        status: r.s
      })
    }]
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: voiding !== null,
    onClose: () => setVoiding(null),
    title: "Void this line?",
    description: "It stays in the record, struck through, with your reason.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setVoiding(null)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      onClick: () => {
        setRx(r => r.map((m, i) => i === voiding ? {
          ...m,
          voided: true,
          voidReason: 'Wrong strength entered'
        } : m));
        setVoiding(null);
      }
    }, "Void line"))
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "Reason",
    defaultValue: "Wrong strength entered"
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: signing,
    onClose: () => setSigning(false),
    title: "Sign this visit?",
    description: "The record becomes read-only. You can still add an addendum.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setSigning(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      icon: "lock",
      onClick: sign
    }, "Sign visit"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, dx.length, " diagnosis \xB7 ", rx.filter(m => !m.voided).length, " medicines"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-muted)'
    }
  }, "Prescription PDF will be sent to ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, p.mobile)))));
}
window.ConsultScreen = ConsultScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/health-app/ConsultScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/health-app/QueueScreen.jsx
try { (() => {
function VitalsDialog({
  row,
  onClose,
  onSave
}) {
  const {
    Dialog,
    TextInput,
    Button
  } = window.SaveBytesDesignSystem_ad9a34;
  const [w, setW] = React.useState('64.5');
  const [h, setH] = React.useState('163');
  const bmi = w && h ? (parseFloat(w) / Math.pow(parseFloat(h) / 100, 2)).toFixed(1) : '—';
  return /*#__PURE__*/React.createElement(Dialog, {
    open: !!row,
    onClose: onClose,
    width: 560,
    title: row ? 'Vitals · Token ' + String(row.token).padStart(2, '0') : '',
    description: row ? row.name + ' · ' + row.age + ' · ' + row.sex : '',
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: onSave
    }, "Save vitals"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "BP",
    mono: true,
    suffix: "mmHg",
    defaultValue: "128/84"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Pulse",
    mono: true,
    suffix: "bpm",
    defaultValue: "78"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Temp",
    mono: true,
    suffix: "\xB0F",
    defaultValue: "98.6"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "SpO\u2082",
    mono: true,
    suffix: "%",
    defaultValue: "98"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Weight",
    mono: true,
    suffix: "kg",
    value: w,
    onChange: e => setW(e.target.value)
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Height",
    mono: true,
    suffix: "cm",
    value: h,
    onChange: e => setH(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, "BMI ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--color-text)',
      fontWeight: 500
    }
  }, bmi), " kg/m\xB2, calculated"));
}
function RegisterDrawer({
  open,
  onClose,
  onSave
}) {
  const {
    Drawer,
    TextInput,
    Select,
    Radio,
    DatePicker,
    Button,
    Checkbox
  } = window.SaveBytesDesignSystem_ad9a34;
  return /*#__PURE__*/React.createElement(Drawer, {
    open: open,
    onClose: onClose,
    title: "Register patient",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: onSave
    }, "Register and check in"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "Full name",
    required: true,
    placeholder: "As on Aadhaar or ID"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Mobile",
    required: true,
    mono: true,
    icon: "phone",
    placeholder: "98XXX XXXXX"
  }), /*#__PURE__*/React.createElement(Radio, {
    label: "Gender",
    direction: "row",
    options: ['Female', 'Male', 'Other']
  }), /*#__PURE__*/React.createElement(DatePicker, {
    label: "Date of birth",
    helper: "If unknown, enter age instead and we'll mark it (est.)"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Reason for visit",
    placeholder: "Choose or type",
    options: ['Fever', 'Follow-up', 'Cough', 'Review', 'Other']
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Patient consents to digital records",
    description: "Required before saving clinical notes.",
    defaultChecked: true
  })));
}
function QueueScreen({
  queue,
  setQueue,
  openConsult,
  toast
}) {
  const {
    Tabs,
    OpdQueue,
    Button,
    Card,
    EmptyState
  } = window.SaveBytesDesignSystem_ad9a34;
  const [tab, setTab] = React.useState('waiting');
  const [vitals, setVitals] = React.useState(null);
  const [reg, setReg] = React.useState(false);
  const groups = {
    waiting: ['booked', 'arrived', 'vitals', 'in-consult'],
    done: ['signed', 'closed'],
    noshow: ['noshow']
  };
  const rows = queue.filter(r => groups[tab].includes(r.status)).sort((a, b) => a.token - b.token);
  const count = k => queue.filter(r => groups[k].includes(r.status)).length;
  const select = r => {
    if (r.status === 'booked') {
      setQueue(q => q.map(x => x.token === r.token ? {
        ...x,
        status: 'arrived'
      } : x));
      toast('Token ' + String(r.token).padStart(2, '0') + ' checked in');
    } else if (r.status === 'arrived') setVitals(r);else openConsult(r.token);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 1040
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    style: {
      flex: 1
    },
    items: [{
      id: 'waiting',
      label: 'Waiting',
      count: count('waiting')
    }, {
      id: 'done',
      label: 'Done',
      count: count('done')
    }, {
      id: 'noshow',
      label: 'No-show',
      count: count('noshow')
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    icon: "user-plus",
    onClick: () => setReg(true)
  }, "Register patient")), rows.length ? /*#__PURE__*/React.createElement(OpdQueue, {
    rows: rows,
    onSelect: select
  }) : /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "list-ordered",
    title: "Nobody here yet"
  }, "Patients appear here when they are checked in.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-muted)'
    }
  }, "Click a booked row to check in, a checked-in row to record vitals, any other row to open the consult."), /*#__PURE__*/React.createElement(VitalsDialog, {
    row: vitals,
    onClose: () => setVitals(null),
    onSave: () => {
      setQueue(q => q.map(x => x.token === vitals.token ? {
        ...x,
        status: 'vitals'
      } : x));
      toast('Vitals saved for ' + vitals.name);
      setVitals(null);
    }
  }), /*#__PURE__*/React.createElement(RegisterDrawer, {
    open: reg,
    onClose: () => setReg(false),
    onSave: () => {
      setReg(false);
      setQueue(q => [...q, {
        token: 12,
        name: 'New patient',
        age: '— y',
        sex: 'F',
        reason: 'Fever',
        time: '11:45 am',
        status: 'arrived'
      }]);
      toast('Registered and checked in as token 12');
    }
  }));
}
window.QueueScreen = QueueScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/health-app/QueueScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/health-app/Shell.jsx
try { (() => {
function TopBar({
  title,
  children,
  tenant,
  setTenant
}) {
  const {
    Avatar,
    Menu,
    Button,
    Icon
  } = window.SaveBytesDesignSystem_ad9a34;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 20px',
      background: '#fff',
      borderBottom: '1px solid var(--color-line)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 18,
      lineHeight: '26px',
      fontWeight: 600,
      whiteSpace: 'nowrap'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: 2,
      borderRadius: 6,
      background: 'var(--navy-100)'
    },
    role: "radiogroup",
    "aria-label": "Tenant branding (white-label demo)"
  }, [['savebytes', 'SaveBytes'], ['tenant', 'Tenant']].map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    role: "radio",
    "aria-checked": tenant === id,
    onClick: () => setTenant(id),
    style: {
      height: 28,
      padding: '0 10px',
      border: 0,
      borderRadius: 4,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      cursor: 'pointer',
      background: tenant === id ? '#fff' : 'transparent',
      color: tenant === id ? 'var(--color-text)' : 'var(--color-text-muted)',
      boxShadow: tenant === id ? 'var(--shadow-sm)' : 'none'
    }
  }, l))), /*#__PURE__*/React.createElement(Menu, {
    align: "end",
    trigger: /*#__PURE__*/React.createElement("button", {
      "aria-label": "Account",
      style: {
        border: 0,
        background: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Dr Anil Kulkarni",
      size: 32
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 16,
      color: "var(--navy-500)"
    })),
    items: [{
      label: 'Dr Anil Kulkarni',
      icon: 'user',
      disabled: true
    }, {
      divider: true
    }, {
      label: 'Compact density',
      icon: 'rows-3'
    }, {
      label: 'Sign out',
      icon: 'log-out'
    }]
  }));
}
function Shell({
  screen,
  setScreen,
  tenant,
  setTenant,
  title,
  toolbar,
  children,
  counts
}) {
  const {
    SideNav,
    Logo
  } = window.SaveBytesDesignSystem_ad9a34;
  const t = tenant === 'tenant';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      background: 'var(--color-surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement(SideNav, {
    active: screen === 'consult' ? 'queue' : screen,
    onSelect: setScreen,
    header: t ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: 6,
        background: 'var(--blue-600)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        fontSize: 13
      }
    }, "AC"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 15
      }
    }, "Arogya Clinic")) : /*#__PURE__*/React.createElement(Logo, {
      lockup: "horizontal",
      tone: "health",
      size: 22,
      hoverBreathe: true
    }),
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        fontSize: 12,
        lineHeight: '16px',
        color: 'var(--color-text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", null, t ? 'Arogya Clinic, Vashi' : 'Kulkarni Clinic, Vashi'), t && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, "Powered by ", /*#__PURE__*/React.createElement(Logo, {
      lockup: "horizontal",
      tone: "navy",
      size: 12
    }))),
    items: [{
      section: 'Today'
    }, {
      id: 'queue',
      label: 'OPD queue',
      icon: 'list-ordered',
      count: counts.queue
    }, {
      id: 'appointments',
      label: 'Appointments',
      icon: 'calendar-days',
      count: counts.appts
    }, {
      section: 'Records'
    }, {
      id: 'patients',
      label: 'Patients',
      icon: 'users'
    }, {
      id: 'settings',
      label: 'Settings',
      icon: 'settings'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: title,
    tenant: tenant,
    setTenant: setTenant
  }, toolbar), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children)));
}
Object.assign(window, {
  Shell,
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/health-app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/health-app/data.jsx
try { (() => {
const PATIENTS = {
  7: {
    name: 'Priya Deshmukh',
    age: '34 y',
    gender: 'Female',
    born: '14 Aug 1991',
    mrn: '0004-2817',
    mobile: '98201 44718',
    allergies: [{
      substance: 'Penicillin',
      reaction: 'rash'
    }]
  },
  6: {
    name: 'Rohan Patil',
    age: '52 y',
    gender: 'Male',
    born: '02 Jan 1974',
    mrn: '0004-2822',
    mobile: '99204 18831',
    allergies: []
  },
  8: {
    name: 'Aarav Joshi',
    age: '6 y',
    gender: 'Male',
    born: '19 Jun 2019',
    mrn: '0004-2840',
    mobile: '98670 55120',
    allergies: null
  },
  9: {
    name: 'Sunita Naik',
    age: '61 y',
    gender: 'Female',
    born: '1965',
    bornEstimated: true,
    mrn: '0004-1190',
    mobile: '97690 22014',
    allergies: [{
      substance: 'Sulfa drugs',
      reaction: 'hives'
    }]
  },
  10: {
    name: 'Imran Shaikh',
    age: '29 y',
    gender: 'Male',
    born: '30 Nov 1996',
    mrn: '0004-2830',
    mobile: '98922 61407',
    allergies: []
  },
  11: {
    name: 'Kavita Iyer',
    age: '45 y',
    gender: 'Female',
    born: '08 Mar 1981',
    mrn: '0004-2851',
    mobile: '99300 47219',
    allergies: []
  }
};
const INITIAL_QUEUE = [{
  token: 5,
  name: 'Meera Kulkarni',
  age: '38 y',
  sex: 'F',
  reason: 'Thyroid review',
  time: '10:00 am',
  status: 'closed'
}, {
  token: 6,
  name: 'Rohan Patil',
  age: '52 y',
  sex: 'M',
  reason: 'Follow-up, BP',
  time: '10:15 am',
  status: 'signed'
}, {
  token: 7,
  name: 'Priya Deshmukh',
  age: '34 y',
  sex: 'F',
  reason: 'Fever, 3 days',
  time: '10:30 am',
  status: 'in-consult'
}, {
  token: 8,
  name: 'Aarav Joshi',
  age: '6 y',
  sex: 'M',
  reason: 'Cough',
  time: '10:45 am',
  status: 'vitals'
}, {
  token: 9,
  name: 'Sunita Naik',
  age: '61 y',
  sex: 'F',
  reason: 'Diabetes review',
  time: '11:00 am',
  status: 'arrived'
}, {
  token: 10,
  name: 'Imran Shaikh',
  age: '29 y',
  sex: 'M',
  reason: 'Back pain',
  time: '11:15 am',
  status: 'booked'
}, {
  token: 11,
  name: 'Kavita Iyer',
  age: '45 y',
  sex: 'F',
  reason: 'Headache',
  time: '11:30 am',
  status: 'booked'
}, {
  token: 4,
  name: 'Nikhil Sawant',
  age: '41 y',
  sex: 'M',
  reason: 'Acidity',
  time: '9:45 am',
  status: 'noshow'
}];
const MEDICINES = [{
  value: 'dolo',
  label: 'Dolo 650 mg Tablet',
  meta: 'Paracetamol',
  item: {
    name: 'Dolo',
    strength: '650 mg',
    form: 'Tablet',
    generic: 'Paracetamol',
    dose: '1 tab',
    frequency: '1-0-1',
    when: 'After food',
    duration: '5 days',
    instructions: 'If temp above 100 °F'
  }
}, {
  value: 'cetzine',
  label: 'Cetzine 10 mg Tablet',
  meta: 'Cetirizine',
  item: {
    name: 'Cetzine',
    strength: '10 mg',
    form: 'Tablet',
    generic: 'Cetirizine',
    dose: '1 tab',
    frequency: '0-0-1',
    when: 'After food',
    duration: '5 days'
  }
}, {
  value: 'pan',
  label: 'Pan 40 mg Tablet',
  meta: 'Pantoprazole',
  item: {
    name: 'Pan',
    strength: '40 mg',
    form: 'Tablet',
    generic: 'Pantoprazole',
    dose: '1 tab',
    frequency: '1-0-0',
    when: 'Before food',
    duration: '7 days'
  }
}, {
  value: 'azee',
  label: 'Azee 500 mg Tablet',
  meta: 'Azithromycin',
  item: {
    name: 'Azee',
    strength: '500 mg',
    form: 'Tablet',
    generic: 'Azithromycin',
    dose: '1 tab',
    frequency: '1-0-0',
    when: 'Before food',
    duration: '3 days'
  }
}, {
  value: 'benadryl',
  label: 'Benadryl Syrup',
  meta: 'Diphenhydramine',
  item: {
    name: 'Benadryl',
    strength: '',
    form: 'Syrup',
    generic: 'Diphenhydramine',
    dose: '5 ml',
    frequency: '1-1-1',
    when: 'After food',
    duration: '5 days'
  }
}];
const DIAGNOSES = [{
  value: 'J06.9',
  label: 'Acute upper respiratory infection',
  meta: 'J06.9'
}, {
  value: 'R50.9',
  label: 'Fever, unspecified',
  meta: 'R50.9'
}, {
  value: 'I10',
  label: 'Essential hypertension',
  meta: 'I10'
}, {
  value: 'E11.9',
  label: 'Type 2 diabetes mellitus',
  meta: 'E11.9'
}];
const LABS = [{
  test: 'Haemoglobin',
  value: '10.8',
  unit: 'g/dL',
  flag: 'low',
  range: '12.0–15.5'
}, {
  test: 'WBC count',
  value: '11,400',
  unit: '/µL',
  flag: 'high',
  range: '4,000–11,000'
}, {
  test: 'Platelets',
  value: '2.4',
  unit: 'lakh/µL',
  range: '1.5–4.5'
}, {
  test: 'CRP',
  value: '48',
  unit: 'mg/L',
  flag: 'critical-high',
  range: '< 5'
}, {
  test: 'ESR',
  value: '18',
  unit: 'mm/hr',
  range: '0–20'
}];
Object.assign(window, {
  PATIENTS,
  INITIAL_QUEUE,
  MEDICINES,
  DIAGNOSES,
  LABS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/health-app/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
function AboutPage({
  go
}) {
  const {
    Avatar
  } = window.SaveBytesDesignSystem_ad9a34;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "sb-section sb-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-container",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "About"), /*#__PURE__*/React.createElement("h1", {
    className: "sb-display-xl",
    style: {
      maxWidth: 900
    }
  }, "It started as a repository name."))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--reading-max)',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    },
    className: "sb-body-lg"
  }, /*#__PURE__*/React.createElement("p", null, "In my first year of engineering college I was naming a GitHub repository and went through a long list of bad ideas. SaveBytes stuck. As an engineer you learn quickly that good software is software that uses less: less memory, fewer steps, less waiting. I've tried to write code that way ever since."), /*#__PURE__*/React.createElement("p", null, "Years later the name was still with me: on my GitHub, on my portfolio at savebytes.in, in how I think about building things. So when I decided to start a company, it already had a name."), /*#__PURE__*/React.createElement("p", null, "We're starting with healthcare because it's where wasted time hurts the most. A doctor in a busy clinic sees dozens of patients a day, and most software makes that harder. We want to build the opposite. ", /*#__PURE__*/React.createElement("span", {
    className: "sb-placeholder"
  }, "[Add a line about what you saw in clinics that made you start, a specific moment if you have one]")))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-split"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "01 / Principles",
    title: "Five rules we build by."
  }), /*#__PURE__*/React.createElement(Principles, {
    extra: ['We count clicks per visit and try to remove one every release.', 'Isolation is enforced in the data layer, not by convention.', 'Leaving should be as easy as joining.', 'The audit trail is part of the product, not an add-on.', 'Drafts are visually distinct and never saved silently.']
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    className: "sb-split"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "02 / How we build",
    title: "For the technical reader."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 'var(--reading-max)'
    },
    className: "sb-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Open standards."), " Clinical records are FHIR R4 resources, so any system that speaks FHIR can read them."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "A proven foundation."), " Medplum handles the data model, access control and audit, the parts that must not be clever."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "One codebase, configured per clinic."), " Forms, roles and branding are configuration. Nobody gets a fork."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Server-side permissions and audit."), " Every clinical action is logged. Export and deletion were designed in from day one.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "03 / The team",
    title: "We're small on purpose.",
    intro: "If you write to us, a founder reads it."
  }), /*#__PURE__*/React.createElement("div", {
    className: "sb-grid-3",
    style: {
      marginTop: 40
    }
  }, [['[Founder name]', '[Role, one line on background]'], ['[Co-founder / director name]', '[If applicable]']].map(([n, r]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      background: '#fff',
      border: '1px solid var(--color-line)',
      borderRadius: 'var(--radius-md)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Founder",
    size: 56
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    },
    className: "sb-placeholder-text"
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-muted)'
    }
  }, r)))))), /*#__PURE__*/React.createElement(CtaBand, {
    onCta: () => go('contact')
  }));
}
window.AboutPage = AboutPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
function ContactPage() {
  const {
    TextInput,
    Select,
    Textarea,
    Button,
    Icon,
    Link
  } = window.SaveBytesDesignSystem_ad9a34;
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [err, setErr] = React.useState({});
  const submit = e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const n = {};
    if (!f.get('name')) n.name = 'Enter your name';
    if (!f.get('reach')) n.reach = 'Enter a phone number or email';
    setErr(n);
    if (Object.keys(n).length) return;
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      setSent(true);
    }, 900);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "sb-section sb-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-container sb-split",
    style: {
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "Contact \xB7 Early access"), /*#__PURE__*/React.createElement("h1", {
    className: "sb-display-xl"
  }, "Talk to us."), /*#__PURE__*/React.createElement("p", {
    className: "sb-lead",
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, "Whether you run a clinic, want to partner, or just want to see what we're building, write to us. We reply within one working day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 8,
      fontSize: 16
    }
  }, [['mail', '[hello@savebytes.in]'], ['phone', '[+91 phone / WhatsApp]'], ['map-pin', 'Navi Mumbai, Maharashtra']].map(([i, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--color-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 20,
    color: "var(--navy-500)"
  }), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--color-line)',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      boxShadow: 'var(--shadow-sm)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '24px 0',
      animation: 'sb-rise 320ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      background: 'var(--color-success-soft)',
      color: 'var(--color-success)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20
  })), /*#__PURE__*/React.createElement("h2", {
    className: "sb-h2"
  }, "Thanks, we've got it."), /*#__PURE__*/React.createElement("p", {
    className: "sb-body",
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, "We'll be in touch within a working day.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-grid-2",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    name: "name",
    label: "Name",
    required: true,
    error: err.name,
    size: "lg"
  }), /*#__PURE__*/React.createElement(TextInput, {
    name: "clinic",
    label: "Clinic or company",
    size: "lg"
  }), /*#__PURE__*/React.createElement(Select, {
    name: "role",
    label: "Role",
    placeholder: "Choose one",
    size: "lg",
    options: ['Doctor', 'Clinic owner', 'Clinic manager', 'Partner', 'Other']
  }), /*#__PURE__*/React.createElement(TextInput, {
    name: "city",
    label: "City",
    size: "lg",
    placeholder: "Navi Mumbai"
  })), /*#__PURE__*/React.createElement(TextInput, {
    name: "reach",
    label: "Phone or email",
    required: true,
    error: err.reach,
    size: "lg"
  }), /*#__PURE__*/React.createElement(Textarea, {
    name: "message",
    label: "Message",
    optional: true,
    rows: 4
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    loading: busy
  }, "Send"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-muted)',
      flex: 1,
      minWidth: 200
    }
  }, "We use these details only to reply to you. No newsletters unless you ask."))))));
}
window.ContactPage = ContactPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Health.jsx
try { (() => {
const VISIT_STEPS = [['Book or walk in.', 'The receptionist finds the patient by name, mobile or clinic number, or registers them in under a minute.', 'booked'], ['Check in.', 'A token number is assigned and the queue updates on every screen in the clinic, live.', 'arrived'], ['Vitals.', 'The nurse records BP, pulse, temperature, SpO₂ and weight. BMI is calculated for you.', 'vitals'], ['Consult.', "The doctor sees vitals, allergies and past visits next to the note. Diagnosis by name or ICD-10 code. Medicines from your clinic's own list, with dose, 1-0-1 frequency, timing and duration.", 'in-consult'], ['Sign and hand over.', "The visit is locked when signed. A prescription PDF with your clinic's logo is ready immediately and can be sent to the patient's phone.", 'signed']];
function StepCard({
  step
}) {
  const {
    SearchInput,
    OpdQueue,
    VitalsStrip,
    PrescriptionTable,
    SignedRecord,
    Button
  } = window.SaveBytesDesignSystem_ad9a34;
  if (step === 0) return /*#__PURE__*/React.createElement(SearchInput, {
    label: "Find patient",
    defaultValue: "Priya",
    placeholder: "Name, mobile or clinic number",
    options: [{
      value: '1',
      label: 'Priya Deshmukh',
      meta: '98201 44718'
    }, {
      value: '2',
      label: 'Priyanka Kale',
      meta: '99675 20831'
    }]
  });
  if (step === 1) return /*#__PURE__*/React.createElement(OpdQueue, {
    dense: true,
    rows: QUEUE.slice(1, 4).map((r, i) => i === 0 ? {
      ...r,
      status: 'arrived'
    } : r),
    activeToken: 7
  });
  if (step === 2) return /*#__PURE__*/React.createElement(VitalsStrip, {
    dense: true,
    vitals: [{
      label: 'BP',
      value: '142/92',
      unit: 'mmHg',
      flag: 'high'
    }, {
      label: 'Pulse',
      value: 78,
      unit: 'bpm',
      time: '10:12 am'
    }, {
      label: 'Temp',
      value: '100.8',
      unit: '°F',
      flag: 'high'
    }, {
      label: 'SpO₂',
      value: 98,
      unit: '%',
      time: '10:12 am'
    }, {
      label: 'BMI',
      value: '24.3',
      unit: 'kg/m²',
      note: 'Calculated'
    }]
  });
  if (step === 3) return /*#__PURE__*/React.createElement(PrescriptionTable, {
    dense: true,
    items: [{
      name: 'Dolo',
      strength: '650 mg',
      form: 'Tablet',
      generic: 'Paracetamol',
      dose: '1 tab',
      frequency: '1-0-1',
      when: 'After food',
      duration: '5 days'
    }, {
      name: 'Cetzine',
      strength: '10 mg',
      form: 'Tablet',
      generic: 'Cetirizine',
      dose: '1 tab',
      frequency: '0-0-1',
      when: 'After food',
      duration: '5 days'
    }]
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SignedRecord, {
    by: "Dr Anil Kulkarni",
    at: "12 Mar 2026, 10:41 am"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    icon: "file-text"
  }, "Prescription PDF"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    icon: "send"
  }, "Send to 98201 44718")));
}
function VisitFlow() {
  const {
    VisitStatusBadge
  } = window.SaveBytesDesignSystem_ad9a34;
  const [s, setS] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("ol", {
    className: "sb-flow",
    role: "tablist"
  }, VISIT_STEPS.map(([t,, st], i) => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "tab",
    "aria-selected": i === s,
    onClick: () => setS(i),
    className: "sb-flow-step",
    style: {
      borderColor: i === s ? 'var(--color-brand)' : 'var(--color-line)',
      background: i === s ? 'var(--color-brand-soft)' : '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: i <= s ? 'var(--color-brand)' : 'var(--color-text-muted)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      lineHeight: '22px',
      color: 'var(--color-text)'
    }
  }, t.replace('.', '')), /*#__PURE__*/React.createElement(VisitStatusBadge, {
    status: st
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "sb-split",
    style: {
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: 't' + s,
    style: {
      animation: 'sb-rise 320ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "sb-h2"
  }, VISIT_STEPS[s][0]), /*#__PURE__*/React.createElement("p", {
    className: "sb-body-lg",
    style: {
      color: 'var(--color-text-secondary)',
      marginTop: 12
    }
  }, VISIT_STEPS[s][1])), /*#__PURE__*/React.createElement("div", {
    key: 'c' + s,
    style: {
      animation: 'sb-rise 320ms var(--ease-out) 60ms both'
    }
  }, /*#__PURE__*/React.createElement(ScreenPanel, {
    title: ['Find patient', 'OPD queue', 'Vitals', 'Prescription', 'Signed visit'][s]
  }, /*#__PURE__*/React.createElement(StepCard, {
    step: s
  })))));
}
const FAQ = [['Will it slow me down?', "It's built around a single consult screen. Your favourite medicines and \u201crepeat last prescription\u201d are one click. We measure speed the way you would: seconds per patient."], ["Who can see my patients' data?", 'Only the people you give access to, by role. Each clinic\u2019s records live in their own isolated space, and every view and change is logged.'], ['What if I want to leave?', 'Your records are stored in FHIR, an open international format. You can export all of it.'], ['Is it another expensive system?', "Pricing will be simple and built for small clinics. During the pilot it's free. [Update when pricing is decided]"], ["My staff aren't very technical.", "If they can use WhatsApp, they can use this. We'll set it up with you, in person, in Navi Mumbai and Mumbai."], ['What about ABDM and ABHA?', "It's on our roadmap. We'll say more when it's actually connected, not before."]];
function HealthPage({
  go
}) {
  const {
    Logo,
    Button,
    PatientBanner,
    VitalsStrip,
    PrescriptionTable
  } = window.SaveBytesDesignSystem_ad9a34;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "sb-section sb-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-container sb-hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "horizontal",
    tone: "health",
    size: 32
  }), /*#__PURE__*/React.createElement(Overline, null, "SaveBytes Health \xB7 In development"), /*#__PURE__*/React.createElement("h1", {
    className: "sb-display-xl"
  }, "The clinic day, done properly."), /*#__PURE__*/React.createElement("p", {
    className: "sb-lead",
    style: {
      color: 'var(--color-text-secondary)',
      maxWidth: 560
    }
  }, "An EHR built for Indian clinics with two to five doctors. Book, check in, take vitals, consult, prescribe, sign, without the screen getting in the way."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('contact')
  }, "Join early access"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => document.getElementById('flow') && window.scrollTo({
      top: document.getElementById('flow').offsetTop - 72,
      behavior: 'smooth'
    })
  }, "See the visit flow"))), /*#__PURE__*/React.createElement(ScreenPanel, {
    title: "Consult \xB7 Token 07",
    style: {
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: -16,
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(PatientBanner, {
    name: "Priya Deshmukh",
    age: "34 y",
    gender: "Female",
    born: "14 Aug 1991",
    mrn: "0004-2817",
    mobile: "98201 44718",
    allergies: [{
      substance: 'Penicillin',
      reaction: 'rash'
    }],
    status: "in-consult"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(VitalsStrip, {
    dense: true,
    vitals: [{
      label: 'BP',
      value: '142/92',
      unit: 'mmHg',
      flag: 'high'
    }, {
      label: 'Pulse',
      value: 78,
      unit: 'bpm',
      time: '10:12 am'
    }, {
      label: 'Temp',
      value: '100.8',
      unit: '°F',
      flag: 'high'
    }, {
      label: 'SpO₂',
      value: 98,
      unit: '%',
      time: '10:12 am'
    }]
  }), /*#__PURE__*/React.createElement(PrescriptionTable, {
    dense: true,
    showLegend: false,
    items: [{
      name: 'Dolo',
      strength: '650 mg',
      form: 'Tablet',
      generic: 'Paracetamol',
      dose: '1 tab',
      frequency: '1-0-1',
      when: 'After food',
      duration: '5 days'
    }]
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle",
    id: "flow"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "01 / A visit, start to finish",
    title: "One patient. Five steps. No paper register on the side."
  }), /*#__PURE__*/React.createElement(VisitFlow, null)), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "02 / Straight answers",
    title: "Answers to the questions doctors actually ask."
  }), /*#__PURE__*/React.createElement("div", {
    className: "sb-grid-3",
    style: {
      marginTop: 48
    }
  }, FAQ.map(([q, a], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: q,
    delay: i % 3 * 60
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      paddingTop: 20,
      borderTop: '1px solid var(--color-line)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "sb-h3"
  }, "\\u201c", q, "\\u201d"), /*#__PURE__*/React.createElement("p", {
    className: "sb-body",
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, a)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-split"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "03 / Specialties",
    title: "One chart, shaped to how you practise."
  }), /*#__PURE__*/React.createElement("p", {
    className: "sb-body-lg",
    style: {
      color: 'var(--color-text-secondary)',
      maxWidth: 'var(--reading-max)'
    }
  }, "Specialties are add-ons with their own forms, vitals and favourite diagnoses (for example growth charts for paediatrics), all on the same patient chart. We'll build them one at a time, starting with what our first clinics need."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    className: "sb-split"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "04 / What's being built now",
    title: "An honest roadmap."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Timeline, null), /*#__PURE__*/React.createElement("p", {
    className: "sb-body",
    style: {
      color: 'var(--color-text-muted)',
      fontStyle: 'normal'
    }
  }, "Dates are deliberately missing. We'll add them when we're sure of them.")))), /*#__PURE__*/React.createElement(CtaBand, {
    title: "Want to shape SaveBytes Health?",
    body: "We're looking for a few owner-doctors to use it first and tell us what's wrong with it. Free during the pilot, with a direct line to the people building it.",
    onCta: () => go('contact')
  }));
}
window.HealthPage = HealthPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Health.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function CutThread() {
  const ref = React.useRef(null);
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.parentElement.getBoundingClientRect();
      const vh = window.innerHeight;
      setP(Math.max(0, Math.min(1, (vh * 0.6 - r.top) / r.height)));
    };
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return /*#__PURE__*/React.createElement("svg", {
    ref: ref,
    className: "sb-thread",
    viewBox: "0 0 48 400",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    pathLength: "1",
    d: "M34 0C34 100 14 100 14 200C14 300 34 300 34 400",
    fill: "none",
    stroke: "var(--navy-200)",
    strokeWidth: "1.5",
    vectorEffect: "non-scaling-stroke",
    strokeDasharray: "1",
    strokeDashoffset: 1 - p
  }));
}
function HomePage({
  go
}) {
  const {
    Logo,
    Button,
    Link,
    Card,
    Badge,
    Icon,
    Avatar
  } = window.SaveBytesDesignSystem_ad9a34;
  const [settled, setSettled] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setSettled(true), 1600);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "sb-section sb-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-container sb-hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "SaveBytes \xB7 Navi Mumbai"), /*#__PURE__*/React.createElement("h1", {
    className: "sb-display-xl"
  }, "Software that wastes nothing."), /*#__PURE__*/React.createElement("p", {
    className: "sb-lead",
    style: {
      color: 'var(--color-text-secondary)',
      maxWidth: 560
    }
  }, "We build fast, focused software for the places where time matters most. We're starting with clinics: an EHR that keeps up with a busy OPD instead of slowing it down."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('contact')
  }, "Join early access"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go('health')
  }, "See what we're building"))), /*#__PURE__*/React.createElement("div", {
    className: "sb-hero-visual"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: settled ? 0 : 1,
      transition: 'opacity 320ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 160,
    animate: "intro"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: settled ? 1 : 0,
      transform: settled ? 'none' : 'translateY(24px)',
      transition: 'opacity 320ms var(--ease-out), transform 320ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(QueuePanel, null))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(CutThread, null), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-split"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "01 / Why we exist",
    title: "Most clinic software is built to be sold, not to be used."
  }), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 'var(--reading-max)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "sb-body-lg"
  }, "It comes with forty modules, a week of training and a screen full of buttons. So the doctor goes back to the paper pad, the receptionist keeps a register on the side, and the software becomes one more bill every month."), /*#__PURE__*/React.createElement("p", {
    className: "sb-body-lg",
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, "We think good software should feel like a good assistant: there when you need it, invisible when you don't. That means doing fewer things, and doing them properly.")))), /*#__PURE__*/React.createElement(Section, {
    id: "platform"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "02 / What we build",
    title: "A platform first. Products on top.",
    intro: "SaveBytes is a technology company. We build one strong, configurable core and shape it into products for specific jobs. Healthcare is where we're starting."
  }), /*#__PURE__*/React.createElement("div", {
    className: "sb-grid-2",
    style: {
      marginTop: 48
    }
  }, [['health', 'SaveBytes Health', 'Clinic and EHR software for Indian clinics and small hospitals. Appointments, queue, vitals, notes, prescriptions, on one fast screen.', true], ['platform', 'SaveBytes Platform', 'The configurable core underneath: tenants, roles, forms, branding and audit, built on open healthcare standards. It lets each clinic, or a partner, run the same product shaped to them, without a custom fork of the code.', false]].map(([tone, t, d, link], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 60,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "website",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 40,
    tone: tone
  }), /*#__PURE__*/React.createElement("h3", {
    className: "sb-h2"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "sb-body",
    style: {
      color: 'var(--color-text-secondary)',
      flex: 1
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    dot: true
  }, "In development"), link && /*#__PURE__*/React.createElement(Link, {
    href: "#",
    arrow: true,
    onClick: e => {
      e.preventDefault();
      go('health');
    }
  }, "Learn more")))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-split"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "03 / How we work",
    title: "Five rules we build by."
  }), /*#__PURE__*/React.createElement(Principles, null)))), /*#__PURE__*/React.createElement(Section, {
    tone: "inverse",
    grid: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-split"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    inverse: true,
    overline: "04 / Under the hood",
    title: "Boring where it should be. Careful everywhere."
  }), /*#__PURE__*/React.createElement("p", {
    className: "sb-body-lg",
    style: {
      color: 'var(--navy-200)',
      maxWidth: 'var(--reading-max)'
    }
  }, "SaveBytes Health is built on Medplum, an open-source healthcare platform, and stores clinical records as FHIR resources. That gives us a proven foundation for the hard, unglamorous parts (data model, access control, audit) so our time goes into the part you actually touch."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, ['FHIR R4', 'Medplum', 'TypeScript', 'Per-clinic isolation', 'Audit trail', 'Export anytime'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--navy-200)',
      border: '1px solid var(--navy-800)',
      borderRadius: 4,
      padding: '4px 8px',
      whiteSpace: 'nowrap'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "sb-diagram",
    "aria-label": "Your clinic connects to SaveBytes Health, which stores records in an isolated FHIR data space"
  }, [['building-2', 'Your clinic', 'Reception, nurse, doctor'], ['layout-panel-left', 'SaveBytes Health', 'One fast screen per job'], ['database', 'Isolated FHIR data space', 'Yours. Export anytime.']].map(([ic, t, d], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: t
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 1,
      height: 28,
      background: 'var(--navy-700)',
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 16px',
      border: '1px solid ' + (i === 1 ? 'var(--blue-400)' : 'var(--navy-700)'),
      borderRadius: 'var(--radius-md)',
      background: 'var(--navy-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: i === 1 ? 'var(--blue-400)' : 'var(--navy-300)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: '#fff'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--navy-300)'
    }
  }, d)))))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--reading-max)',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "05 / The name"), /*#__PURE__*/React.createElement("blockquote", {
    className: "sb-h2",
    style: {
      margin: 0,
      fontWeight: 500
    }
  }, "\"I named my first GitHub repo SaveBytes because good software should use less: less memory, less time, less of your patience. It turned into a company.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Founder",
    size: 40
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, "[Founder name]"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, "Founder")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Link, {
    href: "#",
    arrow: true,
    onClick: e => {
      e.preventDefault();
      go('about');
    }
  }, "Read the story"))))), /*#__PURE__*/React.createElement(CtaBand, {
    onCta: () => go('contact')
  }));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
const {
  Logo,
  Button,
  Link,
  Icon,
  Card,
  Badge,
  OpdQueue,
  VisitStatusBadge
} = window.SaveBytesDesignSystem_ad9a34;
function Overline({
  children,
  inverse
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sb-overline",
    style: {
      color: inverse ? 'var(--navy-300)' : 'var(--color-text-muted)'
    }
  }, children);
}
function SectionHeader({
  overline,
  title,
  intro,
  inverse,
  center
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 760,
      textAlign: center ? 'center' : 'left',
      alignItems: center ? 'center' : 'flex-start',
      margin: center ? '0 auto' : undefined
    }
  }, overline && /*#__PURE__*/React.createElement(Overline, {
    inverse: inverse
  }, overline), /*#__PURE__*/React.createElement("h2", {
    className: "sb-display",
    style: {
      color: inverse ? '#fff' : 'var(--color-text)'
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    className: "sb-lead",
    style: {
      color: inverse ? 'var(--navy-200)' : 'var(--color-text-secondary)'
    }
  }, intro));
}
function Section({
  tone = 'white',
  id,
  children,
  style,
  grid
}) {
  const bg = tone === 'subtle' ? 'var(--color-surface-subtle)' : tone === 'inverse' ? 'var(--color-surface-inverse)' : tone === 'soft' ? 'var(--color-brand-soft)' : '#fff';
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    className: "sb-section",
    style: {
      background: grid ? (tone === 'inverse' ? 'var(--dot-grid-inverse), ' : 'var(--dot-grid), ') + bg : bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-container"
  }, children));
}
function Reveal({
  children,
  delay = 0,
  style
}) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, {
      threshold: 0.15
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: on ? 1 : 0,
      transform: on ? 'none' : 'translateY(12px)',
      transition: 'opacity 320ms var(--ease-out) ' + delay + 'ms, transform 320ms var(--ease-out) ' + delay + 'ms',
      ...style
    }
  }, children);
}
function ScreenPanel({
  children,
  title = 'OPD queue · Today',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--color-line)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 44,
      padding: '0 16px',
      borderBottom: '1px solid var(--color-line)',
      background: 'var(--color-surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 16,
    tone: "health"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--color-text-muted)'
    }
  }, "12 Mar 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, children));
}
const QUEUE = [{
  token: 6,
  name: 'Rohan Patil',
  age: '52 y',
  sex: 'M',
  reason: 'Follow-up, BP',
  time: '10:15 am',
  status: 'signed'
}, {
  token: 7,
  name: 'Priya Deshmukh',
  age: '34 y',
  sex: 'F',
  reason: 'Fever, 3 days',
  time: '10:30 am',
  status: 'in-consult'
}, {
  token: 8,
  name: 'Aarav Joshi',
  age: '6 y',
  sex: 'M',
  reason: 'Cough',
  time: '10:45 am',
  status: 'vitals'
}, {
  token: 9,
  name: 'Sunita Naik',
  age: '61 y',
  sex: 'F',
  reason: 'Diabetes review',
  time: '11:00 am',
  status: 'arrived'
}, {
  token: 10,
  name: 'Imran Shaikh',
  age: '29 y',
  sex: 'M',
  reason: 'Back pain',
  time: '11:15 am',
  status: 'booked'
}];
function QueuePanel({
  style
}) {
  return /*#__PURE__*/React.createElement(ScreenPanel, {
    style: style
  }, /*#__PURE__*/React.createElement(OpdQueue, {
    dense: true,
    rows: QUEUE
  }));
}
const PRINCIPLES = [['Waste nothing.', "If a click, a field or a screen doesn't help the doctor, it goes."], ['Your data stays yours.', 'Each clinic gets its own isolated data space. You can export everything, any time.'], ['Open standards, no lock-in.', 'Records are stored as FHIR, the international standard for health data, so they can move with you.'], ['Built to be trusted.', 'Every clinical action is logged. Permissions are enforced on the server, not hidden in the interface.'], ['Doctors decide.', 'Anything a machine drafts is marked as a draft until a clinician confirms it.']];
function Principles({
  extra
}) {
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, PRINCIPLES.map(([t, d], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("li", {
    className: "sb-principle"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      lineHeight: '28px',
      color: 'var(--color-brand)'
    }
  }, "// ", String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      lineHeight: '28px',
      fontWeight: 600
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: '26px',
      color: 'var(--color-text-secondary)',
      marginTop: 2
    }
  }, d, extra && extra[i] ? ' ' + extra[i] : ''))))));
}
const ROADMAP = [['Foundation', 'Infrastructure, security, isolated data per clinic.', 'Now'], ['Platform core', 'Clinics, staff, roles, permissions, branding.', 'Next'], ['Patient records', 'Registration, consent, allergies, problems, documents.', 'Next'], ['OPD', 'Appointments, live queue, vitals, consult, prescriptions, PDFs.', 'Then'], ['Later', 'Billing, pharmacy, lab, patient app, ABDM.', 'Planned']];
function Timeline() {
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 11,
      top: 12,
      bottom: 12,
      width: 1,
      background: 'var(--color-line)'
    }
  }), ROADMAP.map(([t, d, s], i) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '24px 1fr',
      gap: 20,
      padding: '0 0 28px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#fff',
      padding: '2px 0',
      display: 'flex',
      justifyContent: 'center',
      color: 'var(--navy-300)'
    }
  }, i === 0 ? /*#__PURE__*/React.createElement(Logo, {
    size: 20
  }) : /*#__PURE__*/React.createElement(Logo, {
    size: 20,
    tone: "current"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      lineHeight: '26px',
      fontWeight: 600
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: i === 0 ? 'var(--color-brand)' : 'var(--color-text-muted)'
    }
  }, s)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: '26px',
      color: 'var(--color-text-secondary)'
    }
  }, d)))));
}
function CtaBand({
  title = 'Running a clinic in Navi Mumbai or Mumbai?',
  body,
  onCta
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "soft"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sb-h1"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "sb-body",
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, body || "We're looking for a few clinics to use SaveBytes Health first and tell us what's wrong with it. You'll get it early, free during the pilot, and a direct line to the people building it.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onCta
  }, "Join early access")));
}
function Footer({
  go
}) {
  const col = (t, links) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-overline",
    style: {
      color: 'var(--navy-400)'
    }
  }, t), links.map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      color: 'var(--navy-200)',
      fontSize: 15
    }
  }, l)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-surface-inverse)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-container",
    style: {
      padding: '64px 0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "horizontal",
    tone: "white",
    size: 28
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--navy-200)',
      fontSize: 15,
      lineHeight: '24px'
    }
  }, "SaveBytes builds fast, focused software. Made in Navi Mumbai."), /*#__PURE__*/React.createElement(Link, {
    href: "#",
    inverse: true
  }, "[hello@savebytes.in]")), col('Products', [['Health', 'health'], ['Platform', 'platform']]), col('Company', [['About', 'about'], ['Contact', 'contact']]), col('Legal', [['Privacy', 'privacy']])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 12,
      marginTop: 48,
      paddingTop: 20,
      borderTop: '1px solid var(--navy-800)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--navy-400)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 SaveBytes"), /*#__PURE__*/React.createElement("span", null, "This page weighs [xx] KB."))));
}
Object.assign(window, {
  Overline,
  SectionHeader,
  Section,
  Reveal,
  ScreenPanel,
  QueuePanel,
  QUEUE,
  Principles,
  Timeline,
  CtaBand,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AiDraft = __ds_scope.AiDraft;

__ds_ns.LabResultsTable = __ds_scope.LabResultsTable;

__ds_ns.OpdQueue = __ds_scope.OpdQueue;

__ds_ns.PatientBanner = __ds_scope.PatientBanner;

__ds_ns.PrescriptionTable = __ds_scope.PrescriptionTable;

__ds_ns.ResultFlag = __ds_scope.ResultFlag;

__ds_ns.SignedRecord = __ds_scope.SignedRecord;

__ds_ns.VISIT_STATES = __ds_scope.VISIT_STATES;

__ds_ns.VisitStatusBadge = __ds_scope.VisitStatusBadge;

__ds_ns.VitalsStrip = __ds_scope.VitalsStrip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.FileUpload = __ds_scope.FileUpload;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Popover = __ds_scope.Popover;

})();
