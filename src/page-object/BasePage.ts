import { Locator } from "selenium-webdriver";
import { ElementAction } from "../support/Actions";
import { WaitAndFind } from "../support/WaitAndFind";
import { CustomWorld } from "../../src/support/CustomWorld";

export abstract class BasePage {
    constructor(public baseURL: string) {}

    public async fill(
        world: CustomWorld,
        locator: Locator,
        text: string,
    ): Promise<void> {
        const element = await WaitAndFind.findElement(world, locator);
        await WaitAndFind.waitToBeDisplayed(world, element);
        await ElementAction.enterText(element, text);
    }

    public async click(
        world: CustomWorld,
        locator: Locator,
    ): Promise<void> {
        try {
            const element = await WaitAndFind.findElement(world, locator);
            await WaitAndFind.waitToBeDisplayed(world, element);
            await ElementAction.click(world, element);
        } catch (error) {
            throw new Error(error);
        }
    }

    public async getText(
        world: CustomWorld,
        locator: Locator,
    ): Promise<string> {
        const element = await WaitAndFind.findElement(world, locator);
        await WaitAndFind.waitToBeDisplayed(world, element);
        return await ElementAction.getText(element);
    }

    public async count(world: CustomWorld, locator: Locator): Promise<number> {
        const elements = await WaitAndFind.findElements(world, locator);
        return elements.length;
    }

    public async isDisplayed(
        world: CustomWorld,
        locator: Locator,
    ): Promise<boolean> {
        const element = await WaitAndFind.findElement(world, locator);
        const isDisplayed = await WaitAndFind.waitToBeDisplayed(world, element);
        return isDisplayed;
    }
}
