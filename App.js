import React from "react";
import {view, text} from 'react-native'

//estrutura basica 
function app (){
  return(
    <view>
      <text>hellow world</text>
    </view>

  );
}

//usando parametros css
function inicio(){
  return(
    <text style = {{ color: "red", textAlign: "center"}}> cabeçalho</text>
  )
}

export default app