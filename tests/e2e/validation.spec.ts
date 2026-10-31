import { test, expect } from '@playwright/test';
import { validateField, validateLead, normalizePhone, isEmail, cleanLead } from '../../src/lib/validation/lead';

test.describe('lead validation rules', () => {
  test('accepts Indian mobiles in common formats', () => {
    for (const ok of ['98201 44718', '9820144718', '+91 98201 44718', '+91-98201-44718', '0091 98201 44718', '919820144718', '(98201) 44718'])
      expect(validateField('reach', ok), ok).toBeUndefined();
    expect(normalizePhone('98201 44718')).toBe('+919820144718');
    expect(normalizePhone('+91 98201 44718')).toBe('+919820144718');
  });
  test('accepts landlines with STD code and international numbers', () => {
    expect(validateField('reach', '022 2757 1234')).toBeUndefined();
    expect(validateField('reach', '+44 20 7946 0958')).toBeUndefined();
    expect(validateField('reach', '+1 415 555 0132')).toBeUndefined();
  });
  test('rejects bad phone numbers', () => {
    for (const bad of ['12345', '5820144718', '98201 4471', '98201 447189', 'call me', '98201-44718x', '++919820144718', '+91 1234567890'])
      expect(validateField('reach', bad), bad).toBeTruthy();
  });
  test('email rules', () => {
    for (const ok of ['dr.rao@clinic.in', 'a+b@sub.example.co.in', 'Priya@Clinic.COM']) expect(isEmail(ok), ok).toBe(true);
    for (const bad of ['a@b', '@x.com', 'a b@x.com', 'a@@x.com', 'a..b@x.com', 'a@x..com', 'a@x.c', 'plain'])
      expect(isEmail(bad), bad).toBe(false);
    expect(validateField('reach', 'a@b')).toMatch(/email/i);
  });
  test('name and city rules', () => {
    expect(validateField('name', '')).toBe('Enter your name');
    expect(validateField('name', 'A')).toBeTruthy();
    expect(validateField('name', 'R2D2')).toBeTruthy();
    for (const ok of ['Priya Deshmukh', "Dr. D'Souza", 'Anne-Marie', 'प्रिया देशमुख']) expect(validateField('name', ok), ok).toBeUndefined();
    expect(validateField('city', 'Navi Mumbai')).toBeUndefined();
    expect(validateField('city', '')).toBeUndefined();
    expect(validateField('city', 'Mumbai 400703')).toBeTruthy();
  });
  test('role must be a listed option; message length is capped', () => {
    expect(validateField('role', '')).toBeUndefined();
    expect(validateField('role', 'Doctor')).toBeUndefined();
    expect(validateField('role', 'Hacker')).toBeTruthy();
    expect(validateField('message', 'x'.repeat(2001))).toBeTruthy();
  });
  test('validateLead + cleanLead', () => {
    expect(Object.keys(validateLead({ name: '', reach: '' })).sort()).toEqual(['name', 'reach']);
    expect(validateLead({ name: 'Priya Deshmukh', reach: '98201 44718' })).toEqual({});
    const c = cleanLead({ name: '  Priya  ', reach: '98201 44718', role: 'Doctor' });
    expect(c).toMatchObject({ name: 'Priya', reach: '+919820144718', reachType: 'phone', role: 'Doctor' });
    expect(cleanLead({ name: 'x', reach: ' Dr@Clinic.IN ' })).toMatchObject({ reach: 'dr@clinic.in', reachType: 'email' });
  });
});

test.describe('contact form behaviour', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/contact', { waitUntil: 'networkidle' }); });

  test('shows field errors on blur and on submit, and focuses the first invalid field', async ({ page }) => {
    await page.getByLabel('Phone or email').fill('12345');
    await page.getByLabel('Name').focus();
    await expect(page.getByText(/10-digit mobile number/)).toBeVisible();
    await page.getByRole('button', { name: 'Send' }).click();
    await expect(page.getByText('Enter your name')).toBeVisible();
    await expect(page.getByLabel('Name')).toBeFocused();
    await expect(page.getByLabel('Name')).toHaveAttribute('aria-invalid', 'true');
  });

  test('errors clear as soon as the value is fixed', async ({ page }) => {
    await page.getByLabel('Phone or email').fill('dr@');
    await page.getByLabel('Name').focus();
    await expect(page.getByText(/email address doesn't look right/)).toBeVisible();
    await page.getByLabel('Phone or email').fill('dr@clinic.in');
    await expect(page.getByText(/email address doesn't look right/)).toHaveCount(0);
  });

  test('valid values raise no field errors', async ({ page }) => {
    await page.getByLabel('Name').fill('Priya Deshmukh');
    await page.getByLabel('Phone or email').fill('98201 44718');
    await page.getByLabel('Name').focus();
    await page.getByLabel('Phone or email').focus();
    await page.getByLabel('Message').focus();
    await expect(page.locator('[aria-invalid=true]')).toHaveCount(0);
  });

  test('honeypot field is hidden from people and assistive tech', async ({ page }) => {
    const hp = page.locator('input[name=company_website]');
    await expect(hp).toHaveAttribute('tabindex', '-1');
    expect(await hp.evaluate((el) => el.closest('[aria-hidden=true]') !== null)).toBe(true);
  });
});
