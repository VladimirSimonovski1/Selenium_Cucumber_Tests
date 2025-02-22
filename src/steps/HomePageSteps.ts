import { When, Then, DataTable } from "@cucumber/cucumber";
import { Assertions } from "../../src/assertions/Assertions";
import { TestWorld } from "../../src/TestWorld";

When("Fetching the logo and tagline text", async function (): Promise<void> {
    this.logo = await this.getInTouchPage.checkIfLogoExists();
    this.tagline = await this.getInTouchPage.getQamindTagline();
});

When(
    "Searching for blogs with search criteria: {string}",
    async function (this: TestWorld, criteria: string): Promise<void> {
        await this.homePage.searchForBlog(criteria);
    },
);

When(
    "Counting the number of recent posts",
    async function (this: TestWorld): Promise<void> {
        this.numOfRecentPosts = await this.homePage.countTheNumOfRecentPosts();
    },
);

When(
    "Subscribing to the newsletter",
    async function (this: TestWorld): Promise<void> {
        this.successMessage = await this.homePage.subscribeToNewsletter();
    },
);

When(
    "Checking the author Linkedin profile",
    async function (this: TestWorld): Promise<void> {
        this.isLinkedProfileCorrect =
            await this.homePage.verifyAuthorLinkedInProfile();
    },
);

When(
    "Opening blogs by category: {string}",
    async function (this: TestWorld, category: string): Promise<void> {
        await this.homePage.selectCategory(category);
    },
);

Then(
    "The logo and tagline are displayed and verified",
    async function (this: TestWorld): Promise<void> {
        Assertions.checkIfActualValueIsTrue(this.logo);
        Assertions.checkIfActualEqualsExpected(
            this.tagline,
            "Free Tutorials & Blog Posts For Software Testing",
        );
    },
);

Then(
    "The total number of blogs are displayed",
    async function (this: TestWorld): Promise<void> {
        const numOfBlogs = await this.homePage.validateTheNumberOfBlogs();
        Assertions.checkIfActualContainsExpected(
            numOfBlogs,
            "13",
            `The total number of blogs: ${numOfBlogs}`,
        );
    },
);

Then(
    "The blog {string} appears",
    async function (this: TestWorld, expectedBlogTitle: string): Promise<void> {
        const searchResult = await this.homePage.verifySearchResult();
        Assertions.checkIfActualEqualsExpected(
            searchResult,
            expectedBlogTitle,
            `The search result: ${searchResult}`,
        );
    },
);

Then(
    "The message {string} the given search criteria appears",
    async function (
        this: TestWorld,
        expectedNoSearchResult: string,
    ): Promise<void> {
        const searchResult = await this.homePage.verifyNoSearchResult();
        Assertions.checkIfActualEqualsExpected(
            searchResult,
            expectedNoSearchResult + '"tdsdsr"',
        );
    },
);

Then(
    "A {string} message appears",
    async function (
        this: TestWorld,
        expectedSuccessMessage: string,
    ): Promise<void> {
        Assertions.checkIfActualEqualsExpected(
            this.successMessage,
            expectedSuccessMessage,
            `Successful subscription message is: ${this.successMessage}`,
        );
    },
);

Then(
    "Total number of recent posts is {int}",
    async function (
        this: TestWorld,
        expectedNumOfRecentPosts: number,
    ): Promise<void> {
        Assertions.checkIfActualEqualsExpected(
            this.numOfRecentPosts,
            expectedNumOfRecentPosts,
            `Total number of recent posts: ${expectedNumOfRecentPosts}`,
        );
    },
);

Then(
    "The Linkedin profile is correct",
    async function (this: TestWorld): Promise<void> {
        Assertions.checkIfActualValueIsTrue(this.isLinkedProfileCorrect);
    },
);

Then(
    "{string} category headers are displayed",
    async function (
        this: TestWorld,
        expectedCategoryHeader: string,
    ): Promise<void> {
        const categoryHeader = await this.homePage.verifyCategoryHeader();

        Assertions.checkIfActualEqualsExpected(
            categoryHeader,
            "Posts published in " + "“" + expectedCategoryHeader + "”",
        );
    },
);

Then(
    "The months from the archive widget are verified",
    async function (this: TestWorld, dataTable: DataTable): Promise<void> {
        const isArchiveTitleVisible =
            await this.homePage.verifyArchiveWidgetTitle();
        Assertions.checkIfActualValueIsTrue(isArchiveTitleVisible);

        const archiveMap = new Map<string, string>();
        dataTable
            .hashes()
            .forEach((rowEntry) =>
                archiveMap.set(rowEntry.number, rowEntry.month),
            );
        const expectedArchiveMonths = new Array<string>();
        for (const [key, value] of archiveMap) {
            expectedArchiveMonths.push(value);
        }
        const actualArchiveMonths = await this.homePage.getArchiveMonths();

        Assertions.iterateActualAndCheckIfEqualsExpected(
            actualArchiveMonths,
            expectedArchiveMonths,
        );
    },
);

Then(
    "The topics under Testing tab are verified",
    async function (this: TestWorld, dataTable: DataTable): Promise<void> {
        await this.homePage.expandTestingTab();

        const testingMap = new Array<string>();
        dataTable.rows().forEach((row) => {
            testingMap.push(row.toString());
        });

        const expectedTestingTopics = new Array<string>();
        for (const value of testingMap) {
            expectedTestingTopics.push(value);
        }

        const actualTestingTopics = await this.homePage.getTestingTopics();

        Assertions.iterateActualAndCheckIfEqualsExpected(
            actualTestingTopics,
            expectedTestingTopics,
        );
    },
);
