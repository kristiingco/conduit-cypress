/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I am on the register page", () => {
    cy.visitRegisterPage();
});

When(
    "I enter a username that is already in use while the rest of the fields are filled in appropriately",
    () => {
        cy.fixture("registerData").then(
            ({ takenUsername, nonTakenEmail, password }) => {
                cy.fillRegisterForm(takenUsername, nonTakenEmail, password);
            }
        );
    }
);

Then(
    "I should see an error message indicating the username is already taken",
    () => {
        cy.shouldExist(".error-messages");
        cy.checkTextContent(
            ".error-messages > li",
            "username has already been taken"
        );
    }
);
