import { By, Locator, WebElement } from "selenium-webdriver";
import { ElementAction } from "../../selenium-wrapper/ElementAction";
import { ElementFetch } from "../../selenium-wrapper/ElementFetch";
import { IBasePage } from "../contracts/IBasePage";
import { Browser } from "../../selenium-wrapper/Browser";
import { ElementWait } from "../../selenium-wrapper/ElementWait";

export abstract class BasePage implements IBasePage {
    constructor(public baseURL: string) {}

    public async navigateTo(): Promise<void> {
        await Browser.navigate(this.baseURL);
    }

    public async deleteCookiesAndMaximizeWindow(): Promise<void> {
        await Browser.deleteAllCookies();
        await Browser.maximizeBrowserWindow();
    }

    public async returnInitialVisibleElementValue(): Promise<string> {
        const element = await ElementFetch.fetchElement(By.id("menu-item-366"));
        await ElementWait.waitForElementToBeVisible(element);
        return await ElementAction.getTextFromElement(element);
    }

    public async clearInputFieldAndEnterText(
        locator: Locator,
        text: string,
    ): Promise<void> {
        const element = await ElementFetch.fetchElement(locator);
        await Browser.scrollToElement(
            "arguments[0].scrollIntoView(true);",
            element,
        );
        await ElementWait.waitForElementToBeVisible(element);
        await ElementAction.inputValueToField(element, text);
    }

    public async waitForElementToBeClickableAndClick(
        locator: Locator,
    ): Promise<void> {
        const element = await ElementFetch.fetchElement(locator);
        await Browser.scrollToElement(
            "arguments[0].scrollIntoView(true);",
            element,
        );
        await ElementWait.waitForElementToBeClickable(element);
        await ElementAction.clickOnElement(element);
    }

    public async returnElementValueIfDisplayed(
        locator: Locator,
    ): Promise<string> {
        const element = await ElementFetch.fetchElement(locator);
        await ElementWait.waitForElementToBeVisible(element);
        return await ElementAction.getTextFromElement(element);
    }

    public async returnElementsIfDisplayed(
        locator: Locator,
    ): Promise<WebElement[]> {
        const elements = await ElementFetch.fetchElements(locator);
        for (const element of elements) {
            ElementWait.waitForElementToBeVisible(element);
        }
        return elements;
    }

    public async confirmIfValueIsDisplayed(locator: Locator): Promise<boolean> {
        const element = await ElementFetch.fetchElement(locator);
        const isElementVisible = await ElementWait.waitForElementToBeVisible(
            element,
        );
        if (isElementVisible === true) {
            return isElementVisible;
        } else {
            throw new Error("Element is not visible on the screen!");
        }
    }

    public async returnDisplayedURL(): Promise<string> {
        return await Browser.getCurrentUrl();
    }

    public async closeBrowserAndQuiteDriver(): Promise<void> {
        await Browser.closeBrowserAndDriver();
    }
}
