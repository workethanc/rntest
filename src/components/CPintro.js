import React from 'react';
import { Text, View } from 'react-native';

const CPintro = () => {
  
    return (
      <View style={{flex: 1, 
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center' }}>
        <View style={{width: 70, height: 70, backgroundColor: 'powderblue'}} />
        <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}/>
        <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}} />
        <View style={{width: 70, height: 70, backgroundColor: 'darkblue'}} />
      </View>
    );
}

export default CPintro;  