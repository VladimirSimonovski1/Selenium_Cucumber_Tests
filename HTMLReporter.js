const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: './test-report/',
    reportPath: './test-report/',
    displayDuration: true,
    displayReportTime: true,
    openReportInBrowser: true,
    saveCollectedJSON: false,
    disableLog: true,
    pageTitle: "QAMIND TESTS",
    reportName: "QAMIND TESTS"
});