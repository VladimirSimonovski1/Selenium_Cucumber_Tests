import { Locator, WebElement, until } from "selenium-webdriver";
import log from "log";
import { CustomWorld } from "./CustomWorld";

export class WaitAndFind {
    public static async findElement(
        world: CustomWorld,
        locator: Locator,
        timeout: number = 30000,
    ): Promise<WebElement> {
        try {
            log.info("Waiting for element to be located in the DOM...");
            const element = await world.driver.wait(
                until.elementLocated(locator),
                timeout,
            );
            return element;
        } catch (error) {
            throw new Error(`Element not located in the DOM!, Error: ${error}`);
        }
    }

    public static async findElements(
        world: CustomWorld,
        locator: Locator,
        timeout: number = 30000,
    ): Promise<WebElement[]> {
        log.info("Waiting for the elements to be located in the DOM...");
        await world.driver.wait(until.elementLocated(locator), timeout);
        let elements: WebElement[] = await world.driver.findElements(locator);
        return elements;
    }

    public static async waitToBeClickable(
        world: CustomWorld,
        element: WebElement,
        timeout: number = 30000,
    ): Promise<boolean> {
        log.info("Waiting for element to be enabled for clicking...");
        await world.driver.wait(until.elementIsEnabled(element), timeout);
        if (await element.isEnabled()) {
            log.info("Element is ready to be clicked!");
            return true;
        } else {
            log.error("Element is still not ready to be clicked!");
            return false;
        }
    }

    public static async waitToBeDisplayed(
        world: CustomWorld,
        element: WebElement,
        timeout: number = 30000,
    ): Promise<boolean> {
        log.info("Waiting for element to become visible...");
        await world.driver.wait(until.elementIsVisible(element), timeout);
        if (await element.isDisplayed()) {
            log.info("Element is visible!");
            return true;
        } else {
            log.error("Element is not visible!");
            return false;
        }
    }
}
