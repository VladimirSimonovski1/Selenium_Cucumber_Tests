import { When, Then } from "@cucumber/cucumber";
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
