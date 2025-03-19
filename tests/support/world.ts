import { chromium } from 'playwright';  // ✅ Correct way to import Playwright browser instances
import type { Browser, BrowserContext, Page } from 'playwright';  // ✅ Import types separately

export const world = {
    browser: null as Browser | null,
    context: null as BrowserContext | null,
    page: null as Page | null,

    async init(): Promise<void> {
        if (!this.browser) {
            console.log("Initializing browser...");
            this.browser = await chromium.launch({ headless: true });  // ✅ Corrected
            this.context = await this.browser.newContext();
        }
        if (!this.page) {
            console.log("Initializing new page...");
            this.page = await this.context!.newPage();
        }
        console.log("World: Browser and Page initialized");
    },

    async close(): Promise<void> {
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
