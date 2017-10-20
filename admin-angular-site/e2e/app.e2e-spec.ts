import { AdminAngularSitePage } from './app.po';

describe('admin-angular-site App', function() {
  let page: AdminAngularSitePage;

  beforeEach(() => {
    page = new AdminAngularSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
