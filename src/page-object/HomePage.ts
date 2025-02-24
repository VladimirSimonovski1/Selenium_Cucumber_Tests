import { By, Locator } from "selenium-webdriver";
import { BasePage } from "./BasePage";
import { CustomWorld } from "../../src/support/CustomWorld";

export class HomePage extends BasePage {
    private readonly logo: Locator;
    private readonly book: Locator;
    private readonly searchFlight: Locator;
    private readonly acceptPrivacy: Locator;
    private readonly bookFlightPage: Locator;
    private readonly subscribe: Locator;

    constructor() {
        super("https://www.emirates.com");
        this.logo = By.css("[data-id='header_logo_link']");
        this.book = By.css("[data-id='header_nav_section']");
        this.searchFlight = By.css(
            ".link-heading[data-link='BOOK:Book flights:Search for a flight']",
        );
        this.acceptPrivacy = By.id("onetrust-accept-btn-handler");
        this.bookFlightPage = By.css("[data-auto='page-header']");
        this.subscribe = By.css("[data-link='Subscribe special offer:Email address Subscribe']");
    }

    public async navigateTo(world: CustomWorld): Promise<void> {
        console.log("Navigating to Emirates website...");
        await world.driver.navigate().to(this.baseURL);
        await world.driver.manage().window().maximize();
        console.log("Emirates website successfully opened!");
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
        console.log(
            "Home page successfully displayed! Navigating to book a flight page...",
        );
        let isBookFlightPageLoaded = false;
        await this.click(world, this.book);
        await this.click(world, this.searchFlight);
        try {
            isBookFlightPageLoaded = await this.isDisplayed(
                world,
                this.bookFlightPage,
            );
        } catch (error) {
            return false;
        }
        console.log("Book flight page successfully opened!");
        return isBookFlightPageLoaded;
    }

    public async navigateToSubscribePage(world: CustomWorld): Promise<void> {
        await this.click(world, this.subscribe);
    }
}
