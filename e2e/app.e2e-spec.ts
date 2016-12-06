import { Angular2FundementalsPage } from './app.po';

describe('angular2-fundementals App', function() {
  let page: Angular2FundementalsPage;

  beforeEach(() => {
    page = new Angular2FundementalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
