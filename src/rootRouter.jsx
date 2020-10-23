/* eslint-disable no-dupe-keys */
/**
 * Created by yixing on 2020/9/23.
 */
import React,{Suspense} from 'react';
import { Route,Redirect, Switch } from 'dva/router';
import { connect } from 'dva';
const HomePage = React.lazy(() => import('@/routes/homePage.jsx'));
let GIpcRenderer
if(window.require){
   let { ipcRenderer } = window.require('electron');
   GIpcRenderer = ipcRenderer
}else if(global.require){
   let { ipcRenderer } = global.require('electron');
   GIpcRenderer = ipcRenderer
}
let ipcRenderer = GIpcRenderer
class RootRouter extends React.Component{
  componentDidMount(){
    // if(ipcRenderer){
    //   ipcRenderer.send('checkForUpdate')
    //   ipcRenderer.on('message',(event,text)=> {
    //     console.log('arguments', arguments, text);
    //     this.tips = text;
    //   })
    //   ipcRenderer.on("downloadProgress", (event, progressObj) => {
    //     console.log("progressObj",progressObj);
    //     this.downloadPercent = progressObj.percent || 0;
    //   })
    //   ipcRenderer.on("isUpdateNow",()=> {
    //     ipcRenderer.send("isUpdateNow")
    //   })
    // }
  }
  render(){
    return (
      <Suspense fallback={<div></div>}>
        <div>首页</div>
        <Switch>
          <Route path="/" render={props => <HomePage {...props} />}></Route>
          <Redirect to="/"/>
        </Switch>
      </Suspense>
    )
  }
}

export default connect(()=>({}))(RootRouter)
