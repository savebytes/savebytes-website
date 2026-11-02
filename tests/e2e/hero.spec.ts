import { test, expect } from '@playwright/test';

const panel = (page: import('@playwright/test').Page) => page.locator('.sb-scene-front');

test('first visit: logo intro hands off to the OPD panel, which ends fully visible with no leftover overlay', async ({ page }) => {
  await page.goto('/', { waitUntil: 'commit' });
  await page.waitForTimeout(800);
  expect(Number(await panel(page).evaluate((el) => getComputedStyle(el).opacity))).toBeLessThan(0.1); // intro playing, panel not yet shown
  await page.waitForTimeout(3800);
  await expect(panel(page)).toHaveCSS('opacity', '1');
  await expect(page.locator('.sb-scene-front [data-sb-mark]')).toHaveCSS('opacity', '1');
  const bigLogos = await page.evaluate(() => [...document.querySelectorAll('.sb-hero-visual svg')].filter((s) => s.getBoundingClientRect().width > 100).length);
  expect(bigLogos).toBe(0);
});

test('repeat visit in the same session skips the intro', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(4200);
  await page.goto('/about');
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(200);
  await expect(panel(page)).toHaveCSS('opacity', '1');
});

test.describe('reduced motion', () => {
  test.use({ reducedMotion: 'reduce' });
  test('no logo flight; the panel is simply there', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    await expect(panel(page)).toHaveCSS('opacity', '1');
    const bigLogos = await page.evaluate(() => [...document.querySelectorAll('.sb-hero-visual svg')].filter((s) => s.getBoundingClientRect().width > 100).length);
    expect(bigLogos).toBe(0);
  });
});

test.describe('live queue in the hero', () => {
  test('Call next moves the queue on and the consult card follows; it ends clear and can restart', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(4600);
    const status = page.locator('.sb-sr');
    await expect(page.locator('.sb-scene-back')).toContainText('Priya Deshmukh');
    await page.getByRole('button', { name: 'Call next' }).click();
    await expect(status).toHaveText('Priya Deshmukh signed. Aarav Joshi is now in consult.');
    await expect(page.locator('.sb-scene-back')).toContainText('Aarav Joshi');
    for (let i = 0; i < 3; i++) await page.getByRole('button', { name: 'Call next' }).click();
    await expect(status).toHaveText('Imran Shaikh signed. Queue is clear.');
    await expect(page.locator('.sb-scene-back')).toContainText('No patient in consult');
    await page.getByRole('button', { name: 'Start again' }).click();
    await expect(page.locator('.sb-scene-back')).toContainText('Priya Deshmukh');
  });
});
