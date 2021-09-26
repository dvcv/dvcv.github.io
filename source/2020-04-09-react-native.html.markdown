---

title: Reducers in React Native
date: 2020-04-09 00:45 UTC
tags: [react native, javascript]
published: false

---
#Practice with Reducers in React Native
###2020-04-09
A small example using the useReducer hook in react native.  
READMORE

```ruby
import React, { useReducer } from 'react';
import { Text, View, Button } from 'react-native';

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: 'red' || 'green' || 'blue', payload: 15 || -15 }
  switch(action.type){
    case 'change_red':
      return {...state, red: state.red + action.payload };
    case 'change_blue':
      return {...state, blue: state.blue + action.payload };
    case 'change_green':
      return {...state, green: state.green + action.payload };
    default:
      return state;
  }
}

export default function Colors(){
  [state, dispatch] = useReducer(reducer, {red: 0, blue: 0, green: 0});

  return (
    <View>
      <View style={{height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}></View>
      <Text>{`rbg(${state.red}, ${state.green}, ${state.blue},0)`}</Text>
      <Button title='Red +' onPress={()=> dispatch({ type: 'change_red', payload: 15}) }/>
      <Button title='Red -' onPress={()=> dispatch({ type: 'change_red', payload: -15}) }/>
      <Button title='Green +' onPress={()=> dispatch({ type: 'change_green', payload: 15}) }/>
      <Button title='Green -' onPress={()=> dispatch({ type: 'change_green', payload: -15}) }/>
      <Button title='Blue +' onPress={()=> dispatch({ type: 'change_blue', payload: 15}) }/>
      <Button title='Blue -' onPress={()=> dispatch({ type: 'change_blue', payload: -15}) }/>
    </View>
  )
}
```

\-dvcv
