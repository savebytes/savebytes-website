'use client';
import React from 'react';
import { ICONS as GENERATED_ICONS } from './icons';
import { CUSTOM_ICONS } from './icons.custom';
const ICONS = { ...GENERATED_ICONS, ...CUSTOM_ICONS };
const __ds_ns = {};

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
/** Lucide icon (inlined at build time from ./icons.js), stroke 1.75, inherits currentColor. */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color,
  label,
  style
}) {
  const raw = ICONS[name] || '';
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
    className: "sb-vitals",
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
    className: "sb-vital",
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
    className: "sb-rx-box",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--color-line)',
      borderRadius: 'var(--radius-md)',
      overflow: 'auto',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "sb-rx",
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
      "data-label": "#",
      style: {
        ...td,
        fontFamily: 'var(--font-mono)',
        color: 'var(--color-text-muted)'
      }
    }, i + 1), /*#__PURE__*/React.createElement("td", {
      "data-label": "Medicine",
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
      "data-label": "Dose",
      style: {
        ...td,
        fontFamily: 'var(--font-mono)',
        whiteSpace: 'nowrap',
        ...strike
      }
    }, m.dose), /*#__PURE__*/React.createElement("td", {
      "data-label": "Frequency",
      style: {
        ...td,
        fontFamily: 'var(--font-mono)',
        fontWeight: 500,
        whiteSpace: 'nowrap',
        ...strike
      }
    }, m.frequency), /*#__PURE__*/React.createElement("td", {
      "data-label": "When",
      style: {
        ...td,
        whiteSpace: 'nowrap',
        ...strike
      }
    }, m.when), /*#__PURE__*/React.createElement("td", {
      "data-label": "Duration",
      style: {
        ...td,
        fontFamily: 'var(--font-mono)',
        whiteSpace: 'nowrap',
        ...strike
      }
    }, m.duration), /*#__PURE__*/React.createElement("td", {
      "data-label": "Instructions",
      style: {
        ...td,
        color: 'var(--color-text-secondary)',
        ...strike
      }
    }, m.instructions), actions && /*#__PURE__*/React.createElement("td", {
      "data-label": "Actions",
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
    className: "sb-q-row",
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
    className: "sb-q-time",
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
    className: "sb-q",
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
    className: "sb-pb",
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--color-line)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-pb-row",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '12px 20px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb-pb-id",
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
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
    className: "sb-pb-meta",
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
    className: "sb-pb-alert",
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
      right: 2,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 36,
      height: 36,
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
  homeHref = '#',
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
      // let the browser handle cmd/ctrl/shift/middle clicks (open in new tab) on real links
      if (e && (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1)) return;
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
    href: homeHref,
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
      padding: '11px 0',
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
export default __ds_ns;
export const { AiDraft, LabResultsTable, OpdQueue, PatientBanner, PrescriptionTable, ResultFlag, SignedRecord, VISIT_STATES, VisitStatusBadge, VitalsStrip, Button, Icon, Link, Logo, Avatar, Card, CodeBlock, Table, Alert, Badge, EmptyState, Skeleton, Toast, Tooltip, Checkbox, DatePicker, Field, FileUpload, Radio, SearchInput, Select, Switch, TextInput, Textarea, Breadcrumbs, Pagination, SideNav, SiteHeader, Stepper, Tabs, Dialog, Drawer, Menu, Popover } = __ds_ns;
