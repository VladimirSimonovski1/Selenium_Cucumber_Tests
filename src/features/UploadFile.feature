Feature: Upload file

    As a user
    I want to login to navigate to the upload website
    So I can upload a file

    Background: The user is navigated to the website
        Given the user is navigated to upload file website

    Scenario: Upload file scenario
        When the user uploads "D:\\OLD-REPOS\\REPOS\\REPOS\\Selenium_Cucumber_Tests\\TestFile.txt" file
        Then the user verifies that the file is uploaded