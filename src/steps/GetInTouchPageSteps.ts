import { Given, When, Then } from "@cucumber/cucumber";
import { GetInTouchPage } from "../page-object/implementation/GetInTouchPage";
import { Assertions } from "./assertions/assertions";

const getInTouchPage = new GetInTouchPage();

Given("Clicking on the Get In Touch tab", async (): Promise<void> => {
    await getInTouchPage.clickOnGetInTouchTab();
});

When(
    "Submitting the form without populating all the fields",
    async (): Promise<void> => {
        await getInTouchPage.submitForm();
    },
);

When("Filling and submitting the form", async (): Promise<void> => {
    await getInTouchPage.fillInFormAndSubmitIt();
});

Then(
    "{string} messages appear",
    async (expectedFailMessage: string): Promise<void> => {
        const failMessages = await getInTouchPage.verifyFailedSubmission();
        for (const message of failMessages) {
            Assertions.checkIfActualEqualsExpected(
                message,
                expectedFailMessage,
                `The list of validation message: ${failMessages}`,
            );
        }
    },
);

Then(
    "Email sent successfully and {string} message appear",
    async (expectedSuccessMessage: string): Promise<void> => {
        const confirmationMessage =
            await getInTouchPage.verifySuccessfulSubmission();
        Assertions.checkIfActualEqualsExpected(
            confirmationMessage,
            expectedSuccessMessage,
        );
    },
);
