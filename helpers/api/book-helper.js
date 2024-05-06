import { expect } from "@playwright/test";
import { API_ENDPOINTS } from "../../constants/endpoint-constants";
import { HeaderKey, HeaderValue, AuthType } from "../../core/api/constant/api-constants";
import { createRestClient } from "../../core/api/helper/rest-client";
import { AccountHelper } from "./account-helper";
import { getCommonApiContext } from "./api-context-helper";
import { AddListOfBooksModel } from "../../models/api/book";


export const BookHelper = {
    async addListOfBooks(bearerToken, userId, listOfIsbns) {
        const restClient = await createRestClient(await getCommonApiContext());

        const addListOfBooks = new AddListOfBooksModel(userId, listOfIsbns);
    
        const addBookToCollectionReq = restClient.requestBuilder()
            .addContentTypeHeader(HeaderValue.APPLICATION_JSON)
            .addAcceptTypeHeader(HeaderValue.APPLICATION_JSON)
            .addBearerTokenAuthorizationHeader(bearerToken)
            .addData(JSON.stringify(addListOfBooks))
            .build();
    
        return await restClient.post(API_ENDPOINTS.BOOKS, {
            data: addBookToCollectionReq.data,
            headers: addBookToCollectionReq.header
        });
    },
    
    async deleteBook(bearerToken, isbn, userID) {
        const restClient = await createRestClient(await getCommonApiContext());
    
        const deleteBookRequest = restClient.requestBuilder()
            .addBearerTokenAuthorizationHeader(bearerToken)
            .build();
    
        console.log(`Deleting book with ISBN ${isbn} from user ${userID} collection`);
    
        const deleteBookInCollection = await restClient.delete(API_ENDPOINTS.BOOK_DETAILS(isbn), {
            headers: deleteBookRequest.header
        });
    
        expect(deleteBookInCollection.ok()).toBeTruthy();
    
        return true;
    },
    
    async deleteAllBooks(bearerToken, userId) {
        const getUserInfoResponse = await AccountHelper.getUserDetails(bearerToken, userId);
        const userInfo = await getUserInfoResponse.json();
        for (const book of userInfo.books) {
            await BookHelper.deleteBook(bearerToken, book.isbn, userId);
        }
    }
}
