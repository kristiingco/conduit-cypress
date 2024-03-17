import { defineConfig } from "cypress";
const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            const options = {
                ...browserify.defaultOptions,
                typescript: require.resolve("typescript"),
            };

            on("file:preprocessor", cucumber(options));
        },
        baseUrl: "http://localhost:3000/",
        specPattern: "cypress/e2e/cucumber-tests/*.feature",
    },
    video: false,
    defaultCommandTimeout: 10000,
    watchForFileChanges: false,
});
