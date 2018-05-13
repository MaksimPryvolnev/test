// local import of the exported AngularPage class
let {nonAngular} = require('./mainPage');

beforeEach (() => {
    browser.ignoreSynchronization = true;
})

afterEach (() => {
    browser.ignoreSynchronization = false;
})

describe('freeCodeCamp homepage', () => {
    it('should search for Java Script', async function() {
        let nonangular = new nonAngular();
        let EC = protractor.ExpectedConditions;
        let searchForJS = 'Java Script';
        let homePageTitle = 'freeCodeCamp';

        // Enter url to browser
        // await nonangular.get();
        // await browser.wait(EC.visibilityOf(nonangular.logo), 20000);
        
        await browser.get('https://medium.freecodecamp.org/');
        
        await nonangular.waitForText(nonangular.search, searchForJS, 60000);
        await nonangular.waitForElementToBeClickable(nonangular.searchButton, 60000);
        await nonangular.waitForElementToBeClickable(nonangular.search, 60000);
        
        /* Check that home page title equals
        * @param "freeCodeCamp"
        */
        await nonangular.checkTitle(homePageTitle);
        // Check search input field
        await nonangular.searchFor(searchForJS);

        await browser.sleep(10000);
        
        // Wait for searched response is loaded
        await browser.wait(
            EC.visibilityOf(nonangular.responseInputField), 60000, `Element not found ${nonangular.responseInputField}`).then(() => {
                () => {
                    async() => {
                        // Check that value is what we were searching for
                        expect(await nonangular.responseInputField.getText()).toEqual(searchForJS);
                    }
                }
        });
    });
});
