/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Fills in form at the login page
         *
         * @param email - takes user email
         * @param password - takes user password
         */
        fillLoginForm(email: string, password: string): Chainable<Element>;

        /**
         * Clicks on the sign in button of the register form
         */
        clickSignInButton(): Chainable<Element>;
    }
}

Cypress.Commands.add("fillLoginForm", (email, password) => {
    cy.get("[placeholder='Email']").type(email);
    cy.get("[placeholder='Password']").type(password);
});

Cypress.Commands.add("clickSignInButton", () => {
    cy.contains("button", "Sign in").click();
});
