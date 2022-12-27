import HomePage from '../../pageobjects/home.page.js';
import AccessPasswordsPage from '../../pageobjects/login/accessPasswords.page.js';

describe('Test login on "Access my passwords" page', () => {

    beforeEach(async () => {
        await HomePage.open();
    });

    afterEach(async () => {
        /**
         * Starts new session after each test.
         * Problem 1: saved access token - navigates user to a unwanted page.
         * Problem 2: more tabs being opened - loosing window focus.
         * There are better ways to solve this. 1. Clear the storage to get rid of the access token. 2. Refactor "regainLostWindowFocus" method,
         * to close out unwanted tabs and to regain focus of the wanted window.
         */
        await browser.reloadSession();
        await browser.maximizeWindow();
    });

    it('should login up to reCaptcha validation', async () => {
        await AccessPasswordsPage.loginToAccessMyPasswords();
    });

    it('should not allow to submit an invalid email', async () => {
        const invalidEmail = 'invalidEmail!';
        // submit invalid email
        await AccessPasswordsPage.navigateAndSubmitEmail(invalidEmail);
        // expect to get input validation error message
        await expect(await AccessPasswordsPage.inputValidationError).toBeDisplayed();
    });
});
