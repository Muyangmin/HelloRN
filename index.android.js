/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class HelloRN extends Component {
    render() {
        // Platform.select()方法可以接受任何合法类型的参数，因此你也可以直接用它针对不同平台返回不同的组件，像下面这样：
        // var Component = Platform.select({
        //     ios: () => require('ComponentIOS'),
        //     android: () => require('ComponentAndroid'),
        // })();
        //   <Component />;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text
                    style={styles.instructions}
                    //在Android上，平台模块还可以用来检测当前所运行的Android平台的版本
                    //注意 Version是一个字段，不是一个函数，因此不要加上()
                >
                    Your device is running on Android version {Platform.Version}!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        //Platform.OS 可以直接用于简单的比较场合
        // Platform.OS在iOS上会返回`ios`，而在Android设备或模拟器上则会返回`android`。
        fontSize: (Platform.OS === 'ios') ? 30 : 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        // color: '#333333',
        marginBottom: 5,
        //   Platform.select()，可以以Platform.OS为key，从传入的对象中返回对应平台的值
        ...Platform.select({
            ios: {
                color: "red",
            },
            android: {
                color: "blue",
            }
        })
    },
});

AppRegistry.registerComponent('HelloRN', () => HelloRN);
