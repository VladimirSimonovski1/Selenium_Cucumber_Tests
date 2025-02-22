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

    Scenario: Verify all months from the archives widget
        Then The months from the archive widget are verified
            | number | month          |
            | 1      | March 2022     |
            | 2      | February 2022  |
            | 3      | December 2021  |
            | 4      | October 2021   |
            | 5      | September 2021 |
            | 6      | August 2021    |
            | 7      | July 2021      |
            | 8      | June 2021      |
            | 9      | May 2021       |
            | 10     | April 2021     |
            | 11     | March 2021     |
            | 12     | February 2021  |
            | 13     | January 2021   |
            | 14     | December 2020  |
            | 15     | November 2020  |
            | 16     | October 2020   |
            | 17     | August 2020    |
            | 18     | July 2020      |
            | 19     | June 2020      |
            | 20     | May 2020       |

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
