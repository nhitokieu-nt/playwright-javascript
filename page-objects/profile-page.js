import { Element } from "../core/element/element";
import { BasePage } from "./base-page";

export class ProfilePage extends BasePage {
    constructor() {
        super();
        this.bookInCollection = (book) => new Element(`//a[text()='${book.trim()}']`);
        this.bookDeleteButton = (bookName) => new Element(`//span[.='${bookName}']/ancestor::div[@role='row']//span[@title='Delete']`);
        this.OkButton = new Element("//button[.='OK']");
        this.searchBox = new Element("#searchBox");
    }

    async deleteBookByName(bookName) {
        await this.bookDeleteButton(bookName).click();
        await this.registerAlert();
        await this.OkButton.click();
        await this.handleAlert();
    }

    async searchBook(searchKey) {
        await this.searchBox.fillText(searchKey);
    }

    async isBookVisible(bookName) {
        return this.bookInCollection(bookName).isVisible();
    }
}
