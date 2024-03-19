/// <reference types="cypress" />

import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

When("I am on the Favorited Articles tab in my profile", () => {
    cy.clickOnProfile();
    cy.clickOnFavoritedArticles();
});

When("I click the unfavorite button on an article", () => {
    cy.get(".py-3 > .rounded").eq(0).click();
    cy.wait(5000);
});

Then("The article should be removed from my favorites list", () => {
    cy.get(".divide-y").should("not.exist");
});
