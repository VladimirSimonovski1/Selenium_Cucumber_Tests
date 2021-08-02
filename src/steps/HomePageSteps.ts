import { When, Then } from "@cucumber/cucumber";
import { HomePage } from "../page-object/implementation/HomePage";
import { Assertions } from "./assertions/assertions";

let logo: boolean;
let tagline: string;
const homePage = new HomePage();

When("Fetching the logo and tagline text", async (): Promise<void> => {
    logo = await homePage.checkIfLogoExists();
    tagline = await homePage.getQamindTagline();
});

Then(
    "The logo and tagline are displayed and verified",
    async (): Promise<void> => {
        Assertions.checkIfActualValueIsTrue(logo);
        Assertions.checkIfActualEqualsExpected(
            tagline,
            "Free Tutorials & Blog Posts For Software Testing",
        );
    },
);
