import HomePage from '../pageobjects/home.page.js';

describe('Test (XSS) attack on nordpass.com', () => {
    let homePage: HomePage;

    before(async () => {
        homePage = new HomePage();
    });

    beforeEach(async () => {
        await homePage.open();
    });

    it('should get the user blocked when attempting an XSS attack', async () => {
        // create a form and submit
        await browser.execute(() => {
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = 'https://app.nordpass.com/form';
            form.innerHTML = `
        <input type="text" name="name" value=""><br>
        <input type="text" name="message" value="<script>alert!!!</script>"><br>
        <input type="submit" value="Submit">
      `;
            document.body.appendChild(form);
            form.submit();
        });

        // Expect the user to get a message that he's been blocked.
        await expect(homePage.messageBlocked).toBeDisplayed();
    });
});
