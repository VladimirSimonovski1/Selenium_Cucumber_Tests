import { Locator } from "selenium-webdriver";
import { ElementAction } from "../selenium-wrapper/Actions";
import { Browser } from "../Browser";
import { WaitAndFind } from "../../src/selenium-wrapper/WaitAndFind";

export abstract class BasePage {
    constructor(public baseURL: string) {}

    public async navigateTo(): Promise<void> {
        await Browser.navigate(this.baseURL);
    }

    public async maximizeWindow(): Promise<void> {
        await Browser.maximizeBrowserWindow();
    }

    public async enterText(locator: Locator, text: string): Promise<void> {
        const element = await WaitAndFind.findElement(locator);
        await WaitAndFind.waitToBeDisplayed(element);
        await ElementAction.enterText(element, text);
    }

    public async waitAndClick(locator: Locator): Promise<void> {
        try {
            const element = await WaitAndFind.findElement(locator);
            await WaitAndFind.waitToBeDisplayed(element);
            await ElementAction.click(element);
        } catch (error) {
            throw new Error(error);
        }
    }

    public async getElementText(locator: Locator): Promise<string> {
        const element = await WaitAndFind.findElement(locator);
        await WaitAndFind.waitToBeDisplayed(element);
        return await ElementAction.getText(element);
    }

    public async countNumOfElements(locator: Locator): Promise<number> {
        const elements = await WaitAndFind.findElements(locator);
        return elements.length;
    }

    public async isDisplayed(locator: Locator): Promise<boolean> {
        const element = await WaitAndFind.findElement(locator);
        const isDisplayed = await WaitAndFind.waitToBeDisplayed(element);
        return isDisplayed;
    }

    public async closeBrowserAndQuiteDriver(): Promise<void> {
        await Browser.quitDriver();
    }

}
