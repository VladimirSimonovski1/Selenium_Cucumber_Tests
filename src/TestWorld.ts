import { IWorldOptions, World } from "@cucumber/cucumber";
import { GetInTouchPage } from "./page-object/pages/GetInTouchPage";
import { HomePage } from "./page-object/pages/HomePage";

export class TestWorld extends World {
    protected getInTouchPage: GetInTouchPage;
    protected homePage: HomePage;
    protected logo: boolean;
    protected tagline: string;
    protected successMessage: string;
    protected numOfRecentPosts: number;
    protected isLinkedProfileCorrect: boolean;

    constructor(options: IWorldOptions) {
        super(options);
        this.getInTouchPage = new GetInTouchPage();
        this.homePage = new HomePage();
        this.logo = false;
        this.tagline = "";
        this.successMessage = "";
        this.numOfRecentPosts = 0;
        this.isLinkedProfileCorrect = false;
    }
}
