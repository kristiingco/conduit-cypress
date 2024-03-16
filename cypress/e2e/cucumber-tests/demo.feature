Feature: Demo Feature

    Creating a quick BDD Demo
    This is the second line of the description

    Scenario: Should load example website
        Given I open the example page
        Then I see page title "Example"
        And I see text

    Scenario Outline: Should load example website
        Given I open the example page
        Then I see page title "<title>"
        And I see text

    Examples:
        | title |
        | Example |