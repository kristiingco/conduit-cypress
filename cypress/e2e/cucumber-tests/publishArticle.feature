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
    
    Scenario: Publishing an article with a missing title
        Given I am on the article creation page
        When I enter the description, content, and tags of my article but leave the title blank
        Then The Publish Article button should be disabled
    
    Scenario: Publishing an article with a missing description
        Given I am on the article creation page
        When I enter the title, content, and tags of my article but leave the description blank
        Then The Publish Article button should be disabled

    Scenario: Publishing an article with missing body
        Given I am on the article creation page
        When I enter the title, description, and tags of my article but leave the body blank
        Then The Publish Article button should be disabled
    
    Scenario: Publishing an article with no tags
        Given I am on the article creation page
        When I enter the title, description, and body of my article but leave tags blank
        Then The Publish Article button should be disabled
    