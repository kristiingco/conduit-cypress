/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

let followedUser;
Given("I am logged in", () => {
    cy.visitLoginPage();
    cy.fixture("loginData").then(({ email, password }) => {
        cy.fillLoginForm(email, password);
        cy.clickSignInButton();
    });
});

And("I am on another user's profile page", () => {
    cy.clickGlobalFeed();
    cy.fixture("loginData").then(({ username }) => {
        cy.get("ul.divide-y > li > div > div > div > a")
            .not(`:contains("${username}")`)
            .eq(0)
            .click();
    });
});

When("I click the follow button", () => {
    cy.getOtherUsername().then((username) => {
        followedUser = username;
    });
    cy.clickFollowButton();
});

Then("The follow button should change to an unfollow button", () => {
    cy.contains("Unfollow").should("exist");
});

And("Their articles appear on my feed", () => {
    cy.wait(10000);
    cy.visitHomePage();
    cy.clickYourFeed();
    cy.get(".py-3 > .flex-wrap > .flex > .text-gray-500")
        .filter(`:contains("${followedUser}")`)
        .should("exist");
});
