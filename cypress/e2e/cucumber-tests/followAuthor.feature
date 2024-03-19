Feature: Follow User

  As a logged-in user
  I want to follow other users
  So that I can keep up with their articles on my feed

  Scenario: Successfully following another user
    Given I am logged in
    And I am on another user's profile page
    When I click the follow button
    Then The follow button should change to an unfollow button
    And Their articles appear on my feed