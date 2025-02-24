import { Locator, WebElement, until } from "selenium-webdriver";
import { CustomWorld } from "./CustomWorld";

export class WaitAndFind {
    public static async findElement(
        world: CustomWorld,
        locator: Locator,
        timeout: number = 40000,
    ): Promise<WebElement> {
        try {
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
        timeout: number = 40000,
    ): Promise<WebElement[]> {
        await world.driver.wait(until.elementLocated(locator), timeout);
        let elements: WebElement[] = await world.driver.findElements(locator);
        return elements;
    }

    public static async waitToBeClickable(
        world: CustomWorld,
        element: WebElement,
        timeout: number = 40000,
    ): Promise<boolean> {
        await world.driver.wait(until.elementIsEnabled(element), timeout);
        if (await element.isEnabled()) {
            return true;
        } else {
            return false;
        }
    }

    public static async waitToBeDisplayed(
        world: CustomWorld,
        element: WebElement,
        timeout: number = 40000,
    ): Promise<boolean> {
        await world.driver.wait(until.elementIsVisible(element), timeout);
        if (await element.isDisplayed()) {
            return true;
        } else {
            return false;
        }
    }
}
