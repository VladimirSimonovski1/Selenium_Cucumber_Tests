import { Utils } from "../../utils/Utils";
import { IHomePage } from "../contracts/IHomePage";
import { HomePageLocators } from "../locators/QamindLocators";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage implements IHomePage {
    constructor() {
        super("https://www.qamind.com");
    }

    public async checkIfLogoExists(): Promise<boolean> {
        const qamindLogo = await this.confirmIfValueIsDisplayed(
            HomePageLocators.logo,
        );
        return qamindLogo;
    }

    public async getQamindTagline(): Promise<string> {
        const qamindTagline = await this.returnElementValueIfDisplayed(
            HomePageLocators.tagLine,
        );
        return qamindTagline;
    }

    public async searchForBlog(text: string): Promise<void> {
        await this.clearInputFieldAndEnterText(
            HomePageLocators.searchField,
            text,
        );
        await this.waitForElementToBeClickableAndClick(
            HomePageLocators.searchSubmit,
        );
    }

    public async validateTheNumberOfBlogs(): Promise<string> {
        const numOfBlogs = await this.returnElementValueIfDisplayed(
            HomePageLocators.numberOfBlogs,
        );
        return numOfBlogs;
    }

    public async verifySearchResult(): Promise<string> {
        const searchResultText = await this.returnElementValueIfDisplayed(
            HomePageLocators.searchResult,
        );
        return searchResultText;
    }

    public async verifyNoSearchResult(): Promise<string> {
        const noSearchResultText = await this.returnElementValueIfDisplayed(
            HomePageLocators.numberOfBlogs,
        );
        return noSearchResultText;
    }

    public async countTheNumOfRecentPosts(): Promise<number> {
        const recentPosts = await this.returnElementsIfDisplayed(
            HomePageLocators.recentPosts,
        );
        return recentPosts.length;
    }

    public async subscribeToNewsletter(): Promise<string> {
        await this.clearInputFieldAndEnterText(
            HomePageLocators.newsletterField,
            await Utils.generateRandomEmail(),
        );
        await this.waitForElementToBeClickableAndClick(
            HomePageLocators.newsletterFieldButton,
        );
        return this.returnElementValueIfDisplayed(
            HomePageLocators.successSubscribeMsg,
        );
    }

    public async selectCategory(category: string): Promise<void> {
        await this.waitForElementToBeClickableAndClick(
            HomePageLocators.categoryMenu,
        );
        switch (category) {
            case "Tutorials":
                await this.waitForElementToBeClickableAndClick(
                    HomePageLocators.categories[0],
                );
                break;
            case "Comparisons":
                await this.waitForElementToBeClickableAndClick(
                    HomePageLocators.categories[1],
                );
                break;
            case "Experiences":
                await this.waitForElementToBeClickableAndClick(
                    HomePageLocators.categories[2],
                );
                break;
            case "How To":
                await this.waitForElementToBeClickableAndClick(
                    HomePageLocators.categories[3],
                );
                break;
            case "Reviews":
                await this.waitForElementToBeClickableAndClick(
                    HomePageLocators.categories[4],
                );
                break;
            default:
                console.log("Category does not exist!");
                break;
        }
    }

    public async verifyCategoryHeader(): Promise<string> {
        return await this.returnElementValueIfDisplayed(
            HomePageLocators.categoryPostsHeader,
        );
    }

    public async verifyAuthorLinkedInProfile(): Promise<boolean> {
        return await this.confirmIfValueIsDisplayed(
            HomePageLocators.linkedinButton,
        );
    }

    public async verifyArchiveWidgetTitle(): Promise<boolean> {
        return await this.confirmIfValueIsDisplayed(
            HomePageLocators.archiveTitle,
        );
    }

    public async getArchiveMonths(): Promise<string[]> {
        return await this.returnElementsValuesIfDisplayed(
            HomePageLocators.archiveMonths,
        );
    }

    public async expandTestingTab(): Promise<void> {
        return await this.waitForElementToBeClickableAndClick(
            HomePageLocators.testingTab,
        );
    }

    public async getTestingTopics(): Promise<string[]> {
        return await this.returnElementsValuesIfDisplayed(
            HomePageLocators.testingTopics,
        );
    }
}
