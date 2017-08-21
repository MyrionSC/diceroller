import { DicerollerPage } from './app.po';

describe('diceroller App', function() {
  let page: DicerollerPage;

  beforeEach(() => {
    page = new DicerollerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
