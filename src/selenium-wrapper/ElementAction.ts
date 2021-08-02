import { WebDriver, WebElement } from "selenium-webdriver";
import { IActionElement } from "./interfaces/IActionElement";
import { Logger } from "tslog";

const log: Logger = new Logger();

export class ElementAction implements IActionElement {
    public async clickOnElement(element: WebElement): Promise<void> {
        log.info("Clicking on the element...");
        await element.click();
        log.info("Element is clicked!");
    }

    public async getTextFromElement(element: WebElement): Promise<string> {
        log.info("Fetching element text...");
        let elementText = await element.getText();
        log.info(`Element text is fetched: ${elementText}`);
        return elementText;
    }

    public async inputValueToField(
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
