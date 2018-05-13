let {browser, element, by} = require('protractor');

class nonAngular {
    constructor() {
        this.EC = protractor.ExpectedConditions;
        this.searchButton = element(by.xpath('//label/span'));
        this.search = element(by.xpath('//label/input'));
        this.logo = element(by.xpath('(//div/a)[1]'));
        this.responseInputField = element(by.xpath('//form/input'));
    }
    
    get() {
        browser.get('https://medium.freecodecamp.org/');
    }
        
    checkTitle (title) {
        expect(browser.getTitle()).toEqual(title);
    }

    waitElementsOnPage(locator, time) {
        browser.wait(this.EC.visibilityOf(locator), time);
    }

    waitForElementToBeClickable(locator, time) {
        let isClickable = this.EC.elementToBeClickable(locator);
        browser.wait(isClickable, time);
    }

    waitForText(locator, textToEqual, time) {
        let condition = this.EC.textToBePresentInElement(locator, textToEqual);
        browser.wait(condition, time); //wait for condition to be true.
    }

    searchFor(name) {
        this.searchButton.click();
        this.search.sendKeys(name);
        this.search.sendKeys(protractor.Key.ENTER);
    }

}


module.exports = {
    nonAngular: nonAngular
}