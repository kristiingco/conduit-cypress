/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Clicks on an article on the global feed to view it
         */
        clickArticle(): Chainable<Element>;

        /**
         * Checks if article title is equal to a given string
         *
         * @param title - takes in a string to compare to article title
         */
        titleEquals(title: string): Chainable<Element>;

        /**
         * Checks if article content is equal to a given string
         *
         * @param body - takes in a string to compare to article content
         */
        bodyEquals(body: string): Chainable<Element>;

        /**
         * Checks if article tags are equal to the contents of a given array of strings
         *
         * @param tags - takes in an array of strings to compare to article tags
         */
        tagsInclude(tags: string[]): Chainable<Element>;

        /**
         * Types in a comment in the comment box
         *
         * @param comment - takes in comment
         */
        fillComment(comment: string): Chainable<Element>;

        /**
         * Clicks on Post Comment button
         */
        clickPostCommentButton(): Chainable<Element>;

        /**
         * Clicks on Favorite button
         */
        clickFavoriteButton(): Chainable<Element>;
    }
}

Cypress.Commands.add("clickArticle", () => {
    cy.get("ul.divide-y > li:last-child").click();
});

Cypress.Commands.add("titleEquals", (title) => {
    cy.get("h1").invoke("text").should("equal", title);
});

Cypress.Commands.add("bodyEquals", (body) => {
    cy.get(".prose p").invoke("text").should("equal", body);
});

Cypress.Commands.add("tagsInclude", (tags) => {
    cy.get("span.overflow-hidden").each(($el, index) => {
        cy.wrap($el).invoke("text").should("equal", tags[index]);
    });
});

Cypress.Commands.add("fillComment", (comment) => {
    cy.get("[name='body']").type(comment);
});

Cypress.Commands.add("clickPostCommentButton", () => {
    cy.contains("button", "Post Comment").click();
});

Cypress.Commands.add("clickFavoriteButton", () => {
    cy.contains("button", "Favorite").eq(0).click();
});
