/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I am viewing an article", () => {
    cy.visitLoginPage();
    cy.fixture("loginData").then(({ email, password }) => {
        cy.fillLoginForm(email, password);
        cy.clickSignInButton();
        cy.clickGlobalFeed();
        cy.clickArticle();
        cy.url().should("contain", "article");
    });
});

When("I enter a comment in the comment box", () => {
    cy.fillComment("Great!");
});

And("I click the Post Comment button", () => {
    cy.clickPostCommentButton();
});

Then("My comment should be posted under the article", () => {
    cy.get("ul.mt-4 li:first-child")
        .eq(1)
        .within(() => {
            cy.get(".rounded-sm > .p-4 > p")
                .invoke("text")
                .should("contain", "Great!");
            cy.fixture("loginData").then(({ username }) => {
                cy.get(
                    ".rounded-sm > .bg-gray-100 > .justify-between > :nth-child(1) > .flex > .text-gray-500"
                ).should("contain", username);
            });
        });
});
