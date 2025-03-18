import { Before, After, AfterAll } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world.mjs'; // ✅ Correct import

Before(async function (this: CustomWorld) {
    await this.init(); // ✅ Use `init()` instead of `openBrowser()`
});

After(async function (this: CustomWorld) {
    await this.close(); // ✅ Ensure browser closes properly
});

AfterAll(async function () {
    console.log("✅ All tests finished!");
});
