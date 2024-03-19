/// <reference types="cypress" />

import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

When("I navigate to my profile", () => {
    cy.clickOnProfile();
});

And("I click on the Favorited Articles tab", () => {
    cy.clickOnFavoritedArticles();
});

Then("I should see a list of all my favorited articles", () => {
    cy.get(".divide-y").should("exist");
});
