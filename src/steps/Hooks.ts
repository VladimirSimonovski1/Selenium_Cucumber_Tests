import {
    After,
    setWorldConstructor,
} from "@cucumber/cucumber";
import { CustomWorld } from "../support/CustomWorld";

setWorldConstructor(CustomWorld);

After(async function () {
    await this.driver.quit();
});
