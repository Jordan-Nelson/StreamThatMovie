import { StreamPage } from './app.po';

describe('stream App', () => {
  let page: StreamPage;

  beforeEach(() => {
    page = new StreamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to stream!!');
  });
});
