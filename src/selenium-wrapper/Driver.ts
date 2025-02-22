import { setDefaultTimeout } from "@cucumber/cucumber";
import { WebDriver } from "selenium-webdriver";
import log from "log";

const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");
const webdriver = require("selenium-webdriver");

setDefaultTimeout(60 * 1000);

export abstract class Driver {
    public static driver: WebDriver = Driver.buildDriver();

    private static buildDriver() {
        log.info("Starting chrome driver...");
        chrome.setDefaultService(
            new chrome.ServiceBuilder(chromedriver.path).build(),
        );
        return new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
    }
}
