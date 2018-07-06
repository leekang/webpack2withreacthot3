import React,{ Component } from 'react'
import './style/index';
import {Router,hashHistory,Route,IndexRoute,Link} from 'react-router';
import HelloDemo from './component/helloDemo';
import DefaultLayout from './defaultLayout';
import Myall from './myall';

const Routes = (
	<Route path="/" component={DefaultLayout}>
		//主页
		<IndexRoute component={HelloDemo}/>
		<Route path="helloDemo" component={HelloDemo}/>
		<Route path="myall" component={Myall}/>
	</Route>
)
		
export default Routes;


