import React from 'react';
import style from './homePage.less';
import Page from './pages/page';
import { Button } from 'antd';

class HomePage extends React.Component{
  render(){
    return <div className={style.root}>
      东航滨江中心
      <Button type="primary">启动</Button>
      <Page />
      <ul>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  }
}

export default HomePage
