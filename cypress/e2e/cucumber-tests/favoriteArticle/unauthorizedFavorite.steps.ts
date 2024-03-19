/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I am not logged in", () => {
    cy.visitHomePage();
});

And("I am viewing an article I like", () => {
    cy.clickArticle();
});

When("I try to click the favorite button on the article", () => {
    cy.clickFavoriteButton();
});

Then("I should be redirected to the login page", () => {
    cy.wait(5000);
    cy.url().should("contain", "login");
});
