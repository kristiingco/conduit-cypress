/// <reference types="cypress" />

import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("I enter an incorrect email and my password", () => {
    cy.fixture("loginData").then(({ incorrectEmail, password }) => {
        cy.fillLoginForm(incorrectEmail, password);
    });
});

When("I enter my email and an incorrect password", () => {
    cy.fixture("loginData").then(({ email, incorrectPassword }) => {
        cy.fillLoginForm(email, incorrectPassword);
    });
});

Then(
    "I should see an error message indicating the email or password is incorrect",
    () => {
        cy.shouldExist(".my-2 > .flex");
        cy.checkTextContent(".ml-2", "Bad Credentials");
    }
);
