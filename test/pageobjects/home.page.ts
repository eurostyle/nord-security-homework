import BasePage from './base.page.js';

class HomePage extends BasePage {

    public get hoverableButtonLogin() {
        return $('.HeaderV2__login-wrap');
    }

    public open() {
        return super.openPath('home');
    }
}

export default new HomePage();
