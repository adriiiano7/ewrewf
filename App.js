import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
/*importar header (cabeçalho)*/
export default class App extends Component { 
  render(){
    return(
      <View>
      

        <View 
          style={{ width:200 , height:100, marginTop:80, marginLeft:80}}>
          <Button 
            title="ManÍ"  
            color = "red"
            onPress={() => Alert('Obrigado por escolher o ManÍ')} />
        </View>
        
        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="D.O.M"  
            color = "blue"
            onPress={() => Alert('Obrigado por escolher o D.O.M')} />
        </View>

        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Fasano"
            color = "purple"
            onPress={() => Alert('Obrigado por escolher o Fasano')} />
        </View>
       
      </View>
    )
  }
}