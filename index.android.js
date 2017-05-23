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

import {DrawerNavigator} from 'react-navigation';

export default class NewsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('./img/ic_launcher.png')}
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
        drawerLabel: 'Profile',
        drawerIcon: ({tintColor}) => (
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
        width: 24,
        height: 24,
    },
});

const HelloRN = DrawerNavigator({ //1st param: Route map
    News: {
        screen: NewsScreen,
    },
    Profile: {
        screen: ProfileScreen,
    },
}, {
    //For full API see: https://reactnavigation.org/docs/navigators/drawer#DrawerNavigatorConfig
    drawerWidth: 200,
    drawerPosition: 'left',
    contentOptions: {
        activeTintColor: '#e91e63',
        style: {
            marginVertical: 0,
        }
    }

});

AppRegistry.registerComponent('HelloRN', () => HelloRN);
