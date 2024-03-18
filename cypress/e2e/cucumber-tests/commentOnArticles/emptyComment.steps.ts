/// <reference types="cypress" />

import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("I do not enter any text in the comment box", () => {
    cy.get("[name='body']").focus();
    cy.get("[name='body']").blur();
});

Then("The Post Comment button should be disabled", () => {
    cy.shouldBeDisabled("button[type='submit']");
});
