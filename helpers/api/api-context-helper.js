import { request } from "@playwright/test"
import { API_BASE_URL } from "../../constants/url-constants"

export function getCommonApiContext() {
    return request.newContext({
        baseURL: API_BASE_URL
    })
}