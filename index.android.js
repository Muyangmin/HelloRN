/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry, Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

import CustomImageView from './CustomImage';

export default class HelloRN extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRed: true,
            currentBkg: '#FF0000',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Button title='Tap to change!'
                        onPress={() => {
                            // this.state.currentBkg = '#00FFFF';
                            this.setState({
                                currentBkg: this.state.isRed ? '#00FFFF' : '#FF0000',
                                isRed: !this.state.isRed,
                            });
                        }
                        }/>
                <CustomImageView background={this.state.currentBkg} style={{width: 300, height: 200}}/>
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
