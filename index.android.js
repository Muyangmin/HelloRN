/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Button,
    Image,
    StyleSheet,
} from 'react-native';

import {TabBarBottom, TabNavigator} from 'react-navigation';

export default class NewsScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'News',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./img/ic_launcher_round.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Profile')}
                title="View profile"
            />
        );
    }
}

class ProfileScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
            <Image source={require("./img/ic_launcher.png")}
                   style={[styles.icon, {tintColor: tintColor}]}
            />
        )
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
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
    icon: {
        width: 26,
        height: 26,
    },
});

const HelloRN = TabNavigator({ //1st param: Route map
    News: {
        screen: NewsScreen,
    },
    Profile: {
        screen: ProfileScreen,
    },
}, {//2nd param: tabBarOptions
    //For full API see: https://reactnavigation.org/docs/navigators/tab#TabNavigatorConfig

    //This is only the component impl, not position! see below
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    lazy: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
        showIcon: true
    }

});

AppRegistry.registerComponent('HelloRN', () => HelloRN);
