/// <reference types="cypress" />

import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

let followedUser;

And("I am on the profile page of a user I am already following", () => {
    cy.clickGlobalFeed();
    cy.fixture("loginData").then(({ username }) => {
        cy.get("ul.divide-y > li > div > div > div > a")
            .not(`:contains("${username}")`)
            .eq(0)
            .click();
        cy.getOtherUsername().then((username) => {
            followedUser = username;
        });
    });
});

When("I click the unfollow button", () => {
    cy.clickUnfollowButton();
});

Then("The unfollow button should change to a follow button", () => {
    cy.contains("Follow").should("exist");
});

And("Their articles no longer appear on my feed", () => {
    cy.wait(10000);
    cy.visitHomePage();
    cy.clickYourFeed();
    cy.get(".py-3 > .flex-wrap > .flex > .text-gray-500")
        .filter(`:contains("${followedUser}")`)
        .should("not.exist");
});
