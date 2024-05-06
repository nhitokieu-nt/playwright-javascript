import { BookModel } from "./book";

export function LoginViewModel(obj) {
    this.userName = obj['userName'];
    this.password = obj['password'];
}

export function TokenViewModel(token, expires, status, result) {
    this.token = token;
    this.expires = expires
    this.status = status;
    this.result = result;
}

export function RegisterViewModel(userName, password) {
    this.userName = userName;
    this.password = password;
}

export function CreateUserResult(userId, userName, books) {
    this.userId = userId;
    this.userName = userName;
    this.books = books;
}

export function GetUserResult(userId, userName, books) {
    this.userId = userId;
    this.userName = userName;
    this.books = books;
}
