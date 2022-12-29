import BasePage from './base.page.js';

export default class HomePage extends BasePage {

    public get hoverableButtonLogin() {
        return $('.HeaderV2__login-wrap');
    }

    public get messageBlocked() {
        return $('h1[data-translate="block_headline"]');
    }

    /**
     * Opens the home page, located at the "home" sub-path.
     * @returns A promise that resolves to the URL of the opened page.
     */
    public open() {
        return super.openPath('home');
    }
}
