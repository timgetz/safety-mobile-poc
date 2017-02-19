import { SafetyMobilePocPage } from './app.po';

describe('safety-mobile-poc App', function() {
  let page: SafetyMobilePocPage;

  beforeEach(() => {
    page = new SafetyMobilePocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
