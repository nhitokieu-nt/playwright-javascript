import { expect } from '@playwright/test';
import { getCommonApiContext } from './api-context-helper';
import { createRestClient } from '../../core/api/helper/rest-client';
import { API_ENDPOINTS } from '../../constants/endpoint-constants';
import { HeaderKey, HeaderValue, AuthType } from '../../core/api/constant/api-constants';
import { validateHeaderValue } from 'http';


export const AccountHelper = {
    async login(userData) {
        const restClient = await createRestClient(await getCommonApiContext());
    
        const loginReq = restClient.requestBuilder()
            .addContentTypeHeader(HeaderValue.APPLICATION_JSON)
            .addAcceptTypeHeader(HeaderValue.APPLICATION_JSON)
            .addData(userData)
            .build();
    
        return await restClient.post(API_ENDPOINTS.LOGIN, {
            data: loginReq.data,
            headers: loginReq.header
        });
    },

    async addNewUser(userData) {
        const restClient = await createRestClient(await getCommonApiContext());
    
        const addNewUserReq = restClient.requestBuilder()
            .addContentTypeHeader(HeaderValue.APPLICATION_JSON)
            .addAcceptTypeHeader(HeaderValue.APPLICATION_JSON)
            .addData(JSON.stringify(userData))
            .build();
    
        const createUserResponse = await restClient.post(API_ENDPOINTS.USER, {
            data: addNewUserReq.data,
            headers: addNewUserReq.header
        });
    
        console.log(createUserResponse.status());
        console.log(await createUserResponse.json());
        expect(createUserResponse.ok()).toBeTruthy();
    
        const createdUserInfo = await createUserResponse.json();
        return createdUserInfo;
    },
    
    async generateToken(userData) {
        const restClient = await createRestClient(await getCommonApiContext());
    
        const generateTokenRequest = restClient.requestBuilder()
            .addContentTypeHeader(HeaderValue.APPLICATION_JSON)
            .addAcceptTypeHeader(HeaderValue.APPLICATION_JSON)
            .addData(JSON.stringify(userData))
            .build();
    
        return await restClient.post(API_ENDPOINTS.GENERATE_TOKEN, {
            data: generateTokenRequest.data,
            headers: generateTokenRequest.header
        });
    },
    
    async getUserDetails(bearerToken, userId) {
        const restClient = await createRestClient(await getCommonApiContext());
    
        const getUserInfoRequest = restClient.requestBuilder()
            .addBearerTokenAuthorizationHeader(bearerToken)
            .build();
    
        return await restClient.get(API_ENDPOINTS.USER_DETAILS_ENDPOINT(userId), {
            headers: getUserInfoRequest.header,
        });
    },
    
    async deleteUser(bearerToken, userId) {
        const restClient = await createRestClient(await getCommonApiContext());
    
        const deleteUserRequest = restClient.requestBuilder()
            .addAcceptTypeHeader(HeaderValue.APPLICATION_JSON)
            .addContentTypeHeader(HeaderValue.APPLICATION_JSON)
            .addBearerTokenAuthorizationHeader(bearerToken)
            .build();
    
        console.log(`Deleting user ${userId}`);
    
        const deleteUserRequestResult = await restClient.delete(API_ENDPOINTS.USER_DETAILS_ENDPOINT(userId), {
            headers: deleteUserRequest.header
        });
    
        return deleteUserRequestResult.ok();
    }    
}
