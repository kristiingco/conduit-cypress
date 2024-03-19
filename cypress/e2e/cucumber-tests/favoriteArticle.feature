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
