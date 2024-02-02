import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LuckGame, Home } from '../screens'

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='LuckGame' component={LuckGame}/>
      <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
  )
}

export default MainStack;
