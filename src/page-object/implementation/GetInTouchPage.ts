import { Utils } from "../../utils/Utils";
import { IGetInTouchPage } from "../contracts/IGetInTouchPage";
import { GetInTouchPageLocators } from "../locators/QamindLocators";
import { BasePage } from "./BasePage";

export class GetInTouchPage extends BasePage implements IGetInTouchPage {

    constructor() {
        super("/");
    }

    public async clickOnGetInTouchTab(): Promise<void> {
        return await this.waitForElementToBeClickableAndClick(
            GetInTouchPageLocators.getInTouchTab,
        );
    }

    public async fillInFormAndSubmitIt(): Promise<void> {
        await this.clearInputFieldAndEnterText(
            GetInTouchPageLocators.firstName,
            await Utils.generateRandomString(),
        );
        await this.clearInputFieldAndEnterText(
            GetInTouchPageLocators.lastName,
            await Utils.generateRandomString(),
        );
        await this.clearInputFieldAndEnterText(
            GetInTouchPageLocators.email,
            await Utils.generateRandomEmail(),
        );
        await this.clearInputFieldAndEnterText(
            GetInTouchPageLocators.comment,
            await Utils.generateRandomString(),
        );
        await this.submitForm();
    }

    public async submitForm(): Promise<void> {
        await this.waitForElementToBeClickableAndClick(
            GetInTouchPageLocators.submit,
        );
    }

    public async verifySuccessfulSubmission(): Promise<string> {
        const successMessage = await this.returnElementValueIfDisplayed(
            GetInTouchPageLocators.confirmationMessage,
        );
        return successMessage;
    }

    public async verifyFailedSubmission(): Promise<string[]> {
        const messageList: string[] = [];
        for (const message of GetInTouchPageLocators.fieldsFailValidationMessage) {
            messageList.push(await this.returnElementValueIfDisplayed(message));
        }
        return messageList;
    }
}
