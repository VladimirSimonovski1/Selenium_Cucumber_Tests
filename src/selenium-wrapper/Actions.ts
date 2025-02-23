import { WebElement } from "selenium-webdriver";
import log from "log";

export class ElementAction {
    public static async click(element: WebElement): Promise<void> {
        log.info("Clicking on the element...");
        await element.click();
        log.info("Element is clicked!");
    }

    public static async getText(element: WebElement): Promise<string> {
        log.info("Fetching element text...");
        let elementText = await element.getText();
        log.info(`Element text is fetched: ${elementText}`);
        return elementText;
    }

    public static async enterText(
        element: WebElement,
        text: string,
    ): Promise<void> {
        log.info("Sending input value to an element...");
        await element.sendKeys(text);
        log.info("Input value entered successfully!");
    }
}
