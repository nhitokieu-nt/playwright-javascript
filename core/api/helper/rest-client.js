import { ApiRequestBuilder } from './api-request';
import { HttpMethod } from '../constant/api-constants';

export class RestClient {
    constructor(requestContext) {
        this._requestContext = requestContext;
        this._apiReqBuilder = new ApiRequestBuilder();
    }

    requestBuilder() {
        return this._apiReqBuilder;
    }

    async sendRequest(method, url, options) {
        console.log(`Sending ${method} request to ${url}`);
        console.log(`JSON request: ${JSON.stringify(options.data)}`);

        switch(method) {
            case HttpMethod.GET:
                return await this._requestContext.get(url, options);
            case HttpMethod.POST:
                return await this._requestContext.post(url, options);
            case HttpMethod.PUT:
                return await this._requestContext.put(url, options);
            case HttpMethod.DELETE:
                return await this._requestContext.delete(url, options);
            default:
                throw new Error(`Unsupported request method: ${method}`);
        }
    }

    async get(url, options) {
        return this.sendRequest(HttpMethod.GET, url, options);
    }

    async post(url, options) {
        return this.sendRequest(HttpMethod.POST, url, options);
    }

    async put(url, options) {
        return this.sendRequest(HttpMethod.PUT, url, options);
    }

    async delete(url, options) {
        return this.sendRequest(HttpMethod.DELETE, url, options);
    }

    async disposeClient() {
        await (await this._requestContext).dispose();
    }
}

export async function createRestClient(apiRequestContext) {
    return new RestClient(apiRequestContext);
}
