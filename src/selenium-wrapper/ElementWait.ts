import { WebElement, until, Locator } from "selenium-webdriver";
import { Driver } from "./Driver";
import log from 'log';


export class ElementWait extends Driver {
    public static async waitForElementToBeLocated(
        locator: Locator,
    ): Promise<WebElement> {
        log.info("Waiting for element to be located in the DOM...");
        const element = await this.driver.wait(
            until.elementLocated(locator),
            5000,
        );
        if (!element === null) {
            log.info("Element is located!");
            return element;
        } else {
            throw new Error("Element is not located");
        }
    }

    public static async waitForElementToBeClickable(
        element: WebElement,
    ): Promise<boolean> {
        log.info("Waiting for element to be enabled for clicking...");
        await this.driver.wait(until.elementIsEnabled(element), 5000);
        if (element.isEnabled()) {
            log.info("Element is ready to be clicked!");
            return true;
        } else {
            log.error("Element is still not ready to be clicked!");
            return false;
        }
    }

    public static async waitForElementToBeVisible(
        element: WebElement,
    ): Promise<boolean> {
        log.info("Waiting for element to become visible...");
        await this.driver.wait(until.elementIsVisible(element), 5000);
        if (element.isDisplayed()) {
            log.info("Element is visible!");
            return true;
        } else {
            log.error("Element is not visible!");
            return false;
        }
    }

    public static async waitForElementToBeSelected(
        element: WebElement,
    ): Promise<boolean> {
        log.info("Waiting for element to be selected...");
        await this.driver.wait(until.elementIsSelected(element), 5000);
        if (element.isSelected()) {
            log.info("Element is selected!");
            return true;
        } else {
            log.error("Element is not selected!");
            return false;
        }
    }

    public static async waitForElementToBeDisabled(
        element: WebElement,
    ): Promise<boolean> {
        log.info("Waiting for element to be disabled...");
        await this.driver.wait(until.elementIsDisabled(element), 5000);
        if (element.isEnabled()) {
            log.info("Element is disabled!");
            return true;
        } else {
            log.error("Element is still enabled!");
            return false;
        }
    }

    public static async waitForElementToNotBeVisible(
        element: WebElement,
    ): Promise<boolean> {
        log.info("Waiting for element to disappear...");
        await this.driver.wait(until.elementIsNotVisible(element), 5000);
        if (element.isDisplayed()) {
            log.info("Element is not visible!");
            return true;
        } else {
            log.error("Element is still visible!");
            return false;
        }
    }
}
