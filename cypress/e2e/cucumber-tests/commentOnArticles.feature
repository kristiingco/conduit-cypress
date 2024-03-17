Feature: Commenting on Articles

    As a logged in user
    I want to comment on articles
    So that I can interact with an author and engage with their content

    Scenario: Posting a comment on an article
        Given I am viewing an article
        When I enter a comment in the comment box 
        And I click the Post Comment button
        Then My comment should be posted under the article

