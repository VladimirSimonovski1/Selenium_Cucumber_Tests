import { Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/CustomWorld";
import { expect } from "chai";

When(
    "the user subscribes to the newsletter",
    { timeout: 60000 },
    async function (this: CustomWorld): Promise<void> {
        await this.homePage.navigateToSubscribePage(this);
        const isDone = await this.subscribePage.subscribeToNewsletter(this);
        expect(isDone).to.be.true;
    },
);

Then(
    "the user confirms that the subscription is complete",
    { timeout: 20000 },
    async function (this: CustomWorld): Promise<void> {
        expect(this.subscribeConfirmationText).to.equal(
            "Subscription confirmation",
        );
    },
);
