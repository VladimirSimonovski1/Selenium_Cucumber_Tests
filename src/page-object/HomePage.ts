import { By, Locator } from "selenium-webdriver";
import { BasePage } from "./BasePage";
import { CustomWorld } from "../../src/support/CustomWorld";

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

    public async navigateTo(world: CustomWorld): Promise<void> {
        await world.driver.navigate().to(this.baseURL);
        await world.driver.manage().window().maximize();
    }

    public async verifyHomePage(world: CustomWorld): Promise<boolean> {
        try {
            await this.click(world, this.acceptPrivacy);
            const qamindLogo = await this.isDisplayed(world, this.logo);
            return qamindLogo;
        } catch (error) {
            return false;
        }
    }

    public async navigateToBookFlightPage(
        world: CustomWorld,
    ): Promise<boolean> {
        await this.click(world, this.book);
        await this.click(world, this.searchFlight);
        const isBookFlightPageLoaded = await this.verifyFlightPage(world);
        return isBookFlightPageLoaded;
    }

    private async verifyFlightPage(world: CustomWorld): Promise<boolean> {
        try {
            const page = await this.isDisplayed(world, this.bookFlightPage);
            return page;
        } catch (error) {
            return false;
        }
    }
}
