Feature: Feature name

    As a registered user
    I want to browse by filtering with tags
    So I may narrow down the content I wish to see  
    
    Scenario: Browsing a tag
        Given I am on the home page
        When I click on a tag on the sidebar 
        Then A tab with the tag name becomes visible
        And A list of articles with the tag appear