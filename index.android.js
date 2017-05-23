/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Button,
    Text,
    View
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import ProfileScreen from "./ProfileScreen";

export default class MainScreen extends Component {
    static navigationOptions = {
        //Define a static screen title
        title: "HomeScreen"
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Home</Text>
                <Button title="View profile" onPress={
                    () => {
                        //First param is Screen alias, and 2nd is custom params(extra args).
                        navigate('Profile', {
                            username: 'Lucy',
                        });
                    }
                }/>
            </View>
        );
    }
}

export const styles = StyleSheet.create({
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

//This is a StackNavigator; in react-navigation package there are more navigators, such as tabs and drawers.
const HelloRN = StackNavigator({
    Home: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
});

AppRegistry.registerComponent('HelloRN', () => HelloRN);
