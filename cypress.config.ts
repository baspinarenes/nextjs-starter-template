import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "az9fzw",

  e2e: {
    baseUrl: "http://localhost:3000",
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
