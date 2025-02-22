import { WebElement } from "selenium-webdriver";
import log from 'log';


export class ElementAction {
    public static async clickOnElement(element: WebElement): Promise<void> {
        log.info("Clicking on the element...");
        await element.click();
        log.info("Element is clicked!");
    }

    public static async getTextFromElement(
        element: WebElement,
    ): Promise<string> {
        log.info("Fetching element text...");
        let elementText = await element.getText();
        log.info(`Element text is fetched: ${elementText}`);
        return elementText;
    }

    public static async inputValueToField(
        element: WebElement,
        text: string,
    ): Promise<void> {
        log.info("Sending input value to an element...");
        await this.clickOnElement(element);
        await element.clear();
        await element.sendKeys(text);
        log.info("Input value entered successfully!");
    }
}
