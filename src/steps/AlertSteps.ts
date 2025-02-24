import { Given, When } from "@cucumber/cucumber";
import { CustomWorld } from "../../src/support/CustomWorld";
import { expect } from "chai";

Given(
    "the user is navigated to the alert app",
    { timeout: 30000 },
    async function (this: CustomWorld): Promise<void> {
        const isContentDisplayed = await this.alertPage.navigateTo(this);
        expect(isContentDisplayed).to.be.true;
    },
);

When(
    "the user handles the alerts",
    { timeout: 30000 },
    async function (this: CustomWorld): Promise<void> {
        const alertResult = await this.alertPage.handleAlert(this);
        expect(alertResult).to.equal("You successfully clicked an alert");
        const [confirmationText, confirmResult] =
            await this.alertPage.handleConfirm(this);
        expect(confirmationText).to.equal("I am a JS Confirm");
        expect(confirmResult).to.equal("You clicked: Ok");
        const promptResult = await this.alertPage.handlePrompt(this);
        expect(promptResult).to.equal("You entered: Test");
    },
);
