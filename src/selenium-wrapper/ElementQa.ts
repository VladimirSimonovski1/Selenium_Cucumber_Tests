import * as Logger from "bunyan";
import { WebDriver } from "selenium-webdriver";
import { IElementQa } from "./interfaces/IElementQa";

export abstract class ElementQa implements IElementQa {
    browser: WebDriver;
    log?: Logger;

    constructor(browser: WebDriver, log: Logger | undefined) {
        this.browser = browser;
        this.log = log;
    }
}
