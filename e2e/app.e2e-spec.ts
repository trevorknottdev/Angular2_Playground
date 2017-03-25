import { TkFEa2Page } from './app.po';

describe('tk-fea2 App', () => {
  let page: TkFEa2Page;

  beforeEach(() => {
    page = new TkFEa2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
