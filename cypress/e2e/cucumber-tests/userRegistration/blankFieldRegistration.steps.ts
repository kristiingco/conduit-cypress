/// <reference types="cypress" />

import { When, Then } from "cypress-cucumber-preprocessor/steps";

When(
    "I do not enter a username while the rest of the fields are filled in appropriately",
    () => {
        cy.fixture("registerData").then(({ email, password }) => {
            cy.fillInFields({ Email: email, Password: password });
        });
    }
);

Then(
    "I should see an error message indicating the username can't be blank",
    () => {
        cy.shouldExist(".error-messages");
        cy.checkTextContent(".error-messages > li", "username can't be blank");
    }
);

When(
    "I do not enter an email while the rest of the fields are filled in appropriately",
    () => {
        cy.fixture("registerData").then(({ username, password }) => {
            cy.fillInFields({ Username: username, Password: password });
        });
    }
);

Then(
    "I should see an error message indicating the email can't be blank",
    () => {
        cy.shouldExist(".error-messages");
        cy.checkTextContent(".error-messages > li", "email can't be blank");
    }
);

When(
    "I do not enter a password while the rest of the fields are filled in appropriately",
    () => {
        cy.fixture("registerData").then(({ username, email }) => {
            cy.fillInFields({ Username: username, Email: email });
        });
    }
);

Then(
    "I should see an error message indicating the password can't be blank",
    () => {
        cy.shouldExist(".error-messages");
        cy.checkTextContent(".error-messages > li", "password can't be blank");
    }
);