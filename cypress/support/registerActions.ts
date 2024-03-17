/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Fill in the fields of the register form
         *
         * @param username - takes user name
         * @param email - takes user email
         * @param password - takes user password
         */
        fillRegisterForm(
            username: string,
            email: string,
            password: string
        ): Chainable<Element>;

        /**
         * Clicks on the sign up button of the register form
         */
        clickSignUpButton(): Chainable<Element>;
    }
}

Cypress.Commands.add("fillRegisterForm", (username, email, password) => {
    cy.get("[placeholder='Username']").type(username);
    cy.get("[placeholder='Email']").type(email);
    cy.get("[placeholder='Password']").type(password);
});

Cypress.Commands.add("clickSignUpButton", () => {
    cy.contains("button", "Sign up").click();
});
