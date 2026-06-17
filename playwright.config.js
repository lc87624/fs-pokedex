const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  use: {
    baseURL: 'http://localhost:8080',
  },
  webServer: {
    command: 'npm start -- --host 127.0.0.1',
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
  },
})