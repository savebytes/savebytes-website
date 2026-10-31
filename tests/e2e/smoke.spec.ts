import { test, expect } from '@playwright/test';

const pages = ['/', '/health', '/about', '/contact', '/privacy'];

for (const path of pages) {
  test(`${path} renders without errors or horizontal scroll`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    await page.goto(path, { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toHaveCount(1);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    expect(errors).toEqual([]);
  });
}

test('contact form validates required fields', async ({ page }) => {
  await page.goto('/contact');
  await page.click('button[type=submit]');
  await expect(page.getByText('Enter your name')).toBeVisible();
});

test('every page has a unique title', async ({ page }) => {
  const titles = new Set<string>();
  for (const path of pages) {
    await page.goto(path);
    titles.add(await page.title());
  }
  expect(titles.size).toBe(pages.length);
});

test('health consult panel fits its container with no sideways scroll', async ({ page }) => {
  await page.goto('/health', { waitUntil: 'networkidle' });
  const bad = await page.evaluate(() =>
    [...document.querySelectorAll('.sb-rx-box, .sb-rx-box > div, .sb-pb')]
      .filter((el) => el.scrollWidth > el.clientWidth + 1)
      .map((el) => el.className || el.tagName),
  );
  expect(bad).toEqual([]);
});

test('no placeholder "#" links; header logo and in-page links are real URLs', async ({ page }) => {
  for (const path of pages) {
    await page.goto(path, { waitUntil: 'networkidle' });
    expect(await page.locator('a[href="#"]').count(), path).toBe(0);
  }
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'SaveBytes home' })).toHaveAttribute('href', '/');
  await expect(page.getByRole('link', { name: 'Learn more' })).toHaveAttribute('href', '/health');
});

test('profile links are present, correct and open safely', async ({ page }) => {
  await page.goto('/contact', { waitUntil: 'networkidle' });
  const hrefs = await page.locator('a[target=_blank]').evaluateAll((as) => as.map((a) => [(a as HTMLAnchorElement).href, a.getAttribute('rel')]));
  const flat = hrefs.map(([h]) => h);
  expect(flat).toContain('https://www.linkedin.com/in/ankit-singh-72b744225/');
  expect(flat).toContain('https://www.instagram.com/advaiticc');
  expect(flat).toContain('https://ankit.savebytes.in/');
  expect(flat.some((h) => h!.startsWith('https://wa.me/918789286009'))).toBe(true);
  for (const [, rel] of hrefs) expect(rel).toContain('noopener');
});

test('contact email is the real address everywhere, with no bracketed placeholder', async ({ page }) => {
  for (const path of ['/contact', '/privacy', '/about']) {
    await page.goto(path, { waitUntil: 'networkidle' });
    await expect(page.locator('footer a[href="mailto:ankit.singh4x@gmail.com"]')).toHaveCount(1);
    await expect(page.locator('body')).not.toContainText('[hello@savebytes.in]');
  }
});
