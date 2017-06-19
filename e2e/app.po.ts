import { browser, by, element } from 'protractor';

export class StreamPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('stream-root h1')).getText();
  }
}
