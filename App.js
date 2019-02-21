/**
 * Created by supervons on 2018/12/20.
 * 入口界面，控制路由
 * app entrance interface page
 */

import React, {Component} from 'react';
import {createStackNavigator} from "react-navigation";
import LoginPage from './commonPage/Login/loginPage'
import MainPage from './commonPage/MainPage';
import SignBoardView from './commonPage/SignTest/signBoardView';
import PersonalCenter from './commonPage/personalCenter/personalCenter';
import Register from './commonPage/Registered/register';
const RootStack = createStackNavigator({
        Login: { //登录界面
            screen: LoginPage
        },
        MainPage: { //主界面
            screen: MainPage
        },
        PersonalCenter: { //我的（个人中心）
            screen: PersonalCenter
        },
        SignBoardView: { //手写签名页面
            screen: SignBoardView
        },
        Register:{// 注册页面
            screen:Register
        }

    },
    {//定义配置
        initialRouteName: 'Login',     //设置初始路由为登录界面
        navigationOptions: {           //导航栏通用设置
            headerStyle: {
                backgroundColor: '#7276ff',
            },
            headerMode: 'screen',
        },
    },
)

export default class App extends Component {

    render() {
        return (
            <RootStack/>
        )
    }
}