/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all the page objects
 */
export default class BasePage {
    protected get htmlRoot() {
        return $('*');
    }

    /**
     * Opens the base page or a sub-page of the page.
     * @param subPath The path of the sub-page to open. If not provided, the base page will be opened.
     * @returns A promise that resolves to the URL of the opened page.
     */
    protected openPath(subPath: string = ''): Promise<string> {
        return browser.url(`https://nordpass.com/${subPath}`);
    }
}
