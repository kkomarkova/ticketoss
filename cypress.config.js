const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'atog1v',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
