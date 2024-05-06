import { Element } from "../core/element/element";
import { BasePage } from "./base-page";

export class LoginPage extends BasePage {
    constructor() {
        super();
        this.userNameTextBox = new Element("#userName");
        this.passwordTextBox = new Element("#password");
        this.loginButton = new Element("#login");
    }
    async login(userName, password) {
        await this.userNameTextBox.fillText(userName);
        await this.passwordTextBox.fillText(password);
        await this.loginButton.click();
    }
}
