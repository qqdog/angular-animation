import { FerrisWheelPage } from './app.po';

describe('ferris-wheel App', () => {
  let page: FerrisWheelPage;

  beforeEach(() => {
    page = new FerrisWheelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
