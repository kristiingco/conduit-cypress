/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

let tagText;

Given("I am on the home page", () => {
    cy.visitHomePage();
});

When("I click on a tag on the sidebar", () => {
    cy.get(".p-2 > .flex-wrap div")
        .eq(0)
        .then(($el) => {
            tagText = $el.text();
            cy.wrap($el).click();
        });
});

Then("A tab with the tag name becomes visible", () => {
    cy.contains(`# ${tagText}`).should("exist");
});

And("A list of articles with the tag appear", () => {
    cy.get(".pb-2 > .justify-between > ul").each(($el) => {
        cy.wrap($el).within(() => {
            cy.get("li").filter(`:contains("${tagText}")`).should("exist");
        });
    });
});
