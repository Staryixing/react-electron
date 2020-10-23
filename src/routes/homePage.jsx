import React from 'react';
import style from './homePage.less';
import Page from './pages/page';
import { Button } from 'antd';
let GIpcRenderer
if(window.require){
  console.log('window');
   let { ipcRenderer } = window.require('electron');
   GIpcRenderer = ipcRenderer
}else if(global.require){
  console.log('global');
   let { ipcRenderer } = global.require('electron');
   GIpcRenderer = ipcRenderer
}
let ipcRenderer = GIpcRenderer

class HomePage extends React.Component{
  constructor(props){
    super(props)

  }
  componentDidMount(){
      if(ipcRenderer){
        ipcRenderer.on("downloadProgress", (event, progressObj) => {
          console.log("progressObj",progressObj);
          this.downloadPercent = progressObj.percent || 0;
        })
        ipcRenderer.on("isUpdateNow",()=> {
          ipcRenderer.send("isUpdateNow")
        })
        ipcRenderer.on('message',(event,text)=> {
          console.log('arguments', text);
          this.tips = text;
        })
      }
  }
  handleUpdater(){  
    console.log('检测更新');
    if(ipcRenderer){
      ipcRenderer.send('checkForUpdate')
    }

  }

  render(){
    return <div className={style.root}>
      东航滨江中心
      <Button type="primary" onClick={this.handleUpdater}>检测更新</Button>
      <Page />
      <ul>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  }
}

export default HomePage
