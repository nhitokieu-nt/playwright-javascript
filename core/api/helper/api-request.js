import { AuthType, HeaderKey } from "../constant/api-constants";

export class ApiRequestBuilder {
    constructor() {
        this._apiRequest = {};
        this._apiRequest.header = {};
    }

    build() {
        return this._apiRequest;
    }

    addContentTypeHeader(contentType) {
        this._apiRequest.header[HeaderKey.CONTENT_TYPE] = contentType;
        return this;
    }

    addAcceptTypeHeader(acceptType) {
        this._apiRequest.header[HeaderKey.ACCEPT] = acceptType;
        return this;
    }

    addAuthorizationHeader(authType, options) {
        switch (authType) {
            case AuthType.BEARER:
                this.addBearerTokenAuthorizationHeader(options.token);
                break;
            default:
                break;
        }
        return this;
    }

    addBearerTokenAuthorizationHeader(token) {
        this._apiRequest.header[HeaderKey.AUTHORIZATION] = `${AuthType.BEARER} ${token}`;
        return this;
    }

    addAdditionalHeaders(additionalHeaders) {
        additionalHeaders.forEach(([key, value]) => {
            this._apiRequest.header[key] = value;
        });
        return this;
    }

    addData(data) {
        this._apiRequest.data = data;
        return this;
    }
}
