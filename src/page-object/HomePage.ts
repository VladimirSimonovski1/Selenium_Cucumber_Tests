import { By, Locator } from "selenium-webdriver";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    private readonly logo: Locator;
    private readonly book: Locator;
    private readonly searchFlight: Locator;
    private readonly acceptPrivacy: Locator;
    private readonly bookFlightPage: Locator;

    constructor() {
        super("https://www.emirates.com");
        this.logo = By.css("[data-id='header_logo_link']");
        this.book = By.css("[data-id='header_nav_section']");
        this.searchFlight = By.css(
            ".link-heading[data-link='BOOK:Book flights:Search for a flight']",
        );
        this.acceptPrivacy = By.id("onetrust-accept-btn-handler");
        this.bookFlightPage = By.css("[data-auto='page-header']");
    }

    public async verifyHomePage(): Promise<boolean> {
        try {
            await this.waitAndClick(this.acceptPrivacy);
            const qamindLogo = await this.isDisplayed(this.logo);
            return qamindLogo;
        } catch (error) {
            return false;
        }
    }

    public async navigateToBookFlightPage(): Promise<boolean> {
        await this.waitAndClick(this.book);
        await this.waitAndClick(this.searchFlight);
        const isBookFlightPageLoaded = await this.verifyFlightPage();
        return isBookFlightPageLoaded;
    }

    private async verifyFlightPage(): Promise<boolean> {
        try {
            const page = await this.isDisplayed(this.bookFlightPage);
            return page;
        } catch (error) {
            return false;
        }
    }
}
