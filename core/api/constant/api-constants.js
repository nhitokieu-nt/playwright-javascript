export const AuthType = {
    BASIC: 'Basic',
    BEARER: 'Bearer'
};

export const HeaderKey = {
    ACCEPT: 'Accept',
    AUTHORIZATION: 'Authorization',
    CACHE_CONTROL: 'cache-control',
    COOKIE: 'cookie',
    CONTENT_TYPE: 'Content-Type',
    HOST: 'Host',
    TIME_STAMP: 'Timestamp',
    USER_AGENT: 'User-Agent',
    PREFER: 'Prefer',
    ORIGIN: 'Origin'
};

export const HeaderValue = {
    APPLICATION_JSON: 'application/json',
    APPLICATION_JSON_UTF8: 'application/json;charset=UTF-8',
    APPLICATION_JSON_UTF8_FORM: 'application/x-www-form-urlencoded;charset=UTF-8',
    NO_CACHE: 'no-cache',
};

export const HttpMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
};

export const ResponseStatus = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    FOUND: 302,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    TO_MANY_REQUEST: 429,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
};
