const Page = require('./helpers/page')

let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto('localhost:3000');
})

afterEach(async () => {
  await page.close();
})

describe('When logged in', () => {
  beforeEach(async () => {
    await page.login();
    await page.click('a.btn-floating');
  })

  it('can see blog create form', async() => {
    const label = await page.getContentsOf('form label');
  
    expect(label).toEqual('Blog Title');
  })
})