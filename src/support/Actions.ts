import { WebElement } from "selenium-webdriver";
import { CustomWorld } from "./CustomWorld";

export class ElementAction {
    public static async click(
        world: CustomWorld,
        element: WebElement,
    ): Promise<void> {
        await world.driver.executeScript(
            "arguments[0].scrollIntoView(true);",
            element,
        );
        await element.click();
    }

    public static async getText(element: WebElement): Promise<string> {
        let elementText = await element.getText();
        return elementText;
    }

    public static async enterText(
        element: WebElement,
        text: string,
    ): Promise<void> {
        const isEnabled = await element.isEnabled();
        if (isEnabled) {
            await element.click();
            await element.clear();
            await element.sendKeys(text);
        } else {
            throw new Error("Element is not enabled!");
        }
    }
}
