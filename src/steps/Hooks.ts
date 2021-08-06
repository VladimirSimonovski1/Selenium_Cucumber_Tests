import { Given } from "@cucumber/cucumber";
import { HomePage } from "../page-object/implementation/HomePage";
import { Assertions } from "./assertions/assertions";

let homePage: HomePage;

Given("QAMIND is opened in Chrome", async (): Promise<void> => {
    await homePage.navigateToQamind();
});

Given(
    "Cache and cookies are removed and window is maximized",
    async (): Promise<void> => {
        await homePage.deleteCookiesAndMaximizeWindow();
    },
);

Given("Home Page is visible", async (): Promise<void> => {
    const element = await homePage.returnInitialVisibleElementValue();
    Assertions.checkIfActualEqualsExpected(element, "Categories");
});
