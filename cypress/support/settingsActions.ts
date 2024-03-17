/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Clicks on the settings nav link
         */
        clickSettings(): Chainable<Element>;

        /**
         * Clicks on the logout button
         */
        clickLogout(): Chainable<Element>;
    }
}

Cypress.Commands.add("clickSettings", () => {
    cy.contains("Settings").click();
});

Cypress.Commands.add("clickLogout", () => {
    cy.contains("logout").click();
});
