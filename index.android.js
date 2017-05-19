/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    // StyleSheet,
    // Text,
    Image,
    View
} from 'react-native';

export default class HelloRN extends Component {
    render() {
        let pic = {
            uri: "http://mat1.gtimg.com/www/webapp/appimg/qlifang_png.png"
        };

        return (
            <View style={{alignItems: "center"}}>
                <Image source={pic} style={{width: 240, height: 240}}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('HelloRN', () => HelloRN);
