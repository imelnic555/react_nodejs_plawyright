import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',  // Playwright should run tests from `tests/`
    timeout: 30000,  // 30 seconds timeout
    use: {
        headless: false,  // Set to false for debugging
        baseURL: 'http://localhost:5173/',  // Ensure this is your frontend URL
        trace: 'on',  // Enables tracing for debugging
        video: 'retain-on-failure',  // Capture video on failure
    },
    reporter: [['list'], ['json', { outputFile: 'test-results.json' }]],
    projects: [
        {
            name: 'cucumber',
            testMatch: '**/features/*.feature',  // Ensures Playwright recognizes `.feature` files
        },
    ],
});
