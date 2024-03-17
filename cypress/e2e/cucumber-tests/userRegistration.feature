Feature: User Registration

    As a new User
    I want to register
    So that I can write and publish articles on the platform

    Scenario: Successful registration
        Given I am on the home page
        When I navigate to the register page
        And I enter my username, email, and password
        And I click the Sign up button
        Then I should be taken to the login page
        And I am taken to the home page as a logged in user after logging in

    