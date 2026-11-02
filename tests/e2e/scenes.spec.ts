import { test, expect } from '@playwright/test';

test.describe('scroll scenes (desktop)', () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test('Health visit flow: scrolling the pinned stage walks all five steps; clicking a step scrolls to it', async ({ page }) => {
    await page.goto('/health', { waitUntil: 'networkidle' });
    const geo = await page.evaluate(() => { const r = document.querySelector('.sb-flowscene')!.getBoundingClientRect(); return { top: r.top + scrollY, h: r.height }; });
    const selected = () => page.evaluate(() => [...document.querySelectorAll('[role=tab]')].findIndex((t) => t.getAttribute('aria-selected') === 'true'));
    const seen: number[] = [];
    for (const f of [0.05, 0.25, 0.45, 0.65, 0.85]) {
      await page.evaluate((y) => window.scrollTo(0, y), geo.top + (geo.h - 900) * f);
      await page.waitForTimeout(400);
      seen.push(await selected());
    }
    expect(seen).toEqual([0, 1, 2, 3, 4]);
    const stick = await page.locator('.sb-flowscene-stick').boundingBox();
    expect(stick!.y).toBeCloseTo(0, 0); // pinned to the top of the viewport
    await page.getByRole('tab', { name: /Vitals/ }).click();
    await expect.poll(selected).toBe(2);
  });

  test('Home: the statement fills with ink as it scrolls, and is at full ink at the end', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    const ink = () => page.locator('.sb-ink').first().evaluate((el) => parseFloat((el as HTMLElement).style.getPropertyValue('--ink')));
    const top = await page.locator('.sb-ink').first().evaluate((el) => el.getBoundingClientRect().top + scrollY);
    await page.evaluate((y) => window.scrollTo(0, y), top - 560);
    await page.waitForTimeout(300);
    const early = await ink();
    await page.evaluate((y) => window.scrollTo(0, y), top - 120);
    await page.waitForTimeout(300);
    expect(await ink()).toBeGreaterThan(early);
    expect(await ink()).toBeGreaterThan(0.95);
  });

  test('the cut spine is present on Home, Health and About', async ({ page }) => {
    for (const path of ['/', '/health', '/about']) {
      await page.goto(path, { waitUntil: 'networkidle' });
      await expect(page.locator('svg.sb-thread'), path).toHaveCount(1);
    }
  });
});

test.describe('reduced motion', () => {
  test.use({ reducedMotion: 'reduce', viewport: { width: 1440, height: 900 } });
  test('no pinned scene and statements stay at full ink', async ({ page }) => {
    await page.goto('/health', { waitUntil: 'networkidle' });
    await expect(page.locator('.sb-flowscene')).toHaveCount(0);
    await page.goto('/', { waitUntil: 'networkidle' });
    expect(await page.locator('.sb-ink.is-live').count()).toBe(0);
  });
});

test.describe('phone', () => {
  test.use({ viewport: { width: 390, height: 800 } });
  test('Health keeps the plain stepper (no pinned scroll scene) on phones', async ({ page }) => {
    await page.goto('/health', { waitUntil: 'networkidle' });
    await expect(page.locator('.sb-flowscene')).toHaveCount(0);
    await page.getByRole('tab', { name: /Consult/ }).click();
    await expect(page.getByRole('tab', { name: /Consult/ })).toHaveAttribute('aria-selected', 'true');
  });
});
