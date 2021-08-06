import { IBrowser } from "./interfaces/IBrowser";
import { WebElement } from "selenium-webdriver";
import { ElementQa } from "./ElementQa";

export class Browser extends ElementQa implements IBrowser {
    public async close(): Promise<void> {
        await this.browser.close();
        this.log.info("Browser closed!");
    }

    public async maximizeBrowserWindow(): Promise<void> {
        await this.browser.manage().window().maximize();
        this.log.info("Browser window maximized!");
    }

    public async changeWindowSize(
        width: number,
        height: number,
    ): Promise<void> {
        await this.browser.manage().window().setSize(width, height);
        const windowSize = await this.browser.manage().window().getSize();
        this.log.info(
            `The size of the browser is: ${windowSize.width}; x ${windowSize.height}`,
        );
    }

    public async navigateTo(url: string): Promise<void> {
        this.log.info(`Navigate to ${url} URL....`);
        await this.browser.get(url);
        await this.browser.navigate().to(url);
    }

    public async refreshPage(): Promise<void> {
        this.log.info("Refreshing the webpage");
        await this.browser.navigate().refresh();
    }

    public async goBack(): Promise<void> {
        this.log.info("Going back one step in the browser...");
        await this.browser.navigate().back();
    }

    public async deleteAllCookies(): Promise<void> {
        this.log.info("Deleting all the current cookies");
        await this.browser.manage().deleteAllCookies();
        const cookiesLength = (await this.browser.manage().getCookies()).length;
        this.log.info(`Current length of cookies is ${cookiesLength}`);
    }

    public async executeScript(script: string): Promise<void> {
        await this.browser.executeScript(script);
    }

    public async scrollToElement(
        script: string,
        element: WebElement,
    ): Promise<void> {
        await this.browser.executeScript(script, element);
    }

    public async getCurrentUrl(): Promise<string> {
        await this.browser.sleep(5000);
        return await this.browser.getCurrentUrl();
    }
}
