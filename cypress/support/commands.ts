/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable {
        /**
         * Navigate to the homepage of our application
         */
        visitHomePage(): Chainable<Element>;

        /**
         * Navigate to the login page of our application
         */
        visitLoginPage(): Chainable<Element>;

        /**
         * Navigate to the register page of our application
         */
        visitRegisterPage(): Chainable<Element>;

        /**
         * @param seconds - how many seconds should the execution wait
         */
        waitForSeconds(seconds: number): Chainable<Element>;

        checkTextContent(
            selector: string,
            patternToMatch: string
        ): Chainable<Element>;
    }
}

Cypress.Commands.add("visitHomePage", () => {
    cy.visit("/");
});

Cypress.Commands.add("visitLoginPage", () => {
    cy.visit("/login");
});

Cypress.Commands.add("visitRegisterPage", () => {
    cy.visit("/register");
});

Cypress.Commands.add("waitForSeconds", (seconds) => {
    cy.wait(seconds * 1000);
});

Cypress.Commands.add("checkTextContent", (selector, patternToMatch) => {
    cy.get(selector).invoke("text").should("contain", patternToMatch);
});
