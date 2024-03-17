/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I am on the login page", () => {
    cy.visitLoginPage();
});

And("I click the Sign in button", () => {
    cy.clickSignInButton();
});

When("I enter my valid email and password", () => {
    cy.fixture("loginData").then(({ email, password }) => {
        cy.fillLoginForm(email, password);
    });
});

Then("I am taken to the home page as a logged in user after logging in", () => {
    cy.clickSignInButton();
    cy.url().should("equal", Cypress.config("baseUrl"));
    cy.fixture("loginData").then(({ username }) => {
        cy.checkTextContent(":nth-child(4) > .nav-link", username);
    });
});
