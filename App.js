import React from 'react'
import {Text,View} from 'react-native'
import Home from './screens/Home'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Tabs from './navigation/tabs'



const Stack=createStackNavigator()

const App=()=>{
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={"Tab"} screenOptions={{headerShown:false}}  >
        <Stack.Screen name="Tab" component={Tabs}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;