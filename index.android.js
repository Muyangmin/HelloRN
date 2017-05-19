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
    TextInput,
    View
} from 'react-native';

export default class HelloRN extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={{width: 200, height: 40}} placeholder="Type to translate"
                           placeholderTextColor="#6897BB"
                           onchangetext={(text) => {
                               this.setState(text)
                           }}
                />
                <Text >{this.state.text.split(' ').map((word) => {
                    word && '🧀'
                }).join(' ')}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
      padding : 10,
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
