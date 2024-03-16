import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I open the website", () => {
    cy.visit("/");
});
