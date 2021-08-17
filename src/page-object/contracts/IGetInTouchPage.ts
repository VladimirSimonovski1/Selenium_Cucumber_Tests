export interface IGetInTouchPage {
    /**
     * Fill in the get in touch form
     */
    fillInFormAndSubmitIt(): Promise<void>;

    /**
     * Verify a successful confirmation message
     * @return The confirmation message
     */
    verifySuccessfulSubmission(): Promise<string>;
}
