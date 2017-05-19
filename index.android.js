/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class BlinkText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showText: true
        };

        //每1000毫秒对当前状态取反
        setInterval(() => {
            this.setState({showText: !this.state.showText})
        }, 100);
    }

    render() {
        //根据当前状态决定是否展示text
        let result = this.state.showText ? this.props.text : "";
        return (
            <Text style={styles.welcome}>{result}</Text>
        );
    }
}

export default class HelloRN extends Component {
    render() {
        return (
            <View style={styles.container}>
                <BlinkText text="Look at me"/>
                <BlinkText text="Click me !"/>
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HelloRN', () => HelloRN);
