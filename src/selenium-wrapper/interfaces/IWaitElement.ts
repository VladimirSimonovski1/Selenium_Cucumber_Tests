import { Locator, WebElement } from "selenium-webdriver";

export interface IWaitElement {
    /**
     * Waits for the element to become clickable
     * @param element The element passed as an argument
     * @returns true if element is clickable, false if not
     */
    waitForElementToBeClickable(element: WebElement): Promise<boolean>;

    /**
     * Waits for the element to be present in the DOM
     * @param locator The locator passed as an argument
     * @returns The element returned
     */
    waitForElementToBeLocated(locator: Locator): Promise<WebElement>;

    /**
     * Waits for the element to be visible on the page
     * @param element The element passed as an argument
     * @returns true if element is visible on the page, false if not
     */
    waitForElementToBeVisible(element: WebElement): Promise<boolean>;

    /**
     * Waits for the element to become selected
     * @param element The element passed as an argument
     * @returns true if element is selected, false if not
     */
    waitForElementToBeSelected(element: WebElement): Promise<boolean>;

    /**
     * Waits for the element to become stale(not in the DOM)
     * @param element The element passed as an argument
     * @returns true if element is stale, false if not
     */
    waitForElementToBeDisabled(element: WebElement): Promise<boolean>;

    /**
     * Waits for the element to not be visible on the page
     * @param element The element passed as an argument
     * @returns true if element is not visible on the page, false if not
     */
    waitForElementToNotBeVisible(element: WebElement): Promise<boolean>;
}
