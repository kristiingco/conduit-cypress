/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I am on the home page", () => {
    cy.visitHomePage();
});

When("I navigate to the register page", () => {
    cy.visitRegisterPage();
});

When("I enter my username, email, and password", () => {
    cy.fixture("registerData").then(({ username, email, password }) => {
        cy.fillRegisterForm(username, email, password);
    });
});

And("I click the Sign up button", () => {
    cy.clickSignUpButton();
});

Then("I should be taken to the login page", () => {
    cy.url().should("contain", "login");
});

And("I am taken to the home page as a logged in user after logging in", () => {
    cy.clickSignInButton();
    cy.url().should("equal", Cypress.config("baseUrl"));
    cy.fixture("registerData").then(({ username }) => {
        cy.checkTextContent(":nth-child(4) > .nav-link", username);
    });
});
