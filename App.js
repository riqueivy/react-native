import React from "react";
import {view, text, Image, Button} from 'react-native'
import { View } from "react-native/types_generated/index";

//estrutura basica (principal)
function App (){
  return(
    <View>
      <Text>hellow world</Text>
      <Button title="mudar" onPress={butao}></Button>
    </View>

  );
}


//estrutura do Button
function Butao (){
  

}
//usando parametros css
function Inicio(){
  return(
    <Text style = {{ color: "red", textAlign: "center"}}> cabeçalho</Text>
  )
}

export default App