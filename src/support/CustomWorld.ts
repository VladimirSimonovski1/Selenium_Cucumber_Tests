import { IWorldOptions, World } from "@cucumber/cucumber";
import { Builder, Capabilities, ThenableWebDriver } from "selenium-webdriver";
import { ServiceBuilder } from "selenium-webdriver/chrome";
import chrome from "selenium-webdriver/chrome";
import chromedriver from "chromedriver";
import { SubscribePage } from "../../src/page-object/SubscribePage";
import { HomePage } from "../../src/page-object/HomePage";
import { RegisterPage } from "../../src/page-object/RegisterPage";
import 'dotenv/config'; 
import { AlertPage } from "../../src/page-object/AlertPage";

export class CustomWorld extends World {
    public driver: ThenableWebDriver;
    protected homePage: HomePage;
    protected subscribePage: SubscribePage;
    protected registerPage: RegisterPage;
    protected alertPage: AlertPage;
    protected isBookFlightDisplayed: boolean;
    public logs: string[];
    public subscribeConfirmationText: string;

    constructor(options: IWorldOptions) {
        super(options);
        this.driver = this.buildDriver();
        this.homePage = new HomePage();
        this.subscribePage = new SubscribePage();
        this.registerPage = new RegisterPage();
        this.alertPage = new AlertPage();
        this.isBookFlightDisplayed = false;
        this.logs = [];
        console.log = (...args: any[]) => {
            this.logs.push(args.join(" "));
        };
        this.subscribeConfirmationText = "";
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
