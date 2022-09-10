Feature: Homepage

    Loading all users

    Scenario: Opening the homepage
        Given I open "home" page
        And I see "Rohit Swain" text in section "footer"
