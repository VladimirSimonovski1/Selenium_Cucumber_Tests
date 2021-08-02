import { IWaitElement } from "./interfaces/IWaitElement";
import { WebElement, WebDriver, until, Locator } from "selenium-webdriver";
import { Logger } from "tslog";

const log: Logger = new Logger();

export class ElementWait implements IWaitElement {
    public static browser: WebDriver;

    public async waitForElementToBeLocated(
        locator: Locator,
    ): Promise<WebElement> {
        log.info("Waiting for element to be located in the DOM...");
        const element = await ElementWait.browser.wait(
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

    public async waitForElementToBeClickable(
        element: WebElement,
    ): Promise<boolean> {
        log.info("Waiting for element to be enabled for clicking...");
        await ElementWait.browser.wait(until.elementIsEnabled(element), 5000);
        if (element.isEnabled()) {
            log.info("Element is ready to be clicked!");
            return true;
        } else {
            log.error("Element is still not ready to be clicked!");
            return false;
        }
    }

    public async waitForElementToBeVisible(
        element: WebElement,
    ): Promise<boolean> {
        log.info("Waiting for element to become visible...");
        await ElementWait.browser.wait(until.elementIsVisible(element), 5000);
        if (element.isDisplayed()) {
            log.info("Element is visible!");
            return true;
        } else {
            log.error("Element is not visible!");
            return false;
        }
    }

    public async waitForElementToBeSelected(
        element: WebElement,
    ): Promise<boolean> {
        log.info("Waiting for element to be selected...");
        await ElementWait.browser.wait(until.elementIsSelected(element), 5000);
        if (element.isSelected()) {
            log.info("Element is selected!");
            return true;
        } else {
            log.error("Element is not selected!");
            return false;
        }
    }

    public async waitForElementToBeDisabled(
        element: WebElement,
    ): Promise<boolean> {
        log.info("Waiting for element to be disabled...");
        await ElementWait.browser.wait(until.elementIsDisabled(element), 5000);
        if (element.isEnabled()) {
            log.info("Element is disabled!");
            return true;
        } else {
            log.error("Element is still enabled!");
            return false;
        }
    }

    public async waitForElementToNotBeVisible(
        element: WebElement,
    ): Promise<boolean> {
        log.info("Waiting for element to disappear...");
        await ElementWait.browser.wait(
            until.elementIsNotVisible(element),
            5000,
        );
        if (element.isDisplayed()) {
            log.info("Element is not visible!");
            return true;
        } else {
            log.error("Element is still visible!");
            return false;
        }
    }
}
