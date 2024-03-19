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

    Scenario: Unfollowing a user
    Given I am logged in
    And I am on the profile page of a user I am already following
    When I click the unfollow button
    Then The unfollow button should change to a follow button
    And Their articles no longer appear on my feed
    
