import * as Logger from "bunyan";
import { WebDriver } from "selenium-webdriver";

export interface IElementQa {
    browser: WebDriver;
    log?: Logger;
}
