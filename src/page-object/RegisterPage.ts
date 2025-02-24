import { By, Locator } from "selenium-webdriver";
import { BasePage } from "./BasePage";
import { CustomWorld } from "../../src/support/CustomWorld";
import { WaitAndFind } from "../../src/support/WaitAndFind";

export class RegisterPage extends BasePage {
    private readonly title: Locator;
    private readonly consent: Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly address: Locator;
    private readonly email: Locator;
    private readonly phone: Locator;
    private readonly gender: Locator;
    private readonly hobbies: Locator;
    private readonly languages: Locator;
    private readonly languagesList: Locator;
    private readonly languagesOptions: Locator;
    private readonly skills: Locator;
    private readonly option: Locator;
    private readonly country: Locator;
    private readonly countryField: Locator;
    private readonly countryOption: Locator;
    private readonly date: Locator;
    private readonly month: Locator;
    private readonly day: Locator;
    private readonly pwd: Locator;
    private readonly pwdConfirm: Locator;

    constructor() {
        super("https://demo.automationtesting.in/Register.html");
        this.title = By.css("h2");
        this.consent = By.css("[aria-label='Consent'] .fc-button-label");
        this.firstName = By.css("[placeholder='First Name']");
        this.lastName = By.css("[placeholder='Last Name']");
        this.address = By.css(".form-group textarea");
        this.email = By.css("[type='email']");
        this.phone = By.css("[type='tel']");
        this.gender = By.css("[type='radio'][value='Male']");
        this.hobbies = By.id("checkbox2");
        this.languages = By.css("multi-select");
        this.languagesList = By.css(".ui-autocomplete");
        this.languagesOptions = By.css("li");
        this.skills = By.id("Skills");
        this.option = By.css("option");
        this.country = By.css("span[role='combobox']");
        this.countryField = By.css(".select2-results");
        this.countryOption = By.css("li");
        this.date = By.id("yearbox");
        this.month = By.css("[placeholder='Month']");
        this.day = By.id("daybox");
        this.pwd = By.id("firstpassword");
        this.pwdConfirm = By.id("secondpassword");
    }

    public async navigateTo(world: CustomWorld): Promise<void> {
        console.log("Navigating to Automation Testing demo website...");
        await world.driver.navigate().to(this.baseURL);
        await world.driver.manage().window().maximize();
    }

    public async agreeToConsent(world: CustomWorld): Promise<boolean> {
        console.log("Agreeing to consent...");
        await this.click(world, this.consent);
        const title = await this.isDisplayed(world, this.title);
        return title;
    }

    public async fillRegisterFrom(world: CustomWorld): Promise<void> {
        console.log("Populating the registration...");
        await this.fill(world, this.firstName, "Vladimir");
        await this.fill(world, this.lastName, "Simo");
        await this.fill(world, this.address, "Test 124");
        await this.fill(world, this.email, "test567@gmail.com");
        await this.fill(world, this.phone, "12987665743");
        await this.click(world, this.gender);
        await this.click(world, this.hobbies);
        await this.click(world, this.languages);
        await this.selectOptionByText(
            world,
            this.languagesList,
            this.languagesOptions,
            "language",
            "Danish",
        );
        await this.selectOptionByText(
            world,
            this.skills,
            this.option,
            "skill",
            "Java",
        );
        await this.click(world, this.country);
        await this.selectOptionByText(
            world,
            this.countryField,
            this.countryOption,
            "country",
            "Denmark",
        );
        await this.selectOptionByText(
            world,
            this.date,
            this.option,
            "year",
            "1992",
        );
        await this.selectOptionByText(
            world,
            this.month,
            this.option,
            "month",
            "February",
        );
        await this.selectOptionByText(
            world,
            this.day,
            this.option,
            "day",
            "25",
        );
        await this.fill(world, this.pwd, "12345679");
        await this.fill(world, this.pwdConfirm, "12345679");
        console.log("Registration successfully populated!");
    }

    private async selectOptionByText(
        world: CustomWorld,
        parent: Locator,
        child: Locator,
        type: string,
        expectedText: string,
    ): Promise<void> {
        console.log(`Selecting the ${type}...`);
        const parentDropdown = await WaitAndFind.findElement(world, parent);
        const options = await parentDropdown.findElements(child);
        for (const option of options) {
            let text = (await option.getText()).trim();
            console.log(`Current ${type} is: ${text}`);
            if (text === expectedText) {
                await option.click();
                break;
            }
        }
        console.log(`${type} successfully added!`);
    }
}
