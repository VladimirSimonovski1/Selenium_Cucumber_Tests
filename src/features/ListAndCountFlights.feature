Feature: List a flight
    As a customer
    I want to search for a flight
    So I can count the total number of available flights

    Background: Emirates is opened and cache and cookies are deleted
        Given Emirates website is opened

    Scenario: Search and list a flight
        When the user navigates to the book flight page
        Then the user verifies that the book flight page is displayed