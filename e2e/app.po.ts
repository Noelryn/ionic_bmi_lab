import { browser, by, element } from 'protractor';

    export class Page {

    navigateTo(destination) {
        return browser.get(destination);
    }

    getTitle() {
        return browser.getTitle();
    }

    getPageOneTitleText() {
        return element(by.tagName('ion-title')).getText();
    }

    
    getWeightInput() {
        return element(by.id('lbl-0')).getText();
    }

    getHeightInput() {
        return element(by.id('lbl-1')).getText();
    }    

    getButtonInput() {
        return element(by.tagName('Calculate')).click();
    }

}