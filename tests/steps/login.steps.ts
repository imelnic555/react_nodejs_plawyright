import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { world } from '../support/world.mjs';  // Ensure correct import path

Given('I am on the login page', async function () {
    await world.init();
    await world.page.goto('http://localhost:5173/');
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
    await expect(world.page.locator('text=Here will be the list of users')).toBeVisible({ timeout: 10000 });
});