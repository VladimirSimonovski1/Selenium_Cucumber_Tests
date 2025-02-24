@ignore
Feature: List a flight

    As a customer
    I want to search for a flight
    So I can count the total number of available flights

    Scenario: Verify the book flight page is visible
        Given Emirates website is opened
        When the user navigates to the book flight page
        Then the user verifies that the book flight page is displayed

    Scenario: Subscribe to the newsletter
        Given Emirates website is opened
        When the user subscribes to the newsletter
        Then the user confirms that the subscription is complete
