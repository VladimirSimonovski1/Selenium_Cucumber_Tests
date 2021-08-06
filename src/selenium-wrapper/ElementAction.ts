import { WebElement } from "selenium-webdriver";
import { IActionElement } from "./interfaces/IActionElement";
import { ElementQa } from "./ElementQa";

export class ElementAction extends ElementQa implements IActionElement {
    public async clickOnElement(element: WebElement): Promise<void> {
        this.log.info("Clicking on the element...");
        await element.click();
        this.log.info("Element is clicked!");
    }

    public async getTextFromElement(element: WebElement): Promise<string> {
        this.log.info("Fetching element text...");
        let elementText = await element.getText();
        this.log.info(`Element text is fetched: ${elementText}`);
        return elementText;
    }

    public async inputValueToField(
        element: WebElement,
        text: string,
    ): Promise<void> {
        this.log.info("Sending input value to an element...");
        await this.clickOnElement(element);
        await element.clear();
        await element.sendKeys(text);
        this.log.info("Input value entered successfully!");
    }
}
