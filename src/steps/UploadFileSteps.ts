import { Given, Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/CustomWorld";
import { expect } from "chai";

Given(
    "the user is navigated to upload file website",
    async function (this: CustomWorld) {
        const isPageDisplayed = await this.uploadPage.navigateTo(this);
        expect(isPageDisplayed).to.be.true;
    },
);

When("the user uploads {string} file", async function (this: CustomWorld, file: string) {
    [this.fileUploadedHeader, this.fileUploaded] =
        await this.uploadPage.uploadFile(this, file);
});

Then(
    "the user verifies that the file is uploaded",
    async function (this: CustomWorld) {
        expect(this.fileUploadedHeader).to.equal("File Uploaded!");
        expect(this.fileUploaded).to.equal("TestFile.txt");
    },
);
