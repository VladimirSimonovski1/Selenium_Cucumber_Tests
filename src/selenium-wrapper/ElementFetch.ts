import { WebElement, Locator } from "selenium-webdriver";
import { Driver } from "./Driver";
import log from 'log';

export class ElementFetch extends Driver {
    public static async fetchElement(locator: Locator): Promise<WebElement> {
        log.info("Fetching element...");
        const fetchedElement = await this.driver.findElement(locator);
        return fetchedElement;
    }

    public static async fetchElements(locator: Locator): Promise<WebElement[]> {
        log.info("Fetching elements...");
        const fetchedElements = await this.driver.findElements(locator);
        return fetchedElements;
    }
}
