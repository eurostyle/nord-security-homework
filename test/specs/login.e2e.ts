import loginPage from '../pageobjects/login.page.js';

describe('Test login on "Access my passwords" page', () => {

    before(async () => {
        await loginPage.open();
    });

    it('should login up to reCaptcha validation', async () => {
        await loginPage.loginToAccessMyPasswords();
    });
});
