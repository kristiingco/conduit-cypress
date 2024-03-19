/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Clicks on your feed to view a list of articles posted onto the platform by people you followed
         */
        clickYourFeed(): Chainable<Element>;

        /**
         * Clicks on global feed to view a list of articles posted onto the platform
         */
        clickGlobalFeed(): Chainable<Element>;
    }
}

Cypress.Commands.add("clickYourFeed", () => {
    cy.contains("Your Feed").click();
});

Cypress.Commands.add("clickGlobalFeed", () => {
    cy.contains("Global Feed").click();
});
