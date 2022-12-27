/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all the page objects
 */
export default class BasePage {
    protected get htmlRoot() {
        return $('*');
    }

    /**
     * Opens a base page or optionally a sub-page of the page
     * @param subPath path of the sub-page
     */
    protected openPath(subPath: string = ''): Promise<string> {
        return browser.url(`https://nordpass.com/${subPath}`);
    }
}
