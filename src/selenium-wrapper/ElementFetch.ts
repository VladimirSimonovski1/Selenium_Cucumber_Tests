import { WebElement, Locator } from "selenium-webdriver";
import { IFetchElement } from "./interfaces/IFetchElement";
import { ElementQa } from "./ElementQa";

export class ElementFetch extends ElementQa implements IFetchElement {
    public async fetchElement(locator: Locator): Promise<WebElement> {
        this.log.info("Fetching element...");
        const fetchedElement = await this.browser.findElement(locator);
        return fetchedElement;
    }

    public async fetchElements(locator: Locator): Promise<WebElement[]> {
        this.log.info("Fetching elements...");
        const fetchedElements = await this.browser.findElements(locator);
        return fetchedElements;
    }
}
