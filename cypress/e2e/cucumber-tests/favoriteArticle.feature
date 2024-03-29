Feature: Favoriting Articles
  As a logged in user
  I want to favorite articles
  So that I can easily find and read them later from my profile

  Scenario: Successfully favoriting an article
    Given I am logged in
    And I am viewing an article
    When I click the favorite button on the article
    Then The button should become an Unfavorite button
    And The article should be marked as favorited

    Scenario: Viewing my favorite articles on my profile
        Given I am logged in
        When I navigate to my profile
        And I click on the Favorited Articles tab
        Then I should see a list of all my favorited articles

    Scenario: Unfavoriting an article
        Given I am logged in
        And I am on the Favorited Articles tab in my profile
        When I click the unfavorite button on an article
        Then The article should be removed from my favorites list

    Scenario: Favoriting an article without being logged in
        Given I am not logged in
        And I am viewing an article I like
        When I try to click the favorite button on the article
        Then I should be redirected to the login page

