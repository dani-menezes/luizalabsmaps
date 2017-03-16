import { LuizalabsmapsPage } from './app.po';

describe('luizalabsmaps App', function() {
  let page: LuizalabsmapsPage;

  beforeEach(() => {
    page = new LuizalabsmapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
