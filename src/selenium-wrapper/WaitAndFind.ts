import { Locator, WebElement, until } from "selenium-webdriver";
import { Browser } from "../Browser";
import log from "log";

export class WaitAndFind extends Browser {
    public static async findElement(
        locator: Locator,
        timeout: number = 30000,
    ): Promise<WebElement> {
        try {
            log.info("Waiting for element to be located in the DOM...");
            const element = await this.driver.wait(
                until.elementLocated(locator),
                timeout,
            );
            return element;
        } catch (error) {
            throw new Error(`Element not located in the DOM!, Error: ${error}`);
        }
    }

    public static async findElements(
        locator: Locator,
        timeout: number = 30000,
    ): Promise<WebElement[]> {
        log.info("Waiting for the elements to be located in the DOM...");
        await this.driver.wait(until.elementLocated(locator), timeout);
        let elements: WebElement[] = await this.driver.findElements(locator);
        return elements;
    }

    public static async waitToBeClickable(
        element: WebElement,
        timeout: number = 30000,
    ): Promise<boolean> {
        log.info("Waiting for element to be enabled for clicking...");
        await this.driver.wait(until.elementIsEnabled(element), timeout);
        if (await element.isEnabled()) {
            log.info("Element is ready to be clicked!");
            return true;
        } else {
            log.error("Element is still not ready to be clicked!");
            return false;
        }
    }

    public static async waitToBeDisplayed(
        element: WebElement,
        timeout: number = 30000,
    ): Promise<boolean> {
        log.info("Waiting for element to become visible...");
        await this.driver.wait(until.elementIsVisible(element), timeout);
        if (await element.isDisplayed()) {
            log.info("Element is visible!");
            return true;
        } else {
            log.error("Element is not visible!");
            return false;
        }
    }
}
