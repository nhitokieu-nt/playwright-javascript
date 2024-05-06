import { test as baseTest, expect as baseExpect } from '../core/fixture/base-fixture';
import { BookStorePage } from '../page-objects/book-store-page';
import { LoginPage } from '../page-objects/login-page';
import { ProfilePage } from '../page-objects/profile-page';

export const test = baseTest.extend({
    loginPage: async({}, use) => {
        await use(new LoginPage());
    },
    profilePage: async({}, use) => {
        await use(new ProfilePage());
    },
    bookStorePage: async({}, use) => {
        await use(new BookStorePage());
    }
})

export const expect = baseExpect;
