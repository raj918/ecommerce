import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './src/AppNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
    <AppNavigation/>
  )
}

export default App

const styles = StyleSheet.create({})