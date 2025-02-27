import { By, Locator } from "selenium-webdriver";
import { BasePage } from "./BasePage";
import { CustomWorld } from "../support/CustomWorld";

export class UploadFilePage extends BasePage {
    private content: Locator;
    private inputFile: Locator;
    private uploadButton: Locator;
    private uploadedTitle: Locator;
    private uploadedFile: Locator;

    constructor() {
        super("https://the-internet.herokuapp.com/upload");
        this.content = By.id("content");
        this.inputFile = By.css("input[type='file'][id='file-upload']");
        this.uploadButton = By.id("file-submit");
        this.uploadedTitle = By.css("[id='content'] h3");
        this.uploadedFile = By.id("uploaded-files");
    }

    public async navigateTo(world: CustomWorld): Promise<boolean> {
        console.log("Navigating to the upload file website...");
        await world.driver.navigate().to(this.baseURL);
        await world.driver.manage().window().maximize();
        return this.isDisplayed(world, this.content);
    }

    public async uploadFile(world: CustomWorld, file: string): Promise<string[]> {
        await this.sendKeys(world, this.inputFile, file);
        await this.click(world, this.uploadButton);
        world.fileUploadedHeader = (await this.getText(world, this.uploadedTitle)).trim();
        world.fileUploaded = (await this.getText(world, this.uploadedFile)).trim();
        return [world.fileUploadedHeader, world.fileUploaded];
    }
}
