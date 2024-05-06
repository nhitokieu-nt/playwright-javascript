import { BrowserManagement } from "../../core/browser/browser_management";
import { expect, test } from "../../fixtures/page-fixture";
import { AccountHelper } from "../../helpers/api/account-helper";
import { BookHelper } from "../../helpers/api/book-helper";
import { LoginViewModel } from "../../models/api/account";
import { BookModel } from "../../models/api/book";
const loginData = require('../../test-data/account-data.json');
const bookList = require('../../test-data/book-data.json');


const userData = new LoginViewModel(loginData.ValidData.ValidAccount)
const bookName = 'Learning JavaScript Design Patterns'
const book = new BookModel(JSON.parse(JSON.stringify(bookList.ValidBooks.find(book => book.title === bookName))))

test.beforeEach(async () => {
    const loginResp = await AccountHelper.login(userData)
    const loginRespBody = await loginResp.json()

    await BookHelper.addListOfBooks(loginRespBody['token'], loginRespBody['userId'], [book.isbn])
})

test('Verify delete book successfully @deleteBook', async ({ loginPage, profilePage, bookStorePage }) => {
    // Act
    await BrowserManagement.page.goto('https://demoqa.com/login');
    await loginPage.login(userData.userName, userData.password);
    await bookStorePage.waitForUserNameDisplayed();
    await profilePage.deleteBookByName(bookName);

    // Assert
    await profilePage.searchBook(bookName);
    expect(await profilePage.isBookVisible(bookName)).toBeFalsy();  // Verify that the book IS NO LONGER SHOWN in colection
});
