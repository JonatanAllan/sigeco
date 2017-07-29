import { SigecoPage } from './app.po';

describe('sigeco App', () => {
  let page: SigecoPage;

  beforeEach(() => {
    page = new SigecoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
