/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I am logged in", () => {
    cy.visitLoginPage();
    cy.fixture("loginData").then(({ email, password }) => {
        cy.fillLoginForm(email, password);
        cy.clickSignInButton();
    });
});

When("I navigate to the article creation page", () => {
    cy.clickNewArticle();
});

And("I enter the title, description, content, and tags of my article", () => {
    cy.fixture("articleData").then(({ title, description, body, tags }) => {
        cy.fillArticleEditor(title, description, body, tags);
    });
});

And("I click the Publish Article button", () => {
    cy.clickPublishArticleButton();
});

Then("The article should be published", () => {
    cy.fixture("articleData").then(({ title, body, tags }) => {
        cy.titleEquals(title);
        cy.bodyEquals(body);
        cy.tagsInclude(tags);
    });
});
