import { test, expect } from '@playwright/test';

const bar = (page: import('@playwright/test').Page) => page.locator('.sb-hdr-bar');
const style = (page: import('@playwright/test').Page) =>
  bar(page).evaluate((el) => { const c = getComputedStyle(el); return { bg: c.backgroundColor, blur: c.backdropFilter || (c as any).webkitBackdropFilter, radius: c.borderRadius, height: c.height }; });

test.describe('glass header', () => {
  test('transparent and full-width at the top of the page', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await expect(page.locator('.sb-hdr')).toHaveAttribute('data-state', 'top');
    const s = await style(page);
    expect(s.bg).toBe('rgba(255, 255, 255, 0)');
    expect(s.blur).toMatch(/blur\(0px\)|none/);
    expect(s.radius).toBe('0px');
    const box = await bar(page).boundingBox();
    expect(box!.x).toBe(0);
  });

  test('becomes a floating frosted pill after scrolling, and returns to transparent at the top', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.evaluate(() => window.scrollTo(0, 400));
    await expect(page.locator('.sb-hdr')).toHaveAttribute('data-state', 'pill');
    await page.waitForTimeout(500);
    const s = await style(page);
    expect(s.blur).toContain('blur(16px)');
    expect(s.radius).toBe('9999px');
    expect(s.height).toBe('56px');
    expect(s.bg).toBe('rgba(255, 255, 255, 0.78)');
    const box = await bar(page).boundingBox();
    expect(box!.y).toBeGreaterThan(8); // floats off the top edge
    expect(box!.x).toBeGreaterThan(8); // inset from the sides
    await page.evaluate(() => window.scrollTo(0, 0));
    await expect(page.locator('.sb-hdr')).toHaveAttribute('data-state', 'top');
  });

  test('the pill state also works with reduced motion', async ({ browser }) => {
    const ctx = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.evaluate(() => window.scrollTo(0, 400));
    await expect(page.locator('.sb-hdr')).toHaveAttribute('data-state', 'pill');
    await ctx.close();
  });

  test('the header CTA is fully rounded to match the pill, at the top and when scrolled', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    const radius = () => page.locator('.sb-hdr-cta button').evaluate((el) => getComputedStyle(el).borderRadius);
    expect(await radius()).toBe('9999px');
    await page.evaluate(() => window.scrollTo(0, 400));
    await expect(page.locator('.sb-hdr')).toHaveAttribute('data-state', 'pill');
    expect(await radius()).toBe('9999px');
  });

  test('current page is marked in the nav', async ({ page }) => {
    await page.goto('/about', { waitUntil: 'networkidle' });
    await expect(page.locator('.sb-hdr-nav a[aria-current=page]')).toHaveText('About');
  });
});

test.describe('mobile menu', () => {
  test.use({ viewport: { width: 390, height: 800 } });
  test('opens full-screen, keeps focus inside, closes with Escape and returns focus', async ({ page }) => {
    await page.goto('/health', { waitUntil: 'networkidle' });
    const toggle = page.getByRole('button', { name: 'Open menu' });
    await toggle.click();
    await expect(page.locator('#sb-menu')).toBeVisible();
    await expect(page.locator('#sb-menu a').first()).toBeFocused();
    await expect(page.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
    expect(await page.evaluate(() => document.documentElement.style.overflow)).toBe('hidden');
    await page.keyboard.press('Escape');
    await expect(page.locator('#sb-menu')).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused();
    expect(await page.evaluate(() => document.documentElement.style.overflow)).toBe('');
  });
  test('navigating from the menu goes to the page and closes the menu', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.getByRole('button', { name: 'Open menu' }).click();
    await page.locator('#sb-menu a', { hasText: 'About' }).click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(page.locator('#sb-menu')).toHaveCount(0);
  });
});
