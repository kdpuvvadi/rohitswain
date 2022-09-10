Feature: User profile page

    Viewing a user's profile

    Scenario: Going directly to a user's profile
        Given I open "rohitswain" page
        Then I should see "rohitswain" in the url
        And I see "Rohit Swain" text in section "h1"

    Scenario: Check links appear on user profile
        Given I open "rohitswain" page
        Then I see "Follow me on Twitter" text in section "a"
        And I see "Subcribe to my YouTube channel" text in section "a"
