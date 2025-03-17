// tests/support/hooks.ts
import { Before, After, AfterAll } from '@cucumber/cucumber';
import { world } from './world.mjs'; // or './world.js' if you're using that extension

Before(async function () {
    console.log("Before hook: initializing resources");
    await world.init();
});

After(async function () {
    console.log("After hook: closing scenario resources");
    await world.close();
});

AfterAll(async function () {
    console.log("AfterAll hook: ensuring all global resources are closed");
    // This hook runs once after all scenarios
    await world.close();
    // You can also perform any additional cleanup here if needed.
});
