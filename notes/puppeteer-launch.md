# puppeteer.launch(options)

这个方法最终通过options配置创建了一个 Browser 类的实例。

options配置说明如下：

| 参数名称 | 说明 | 默认值 | 类型 |
| ------- | ------- | ------- | ------- |
|ignoreHTTPSErrors|是否在导航期间忽略 HTTPS 错误|false|boolean|
|headless|是否以“无头模式”运行浏览器（下载PDF等操作需要启用该模式）|默认true, devtools为true时，headless值为false|boolean|
|executablePath|可运行 Chromium 或 Chrome 可执行文件的路径，而不是绑定的 Chromium。如果 executablePath 是一个相对路径，那么他相对于 当前工作路径 解析||string|
|slowMo|将 Puppeteer 操作减少指定的毫秒数。这样你就可以看清发生了什么||number|
|defaultViewport|为每个页面设置一个默认视口大小。默认是 800x600。如果为 null 的话就禁用视图口。| {width: 页面宽度像素, height: 页面高度像素,deviceScaleFactor: 设置设备的缩放（可以认为是 dpr）。默认是 1,isMobile: 是否在页面中设置了 meta viewport 标签。默认是 false, hasTouch: 指定viewport是否支持触摸事件。默认是 false, isLandscape:  指定视口是否处于横向模式。默认是 false} |object|
|args|传递给浏览器实例的其他参数 ||Array|
|ignoreDefaultArgs| 如果是 true，那就不要使用 puppeteer.defaultArgs()。 如果给出了数组，则过滤掉给定的默认参数。这个选项请谨慎使用。 |false|boolean/Array|
|handleSIGINT|Ctrl-C 关闭浏览器进程|true|boolean|
|handleSIGTERM|关闭 SIGTERM 上的浏览器进程|true|boolean|
|handleSIGHUP|关闭 SIGTERM 上的浏览器进程|true|boolean|