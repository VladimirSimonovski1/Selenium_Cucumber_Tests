import { After, Given, setWorldConstructor } from "@cucumber/cucumber";
import { TestWorld } from "../../src/TestWorld";
import { expect } from "chai";

setWorldConstructor(TestWorld);

Given(
    "Emirates website is opened",
    { timeout: 20000 },
    async function (this: TestWorld): Promise<void> {
        await this.homePage.navigateTo();
        await this.homePage.maximizeWindow();
        const isHomePageDisplayed = await this.homePage.verifyHomePage();
        expect(isHomePageDisplayed).to.be.true;
    },
);

After(async function (this: TestWorld) {
    await this.homePage.closeBrowserAndQuiteDriver();
});
