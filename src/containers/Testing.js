import React from 'react';
import {testingStyles} from '../css'

import { Text, View, TouchableHighlight, Alert } from 'react-native';
class Testing extends React.Component{
    constructor(props){
        super(props);
        this._onPress = this._onPress.bind(this)
    }

    _onPress(){
        Alert.alert('You tapped!!');
    }

    render(){
        return(
            <View style={testingStyles.container} >
                <TouchableHighlight 
                    onPress={this._onPress}
                    underlayColor="white" >
                    <View style={testingStyles.button}>
                        <Text style={testingStyles.buttonText} >
                            Touchable text
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight 
                    onPress={this._onPress}
                    underlayColor="white" >
                    <View style={testingStyles.button}>
                        <Text style={testingStyles.buttonText} >
                            Touchable text
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Testing; 