import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world.mjs'; // ✅ Correct import

Given('I am on the login page', async function (this: CustomWorld) {
    await this.init(); // ✅ Ensure browser is initialized

    if (!this.page) {
        throw new Error("❌ ERROR: Playwright `page` is null. Ensure the browser is initialized.");
    }

    await this.page.goto('http://localhost:5173/login'); // ✅ Navigate to login page
});

When('I enter {string} and {string}', async function (this: CustomWorld, email: string, password: string) {
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
});

Then('I should be redirected to the user list page', async function (this: CustomWorld) {
    await expect(this.page).toHaveURL(/users/); // ✅ Ensure redirection
});
When('I click login', async function (this: CustomWorld) {
    if (!this.page) {
        throw new Error("❌ ERROR: Playwright `page` is null. Ensure the browser is initialized.");
    }

    await this.page.locator('button:has-text("Login")').click();
});

Then('I should be logged in successfully', async function (this: CustomWorld) {
    if (!this.page) {
        throw new Error("❌ ERROR: Playwright `page` is null. Ensure the browser is initialized.");
    }

    await expect(this.page.locator('text=Here will be the list of users'))
        .toBeVisible({ timeout: 10000 });
});