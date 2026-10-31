/** Contact / early-access form rules. Pure functions, so they are unit-tested and reusable by a future API route. */

export const ROLES = ['Doctor', 'Clinic owner', 'Clinic manager', 'Partner', 'Other'] as const;

export type LeadField = 'name' | 'clinic' | 'role' | 'city' | 'reach' | 'message';
export type LeadErrors = Partial<Record<LeadField, string>>;
export type ReachKind = 'email' | 'phone';

export const LIMITS = { name: 80, clinic: 100, city: 60, reach: 254, message: 2000 } as const;

const NAME_RE = /^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u;
const CITY_RE = /^[\p{L}\p{M}][\p{L}\p{M}\s.,'’-]*$/u;
const EMAIL_RE = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;

export function isEmail(v: string): boolean {
  const s = v.trim();
  if (s.length > 254 || s.includes('..')) return false;
  const [local] = s.split('@');
  return local.length <= 64 && EMAIL_RE.test(s);
}

/**
 * Accepts Indian mobiles (10 digits starting 6-9, optional +91 / 91 / 0), Indian landlines with STD code
 * (0 + 9-10 digits) and international numbers with a leading + (8-15 digits).
 * Returns the number in a clean form, or null when it is not a valid number.
 */
export function normalizePhone(raw: string): string | null {
  const s = raw.trim().replace(/[\s\-().]/g, '');
  if (!s || /[^\d+]/.test(s) || s.lastIndexOf('+') > 0) return null;
  let m = s.match(/^(?:\+91|0091|91|0)?([6-9]\d{9})$/);
  if (m) return '+91' + m[1];
  m = s.match(/^0(\d{9,10})$/);
  if (m) return '0' + m[1]; // landline with STD code
  m = s.match(/^\+(?!91)([1-9]\d{7,14})$/);
  if (m) return '+' + m[1];
  return null;
}

export function reachKind(v: string): ReachKind {
  return v.includes('@') ? 'email' : 'phone';
}

export function validateField(field: LeadField, value: string): string | undefined {
  const v = (value ?? '').trim();
  switch (field) {
    case 'name':
      if (!v) return 'Enter your name';
      if (v.length < 2) return 'That name looks too short';
      if (v.length > LIMITS.name) return `Keep your name under ${LIMITS.name} characters`;
      if (!NAME_RE.test(v)) return 'Use letters only in your name';
      return;
    case 'clinic':
      if (v.length > LIMITS.clinic) return `Keep this under ${LIMITS.clinic} characters`;
      return;
    case 'role':
      if (v && !(ROLES as readonly string[]).includes(v)) return 'Choose one of the listed roles';
      return;
    case 'city':
      if (!v) return;
      if (v.length > LIMITS.city) return `Keep this under ${LIMITS.city} characters`;
      if (!CITY_RE.test(v)) return 'Use letters only in the city name';
      return;
    case 'reach': {
      if (!v) return 'Enter a phone number or email';
      if (v.length > LIMITS.reach) return 'That is too long';
      if (reachKind(v) === 'email') return isEmail(v) ? undefined : "That email address doesn't look right. Check for typos";
      if (/[^\d\s\-().+]/.test(v)) return 'Enter a phone number with digits only, or an email address';
      return normalizePhone(v)
        ? undefined
        : 'Enter a 10-digit mobile number such as 98201 44718, or add +country code for a number outside India';
    }
    case 'message':
      if (v.length > LIMITS.message) return `Keep your message under ${LIMITS.message} characters`;
      return;
  }
}

const FIELDS: LeadField[] = ['name', 'clinic', 'role', 'city', 'reach', 'message'];

export function validateLead(values: Partial<Record<LeadField, string>>): LeadErrors {
  const errors: LeadErrors = {};
  for (const f of FIELDS) {
    const e = validateField(f, String(values[f] ?? ''));
    if (e) errors[f] = e;
  }
  return errors;
}

/** Trimmed, normalised payload that is safe to send once validateLead returns no errors. */
export function cleanLead(values: Partial<Record<LeadField, string>>) {
  const reach = String(values.reach ?? '').trim();
  const kind = reachKind(reach);
  return {
    name: String(values.name ?? '').trim(),
    clinic: String(values.clinic ?? '').trim(),
    role: String(values.role ?? '').trim(),
    city: String(values.city ?? '').trim(),
    reach: kind === 'phone' ? normalizePhone(reach) ?? reach : reach.toLowerCase(),
    reachType: kind,
    message: String(values.message ?? '').trim(),
  };
}
