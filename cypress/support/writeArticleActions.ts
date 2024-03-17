/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Fills in the form of the article editor
         *
         * @param title - takes in article title
         * @param description - takes in article description
         * @param body - takes in article content
         * @param tags - takes in article tags
         */
        fillArticleEditor(
            title: string,
            description: string,
            body: string,
            tags: string[]
        ): Chainable<Element>;

        /**
         * Fill in specified fields of the article editor form
         *
         * @param fields - takes object with field name as key and the desired input to type as value
         */
        fillInSpecificArticleFields(fields: object): Chainable<Element>;

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

Cypress.Commands.add("fillInSpecificArticleFields", (fields) => {
    for (const field in fields) {
        switch (field) {
            case "description":
                cy.get(`[placeholder="What's this article about?"]`).type(
                    fields[field]
                );
                break;
            case "tags":
                fields[field].forEach((tag: string) => {
                    cy.get("[placeholder='Enter tags']").type(`${tag}{enter}`);
                });
                break;
            default:
                cy.get(`[name='${field}']`).type(fields[field]);
                break;
        }
    }
});

Cypress.Commands.add("clickNewArticle", () => {
    cy.contains("New Article").click();
});

Cypress.Commands.add("clickPublishArticleButton", () => {
    cy.contains("button", "Publish Article").click();
});
