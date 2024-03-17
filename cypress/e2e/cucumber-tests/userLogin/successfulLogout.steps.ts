/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I am logged in", () => {
    cy.visitLoginPage();
    cy.fixture("loginData").then(({ email, password }) => {
        cy.fillLoginForm(email, password);
    });
    cy.clickSignInButton();
});

When("I navigate to the settings page", () => {
    cy.clickSettings();
});

And("I click the Log out button", () => {
    cy.clickLogout();
});

Then("I should be redirected to the login page", () => {
    cy.url().should("contain", "login");
});
