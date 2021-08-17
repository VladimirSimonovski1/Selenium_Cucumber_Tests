import { WebElement } from "selenium-webdriver";
import { Driver } from "./Driver";

const Logger = require("bunyan");
const log = Logger.createLogger({ name: "Browser Log" });

export class Browser extends Driver {
    public static async closeBrowserAndDriver(): Promise<void> {
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

    public static async changeWindowSize(
        width: number,
        height: number,
    ): Promise<void> {
        await this.driver.manage().window().setSize(width, height);
        const windowSize = await this.driver.manage().window().getSize();
        log.info(
            `The size of the browser is: ${windowSize.width}; x ${windowSize.height}`,
        );
    }

    public static async navigate(url: string): Promise<void> {
        log.info(`Navigate to ${url} URL....`);
        await this.driver.navigate().to(url);
    }

    public static async refreshPage(): Promise<void> {
        log.info("Refreshing the webpage");
        await this.driver.navigate().refresh();
    }

    public static async goBack(): Promise<void> {
        log.info("Going back one step in the browser...");
        await this.driver.navigate().back();
    }

    public static async deleteAllCookies(): Promise<void> {
        log.info("Deleting all the current cookies");
        await this.driver.manage().deleteAllCookies();
        const cookiesLength = (await this.driver.manage().getCookies()).length;
        log.info(`Current length of cookies is ${cookiesLength}`);
    }

    public static async executeScript(script: string): Promise<void> {
        await this.driver.executeScript(script);
    }

    public static async scrollToElement(
        script: string,
        element: WebElement,
    ): Promise<void> {
        await this.driver.executeScript(script, element);
    }

    public static async getCurrentUrl(): Promise<string> {
        await this.driver.sleep(5000);
        return await this.driver.getCurrentUrl();
    }
}
