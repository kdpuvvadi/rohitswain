Feature: Search

    Saerch all users

    Scenario: Navigate to the search page
        Given I open "home" page
        When I click on "search"
        Then I see ".search-section" item on the page

    Scenario: Search page has a search box
        Given I open "search" page
        And I see ".search-section" item on the page

    Scenario: Search with results
        Given I open "search" page
        Then I see "Rohit Swain" text in section "main"

    Scenario: Search with no results
        Given I open "search" page
        Then I see "Rohit Swain" text in section "main"
        When I type "abced" in ".search-section input"
        Then I see "No users found, please try with another name." text in section "main"
        And I do not see "Rohit Swain" text in section "main"
