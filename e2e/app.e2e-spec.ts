import { AllinonePage } from './app.po';

describe('allinone App', () => {
  let page: AllinonePage;

  beforeEach(() => {
    page = new AllinonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
