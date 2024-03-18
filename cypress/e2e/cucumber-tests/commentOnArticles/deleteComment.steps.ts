/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let prevCommentLength = 0;

Given("I am viewing an article with my comment", () => {
    cy.visitLoginPage();
    cy.fixture("loginData").then(({ username, email, password }) => {
        cy.fillLoginForm(email, password);
        cy.clickSignInButton();
        cy.wait(5000);
        cy.clickGlobalFeed();
        cy.clickArticle();
        cy.url().should("contain", "article");
        cy.get(
            ".rounded-sm > .bg-gray-100 > .justify-between > :nth-child(1) > .flex > .text-gray-500"
        )
            .contains(username)
            .should("exist");

        cy.get(
            ".rounded-sm > .bg-gray-100 > .justify-between > :nth-child(1) > .flex > .text-gray-500"
        )
            .contains(username)
            .then(($list) => {
                prevCommentLength = $list.length;
            });
    });

    When("I click the delete button on my comment", () => {
        cy.get(".ion-trash-a").eq(0).click();
    });

    Then("My comment should be removed from the article", () => {
        cy.get(
            ".rounded-sm > .bg-gray-100 > .justify-between > :nth-child(1) > .flex > .text-gray-500"
        ).should("not.exist");
    });
});
