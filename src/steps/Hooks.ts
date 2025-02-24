import { After, ITestCaseHookParameter, setDefaultTimeout, setWorldConstructor } from "@cucumber/cucumber";
import { CustomWorld } from "../support/CustomWorld";
import { TestStepResultStatus } from "@cucumber/messages";

setWorldConstructor(CustomWorld);
setDefaultTimeout(120 * 1000);

After(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
    this.logs.forEach((log) => {
        this.attach(`Log: ${log}`);
    });
    if(scenario.result?.status === TestStepResultStatus.FAILED) {
        const screenshot = await this.driver.takeScreenshot();
        const imgTag = `<img src="data:image/png;base64,${screenshot}" width="100%" />`;
        this.attach(imgTag, 'text/html');
    }
    await this.driver.quit();
});
