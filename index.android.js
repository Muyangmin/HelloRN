/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    // Text,
    View
} from 'react-native';

export default class HelloRN extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}

const FLEX = 1;

const styles = StyleSheet.create({
    container: {
        //指定占屏幕比例，取值为数值型（即可以有浮点），flex:1表示撑满空间。
        //多个控件使用flex时按组件的flex值比例确定所占空间。 (即正比关系)
        //NOTE: 通常这个取值应该是一个字面值整形数字，但是如这里演示的一样，它可以接受变量，当然，变量值必须是数字。
        flex: FLEX,

        //指定子元素的排列主轴方向，取值为 row | column，分别对应横向和纵向。
        //默认取值是 column
        flexDirection: 'row',

        //指定子元素的主轴排列方式，取值如下（附示意图，X表示元素，括号为边界，空白即留白空间）
        // flex-start 紧密排列，从起始位置开始                      [XXX      ]
        // center 居中                                           [   XXX   ]
        // flex-end 紧密排列，靠近尾部                             [      XXX]
        // space-between 起止位置贴合边界，中间排布元素后均匀留空     [X   X   X]
        // space-around 与between类似，但是起止位置也有留空         [ X  X  X ]
        justifyContent: 'space-between',

        //指定子元素的次轴（与主轴垂直的轴，例如主轴为row, 则次轴为column）的排列方式，取值如下:
        // flex-start 排列于起始位置
        // center 居中
        // flex-end 排列为末尾位置
        // stretch 拉伸到次轴全长。NOTE: 该选项仅在子元素没有指定**次轴**方向上的尺寸时才生效。例如flexDirection:row下不能有height.
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('HelloRN', () => HelloRN);
