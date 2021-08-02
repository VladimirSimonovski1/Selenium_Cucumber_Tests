Feature: Home Page
    As a user
    I wan to navigate to the www.qamind.com home's page
    So that I can do some exploratory testing

    Background: QAMIND is open and cache and cookies are deleted
        Given QAMIND is opened in Chrome
            And Cache and cookies are removed and window is maximized
            And Home Page is visible

    Scenario: Verify QAMIND's logo and tagline
        When Fetching the logo and tagline text
        Then The logo and tagline are displayed and verified
