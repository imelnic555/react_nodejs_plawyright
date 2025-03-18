import { setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';

class CustomWorld extends World {
    constructor(options) {
        super(options);
        this.browser = null;
        this.context = null;
        this.page = null;
    }

    async init() { // ✅ Define `init()` correctly
        if (!this.browser) {
            this.browser = await chromium.launch({ headless: true });
            this.context = await this.browser.newContext();
            this.page = await this.context.newPage();
        }
    }

    async close() {
        if (this.page) {
            await this.page.close();
            this.page = null;
        }
        if (this.context) {
            await this.context.close();
            this.context = null;
        }
        if (this.browser) {
            await this.browser.close();
            this.browser = null;
        }
    }
}

// ✅ Ensure `CustomWorld` is properly registered with Cucumber
setWorldConstructor(CustomWorld);

// ✅ Export `CustomWorld` as a named export
export { CustomWorld };
