Feature: Get In Touch
    As a user
    I want to fill in the contact form
    So that I can contact the author

    Background: QAMIND is open and cache and cookies are deleted
        Given QAMIND is opened in Chrome
            And Cache and cookies are removed and window is maximized
            And Home Page is visible

    Scenario: Do not get in touch with the author without populating the form
        Given Clicking on the Get In Touch tab
        When Submitting the form without populating all the fields
        Then "This field is required." messages appear

    # @single # Cucumber tag for executiong only one scenario
    Scenario: Get in touch with the author
        Given Clicking on the Get In Touch tab
        When Filling and submitting the form
        Then Email sent successfully and "Thanks for contacting! We will be in touch with you shortly." message appear
