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

test('every page has a unique title', async ({ page }) => {
  const titles = new Set<string>();
  for (const path of pages) {
    await page.goto(path);
    titles.add(await page.title());
  }
  expect(titles.size).toBe(pages.length);
});

test('no placeholder "#" links and the logo goes home', async ({ page }) => {
  for (const path of pages) {
    await page.goto(path, { waitUntil: 'networkidle' });
    expect(await page.locator('a[href="#"]').count(), path).toBe(0);
  }
  await page.goto('/about');
  await expect(page.getByRole('link', { name: 'SaveBytes home' })).toHaveAttribute('href', '/');
});

test('profile links are present, correct and open safely', async ({ page }) => {
  await page.goto('/contact', { waitUntil: 'networkidle' });
  const hrefs = await page.locator('main a[target=_blank]').evaluateAll((as) => as.map((a) => [(a as HTMLAnchorElement).href, a.getAttribute('rel')]));
  const flat = hrefs.map(([h]) => h);
  expect(flat).toContain('https://www.linkedin.com/in/ankit-singh-72b744225/');
  expect(flat).toContain('https://www.instagram.com/advaiticc');
  expect(flat).toContain('https://ankit.savebytes.in/');
  expect(flat).toContain('https://x.com/singhankitt_');
  expect(flat.some((h) => h!.startsWith('https://wa.me/918789286009'))).toBe(true);
  for (const [, rel] of hrefs) expect(rel).toContain('noopener');
});

test('the footer keeps the real email and the full-width name', async ({ page }) => {
  for (const path of ['/', '/contact', '/about']) {
    await page.goto(path, { waitUntil: 'networkidle' });
    await expect(page.locator('footer a[href="mailto:ankit.singh4x@gmail.com"]')).toHaveCount(1);
    await expect(page.locator('footer .foot-name')).toHaveText('SaveBytes');
  }
});
