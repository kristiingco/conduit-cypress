/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the register page", () => {
    cy.visitRegisterPage();
});

When(
    "I enter an email that is already in use while the rest of the fields are filled in appropriately",
    () => {
        cy.fixture("registerData").then(
            ({ nonTakenUsername, takenEmail, password }) => {
                cy.fillRegisterForm(nonTakenUsername, takenEmail, password);
            }
        );
    }
);

Then(
    "I should see an error message indicating the email is already taken",
    () => {
        cy.shouldExist(".my-2 > .flex");
        cy.checkTextContent(".my-2 > .flex", "Username or email had been used");
    }
);

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
        cy.shouldExist(".my-2 > .flex");
        cy.checkTextContent(".my-2 > .flex", "Username or email had been used");
    }
);
