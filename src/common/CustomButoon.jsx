import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButoon = ({backgroundColor, title, color, onClick}) => {
  return (
   <TouchableOpacity activeOpacity={1} style = {[styles.button, {backgroundColor : backgroundColor}]} onPress={() => onClick()}>
    <Text style = {{color : color}}>{title}</Text>
   </TouchableOpacity>
  )
}

export default CustomButoon

const styles = StyleSheet.create({
    button:{
        width : Dimensions.get('window').width - 40,
        height : 50,
        alignSelf : 'center',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 10,
        marginTop : 10
    }
})