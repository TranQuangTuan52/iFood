import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Tabs from './navigation/tabs'
import Profile from './screens/Profile'
import FoodDetail from './screens/FoodDetail'
import RenderFood from './component/RenderFood'

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name = 'FoodDetail' component = {FoodDetail}/> 
        {/* <Stack.Screen name = 'RenderFood' component = {RenderFood}/>    */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
