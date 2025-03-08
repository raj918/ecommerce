import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image,} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const Header = ({
  title,
  isBack,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
}) => {
  return(
  <View style={styles.header}>
    <TouchableOpacity style={styles.button}
    onPress={onClickLeftIcon}>
      <Image source={leftIcon} style ={styles.icon}/>
      
    </TouchableOpacity>

    <Text style={styles.title}>{title}</Text>

    <TouchableOpacity style={styles.button}>
      <Image source={rightIcon} style ={[styles.icon,{height : 40, width : 40, }]}/>
    </TouchableOpacity>

  </View>)
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: width,
    backgroundColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight : 20,},

    button : {
      width : 40,
      height : 40,
      justifyContent : 'center',
      alignItems : 'center'
    },
    icon : {
      width : 30,
      height : 30,
      tintColor : 'white'
  },
  title : {
    fontSize : 20,
    color : 'white',
    fontStyle : 'bold'
  }
}
);
