const { defineConfig } = require('cypress');

module.exports = defineConfig({
    projectId: "s3fkhc",
    // ...rest of the Cypress project config
  defaultCommandTimeout: 5000,
  e2e: {
    setupNodeEvents(on, config) {
     // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss" },
    },
});