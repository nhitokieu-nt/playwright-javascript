import { Element } from "../core/element/element";
import { BasePage } from "./base-page";

export class BookStorePage extends BasePage {
    constructor() {
        super();
        this.searchBox = new Element("#searchBox");
        this.bookLinks = new Element("//*[starts-with(@id, 'see-book')]/a");
    }

    async goToProfilePage() {
        await this.goToProfilePage()
    }

    async searchBook(searchKey) {
        await this.searchBox.fillText(searchKey);
    }

    async getAllBookTitles() {
        return await this.bookLinks.getAllTextContents()
    }
}
