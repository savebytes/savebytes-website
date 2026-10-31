import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  webServer: { command: 'npx serve out -l 4010', url: 'http://localhost:4010', reuseExistingServer: true },
  use: { baseURL: 'http://localhost:4010', launchOptions: { executablePath: process.env.CHROMIUM_PATH || undefined } },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1280, height: 800 } } },
    { name: 'mobile', use: { viewport: { width: 375, height: 800 } } },
  ],
});
