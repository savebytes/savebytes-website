import { test, expect } from '@playwright/test';

test.describe('Health hero scene', () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test('Sign visit locks the record, shows the signed strip and moves the queue on; Reset demo restores it', async ({ page }) => {
    await page.goto('/health', { waitUntil: 'networkidle' });
    const front = page.locator('.sb-scene-front'), back = page.locator('.sb-scene-back'), status = page.locator('.sb-sr');
    await expect(front).toContainText('Priya Deshmukh');
    await expect(front).toContainText('In consult');
    await expect(back).toContainText('Aarav Joshi');
    await expect(back).toContainText('Vitals taken');
    await page.getByRole('button', { name: 'Sign visit' }).click();
    await expect(status).toHaveText('Priya Deshmukh signed. Aarav Joshi is next.');
    await expect(front).toContainText('Signed by Dr Anil Kulkarni');
    await expect(front.locator('.sb-locked')).toHaveAttribute('data-locked', 'true');
    await expect(back).toContainText('In consult'); // Aarav moved up
    await expect(page.getByRole('button', { name: 'Prescription PDF' })).toBeVisible();
    await page.getByRole('button', { name: 'Reset demo' }).click();
    await expect(status).toHaveText('Demo reset. Priya Deshmukh is in consult.');
    await expect(page.getByRole('button', { name: 'Sign visit' })).toBeVisible();
    await expect(front).not.toContainText('Signed by Dr Anil Kulkarni');
  });

  test('signing does not move the page (no layout shift)', async ({ page }) => {
    await page.goto('/health', { waitUntil: 'networkidle' });
    const top = () => page.locator('h1').evaluate((el) => Math.round(el.getBoundingClientRect().top));
    const before = await top();
    await page.getByRole('button', { name: 'Sign visit' }).click();
    await page.waitForTimeout(400);
    expect(await top()).toBe(before);
  });

  test('the overline still sits directly above the h1', async ({ page }) => {
    await page.goto('/health', { waitUntil: 'networkidle' });
    const ok = await page.evaluate(() => document.querySelector('h1')!.previousElementSibling!.classList.contains('sb-overline'));
    expect(ok).toBe(true);
  });
});

test.describe('Health hero scene on a phone', () => {
  test.use({ viewport: { width: 390, height: 800 } });
  test('back card is hidden, no horizontal overflow, signing still works', async ({ page }) => {
    await page.goto('/health', { waitUntil: 'networkidle' });
    await expect(page.locator('.sb-scene-back')).toBeHidden();
    expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(0);
    await page.getByRole('button', { name: 'Sign visit' }).click();
    await expect(page.locator('.sb-scene-front')).toContainText('Signed by Dr Anil Kulkarni');
  });
});

test.describe('Health hero scene with reduced motion', () => {
  test.use({ reducedMotion: 'reduce', viewport: { width: 1440, height: 900 } });
  test('no pointer parallax transform is applied', async ({ page }) => {
    await page.goto('/health', { waitUntil: 'networkidle' });
    await page.mouse.move(1200, 300);
    await page.waitForTimeout(200);
    expect(await page.locator('.sb-scene').evaluate((el) => (el as HTMLElement).style.getPropertyValue('--px'))).toBe('');
  });
});
