import dva from 'dva';
import router from './router.js';
import './index.css';
import registerModels from '../src/model/index';
import * as serviceWorker from './serviceWorker';

// 1.定义app
const app = dva({
  initialState: {},
  onError(e){
    console.log('dva_onError', e);
  }
})

// 2. 注册数据模型
registerModels(app)

// 3. 注册路由
app.router(router)

// 4. 挂载在root上
app.start('#root')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
