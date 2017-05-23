/**
 * Created by muyangmin on 5/22/17.
 */

import React, {Component} from 'react';
import {
    Button,
    Text,
    View,
} from "react-native";

import {styles} from "./index.android";

// 要查看props和options，可以访问以下链接：
// https://reactnavigation.org/docs/navigators/navigation-prop
// https://reactnavigation.org/docs/navigators/navigation-options
export default class ProfileScreen extends Component {

    // Nav options can be defined as a function of the screen's props.
    static navigationOptions = ({navigation}) => ({
        //IMPORTANT: 注意这里不是引号！要使用`符号才能被识别为表达式。
        title: `${navigation.state.params.username}\'s Profile`,
    });

    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const {params} = this.props.navigation.state;

        //Navigation prop中的可用方法：
        // navigate - (helper) link to other screens
        // state - screen's current state/routes
        // setParams - (helper) make changes to route's params
        // goBack - (helper) close active screen and move back
        // dispatch - send an action to router
        const {goBack} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{params.username}'s Profile</Text>
                <Button title="Back to home" onPress={() => {
                    goBack();
                }}/>
                <Button title="Set name to Taylor" onPress={() => {
                    this.props.navigation.setParams({
                        username: 'Taylor',
                    });
                }}/>
            </View>
        );
    }
}