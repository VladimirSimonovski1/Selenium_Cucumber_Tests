import { By, Locator } from "selenium-webdriver";
import { BasePage } from "./BasePage";
import { CustomWorld } from "../../src/support/CustomWorld";

export class SubscribePage extends BasePage {
    private readonly emailField: Locator;
    private readonly nextButton: Locator;
    private readonly subscribePage: Locator;
    private readonly title: Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly language: Locator;
    private readonly finishSubscribe: Locator;
    private readonly confirmationDialog: Locator;
    private readonly confirmationText: Locator;

    constructor() {
        super("/");
        this.emailField = By.css(".input-field");
        this.nextButton = By.id("flight-submit-btn");
        this.subscribePage = By.css(
            ".content-header__text.content-header__text--large.reset-h",
        );
        this.title = By.id("title_label");
        this.firstName = By.id("firstname_label");
        this.lastName = By.id("lastname_label");
        this.language = By.id("preferred-language_label");
        this.finishSubscribe = By.css(
            ".call-to-action.call-to-action__primary.call-to-action--fixed-width.call-to-action--middle",
        );
        this.confirmationDialog = By.id("__modal-section__title");
        this.confirmationText = By.css(".profile-text-title__title.profile-text-title__title--large.profile-text-title--center");
    }

    public async subscribeToNewsletter(world: CustomWorld): Promise<boolean> {
        await this.fill(
            world,
            this.emailField,
            (Math.random() + 1).toString(36).substring(7) + "@gmail.com",
        );
        await this.click(world, this.nextButton);
        const isPageDisplayed = await this.isDisplayed(
            world,
            this.subscribePage,
        );
        if (!isPageDisplayed) {
            throw new Error("Subscribe page is not displayed!");
        }
        await this.fill(world, this.title, "Mr");
        await this.fill(world, this.firstName, (Math.random() + 1).toString(36).substring(7));
        await this.fill(world, this.lastName, (Math.random() + 1).toString(36).substring(7));
        await this.fill(world, this.language, "English");
        await this.click(world, this.finishSubscribe);
        const isSubscriptionDone = await this.isDisplayed(world, this.confirmationDialog);
        world.subscribeConfirmationText = await this.getText(world, this.confirmationText);
        return isSubscriptionDone; 
    }
}
