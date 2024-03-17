/// <reference types="cypress" />

import { When, Then } from "cypress-cucumber-preprocessor/steps";

When(
    "I do not enter a username while the rest of the fields are filled in appropriately",
    () => {
        cy.fixture("registerData").then(({ email, password }) => {
            cy.fillInSpecificFields({ Email: email, Password: password });
        });
    }
);

Then(
    "I should see an error message indicating the username can't be blank",
    () => {
        cy.shouldExist(":nth-child(2) > .text-sm");
        cy.checkTextContent(":nth-child(2) > .text-sm", "Username is required");
    }
);

When(
    "I do not enter an email while the rest of the fields are filled in appropriately",
    () => {
        cy.fixture("registerData").then(({ username, password }) => {
            cy.fillInSpecificFields({ Username: username, Password: password });
        });
    }
);

Then(
    "I should see an error message indicating the email can't be blank",
    () => {
        cy.shouldExist(":nth-child(4) > .text-sm");
        cy.checkTextContent(":nth-child(4) > .text-sm", "Email is required");
    }
);

When(
    "I do not enter a password while the rest of the fields are filled in appropriately",
    () => {
        cy.fixture("registerData").then(({ username, email }) => {
            cy.fillInSpecificFields({ Username: username, Email: email });
        });
    }
);

Then(
    "I should see an error message indicating the password can't be blank",
    () => {
        cy.shouldExist(":nth-child(6) > .text-sm");
        cy.checkTextContent(":nth-child(6) > .text-sm", "Password is required");
    }
);
