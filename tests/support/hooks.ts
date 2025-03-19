// tests/support/hooks.ts
import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import type { CustomWorld } from './world.mjs';

Before(async function (this: CustomWorld) {
    // Note: Do NOT use an arrow function here.
    this.browser = await chromium.launch({ headless: true });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    console.log('Browser launched and page created.');
});

After(async function (this: CustomWorld) {
    if (this.page) {
        await this.page.close();
        console.log('Page closed.');
    }
    if (this.context) {
        await this.context.close();
        console.log('Context closed.');
    }
    if (this.browser) {
        await this.browser.close();
        console.log('Browser closed.');
    }
});
