/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the article creation page", () => {
    cy.visitLoginPage();
    cy.fixture("loginData").then(({ email, password }) => {
        cy.fillLoginForm(email, password);
        cy.clickSignInButton();
    });
    cy.clickNewArticle();
});

When(
    "I enter the description, content, and tags of my article but leave the title blank",
    () => {
        cy.fixture("articleData").then(({ description, body, tags }) => {
            cy.fillInSpecificArticleFields({
                description: description,
                body: body,
                tags: tags,
            });
        });
    }
);

When(
    "I enter the title, content, and tags of my article but leave the description blank",
    () => {
        cy.fixture("articleData").then(({ title, body, tags }) => {
            cy.fillInSpecificArticleFields({
                title: title,
                body: body,
                tags: tags,
            });
        });
    }
);

When(
    "I enter the title, description, and tags of my article but leave the body blank",
    () => {
        cy.fixture("articleData").then(({ title, description, tags }) => {
            cy.fillInSpecificArticleFields({
                title: title,
                description: description,
                tags: tags,
            });
        });
    }
);

When(
    "I enter the title, description, and body of my article but leave tags blank",
    () => {
        cy.fixture("articleData").then(({ title, description, body }) => {
            cy.fillInSpecificArticleFields({
                title: title,
                description: description,
                body: body,
            });
        });
    }
);

Then("The Publish Article button should be disabled", () => {
    cy.shouldBeDisabled("button[type='submit']");
});
