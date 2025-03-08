import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Home from './Home'
import Search from './Search'
import Wishlist from './Wishlist'
import Notification from './Notification'
import User from './User'

const HomeScreen = () => {

  const [selectedTab, setSelectedTab] = useState(0)


  return (
    <View style={styles.container}>

      {/* for moving between one to another component  */}
      {selectedTab == 0 ? (<Home />) :
        selectedTab == 1 ? (<Search />) :
          selectedTab == 2 ? (<Wishlist />) :
            selectedTab == 3 ? (<Notification />) :
              (<User />)}

      <View style={styles.bottamView}>

        <TouchableOpacity
          style={styles.bottamTab}
          onPress={() => setSelectedTab(0)}
        >
          <Image source={setSelectedTab === 0 ? require('../images/homeFill.png') : require('../images/home.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottamTab}
          onPress={() => setSelectedTab(1)}>
          <Image source={require('../images/search.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottamTab}
          onPress={() => setSelectedTab(2)}>
          <Image source={selectedTab === 2 ? require('../images/heartFill.png') : require('../images/heart.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottamTab}
          onPress={() => setSelectedTab(3)}>
          <Image source={setSelectedTab === 3 ? require('../images/notificationFill.png') : require('../images/notification.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottamTab}
          onPress={() => setSelectedTab(4)}>

          <Image source={setSelectedTab === 4 ? require('../images/user.png') : require('../images/userFill.png')} style={styles.icon} />

        </TouchableOpacity>
      </View>
    </View>

  )
}

export default HomeScreen

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottamView: {
    position: 'absolute',
    bottom: 0,
    height: 45,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',


  },

  bottamTab: {
    height: '100%',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  icon: {
    width: 25,
    height: 25,

  }
})