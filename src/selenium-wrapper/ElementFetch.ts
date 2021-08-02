import { WebElement, Locator, WebDriver } from "selenium-webdriver";
import { IFetchElement } from "./interfaces/IFetchElement";
import { Logger } from "tslog";

const log: Logger = new Logger();

export class ElementFetch implements IFetchElement {
    public static browser: WebDriver;

    public async fetchElement(locator: Locator): Promise<WebElement> {
        log.info("Fetching element...");
        const fetchedElement = await ElementFetch.browser.findElement(locator);
        return fetchedElement;
    }

    public async fetchElements(locator: Locator): Promise<WebElement[]> {
        log.info("Fetching elements...");
        const fetchedElements = await ElementFetch.browser.findElements(
            locator,
        );
        return fetchedElements;
    }
}
