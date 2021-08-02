import { WebElement, Locator } from "selenium-webdriver";

export interface IFetchElement {
    /**
     * Finds element
     * @param locator The type of locator passed as an argument
     * @returns Element if not undefined
     */
    fetchElement(locator: Locator): Promise<WebElement>;

    /**
     * Find elements
     * @param locator The type of locator passed as an argument
     * @returns Element if not undefined
     */
    fetchElements(locator: Locator): Promise<WebElement[]>;
}
