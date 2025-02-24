import { Given, Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/CustomWorld";
import { expect } from "chai";

Given(
    "Emirates website is opened",
    { timeout: 20000 },
    async function (this: CustomWorld): Promise<void> {
        await this.homePage.navigateTo(this);
        const isHomePageDisplayed = await this.homePage.verifyHomePage(this);
        expect(isHomePageDisplayed).to.be.true;
    },
);

When(
    "the user navigates to the book flight page",
    { timeout: 60000 },
    async function (this: CustomWorld): Promise<void> {
        this.isBookFlightDisplayed =
            await this.homePage.navigateToBookFlightPage(this);
    },
);

Then(
    "the user verifies that the book flight page is displayed",
    { timeout: 20000 },
    async function (this: CustomWorld): Promise<void> {
        expect(this.isBookFlightDisplayed).to.be.true;
    },
);
