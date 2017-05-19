/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class HelloRN extends Component {
    render() {
        return (
            <View >
                <Text style={styles.red}>Just red</Text>
                <Text style={styles.bigBlue}>Just bigBlue</Text>
                <Text style={[styles.bigBlue, styles.red]}>bigblue then red</Text>
                <Text style={[styles.red, styles.bigBlue]}>red then bigBlue</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        bigBlue: {
            fontSize: 30,
            fontWeight: 'bold',
            color: 'blue'
        },

        red: {
            color: 'red'
        }
    },
);

AppRegistry.registerComponent('HelloRN', () => HelloRN);
