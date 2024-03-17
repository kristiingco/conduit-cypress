/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Click on username to go to profile
         */
        clickOnProfile(): Chainable<Element>;

        /**
         * Checks if article title is equal to a given string
         *
         * @param title - takes in a string to compare to article title
         */
        articleOnProfileTitleEquals(title: string): Chainable<Element>;

        /**
         * Checks if article content is equal to a given string
         *
         * @param description - takes in a string to compare to article description
         */
        articleOnProfileDescriptionEquals(
            description: string
        ): Chainable<Element>;

        /**
         * Checks if article tags are equal to the contents of a given array of strings
         *
         * @param tags - takes in an array of strings to compare to article tags
         */
        articleOnProfileTagsInclude(tags: string[]): Chainable<Element>;
    }
}

Cypress.Commands.add("clickOnProfile", () => {
    cy.get(":nth-child(4) > .block").click();
});

Cypress.Commands.add("articleOnProfileTitleEquals", (title) => {
    cy.get("ul.divide-y > li:first-child .pb-2 > .text-2xl")
        .invoke("text")
        .should("equal", title);
});

Cypress.Commands.add("articleOnProfileDescriptionEquals", (description) => {
    cy.get("ul.divide-y > li:first-child .pb-2 > .text-lg")
        .invoke("text")
        .should("equal", description);
});

Cypress.Commands.add("articleOnProfileTagsInclude", (tags) => {
    cy.get(".divide-y > li:first-child > a > div > ul > li").each(
        ($el, index) => {
            cy.wrap($el).invoke("text").should("equal", tags[index]);
        }
    );
});
