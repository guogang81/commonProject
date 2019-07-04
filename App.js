/**
 * Created by supervons on 2018/12/20.
 * 入口界面，控制路由
 * app entrance interface page
 */

import React, {Component} from 'react';
import {Image} from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator} from "react-navigation";
import LoginPage from './src/screens/Login/loginPage';
import MainPage from './src/screens/MainPage';
import CodePushScreen from "./src/screens/CodePush/CodePushScreen";
import PersonalCenter from './src/screens/personalCenter/personalCenter';
import Register from './src/screens/Registered/register';
import SpinnerShows from './src/screens/Spinner/spinnerShows';
import News from './src/screens/News/news';
import ReduxTest from './src/screens/Redux/ReduxTest';
import TouchIdView from './src/screens/TouchId/touchIdView';
import ImagePickerComponents from './src/screens/ImagePicker/imagePickerComponents';
import Animatable from './src/screens/Animatable/Animatable';
import EchartsView from './src/components/sEchartsTest/EchartsView';
import CalendarsDemo from './src/components/calendars/CalendarsDemo';
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import {Provider} from 'react-redux';
import configureStore from './src/screens/Redux/store/store'

import {Root, Icon} from "native-base";

import {Sentry} from 'react-native-sentry';

Sentry.config('').install();

const store = configureStore();
//底部 tab 导航
const Tabs = createMaterialTopTabNavigator({
    MainPage: {
        screen: MainPage,
        navigationOptions: ({navigation}) => ({
            title: '首页',
            tabBarLabel: '主页',
            tabBarIcon: ({focused}) => {
                return focused ? <Image source={require(`./src/resource/image/icon/tabBarIcon/index_select.png`)}/> :
                    <Image source={require(`./src/resource/image/icon/tabBarIcon/index_unselect.png`)}/>;
            },
        })
    },
    News: {
        screen: News,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '新闻',
            tabBarIcon: ({focused}) => {
                return focused ? <Image source={require(`./src/resource/image/icon/tabBarIcon/news_select.png`)}/> :
                    <Image source={require(`./src/resource/image/icon/tabBarIcon/news_unselect.png`)}/>;
            },
        })
    },
    PersonalCenter: {
        screen: PersonalCenter,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '我的',
            tabBarIcon: ({focused}) => {
                return focused ? <Image source={require(`./src/resource/image/icon/tabBarIcon/user_select.png`)}/> :
                    <Image source={require(`./src/resource/image/icon/tabBarIcon/user_unselect.png`)}/>;
            },
        })
    }
}, {
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: true, // 是否可以左右滑动切换tab
    lazy: true,
    tabBarOptions: {
        tabStyle: {
            minWidth: 50,
            maxHeight: 50,
        },
        activeTintColor: '#0094ed', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        pressOpacity: 0.8,
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 13,
            marginTop: 3,
            marginBottom: 0,
        },
    },
});
const RootStack = createStackNavigator({
        Login: { //登录界面
            screen: LoginPage
        },
        MainPage: { //主界面
            screen: Tabs
        },
        PersonalCenter: { //我的（个人中心）
            screen: PersonalCenter
        },
        Register: {// 注册页面
            screen: Register
        },
        SpinnerShows: {// 加载动画页面
            screen: SpinnerShows
        },
        News: {
            screen: News
        },
        ReduxTest: {
            screen: ReduxTest
        },
        ImagePickerComponents: {// 图片选择器
            screen: ImagePickerComponents
        },
        Animatable: {// 动画页面
            screen: Animatable
        },
        TouchIdView: {// 指纹测试页面
            screen: TouchIdView
        },
        CodePushScreen: { // 热更新展示页
            screen: CodePushScreen
        },
        EchartsView: { // 图表展示页
            screen: EchartsView
        },
        CalendarsDemo: { // 图表展示页
            screen: CalendarsDemo
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
        transitionConfig: () => ({
            /**
             * 1、从右向左：  forHorizontal；
             * 2、从下向上：  forVertical；
             * 3、安卓那种的从下向上： forFadeFromBottomAndroid；
             * 4、无动画：  forInitial。
             */
            screenInterpolator: StackViewStyleInterpolator.forHorizontal,
        })
    },
)

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Root>
                    <RootStack/>
                </Root>
            </Provider>
        )
    }
}
