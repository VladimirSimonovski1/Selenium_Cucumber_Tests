## Info & Instructions

In this **README.md** you will find all the necessary info about this framework like:
- What is the main programming language used?
- Which frameworks are used?
- What test design pattern is followed?
- Which plugins & extensions are used and how they are used?
- How to run the tests and what should you expect at the end of  test execution?

### Code & Frameworks

- Language used: Typescript
- Test Framework: Selenium
- BDD Framework: Cucumber
- Assertion Framework: Chai Library

### Design Pattern

POM (Page-Object Model)

### Plugins & Extensions

- **prettier**, code formatter
- **log**, powerful, fast and expressive logging for Node.js
- **multiple-cucumber-html-reporter**, and HTML reporter for cucumber tests
- **bracket pair colorizer**, a customizable extension for colorizing matching brackets
- **code spell checker**, spelling checker for source code
- **vscode-icons**, icons for VSCode
- **cucumberautocomplete**, easy navigation from feature file to their implementation(step definitions)

### How to run the tests:

1. Open terminal & enter command: **npm run tests** (it will format the code, run all the tests, create and open a cucumber HTML report from the test execution)
2. Open terminal & enter command: **npm run test** (it will format the code and run only one test based on the cucumber tag tests, create and open a cucumber HTML report from the test execution)

*Note:* Expect an HTML test report to automatically open in browser after test execution. Location to the report: **reports/report/QAMINDTestReport.html**
