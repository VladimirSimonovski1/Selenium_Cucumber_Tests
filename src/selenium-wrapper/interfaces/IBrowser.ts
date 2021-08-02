import { WebElement } from "selenium-webdriver";

export interface IBrowser {
    /**
     * Close the browser
     */
    close(): Promise<void>;

    /**
     * Change the window size
     * @param width The width of the window
     * @param height The height of the window
     */
    changeWindowSize(width: number, height: number): Promise<void>;

    /**
     * Navigate to a URL
     * @param url The url passed as an argument
     */
    navigateTo(url: string): Promise<void>;

    /**
     * Refresh the browser page
     */
    refreshPage(): Promise<void>;

    /**
     * Go back one step in the browser
     */
    goBack(): Promise<void>;

    /**
     * Delete all browser cookies
     */
    deleteAllCookies(): Promise<void>;

    /**
     * Execute JS script
     * @param script The script that we want to execute
     */
    executeScript(script: string): Promise<void>;

    /**
     * Scroll to an element
     * @param script The scroll script that we want to execute
     * @param element The element to which we want to scroll to
     */
    scrollToElement(script: string, element: WebElement): Promise<void>;

    /**
     * Fetches and returns the current url
     * @return The current url
     */
    getCurrentUrl(): Promise<string>;
}
