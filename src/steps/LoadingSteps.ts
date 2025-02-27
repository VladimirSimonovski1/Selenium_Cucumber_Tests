import { Given, Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/CustomWorld";
import { expect } from "chai";

Given(
    "the user is navigated to the internet website",
    async function (this: CustomWorld) {
        await this.loadingPage.navigateTo(this);
    },
);

When("the user clicks on the start button", async function (this: CustomWorld) {
    await this.loadingPage.startLoading(this);
});

Then(
    "the user verifies that {string} text is displayed",
    async function (this: CustomWorld, text: string) {
        expect(this.confirmation).to.equal(text);
    },
);
