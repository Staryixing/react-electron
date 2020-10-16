/* eslint-disable no-dupe-keys */
/**
 * Created by yixing on 2020/9/23.
 */
import React,{Suspense} from 'react';
import { Route,Redirect, Switch } from 'dva/router';
import { connect } from 'dva'
const HomePage = React.lazy(() => import('@/routes/homePage.jsx'));

class RootRouter extends React.Component{
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
