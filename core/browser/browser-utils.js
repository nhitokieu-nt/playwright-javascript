import { BrowserManagement } from "./browser_management";

export class BrowserUtils {
    static alertEvent;
    static async registerAlert(timeout, event="accept") {
        BrowserUtils.alertEvent = BrowserManagement.page.waitForEvent('dialog', {timeout: timeout}).then(async d => {
            if (event == 'dismiss') {
                await d.dismiss();
            } else {
                await d.accept();
            }
            return d.message();
        })
    }

    static async handleAlert() {
        return await BrowserUtils.alertEvent;
    }
}
