import { FRONTEND_ENDPOINTS } from "../../constants/endpoint-constants";
import { FRONTEND_BASE_URL } from "../../constants/url-constants";
import { BrowserManagement } from "../../core/browser/browser_management";
import { expect, test } from "../../fixtures/page-fixture";


const searchKeys = ['Design', 'design']

test('Verify search book successfully @searchbook', async ({ bookStorePage }) => {
    await BrowserManagement.page.goto(`${FRONTEND_BASE_URL}${FRONTEND_ENDPOINTS.BOOKSTORE}`);

    for (const searchKey of searchKeys) {
        // Act
        await bookStorePage.searchBook(searchKey);
        const actualBookTitles = await bookStorePage.getAllBookTitles();

        // Assert
        for (const bookTitle of actualBookTitles) {
            expect(bookTitle.toLowerCase()).toContain(searchKey.toLowerCase());  //Verify that all displayed books match with input criteria
        }
    }
});
