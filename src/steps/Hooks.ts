import { AfterAll, Given } from "@cucumber/cucumber";
import { Assertions } from "../../src/assertions/Assertions";
import { TestWorld } from "../../src/TestWorld";

Given(
    "QAMIND is opened in Chrome",
    async function (this: TestWorld): Promise<void> {
        await this.homePage.navigateTo();
    },
);

Given(
    "Cache and cookies are removed and window is maximized",
    async function (this: TestWorld): Promise<void> {
        await this.homePage.deleteCookiesAndMaximizeWindow();
    },
);

Given("Home Page is visible", async function (this: TestWorld): Promise<void> {
    const element = await this.homePage.returnInitialVisibleElementValue();
    Assertions.checkIfActualEqualsExpected(element, "Categories");
});

AfterAll(async function (this: TestWorld) {
    await this.homePage.closeBrowserAndQuiteDriver();
});
