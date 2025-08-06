import React from "react";
import {view, text, Image, Button} from 'react-native'

//estrutura basica (principal)
function app (){
  return(
    <view>
      <text>hellow world</text>
      <Button title="mudar" onPress={butao}></Button>
    </view>

  );
}


//estrutura do Button
function butao (){
  

}
//usando parametros css
function inicio(){
  return(
    <text style = {{ color: "red", textAlign: "center"}}> cabeçalho</text>
  )
}

export default app