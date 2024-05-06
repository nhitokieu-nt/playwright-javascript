export const FRONTEND_ENDPOINTS = {
    LOGIN:       '/login',
    PROFILE:     '/profile',
    BOOKSTORE:   '/books',
    BOOK_DETAILS:  '/books?book=',
};

// TOOLSQA BOOKSTORE API
export const API_ENDPOINTS = {
    AUTHORIZED:      '/Account/v1/Authorized',
    GENERATE_TOKEN:  '/Account/v1/GenerateToken',
    LOGIN:           '/Account/v1/Login',
    USER:            '/Account/v1/User',
    USER_DETAILS:    userId => `/Account/v1/User/${userId}`,
    BOOKS:           '/BookStore/v1/Books',
    BOOK_DETAILS:    isbn => `/BookStore/v1/Books/${isbn}`
};
