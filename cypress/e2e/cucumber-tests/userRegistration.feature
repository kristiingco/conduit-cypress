Feature: User Registration

    As a new User
    I want to register
    So that I can write and publish articles on the platform

    # Scenario: Successful registration
    #     Given I am on the home page
    #     When I navigate to the register page
    #     And I enter my username, email, and password
    #     And I click the Sign up button
    #     Then I should be taken to the login page
    #     And I am taken to the home page as a logged in user after logging in

    Scenario: Registration with an already used username
        Given I am on the register page
        When I enter a username that is already in use while the rest of the fields are filled in appropriately
        And I click the Sign up button
        Then I should see an error message indicating the username is already taken


    