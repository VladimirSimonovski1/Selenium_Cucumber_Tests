import { IBrowser } from "./interfaces/IBrowser";
import { WebDriver, WebElement } from "selenium-webdriver";
import { Logger } from "tslog";

const log: Logger = new Logger();

export class Browser implements IBrowser {
    public static browser: WebDriver;

    public async close(): Promise<void> {
        await Browser.browser.close();
        log.info("Browser closed!");
    }

    public async maximizeBrowserWindow(): Promise<void> {
        await Browser.browser.manage().window().maximize();
        log.info("Browser window maximized!");
    }

    public async changeWindowSize(
        width: number,
        height: number,
    ): Promise<void> {
        await Browser.browser.manage().window().setSize(width, height);
        const windowSize = await Browser.browser.manage().window().getSize();
        log.info(
            `The size of the browser is: ${windowSize.width}; x ${windowSize.height}`,
        );
    }

    public async navigateTo(url: string): Promise<void> {
        log.info(`Navigate to ${url} URL....`);
        await Browser.browser.navigate().to(url);
    }

    public async refreshPage(): Promise<void> {
        log.info("Refreshing the webpage");
        await Browser.browser.navigate().refresh();
    }

    public async goBack(): Promise<void> {
        log.info("Going back one step in the browser...");
        await Browser.browser.navigate().back();
    }

    public async deleteAllCookies(): Promise<void> {
        log.info("Deleting all the current cookies");
        await Browser.browser.manage().deleteAllCookies();
        const cookiesLength = (await Browser.browser.manage().getCookies())
            .length;
        log.info(`Current length of cookies is ${cookiesLength}`);
    }

    public async executeScript(script: string): Promise<void> {
        await Browser.browser.executeScript(script);
    }

    public async scrollToElement(
        script: string,
        element: WebElement,
    ): Promise<void> {
        await Browser.browser.executeScript(script, element);
    }

    public async getCurrentUrl(): Promise<string> {
        await Browser.browser.sleep(5000);
        return await Browser.browser.getCurrentUrl();
    }
}
