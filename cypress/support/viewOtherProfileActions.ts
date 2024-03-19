/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Click on follow button on another user;s profile
         */
        clickFollowButton(): Chainable<Element>;

        /**
         * Get username of the user's profile
         */
        getOtherUsername(): Chainable<Element>;
    }
}

Cypress.Commands.add("clickFollowButton", () => {
    cy.contains("Follow").click();
});

Cypress.Commands.add("getOtherUsername", () => {
    cy.get(".text-3xl").invoke("text");
});
