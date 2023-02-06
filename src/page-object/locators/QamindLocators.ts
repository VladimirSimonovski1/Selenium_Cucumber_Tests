import { By } from "selenium-webdriver";

export class HomePageLocators {
    public static logo = By.id("site-title");
    public static tagLine = By.className("tagline");
    public static searchField = By.css("aside .search-field");
    public static searchSubmit = By.css("aside .search-submit");
    public static numberOfBlogs = By.css("h1.post-title");
    public static searchResult = By.css(
        "h2 a[href*='protractor-for-smooth-e2e-automation']",
    );
    public static recentPosts = By.css(".recent-news-section .news-item");
    public static newsletterField = By.css("[type='email']");
    public static successSubscribeMsg = By.css(".mc4wp-response");
    public static categoryMenu = By.id("menu-item-366");
    public static newsletterFieldButton = By.css("[value='SUBSCRIBE']");
    public static categoryPostsHeader = By.css("[id='main'] h1");
    public static linkedinButton = By.css(
        "li a[href*='in/vladimir-simonovski']",
    );
    public static categories = [
        By.id("menu-item-361"),
        By.id("menu-item-363"),
        By.id("menu-item-872"),
        By.id("menu-item-362"),
        By.id("menu-item-365"),
    ];
    public static archiveTitle = By.css(".widget_archive .widget-title");
    public static archiveMonths = By.css(".widget_archive ul li");
    public static testingTab = By.id("menu-item-1231");
    public static testingTopics = By.css("[id='menu-item-1231'] ul li");
}

export class GetInTouchPageLocators {
    public static getInTouchTab = By.id("menu-item-2326");
    public static firstName = By.id("wpforms-211-field_0");
    public static email = By.id("wpforms-211-field_1");
    public static lastName = By.id("wpforms-211-field_0-last");
    public static comment = By.id("wpforms-211-field_2");
    public static submit = By.id("wpforms-submit-211");
    public static confirmationMessage = By.id("wpforms-confirmation-211");
    public static fieldsFailValidationMessage = [
        By.id("wpforms-211-field_0-error"),
        By.id("wpforms-211-field_0-last-error"),
        By.id("wpforms-211-field_1-error"),
        By.id("wpforms-211-field_2-error"),
    ];
}
