/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Clicks on the sign in button of the register form
         */
        clickSignInButton(): Chainable<Element>;
    }
}

Cypress.Commands.add("clickSignInButton", () => {
    cy.contains("button", "Sign in").click();
});
