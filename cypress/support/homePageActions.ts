/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Clicks on global feed to view a list of articles posted onto the platform
         */
        clickGlobalFeed(): Chainable<Element>;
    }
}

Cypress.Commands.add("clickGlobalFeed", () => {
    cy.contains("Global Feed").click();
});
