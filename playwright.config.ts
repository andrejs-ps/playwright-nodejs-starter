import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:3000',
    headless: false,
    launchOptions: { slowMo: 1000 },
    trace: 'on'
  },

  webServer: {
    command: 'npm start',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    timeout: 120 * 1000,

  },
});
