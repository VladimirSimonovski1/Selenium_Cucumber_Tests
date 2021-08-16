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

    Scenario: Count the number of protractor related blogs
        When Searching for blogs with search criteria: "Protractor"
        Then The total number of blogs are displayed

    Scenario: Verify that 'Using Protractor for smooth E2E automation' blog appears when searching for Protractor blogs
        When Searching for blogs with search criteria: "Protractor"
        Then The blog "Using Protractor for smooth E2E automation" appears

    Scenario: Verify no search results for random keyword
        When Searching for blogs with search criteria: "tdsdsr"
        Then The message "No search results for " the given search criteria appears

    Scenario: Count the number of recent posts
        When Counting the number of recent posts
        Then Total number of recent posts is 5

    Scenario: Join the newsletter
        When Subscribing to the newsletter
        Then A "Thank you, your sign up request was successful! Please check your e-mail inbox to confirm." message appears

    Scenario: Open blogs by category and verify header
        Given 
        When 
        Then 

    Scenario: Verify LinkedIn profile of the author of QAMIND 
        When Checking the author Linkedin profile
        Then The Linkedin profile is correct
