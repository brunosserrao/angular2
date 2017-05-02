import { DtaBindingPage } from './app.po';

describe('dta-binding App', () => {
  let page: DtaBindingPage;

  beforeEach(() => {
    page = new DtaBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
