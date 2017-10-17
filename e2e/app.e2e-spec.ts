import { AngularJS2TestingPage } from './app.po';

describe('angular-js2-testing App', function() {
  let page: AngularJS2TestingPage;

  beforeEach(() => {
    page = new AngularJS2TestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
