const base = require('@playwright/test');
import { BrowserManagement } from "../browser/browser_management";

export const test = base.test.extend({
    browserFixture: [async ({ browser, context, page }, use) => {
            BrowserManagement.initializeBrowser(browser, context, page);
            await use();
        }, { scope: 'test', auto: true, timeout: 60000}]
});

export const expect = base.expect;
