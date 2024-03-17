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

        /**
         * Checks text of the element returned by the selector and if the patternToMatch is contained in this element
         *
         * @param selector - selector of element
         * @param patternToMatch - string to match against actual text content of element
         */
        checkTextContent(
            selector: string,
            patternToMatch: string
        ): Chainable<Element>;

        /**
         * Checks if an element with the selector should exist
         *
         * @param selector - selector of element
         */
        shouldExist(selector: string): Chainable<Element>;

        /**
         * Checks if an element with the selector is disabled
         *
         * @param selector - selector of element
         */
        shouldBeDisabled(selector: string): Chainable<Element>;
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

Cypress.Commands.add("shouldExist", (selector) => {
    cy.get(selector).should("exist");
});

Cypress.Commands.add("shouldBeDisabled", (selector) => {
    cy.get(selector).should("be.disabled");
});
