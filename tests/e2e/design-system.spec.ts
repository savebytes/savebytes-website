import { test, expect } from '@playwright/test';

/** Guards the rules from "SaveBytes Design System/source/SAVEBYTES_DESIGN_SYSTEM.md" that the site once drifted from. */

test.describe('design system conformance', () => {
  test('Home carries the five numbered mono overlines from the brief', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    const overlines = await page.locator('.sb-overline').allInnerTexts();
    for (const o of ['01 / WHY WE EXIST', '02 / WHAT WE BUILD', '03 / HOW WE WORK', '04 / UNDER THE HOOD', '05 / THE NAME'])
      expect(overlines.map((s) => s.trim().toUpperCase())).toContain(o);
    const font = await page.locator('.sb-overline').first().evaluate((el) => getComputedStyle(el).fontFamily);
    expect(font).toContain('IBM Plex Mono');
  });

  test('every page opens with an overline above its h1', async ({ page }) => {
    for (const path of ['/', '/health', '/about', '/contact', '/privacy']) {
      await page.goto(path, { waitUntil: 'networkidle' });
      const ok = await page.evaluate(() => {
        const h1 = document.querySelector('h1')!;
        const prev = h1.previousElementSibling;
        return !!prev && prev.classList.contains('sb-overline');
      });
      expect(ok, path).toBe(true);
    }
  });

  test('no gradients: backgrounds are flat (only the permitted dot grid on dark bands)', async ({ page }) => {
    for (const path of ['/', '/health', '/about', '/contact', '/privacy']) {
      await page.goto(path, { waitUntil: 'networkidle' });
      const grads = await page.evaluate(() =>
        [...document.querySelectorAll('body *')]
          .map((el) => getComputedStyle(el).backgroundImage)
          .filter((bg) => /linear-gradient/.test(bg)),
      );
      expect(grads, path).toEqual([]);
    }
  });

  test('type scale: display and h1 use the spec sizes, only weights 400/500/600 on text', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/', { waitUntil: 'networkidle' });
    const h1 = await page.locator('h1').evaluate((el) => { const s = getComputedStyle(el); return [s.fontSize, s.lineHeight]; });
    expect(h1).toEqual(['64px', '68px']);
    const h2 = await page.locator('h2.sb-display').first().evaluate((el) => { const s = getComputedStyle(el); return [s.fontSize, s.lineHeight]; });
    expect(h2).toEqual(['44px', '52px']);
    await page.goto('/about', { waitUntil: 'networkidle' });
    const weights = await page.evaluate(() =>
      [...new Set([...document.querySelectorAll('body *')].filter((el) => [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent!.trim())).map((el) => getComputedStyle(el).fontWeight))],
    );
    for (const w of weights) expect(['400', '500', '600']).toContain(w);
  });

  test('section rhythm is 96px on desktop and 64px on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/', { waitUntil: 'networkidle' });
    expect(await page.locator('section.sb-section').nth(1).evaluate((el) => getComputedStyle(el).paddingTop)).toBe('96px');
    await page.setViewportSize({ width: 375, height: 800 });
    await page.reload({ waitUntil: 'networkidle' });
    expect(await page.locator('section.sb-section').nth(1).evaluate((el) => getComputedStyle(el).paddingTop)).toBe('64px');
  });

  test('principles are numbered in mono as // 01', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    const nums = await page.locator('.sb-principle-num').allInnerTexts();
    expect(nums.slice(0, 3)).toEqual(['// 01', '// 02', '// 03']);
  });
});
