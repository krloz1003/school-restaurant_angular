import { SchoolRestaurantPage } from './app.po';

describe('school-restaurant App', function() {
  let page: SchoolRestaurantPage;

  beforeEach(() => {
    page = new SchoolRestaurantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
