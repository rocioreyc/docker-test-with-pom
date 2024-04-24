require("dotenv").config();
const webpackPreprocessor = require("@cypress/webpack-preprocessor");
const { addMatchImageSnapshotPlugin } = require("cypress-image-snapshot/plugin");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
    env: {
      user_email: process.env.USER_EMAIL,
      user_password: process.env.USER_PASSWORD,
    },
  e2e: {
    baseUrl: "https://pokedexpokemon.netlify.app",
    setupNodeEvents(on, config) {
      on(
        "file:preprocessor",
        webpackPreprocessor({
          webpackOptions: {
            resolve: {
              extensions: [".ts", ".js"],
            },
          },
        }),
      );
      addMatchImageSnapshotPlugin(on, config);
    },
  },
});