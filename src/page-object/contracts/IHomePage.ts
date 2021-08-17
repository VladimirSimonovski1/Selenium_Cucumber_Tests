import { IBasePage } from "./IBasePage";

export interface IHomePage extends IBasePage {
    /**
     * Checks if logo exists
     * @returns True if logo exists, false if not
     */
    checkIfLogoExists(): Promise<boolean>;

    /**
     * Gets the description text value
     * @returns The tagline
     */
    getQamindTagline(): Promise<string>;

    /**
     * Searches for a blog post
     * @param text The blog post to be searched
     */
    searchForBlog(text: string): Promise<void>;

    /**
     * Validates the number of blogs
     * @returns A string of the number of blogs
     */
    validateTheNumberOfBlogs(): Promise<string>;

    /**
     * Search result is verified
     * @returns The search results as a string
     */
    verifySearchResult(): Promise<string>;

    /**
     * Searches and verifies no results
     * @returns No search results returned
     */
    verifyNoSearchResult(): Promise<string>;

    /**
     * Fetches the total number of recent posts
     * @returns The total number of recent posts
     */
    countTheNumOfRecentPosts(): Promise<number>;

    /**
     * Subscribe to the newsletter
     * @returns The successful subscription message
     */
    subscribeToNewsletter(): Promise<string>;

    /**
     * Selected the category by parameter
     * @param category The category to be selected
     */
    selectCategory(category: string): Promise<void>;

    /**
     * Gets the category header results header
     * @returns Returns category header
     */
    verifyCategoryHeader(): Promise<string>;

    /**
     * Fetches the linkedin profile for author
     * @returns verifies the correct linkedin url
     */
    verifyAuthorLinkedInProfile(): Promise<boolean>;
}
