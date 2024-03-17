Feature: User Registration

    As a new User
    I want to register
    So that I can write and publish articles on the platform

    # TODO: Uncomment near test completion
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

    Scenario: Registration with an already used email
        Given I am on the register page
        When I enter an email that is already in use while the rest of the fields are filled in appropriately
        And I click the Sign up button
        Then I should see an error message indicating the email is already taken

    Scenario: Registration with no username provided
        Given I am on the register page
        When I do not enter a username while the rest of the fields are filled in appropriately
        And I click the Sign up button
        Then I should see an error message indicating the username can't be blank

    Scenario: Registration with no email provided
        Given I am on the register page
        When I do not enter an email while the rest of the fields are filled in appropriately
        And I click the Sign up button
        Then I should see an error message indicating the email can't be blank

    Scenario: Registration with no password provided
        Given I am on the register page
        When I do not enter a password while the rest of the fields are filled in appropriately
        And I click the Sign up button
        Then I should see an error message indicating the password can't be blank

    