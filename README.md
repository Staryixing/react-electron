This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# 项目名称

## 项目构建
1. create-react-app 脚手架搭建 
2. 引入dva 配置redux、 router 
3. 添加less 和CSS modules 
4. 引入antd UI样式  下载 babel-plugin-import
5. 扩展webpack 
    下载  react-app-rewired、customize-cra 
6. 引入ts 
    下载 typescript @types/react @types/react-dom ts-loader
7. http 
8. websocket  
9. 边界错误处理

1. 增加electron 并分开代码
2. 下载 electron -D
3. 下载 electron-builder 打包


## 项目启动
  ### react项目
  1. npm start
  2. npm run build
  ### electron 项目
  1. npm run electron 启动
  2. npm run pack 打包（mac）
  3. npm run pack-win 打包（window）
    #### electron 热更新（window）
    1. 在exe/package.json中填写服务器url地址
    2. 将打包后生成的latest.yml 和 exe文件上传到服务器地址中