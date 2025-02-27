import { By, Locator } from "selenium-webdriver";
import { BasePage } from "./BasePage";
import { CustomWorld } from "../support/CustomWorld";

export class LoadingPage extends BasePage {
    private start: Locator;
    private content: Locator;
    private confirmationText: Locator;

    constructor() {
        super("https://the-internet.herokuapp.com/dynamic_loading/1");
        this.start = By.css("[id='start'] button");
        this.content = By.id("content");
        this.confirmationText = By.id("finish");
    }

    public async navigateTo(world: CustomWorld): Promise<boolean> {
        console.log("Navigating to The Internet website...");
        await world.driver.navigate().to(this.baseURL);
        await world.driver.manage().window().maximize();
        return this.isDisplayed(world, this.content);
    }

    public async startLoading(world: CustomWorld): Promise<string> {
        await this.click(world, this.start);
        world.confirmation = await this.getText(world, this.confirmationText);
        return world.confirmation;
    }
}
