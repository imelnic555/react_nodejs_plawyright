// tests/support/hooks.js
const { Before, After, AfterAll } = require('@cucumber/cucumber');
const { world } = require('../support/world.ts'); // Adjust the extension if needed

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
    // Additional global cleanup can be added here if needed.
});
