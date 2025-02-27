import { IWorldOptions, World } from "@cucumber/cucumber";
import { Builder, Capabilities, ThenableWebDriver } from "selenium-webdriver";
import { ServiceBuilder } from "selenium-webdriver/chrome";
import chrome from "selenium-webdriver/chrome";
import chromedriver from "chromedriver";
import { RegisterPage } from "../../src/page-object/RegisterPage";
import 'dotenv/config'; 
import { AlertPage } from "../../src/page-object/AlertPage";
import { LoadingPage } from "../../src/page-object/LoadingPage";
import { UploadFilePage } from "../../src/page-object/UploadFilePage";

export class CustomWorld extends World {
    private _driver: ThenableWebDriver;
    protected registerPage: RegisterPage;
    protected alertPage: AlertPage;
    protected loadingPage: LoadingPage;
    protected uploadPage: UploadFilePage;
    protected isBookFlightDisplayed: boolean;
    public logs: string[];
    public subscribeConfirmationText: string;
    public confirmation: string;
    public fileUploadedHeader: string;
    public fileUploaded: string;

    constructor(options: IWorldOptions) {
        super(options);
        this.driver = this.buildDriver();
        this.registerPage = new RegisterPage();
        this.alertPage = new AlertPage();
        this.loadingPage = new LoadingPage();
        this.uploadPage = new UploadFilePage();
        this.isBookFlightDisplayed = false;
        this.logs = [];
        console.log = (...args: any[]) => {
            this.logs.push(args.join(" "));
        };
        this.subscribeConfirmationText = "";
        this.confirmation = "";
        this.fileUploadedHeader = "";
        this.fileUploaded = "";
    }

    public get driver() {
        return this._driver;
    }

    public set driver(driver: ThenableWebDriver) {
        this._driver = driver;
    }

    private buildDriver() {
        console.log("Starting chrome driver...");
        let options = new chrome.Options();
        if (process.env.HEADLESS === "true") {
            console.log("Running in headless mode...");
            options.addArguments(
                "--headless"
            );
        }
        return new Builder()
            .forBrowser("chrome")
            .setChromeService(new ServiceBuilder(chromedriver.path))
            .setChromeOptions(options)
            .withCapabilities(Capabilities.chrome())
            .build();
    }
}
