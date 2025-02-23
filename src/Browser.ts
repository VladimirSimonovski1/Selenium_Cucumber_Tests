import {
    Builder,
    Capabilities,
    WebDriver,
    WebElement,
} from "selenium-webdriver";
import log from "log";
import { ServiceBuilder } from "selenium-webdriver/chrome";
import chromedriver from "chromedriver";

export class Browser {
    public static driver: WebDriver = this.buildDriver();

    private static buildDriver() {
        log.info("Starting chrome driver...");
        new ServiceBuilder(chromedriver.path).build();
        return new Builder().withCapabilities(Capabilities.chrome()).build();
    }

    public static async quitDriver(): Promise<void> {
        if (this.driver != null) {
            await this.driver.close();
            await this.driver.quit();
            log.info("Browser and driver are closed!");
        } else {
            log.info("Browser and driver are already closed!");
        }
    }

    public static async maximizeBrowserWindow(): Promise<void> {
        await this.driver.manage().window().maximize();
        log.info("Browser window maximized!");
    }

    public static async navigate(url: string): Promise<void> {
        log.info(`Navigate to ${url} URL....`);
        await this.driver.navigate().to(url);
    }

    public static async deleteAllCookies(): Promise<void> {
        log.info("Deleting all the current cookies");
        await this.driver.manage().deleteAllCookies();
        const cookiesLength = (await this.driver.manage().getCookies()).length;
        log.info(`Current length of cookies is ${cookiesLength}`);
    }

    public static async scrollToElement(element: WebElement): Promise<void> {
        await this.driver.executeScript(
            "arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});",
            element,
        );
    }
}
