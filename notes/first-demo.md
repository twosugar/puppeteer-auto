# 一个简单的 demo

利用 puppeteer 打开浏览器百度搜索相应内容

```
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        slowMo: 10,    //放慢速度
        headless: false,
        defaultViewport: { width: 1440, height: 780 },
        ignoreHTTPSErrors: false, //忽略 https 报错
        args: ['--start-fullscreen'] //全屏打开页面
    });
    const pages = await browser.pages()
    let page
    if (pages.length === 1) {
        page = pages[0]
    } else {
        page = await browser.newPage();
    }
    await page.goto('https://www.baidu.com');
    const inputElement = await page.$('#kw'); //获取百度输入框dom
    await inputElement.type('puppeteer.js中文文档', { delay: 20 }); //输入框填值，delay模拟用户输入时间 
    const buttonElement = await page.$('.bg.s_btn') //“百度一下按钮”
    await buttonElement.click() //点击按钮
    //等待第一个元素出现
    await page.waitForSelector('.result.c-container.new-pmd a')
    const resElement = await page.$('.result.c-container.new-pmd a')
    await resElement.click() ////点击跳转
})();
```
