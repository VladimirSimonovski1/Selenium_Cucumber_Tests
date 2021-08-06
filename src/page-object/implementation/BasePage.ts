import { By, Locator, WebElement } from "selenium-webdriver";
import { ElementAction } from "../../selenium-wrapper/ElementAction";
import { ElementFetch } from "../../selenium-wrapper/ElementFetch";
import { IBasePage } from "../contracts/IBasePage";
import { Browser } from "../../selenium-wrapper/Browser";
import { ElementWait } from "../../selenium-wrapper/ElementWait";

export abstract class BasePage implements IBasePage {
    protected find: ElementFetch;
    protected action: ElementAction;
    protected wait: ElementWait;
    protected browserQa: Browser;

    constructor(public baseURL: string) {}

    public async navigateToQamind(): Promise<void> {
        await this.browserQa.navigateTo(this.baseURL);
    }

    public async deleteCookiesAndMaximizeWindow(): Promise<void> {
        await this.browserQa.deleteAllCookies();
        await this.browserQa.maximizeBrowserWindow();
    }

    public async returnInitialVisibleElementValue(): Promise<string> {
        const element = await this.find.fetchElement(By.id("menu-item-366"));
        await this.wait.waitForElementToBeVisible(element);
        return await this.action.getTextFromElement(element);
    }

    public async clearInputFieldAndEnterText(
        locator: Locator,
        text: string,
    ): Promise<void> {
        const element = await this.find.fetchElement(locator);
        await this.browserQa.scrollToElement(
            "arguments[0].scrollIntoView(true);",
            element,
        );
        await this.wait.waitForElementToBeVisible(element);
        await this.action.inputValueToField(element, text);
    }

    public async waitForElementToBeClickableAndClick(
        locator: Locator,
    ): Promise<void> {
        const element = await this.find.fetchElement(locator);
        await this.browserQa.scrollToElement(
            "arguments[0].scrollIntoView(true);",
            element,
        );
        await this.wait.waitForElementToBeClickable(element);
        await this.action.clickOnElement(element);
    }

    public async returnElementValueIfDisplayed(
        locator: Locator,
    ): Promise<string> {
        const element = await this.find.fetchElement(locator);
        await this.wait.waitForElementToBeVisible(element);
        return await this.action.getTextFromElement(element);
    }

    public async returnElementsIfDisplayed(
        locator: Locator,
    ): Promise<WebElement[]> {
        const elements = await this.find.fetchElements(locator);
        for (const element of elements) {
            this.wait.waitForElementToBeVisible(element);
        }
        return elements;
    }

    public async confirmIfValueIsDisplayed(locator: Locator): Promise<boolean> {
        const element = await this.find.fetchElement(locator);
        const isElementVisible = await this.wait.waitForElementToBeVisible(
            element,
        );
        if (isElementVisible === true) {
            return isElementVisible;
        } else {
            throw new Error("Element is not visible on the screen!");
        }
    }

    public async returnDisplayedURL(): Promise<string> {
        return await this.browserQa.getCurrentUrl();
    }
}
