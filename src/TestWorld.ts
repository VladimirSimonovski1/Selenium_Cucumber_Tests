import { IWorldOptions, World } from "@cucumber/cucumber";
import { HomePage } from "./page-object/HomePage";

export class TestWorld extends World {
    protected homePage: HomePage;
    protected isBookFlightDisplayed: boolean;

    constructor(options: IWorldOptions) {
        super(options);
        this.homePage = new HomePage();
        this.isBookFlightDisplayed = false;
    }
}
