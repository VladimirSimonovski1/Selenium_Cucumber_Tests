import { When, Then, DataTable } from "@cucumber/cucumber";
import { HomePage } from "../page-object/implementation/HomePage";
import { Assertions } from "./assertions/assertions";

let logo: boolean;
let tagline: string;
let successMessage: string;
let numOfRecentPosts: number;
let isLinkedProfileCorrect: boolean;
const homePage = new HomePage();

When("Fetching the logo and tagline text", async (): Promise<void> => {
    logo = await homePage.checkIfLogoExists();
    tagline = await homePage.getQamindTagline();
});

When(
    "Searching for blogs with search criteria: {string}",
    async (criteria: string): Promise<void> => {
        await homePage.searchForBlog(criteria);
    },
);

When("Counting the number of recent posts", async (): Promise<void> => {
    numOfRecentPosts = await homePage.countTheNumOfRecentPosts();
});

When("Subscribing to the newsletter", async (): Promise<void> => {
    successMessage = await homePage.subscribeToNewsletter();
});

When("Checking the author Linkedin profile", async (): Promise<void> => {
    isLinkedProfileCorrect = await homePage.verifyAuthorLinkedInProfile();
});

When(
    "Opening blogs by category: {string}",
    async (category: string): Promise<void> => {
        await homePage.selectCategory(category);
    },
);

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

Then("The total number of blogs are displayed", async (): Promise<void> => {
    const numOfBlogs = await homePage.validateTheNumberOfBlogs();
    Assertions.checkIfActualContainsExpected(
        numOfBlogs,
        "12",
        `The total number of blogs: ${numOfBlogs}`,
    );
});

Then(
    "The blog {string} appears",
    async (expectedBlogTitle: string): Promise<void> => {
        const searchResult = await homePage.verifySearchResult();
        Assertions.checkIfActualEqualsExpected(
            searchResult,
            expectedBlogTitle,
            `The search result: ${searchResult}`,
        );
    },
);

Then(
    "The message {string} the given search criteria appears",
    async (expectedNoSearchResult: string): Promise<void> => {
        const searchResult = await homePage.verifyNoSearchResult();
        Assertions.checkIfActualEqualsExpected(
            searchResult,
            expectedNoSearchResult + '"tdsdsr"',
        );
    },
);

Then(
    "A {string} message appears",
    async (expectedSuccessMessage: string): Promise<void> => {
        Assertions.checkIfActualEqualsExpected(
            successMessage,
            expectedSuccessMessage,
            `Successful subscription message is: ${successMessage}`,
        );
    },
);

Then(
    "Total number of recent posts is {int}",
    async (expectedNumOfRecentPosts: number): Promise<void> => {
        Assertions.checkIfActualEqualsExpected(
            numOfRecentPosts,
            expectedNumOfRecentPosts,
            `Total number of recent posts: ${expectedNumOfRecentPosts}`,
        );
    },
);

Then("The Linkedin profile is correct", async (): Promise<void> => {
    Assertions.checkIfActualValueIsTrue(isLinkedProfileCorrect);
});

Then(
    "{string} category headers are displayed",
    async (expectedCategoryHeader: string): Promise<void> => {
        const categoryHeader = await homePage.verifyCategoryHeader();

        Assertions.checkIfActualEqualsExpected(
            categoryHeader,
            "Posts published in " + "“" + expectedCategoryHeader + "”",
        );
    },
);

Then(
    "The months from the archive widget are verified",
    async (dataTable: DataTable): Promise<void> => {
        const isArchiveTitleVisible = await homePage.verifyArchiveWidgetTitle();
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
        const actualArchiveMonths = await homePage.getArchiveMonths();

        Assertions.iterateActualAndCheckIfEqualsExpected(
            actualArchiveMonths,
            expectedArchiveMonths,
        );
    },
);

Then(
    "The topics under Testing tab are verified",
    async (dataTable: DataTable): Promise<void> => {
        await homePage.expandTestingTab();

        const testingMap = new Array<string>();
        dataTable.rows().forEach((row) => {
            testingMap.push(row.toString());
        });

        const expectedTestingTopics = new Array<string>();
        for (const value of testingMap) {
            expectedTestingTopics.push(value);
        }

        const actualTestingTopics = await homePage.getTestingTopics();

        Assertions.iterateActualAndCheckIfEqualsExpected(
            actualTestingTopics,
            expectedTestingTopics,
        );
    },
);
