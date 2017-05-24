import React, {Component} from 'react';

import {
    Animated,
} from 'react-native';

export default class FadeInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),// 透明度初始值设为0
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,    //执行动画的变量
            {
                toValue: 1,   // 透明度最终变为1，即完全不透明
                duration: 3000,
            }
        ).start();
    }

    render() {
        return (
            <Animated.View   // 可动画化的视图组件
                style={{
                    ...this.props.style,
                    opacity: this.state.fadeAnim, // 将透明度指定为动画变量值
                }}>

            </Animated.View>
        );
    }
}