/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { convertFavoriteCountToNumber } from "../../../support/helper";

let pastFaveCount;

Given("I am logged in", () => {
    cy.visitLoginPage();
    cy.fixture("loginData").then(({ email, password }) => {
        cy.fillLoginForm(email, password);
        cy.clickSignInButton();
    });
});

And("I am viewing an article", () => {
    cy.clickGlobalFeed();
    cy.clickArticle();
    cy.url().should("contain", "article");
    cy.contains("button", "Favorite")
        .eq(0)
        .then(($el) => {
            const count = convertFavoriteCountToNumber($el.text());
            pastFaveCount = count;
        });
});

When("I click the favorite button on the article", () => {
    cy.clickFavoriteButton();
});

Then("The button should become an Unfavorite button", () => {
    cy.wait(5000);
    cy.contains("button", "Unfavorite").eq(0).should("exist");
});

And("The article should be marked as favorited", () => {
    cy.contains("button", "Unfavorite")
        .eq(0)
        .then(($el) => {
            const count = convertFavoriteCountToNumber($el.text());
            cy.wrap(count).should("eq", pastFaveCount + 1);
        });
});
