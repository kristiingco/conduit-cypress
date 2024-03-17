Feature: User Login

    As a registered user
    I want to log in to the application
    So that I can access my account and interact with the platform

    Scenario: Successful login
        Given I am on the login page
        When I enter my valid email and password
        And I click the Sign in button 
        Then I am taken to the home page as a logged in user after logging in
    
    Scenario: Logging in with incorrect email
        Given I am on the login page
        When I enter an incorrect email and my password
        And I click the Sign in button 
        Then I should see an error message indicating the email or password is incorrect
    
    Scenario: Logging in with incorrect password
        Given I am on the login page
        When I enter my email and an incorrect password
        And I click the Sign in button 
        Then I should see an error message indicating the email or password is incorrect

    Scenario: Logging in with no email provided
        Given I am on the login page
        When I enter my password and leave the email field empty
        And I click the Sign in button
        Then I should see an error message indicating email can't be blank

    Scenario: Logging in with no password provided
        Given I am on the login page
        When I enter my email and leave the password field empty
        And I click the Sign in button
        Then I should see an error message indicating password can't be blank
    
    Scenario: Successful logout
        Given I am logged in
        When I navigate to the settings page
        And I click the Log out button 
        Then I should be redirected to the login page

