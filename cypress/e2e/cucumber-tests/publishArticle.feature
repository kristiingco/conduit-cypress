Feature: Article Publishing

    As a registered user
    I want to publish articles
    So that I can write and publish articles on the platform

    Scenario: Successfully publish a new article
        Given I am logged in
        When I navigate to the article creation page 
        And I enter the title, description, content, and tags of my article
        And I click the Publish Article button
        Then The article should be published 
        And The article should be on my profile