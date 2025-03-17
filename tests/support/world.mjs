// tests/support/world.mjs
import { chromium } from '@playwright/test';

export const world = {
    browser: null,
    context: null,
    page: null,
    async init() {
        if (this.browser) {
            console.warn("Browser already initialized, reusing it.");
            return;
        }
        this.browser = await chromium.launch({ headless: false });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        console.log("World: Browser initialized");
    },
    async close() {
        try {
            if (this.page) {
                await this.page.close();
                this.page = null;
                console.log("World: Page closed");
            }
            if (this.context) {
                await this.context.close();
                this.context = null;
                console.log("World: Context closed");
            }
            if (this.browser) {
                await this.browser.close();
                console.log("World: Browser closed");
                this.browser = null;
            }
        } catch (error) {
            console.error("Error in world.close():", error);
        }
    }
};
