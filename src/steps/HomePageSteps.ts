import { Then, When } from "@cucumber/cucumber";
import { TestWorld } from "../TestWorld";
import { expect } from "chai";

When(
    "the user navigates to the book flight page",
    { timeout: 60000 },
    async function (this: TestWorld): Promise<void> {
        this.isBookFlightDisplayed =
            await this.homePage.navigateToBookFlightPage();
    },
);

Then(
    "the user verifies that the book flight page is displayed",
    { timeout: 20000 },
    async function (this: TestWorld): Promise<void> {
        expect(this.isBookFlightDisplayed).to.be.true;
    },
);