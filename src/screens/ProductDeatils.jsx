import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../common/Header'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import CustomButoon from '../common/CustomButoon'

const ProductDeatils = () => {
  const navigation = useNavigation();
 const route = useRoute();
 const {item} = route.params;

  console.log(item);

  return (
    <View style = {styles.container}>
        <Header leftIcon={require('../images/back.png')} rightIcon={require('../images/cart.png')}
        title={'Product Deatils'} 
        onClickLeftIcon={() => navigation.goBack()}
        />
        <Image source={{uri : item.image}} style = {styles.Image}/>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style = {styles.Pricecontainer}>
        <Text style = {[styles.price , {color : "black" }]}>Price: </Text>
        <Text style = {styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity style ={styles.wishListButton}>
        <Image source={require('../images/heart.png')} style={styles.icon}/>
        </TouchableOpacity>
        <CustomButoon backgroundColor = '#FFA100' title = "Add To Cart" color = "white" onClick={() =>{} }/>
        
        
        
    </View>
  )
}

export default ProductDeatils

const styles = StyleSheet.create({
container : {
  flex : 1,
  backgroundColor : 'white'
},
Image : {
  width : '100%',
  height : 300,
  resizeMode : 'contain'
},
title : {
  fontSize : 20,
  fontWeight : "600",
  margin : 10,
  marginLeft : 20,
  marginTop : 25,
},
description : {
  fontSize: 12,
    marginLeft: 20,
    marginTop: 10,
    marginRight : 20
},
price : {
  fontSize : 20,
  fontWeight : "600",
  margin : 10,
  marginLeft : 20,
  marginTop : 25,
  color : 'green'
},
Pricecontainer : {
  flexDirection : 'row',
},
wishListButton : {
 position : 'absolute',
 right : 10,
 top : 90,
 width : 40,
 height : 40,
 borderRadius : "50%",
 backgroundColor : '#585c5a',
 alignItems : 'center',
 justifyContent : 'center'
},
icon : {
  width : 25,
  height : 25,
  tintColor : 'white'
}
})