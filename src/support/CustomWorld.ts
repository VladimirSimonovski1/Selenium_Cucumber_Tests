import { IWorldOptions, World } from "@cucumber/cucumber";
import { HomePage } from "../page-object/HomePage";
import { Builder, Capabilities, ThenableWebDriver } from "selenium-webdriver";
import log from "log";
import { ServiceBuilder } from "selenium-webdriver/chrome";
import chromedriver from "chromedriver";

export class CustomWorld extends World {
    public driver: ThenableWebDriver;
    protected homePage: HomePage;
    protected isBookFlightDisplayed: boolean;

    constructor(options: IWorldOptions) {
        super(options);
        this.driver = this.buildDriver();
        this.homePage = new HomePage();
        this.isBookFlightDisplayed = false;
    }

    private buildDriver() {
        log.info("Starting chrome driver...");
        return new Builder()
            .forBrowser("chrome")
            .setChromeService(new ServiceBuilder(chromedriver.path))
            .withCapabilities(Capabilities.chrome())
            .build();
    }
}
