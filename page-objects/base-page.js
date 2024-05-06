import { BrowserUtils } from '../core/browser/browser-utils';
import { Element } from '../core/element/element';

export class BasePage {
    constructor() {
        this.userNameLabel = new Element("#userName-value");
        this.profileMenu = new Element("//span[text()='Profile']");
    }

    async goToProfilePage() {
        await this.profileMenu.click();
    }

    async registerAlert(timeout=5000) {
        return BrowserUtils.registerAlert(timeout)
    }

    async handleAlert() {
        return await BrowserUtils.alertEvent;
    }

    async waitForUserNameDisplayed() {
        await this.userNameLabel.waitForElementToBeVisible();
    }
}
