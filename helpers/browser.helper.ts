class BrowserHelper {

    async regainLostWindowFocus(): Promise<void> {
        let handles: string[];
        // Wait until the next window handle exists
        await browser.waitUntil(async () => {
            handles = await browser.getWindowHandles();
            return handles.length > 1;
        },
        {
            timeout: 5000,
            timeoutMsg: 'Timed out waiting for next browser tab to exist',
        });
        // toggling tabs, to regain focus
        for (const handle of handles) {
            await browser.switchToWindow(handle);
        }

    }

}

export default new BrowserHelper();
