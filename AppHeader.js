import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View >
        <Text style={[styles.text,{backgroundColor:"green"}] }>RESTARAUNT </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  text:{
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',    
    marginTop: 60
  }
});
