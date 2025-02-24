import { Given, When } from "@cucumber/cucumber";
import { CustomWorld } from "../../src/support/CustomWorld";
import { expect } from "chai";

Given(
    "the user is navigated to the register app",
    { timeout: 30000 },
    async function (this: CustomWorld): Promise<void> {
        await this.registerPage.navigateTo(this);
        const isTitleDisplayed = await this.registerPage.agreeToConsent(this);
        expect(isTitleDisplayed).to.be.true;
    },
);

When(
    "the user fills out the register form",
    { timeout: 30000 },
    async function (this: CustomWorld): Promise<void> {
        await this.registerPage.fillRegisterFrom(this);
    },
);
