import { IWaitElement } from "./interfaces/IWaitElement";
import { WebElement, until, Locator } from "selenium-webdriver";
import { ElementQa } from "./ElementQa";

export class ElementWait extends ElementQa implements IWaitElement {
    public async waitForElementToBeLocated(
        locator: Locator,
    ): Promise<WebElement> {
        this.log.info("Waiting for element to be located in the DOM...");
        const element = await this.browser.wait(
            until.elementLocated(locator),
            5000,
        );
        if (!element === null) {
            this.log.info("Element is located!");
            return element;
        } else {
            throw new Error("Element is not located");
        }
    }

    public async waitForElementToBeClickable(
        element: WebElement,
    ): Promise<boolean> {
        this.log.info("Waiting for element to be enabled for clicking...");
        await this.browser.wait(until.elementIsEnabled(element), 5000);
        if (element.isEnabled()) {
            this.log.info("Element is ready to be clicked!");
            return true;
        } else {
            this.log.error("Element is still not ready to be clicked!");
            return false;
        }
    }

    public async waitForElementToBeVisible(
        element: WebElement,
    ): Promise<boolean> {
        this.log.info("Waiting for element to become visible...");
        await this.browser.wait(until.elementIsVisible(element), 5000);
        if (element.isDisplayed()) {
            this.log.info("Element is visible!");
            return true;
        } else {
            this.log.error("Element is not visible!");
            return false;
        }
    }

    public async waitForElementToBeSelected(
        element: WebElement,
    ): Promise<boolean> {
        this.log.info("Waiting for element to be selected...");
        await this.browser.wait(until.elementIsSelected(element), 5000);
        if (element.isSelected()) {
            this.log.info("Element is selected!");
            return true;
        } else {
            this.log.error("Element is not selected!");
            return false;
        }
    }

    public async waitForElementToBeDisabled(
        element: WebElement,
    ): Promise<boolean> {
        this.log.info("Waiting for element to be disabled...");
        await this.browser.wait(until.elementIsDisabled(element), 5000);
        if (element.isEnabled()) {
            this.log.info("Element is disabled!");
            return true;
        } else {
            this.log.error("Element is still enabled!");
            return false;
        }
    }

    public async waitForElementToNotBeVisible(
        element: WebElement,
    ): Promise<boolean> {
        this.log.info("Waiting for element to disappear...");
        await this.browser.wait(until.elementIsNotVisible(element), 5000);
        if (element.isDisplayed()) {
            this.log.info("Element is not visible!");
            return true;
        } else {
            this.log.error("Element is still visible!");
            return false;
        }
    }
}
