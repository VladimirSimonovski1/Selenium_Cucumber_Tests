const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./report/",
    reportPath: "./report/",
    displayDuration: true,
    displayReportTime: true,
    openReportInBrowser: true,
    saveCollectedJSON: false,
    disableLog: true,
    pageTitle: "UI Tests",
    reportName: "UI Tests",
});