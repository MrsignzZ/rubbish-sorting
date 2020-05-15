- 项目为前后端分离项目，client为小程序部分，server为后端部分

- 技术栈：原生小程序、koa2、mongoose

## 项目启动

- client部分用小程序开发工具打开，注意切换appid，图像识别用的是第三方api，语音部分使用小程序插件 [同声传译](https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx069ba97219f66d99&token=&lang=zh_CN)

- server部分：
  1. 进入server目录下，
  2. config.js 中修改数据库地址
  3. npm install
  4. npm run dev
