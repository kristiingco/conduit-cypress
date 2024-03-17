/// <reference types="cypress" />

import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("I enter my password and leave the email field empty", () => {
    cy.fixture("loginData").then(({ password }) => {
        cy.fillInFields({ Password: password });
    });
});

Then("I should see an error message indicating email can't be blank", () => {
    cy.shouldExist(":nth-child(2) > .text-sm");
    cy.checkTextContent(":nth-child(2) > .text-sm", "Email is required");
});

When("I enter my email and leave the password field empty", () => {
    cy.fixture("loginData").then(({ email }) => {
        cy.fillInFields({ Email: email });
    });
});

Then("I should see an error message indicating password can't be blank", () => {
    cy.shouldExist(":nth-child(4) .text-sm");
    cy.checkTextContent(":nth-child(4) .text-sm", "Password is required");
});
