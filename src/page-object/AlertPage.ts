import { By, Locator, until } from "selenium-webdriver";
import { BasePage } from "./BasePage";
import { CustomWorld } from "../../src/support/CustomWorld";

export class AlertPage extends BasePage {
    private readonly alert: Locator;
    private readonly confirm: Locator;
    private readonly prompt: Locator;
    private readonly result: Locator;
    private readonly content: Locator;

    constructor() {
        super("https://the-internet.herokuapp.com/javascript_alerts");
        this.alert = By.css("[onclick='jsAlert()']");
        this.confirm = By.css("[onclick='jsConfirm()']");
        this.prompt = By.css("[onclick='jsPrompt()']");
        this.result = By.id("result");
        this.content = By.id("content");
    }

    public async navigateTo(world: CustomWorld): Promise<boolean> {
        console.log("Navigating to The Internet demo website...");
        await world.driver.navigate().to(this.baseURL);
        await world.driver.manage().window().maximize();
        const isContentDisplayed = await this.isDisplayed(world, this.content);
        return isContentDisplayed;
    }

    public async handleAlert(world: CustomWorld): Promise<string | string[]> {
        console.log("Handle alert...");
        const result = await this.handleAlerts(world, "alert", this.alert);
        return result;
    }

    public async handleConfirm(world: CustomWorld): Promise<string[] | string> {
        console.log("Handle confirm...");
        const [confirmText, endResult] = await this.handleAlerts(
            world,
            "confirm",
            this.confirm,
        );
        return [confirmText, endResult];
    }

    public async handlePrompt(world: CustomWorld): Promise<string | string[]> {
        console.log("Handle prompt...");
        const result = await this.handleAlerts(world, "prompt", this.prompt);
        return result;
    }

    private async handleAlerts(
        world: CustomWorld,
        type: string,
        locator: Locator,
    ): Promise<string | string[]> {
        await this.click(world, locator);
        await world.driver.wait(until.alertIsPresent());
        const alert = await world.driver.switchTo().alert();
        if (type === "confirm") {
            const confirmText = await alert.getText();
            await alert.accept();
            const endResult = await this.getText(world, this.result);
            return [confirmText, endResult];
        } else if (type === "prompt") {
            await alert.sendKeys("Test");
            await alert.accept();
            const endResult = await this.getText(world, this.result);
            return endResult;
        }
        await alert.accept();
        const endResult = await this.getText(world, this.result);
        return endResult;
    }
}
