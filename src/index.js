const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,   //有浏览器界面启动
        slowMo: 100,       //放慢浏览器执行速度，方便测试观察
        args: [            //启动 Chrome 的参数
            '–no-sandbox',
            '--window-size=1280,960'
        ],
    });
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com');
    const inputElement = await page.$("input[class='s_ipt']")
    await inputElement.type('mzt')
    const btnElement = await page.$("input[class='bg s_btn']")
    await btnElement.click()
    // await page.close();
    // await browser.close();
})();