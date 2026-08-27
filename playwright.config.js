import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'http://127.0.0.1:8080',
    headless: true
  },

  webServer: {
    command: 'npm run serve',
    url: 'http://127.0.0.1:8080',
    reuseExistingServer: !process.env.CI
  }
});
