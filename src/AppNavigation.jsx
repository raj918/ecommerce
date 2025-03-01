import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Main from './screens/Main'


const stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Main' 
        component={Main}
        options ={{headerShown: false}} />
      </stack.Navigator>
    </NavigationContainer>
   
  )
}

export default AppNavigation

const styles = StyleSheet.create({})