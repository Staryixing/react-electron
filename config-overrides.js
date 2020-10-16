const { override, fixBabelImports, addLessLoader } = require('customize-cra')
const Webpack = require('webpack');
const path = require('path');
/**
 * 1、配置less，css-module
 * 2、配置antd按需加载，修改主题样式
 * 3、配置path路径
 * 
 */
let configAlias = function(config){
  console.log('config', config);
  config.resolve.alias = Object.assign(config.resolve.alias, {
    "@": path.resolve(__dirname, 'src')
  })
  return config;
}
// 配置css-module
let configLessLoader = function(config){
    let loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
    loaders.unshift(
        {
            // 编译less 使用了css modules
            test: /\.less$/,
            exclude: [/node_modules/], // 排除antd里面的样式
            use: [
                {loader: 'style-loader'},
                {
                    loader:'css-loader',
                    options:{
                        modules:{
                            mode: "local",
                            localIdentName: '[name]__[local]__[hash:base64:5]',
                        }
                    }
                },
                {loader: 'less-loader'}
            ]
        },
    )
    return config;
}

module.exports = override(
  // 按需加载组件
  fixBabelImports('import',{
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
  }),
  // 修改主题样式
  addLessLoader({
      javascriptEnabled: true,
      modifyVars: {'@primary-color': '#ff0000'}
  }),
  configLessLoader,
  configAlias
)
