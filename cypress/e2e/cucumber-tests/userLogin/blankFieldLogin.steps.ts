/// <reference types="cypress" />

import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("I enter my password and leave the email field empty", () => {
    cy.fixture("loginData").then(({ password }) => {
        cy.fillInFields({ Password: password });
    });
});

Then("I should see an error message indicating email can't be blank", () => {
    cy.shouldExist(".error-messages");
    cy.checkTextContent(".error-messages > li", "email can't be blank");
});

When("I enter my email and leave the password field empty", () => {
    cy.fixture("loginData").then(({ email }) => {
        cy.fillInFields({ Email: email });
    });
});

Then("I should see an error message indicating password can't be blank", () => {
    cy.shouldExist(".error-messages");
    cy.checkTextContent(".error-messages > li", "password can't be blank");
});
