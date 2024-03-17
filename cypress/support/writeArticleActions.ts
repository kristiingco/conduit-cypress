/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Clicks on the sign in button of the register form
         */
        fillArticleEditor(
            title: string,
            description: string,
            body: string,
            tags: string[]
        ): Chainable<Element>;

        /**
         * Clicks on New Article nav link
         */
        clickNewArticle(): Chainable<Element>;

        /**
         * Clicks on Publish Article button
         */
        clickPublishArticleButton(): Chainable<Element>;
    }
}

Cypress.Commands.add("fillArticleEditor", (title, description, body, tags) => {
    cy.get("[name='title']").type(title);
    cy.get(`[placeholder="What's this article about?"]`).type(description);
    cy.get("[name='body']").type(body);
    tags.forEach((tag) => {
        cy.get("[placeholder='Enter tags']").type(`${tag}{enter}`);
    });
});

Cypress.Commands.add("clickNewArticle", () => {
    cy.contains("New Article").click();
});

Cypress.Commands.add("clickPublishArticleButton", () => {
    cy.contains("button", "Publish Article").click();
});
