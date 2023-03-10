import AccessPasswordsPage from '../pageobjects/login/accessPasswords.page.js';
import HomePage from '../pageobjects/home.page.js';

describe('Test login on "Access my passwords" page', () => {
    let homePage: HomePage;
    let passwordsPage: AccessPasswordsPage;

    before(async () => {
        homePage = new HomePage();
        passwordsPage = new AccessPasswordsPage();
    });

    beforeEach(async () => {
        await homePage.open();
    });

    afterEach(async () => {
        /**
         * Starts new session after each test. This solves couple of problems.
         * Problem 1: saved access token - navigates user to a unwanted page.
         * Problem 2: more tabs being opened - loosing window focus.
         * There are better ways to solve this. 1. Clear the storage to get rid of the access token. 2. Refactor "regainLostWindowFocus" method,
         * to close out unwanted tabs and to regain focus of the wanted window.
         */
        await browser.reloadSession();
        await browser.maximizeWindow();
    });

    it('should login up to reCaptcha validation', async () => {
        await passwordsPage.loginToAccessMyPasswords();
    });

    it('should not allow to submit an invalid email', async () => {
        const invalidEmail = 'invalidEmail!';
        // submit invalid email
        await passwordsPage.navigateAndSubmitEmail(invalidEmail);
        // expect to get input validation error message
        await expect(await passwordsPage.inputValidationError).toBeDisplayed();
    });
});
