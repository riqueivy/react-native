// props--> propriedades de projeto
import React, {Component} from "react";
import { View, Button, Image, Text, StyleSheet } from "react-native";
class app extends Component{
    render(){

        let nome = 'maheus';
        let img = 'um link'
        
        return(
            <View>
            <text style={{ color:'red', fontSize: 12, margin: 12}}>ola mundo</text>
            <text>{nome}</text>

            <text style={[estilo.texto]}></text>
            <text style={[estilo.area, estilo.texto]}></text>

            <Image source={{ uri: img}} style={{ width:20 , height:20 }}/>

            <Button title="clicar" onPress={app}/>
            </View> 
            )
    } 
}

function app(){
    console.log('seja bem vindoo')


    
}
//bloco CSS
const estilo = StyleSheet.create({
    area:{
        marginTop: 40
    },

    texto: {
        fontSize: 25,
        color: '#FF0000'

    },

    fundo:{
        textAlign: 'center',
        backgroundColor: '#99CC32'

    }
})
 