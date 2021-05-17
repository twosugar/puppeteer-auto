# puppeteer 简介

#### Puppeteer 是谷歌官方出品的一个通过 DevTools 协议控制 headless Chrome 的 Node 库。可以通过 Puppeteer 的提供的 api 直接控制 Chrome 模拟大部分用户操作来进行 UI Test 或者作为爬虫访问页面来收集数据。

Puppeteer API是分层次的，反映了浏览器结构。 在下面的图表中，浅色框体目前不在 Puppeteer 中表现。

![Image text](https://raw.githubusercontent.com/twosugar/puppeteer-note/master/imgs/puppeteer-introduction.png)

- Puppeteer 使用 DevTools协议 与浏览器进行通信
- Browser 实例可以拥有浏览器上下文
- BrowserContext 实例定义了一个浏览会话并可拥有多个页面(Page)
- 页面(Page)至少有一个主框架(Main Frame)，可能还有其他框架由iframe或Frame tags创建
- frame 至少有一个执行上下文 - 默认的执行上下文 - 框架的 JavaScript 被执行。 一个框架可能有额外的与 扩展 关联的执行上下文。
- Worker 具有单一执行上下文，并且便于与 WebWorkers 进行交互。

### 参考
- [puppeteer中文文档](http://www.puppeteerjs.com/)