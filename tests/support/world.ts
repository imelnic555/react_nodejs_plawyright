// tests/support/world.js
const { chromium } = require('playwright');

/**
 * @type {import('playwright').Browser | null}
 */
let browser = null;
/**
 * @type {import('playwright').BrowserContext | null}
 */
let context = null;
/**
 * @type {import('playwright').Page | null}
 */
let page = null;

const world = {
    browser,
    context,
    page,

    async init() {
        if (!this.browser) {
            console.log("Initializing browser...");
            this.browser = await chromium.launch({ headless: true });
            this.context = await this.browser.newContext();
        }
        if (!this.page) {
            console.log("Initializing new page...");
            // Since we know context is set by this point, we use it to create a new page.
            this.page = await this.context.newPage();
        }
        console.log("World: Browser and Page initialized");
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
                this.browser = null;
                console.log("World: Browser closed");
            }
        } catch (error) {
            console.error("Error in world.close():", error);
        }
    }
};

module.exports = { world };
