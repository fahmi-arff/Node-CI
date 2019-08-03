const puppeteer = require('puppeteer')

let browser, page;

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  page = await browser.newPage();
  await page.goto('localhost:3000');
})

afterEach(async () => {
  await browser.close();
})

test('The header has the correct text', async() => {
  const text = await page.$eval('a.brand-logo', el => el.innerHTML);

  expect(text).toEqual('Blogster');
})

test('clicking login starts oauth flow', async() => {
  await page.click('.right a');

  const url = await page.url();
  
  // back slash(\) before dot(.) mean we dont use actual . in regex
  expect(url).toMatch(/accounts\.google\.com/);
})