import { Ng4TestingPage } from './app.po';

describe('ng4-testing App', () => {

  let page: Ng4TestingPage;

  beforeEach(() => {
    page = new Ng4TestingPage();
  });

  it('should display message saying "hello, buddy!"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hello, buddy!');
  });
});
