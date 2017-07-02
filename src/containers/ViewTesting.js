import React from 'react';

import {View, TextInput, Text} from 'react-native';

class ViewTesting extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: ''};
    }
    render(){
        return(
            <View style={{marginTop: 24}}>
                <TextInput style={{height: 40}}
                            placeholder="Type here to translate!"
                            onChangeText={(text) => this.setState({text})} />
                <View style={{
                    flex: 1, 
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end' }} >
                    
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
                </View>
            </View>
        );
    } 
}

export default ViewTesting;