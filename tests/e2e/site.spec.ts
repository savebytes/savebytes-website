import { test, expect } from '@playwright/test';

const pages = ['/', '/health', '/about', '/contact', '/privacy'];

test.describe('the rebuilt site', () => {
  test('home says who SaveBytes is and lists the products and pages', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Quiet software for busy places.');
    const dir = page.getByRole('list', { name: 'Where to go' });
    await expect(dir.getByRole('link', { name: /SaveBytes Health/ })).toHaveAttribute('href', '/health');
    await expect(dir.getByRole('link', { name: /About SaveBytes/ })).toHaveAttribute('href', '/about');
    await expect(dir.getByRole('link', { name: /Get in touch/ })).toHaveAttribute('href', '/contact');
  });

  test('the product page follows the standard blocks and reveals no dates', async ({ page }) => {
    await page.goto('/health', { waitUntil: 'networkidle' });
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('SaveBytes Health');
    await expect(page.getByText('Version 1 is ready.')).toBeVisible();
    for (const h of ['What it does', 'Coming soon', 'Your records stay yours']) await expect(page.getByRole('heading', { name: h })).toBeVisible();
    for (const s of ['ABDM', 'Laboratory', 'Pharmacy', 'Patient app']) await expect(page.locator('.soon').getByText(s, { exact: true })).toBeVisible();
    await expect(page.locator('main')).not.toContainText(/\b20\d\d\b|quarter|Q[1-4]\b/);
    expect(await page.locator('main figure, main img').count()).toBeLessThanOrEqual(1);
  });

  test('platform, security, roadmap and writing are not linked while they are not public', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    for (const p of ['/platform', '/security', '/roadmap', '/writing']) expect(await page.locator(`a[href="${p}"]`).count(), p).toBe(0);
  });

  test('blue appears only on the logo and the one action', async ({ page }) => {
    for (const path of pages) {
      await page.goto(path, { waitUntil: 'networkidle' });
      const blue = await page.evaluate(() =>
        [...document.querySelectorAll('main *, header *')].filter((el) => {
          const s = getComputedStyle(el);
          return [s.backgroundColor, s.color].some((c) => c === 'rgb(47, 91, 255)') && !el.closest('svg');
        }).filter((el) => (el as HTMLElement).offsetParent !== null).length,
      );
      expect(blue, path).toBeLessThanOrEqual(3); // header action, the page's action, and its closing repeat
    }
  });

  test('light only: no theme toggle and no gradients', async ({ page }) => {
    for (const path of pages) {
      await page.goto(path, { waitUntil: 'networkidle' });
      await expect(page.getByRole('button', { name: /theme/i })).toHaveCount(0);
      const grads = await page.evaluate(() => [...document.querySelectorAll('body *')].map((el) => getComputedStyle(el).backgroundImage).filter((bg) => /gradient/.test(bg)));
      expect(grads, path).toEqual([]);
    }
  });

  test('phone menu opens, lists the pages and closes with Escape', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 800 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.getByRole('button', { name: 'Menu' }).click();
    for (const name of ['Health', 'About', 'Get in touch']) await expect(page.locator('#menu').getByRole('link', { name })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('#menu')).toHaveCount(0);
  });

  test('the typeface is self-hosted and loads', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    const ok = await page.evaluate(async () => { await document.fonts.ready; return document.fonts.check('650 40px "Atkinson Hyperlegible Next"'); });
    expect(ok).toBe(true);
  });
});
