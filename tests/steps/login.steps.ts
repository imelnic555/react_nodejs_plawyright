const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { world } = require('../support/world.ts'); // Remove the .ts extension

Given('I am on the login page', async function () {
    await world.init();
    await world.page.goto('http://localhost:5173/login', { timeout: 30000 });
});

When('I enter {string} and {string}', async function (email, password) {
    await world.page.fill('input[placeholder="Email"]', email);
    await world.page.fill('input[placeholder="Password"]', password);
});

When('I click login', async function () {
    // await world.page.click('Login');
    await world.page.locator('button:has-text("Login")').click();
});

Then('I should be logged in successfully', async function () {
    // await expect(world.page.locator('text=Here will be the list of users')).toBeVisible({ timeout: 10000 });
});
