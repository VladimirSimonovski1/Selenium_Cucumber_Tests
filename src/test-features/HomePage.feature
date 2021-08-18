Feature: Home Page
    As a user
    I wan to navigate to the www.qamind.com home page
    So that I can see all the QA related blogs

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
        When Opening blogs by category: "<category>"
        Then "<category>" category headers are displayed
        # This can alsoe be achieved using Scenario Outline
        Examples:
            | category    |
            | Tutorials   |
            | Reviews     |
            | Comparisons |

    Scenario: Verify LinkedIn profile of the author of QAMIND
        When Checking the author Linkedin profile
        Then The Linkedin profile is correct

    Scenario: Verify all months from the archives widget
        Then The months from the archive widget are verified
            | number | month         |
            | 1      | July 2021     |
            | 2      | June 2021     |
            | 3      | May 2021      |
            | 4      | April 2021    |
            | 5      | March 2021    |
            | 6      | February 2021 |
            | 7      | January 2021  |
            | 8      | December 2020 |
            | 9      | November 2020 |
            | 10     | October 2020  |
            | 11     | August 2020   |
            | 12     | July 2020     |
            | 13     | June 2020     |
            | 14     | May 2020      |

    Scenario: Verify all topics under Testing tab
        Then The topics under Testing tab are verified
            | topic                  |
            | Accessibility Testing  |
            | Agile Testing          |
            | API Testing            |
            | Automation Testing     |
            | E2E Testing            |
            | Functional Testing     |
            | GUI Testing            |
            | Manual Testing         |
            | Non-Functional Testing |
