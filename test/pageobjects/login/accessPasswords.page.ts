import { config } from 'dotenv';
import * as process from 'process';
import BasePage from '../base.page.js';
import BrowserHelper from '../../../helpers/browser.helper.js';
import HomePage from '../home.page.js';

class AccessPasswordsPage extends BasePage {
    private readonly email: string;

    private readonly password: string;

    public constructor() {
        super();
        config();
        this.email = process.env.EMAIL;
        this.password = process.env.PASSWORD;
    }

    public get routeAccessMyPasswords() {
        return $('//div[contains(@class, "HeaderV2__login-wrap")]//span[text() = "Access my passwords"]');
    }

    public get buttonLogin() {
        return $('//button/div[text()="Log In"]');
    }

    public get inputEmail() {
        return $('input#email');
    }

    public get buttonContinue() {
        return $('//button//div[text() = "Continue"]');
    }

    public get inputPassword() {
        return $('input[name="password"]');
    }

    public get buttonPasswordSubmit() {
        return $('button[type="submit"]');
    }

    public get inputValidationError() {
        return $('[data-testid="error-block"]');
    }

    public async loginToAccessMyPasswords(email: string = this.email, password: string = this.password) {
        // submit email
        await this.navigateAndSubmitEmail(email);
        // dynamically wait until browser url contains login/password
        await browser.waitUntil(async () => {
            const currentUrl = await browser.getUrl();
            return currentUrl.includes('login/password');
        }, {
            timeout: 30000,
            timeoutMsg: 'Timed out waiting for the browser url to contain "login/password"',
        });
        // input your password
        await this.inputPassword.setValue(password);
        // expect password value is correct
        await expect(await this.inputPassword.getValue()).toEqual(this.password);
        // click on button "Log In"
        await this.buttonPasswordSubmit.click();
        // expect get security validation
        await expect(await this.htmlRoot.getText()).toContain('Please complete the security check to proceed');
    }

    public async navigateAndSubmitEmail(email: string): Promise<void> {
        // hover over login button to get a drop-down menu
        await HomePage.hoverableButtonLogin.moveTo();
        // click on "Access my passwords" list item
        await this.routeAccessMyPasswords.click();
        // dynamically wait for the new browser tab to open and then regain browser focus within that tab
        await BrowserHelper.regainLostWindowFocus();
        // expect browser url contains "login"
        await expect(await browser.getUrl()).toContain('login');
        // click on button "Login"
        await this.buttonLogin.click();
        // input your email
        await this.inputEmail.setValue(email);
        // expect email value is correct
        await expect(await this.inputEmail.getValue()).toEqual(email);
        // click on button "Continue"
        await this.buttonContinue.click();
    }

}

export default new AccessPasswordsPage();
