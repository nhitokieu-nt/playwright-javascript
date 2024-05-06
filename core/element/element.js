const { BrowserManagement } = require("../browser/browser_management");

export class Element {
    constructor(locator) {
        this.locator = locator;
        this.page = BrowserManagement.page;
    }

    async click() {
        await this.page.locator(this.locator).click();
    }

    async rightClick() {
        await this.page.locator(this.locator).click({ button: 'right'});
    }

    async middleClick() {
        await this.page.locator(this.locator).click({ button: 'middle'});
    }

    async enter(text) {
        await this.page.locator(this.locator).type(text);
    }

    async waitForElement(options) {
        await this.page.locator(this.locator).waitFor(options);
    }

    async waitForElementToBeVisible() {
        await this.waitForElement({ state: 'visible', 'timeout': 5000 });
    }

    async waitForElementToBeHidden() {
        await this.waitForElement({ state: 'hidden', 'timeout': 5000 });
    }

    async fillText(text) {
        await this.page.locator(this.locator).fill(text);
    }

    async hover(text) {
        await this.page.locator(this.locator).hover();
    }

    async pressKey(key) {
        await this.page.locator(this.locator).press(key);
    }

    async getAllTextContents() {
        const textContents = await this.page.locator(this.locator).allTextContents();
        return textContents;
    }

    async getLocator(selector, options, index=0) {
        return await this.page.locator(selector, options).nth(index);
    }

    async getInputValue() {
        const elementText = await this.page.locator(this.locator).inputValue();
        return elementText;
    }

    async isVisible() {
        return this.page.locator(this.locator).isVisible();
    }

    async getBrowserContext() {
        const elementText = await this.page.locator(this.locator).innerText();
        return elementText;
    }

    async setStorageState(storageStatePath) {
        const elementText = await this.page.context().storageState({ path: storageStatePath});
        return elementText;
    }
}
