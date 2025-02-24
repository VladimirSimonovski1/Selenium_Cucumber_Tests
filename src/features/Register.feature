Feature: Register

    Scenario: Register scenario
        Given the user is navigated to the register app
        When the user fills out the register form
            | FirstName   | LastName   | Address   | Email   | Phone   | Language   | Skill   | Country   | Year   | Month   | Day   | Password |
            | <firstName> | <lastName> | <address> | <email> | <phone> | <language> | <skill> | <country> | <year> | <month> | <day> | <pwd>    |
        Examples:
            | firstName | lastName | address    | email            | phone      | language | country | skill      | year | month | day | pwd       |
            | Johnny    | Mars     | Johnny 123 | Johnny@gmail.com | 1234567890 | English  | Denmark | C          | 1980 | 4     | 10  | 123456789 |
            | Sasha     | Paul     | Sasha 123  | Sasha@gmail.com  | 1234567890 | Italian  | Japan   | Javascript | 1983 | 2     | 5   | 123123123 |
