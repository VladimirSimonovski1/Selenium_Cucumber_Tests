import { WebElement, Locator } from "selenium-webdriver";

export interface IBasePage {
    baseURL: string;

    /**
     * Navigate to QAMIND home page
     */
    navigateToQamind(): Promise<void>;

    /**
     * Clears the input field and enters value
     * @param locator The locator passed as an argument
     * @param text The text that is send in the input field
     */
    clearInputFieldAndEnterText(locator: Locator, text: string): Promise<void>;

    /**
     * Waits for element to be enabled for clicking and clicks it
     * @param locator The locator passed as an argument
     */
    waitForElementToBeClickableAndClick(locator: Locator): Promise<void>;

    /**
     * Gets the text of an element after displaying
     * @param locator The locator passed as an argument
     * @returns The element text returned
     */
    returnElementValueIfDisplayed(locator: Locator): Promise<string>;

    /**
     * Gets the list of elements if displayed
     * @param locator The locator passed as an argument
     * @returns The elements located
     */
    returnElementsIfDisplayed(locator: Locator): Promise<WebElement[]>;

    /**
     * Checks if value si displayed
     * @param locator The locator passed as an argument
     * @returns True if element is displayed, false if not
     */
    confirmIfValueIsDisplayed(locator: Locator): Promise<boolean>;

    /**
     * Fetches and returns the current displayed URL
     * @param locator The locator passed as an argument
     * @returns Current URL is return
     */
    returnDisplayedURL(): Promise<string>;
}
