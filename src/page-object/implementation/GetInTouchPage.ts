import { GetInTouchPageLocators } from "../locators/QamindLocators";
import { BasePage } from "./BasePage";

export class GetInTouchPage extends BasePage {
    constructor() {
        super("https://www.qamind.com/get-in-touch/");
    }

    public async fillInFormAndSubmitIt(): Promise<void> {
        await this.clearInputFieldAndEnterText(
            GetInTouchPageLocators.firstName,
            await this.generateRandomEmail(),
        );
        await this.clearInputFieldAndEnterText(
            GetInTouchPageLocators.lastName,
            await this.generateRandomEmail(),
        );
        await this.clearInputFieldAndEnterText(
            GetInTouchPageLocators.email,
            (await this.generateRandomEmail()) + "@gmail.com",
        );
        await this.clearInputFieldAndEnterText(
            GetInTouchPageLocators.comment,
            await this.generateRandomEmail(),
        );
        await this.submitForm();
    }

    public async submitForm(): Promise<void> {
        await this.waitForElementToBeClickableAndClick(
            GetInTouchPageLocators.submit,
        );
    }

    public async verifySuccessfulSubmission(): Promise<string> {
        return await this.returnElementValueIfDisplayed(
            GetInTouchPageLocators.confirmationMessage,
        );
    }

    public async verifyFailedSubmission(): Promise<string[]> {
        const messageList: string[] = [];
        for (const message of GetInTouchPageLocators.fieldsFailValidationMessage) {
            messageList.push(await this.returnElementValueIfDisplayed(message));
        }
        return messageList;
    }

    private async generateRandomEmail(): Promise<string> {
        return (Math.random() + 1).toString(36).substring(7);
    }
}
