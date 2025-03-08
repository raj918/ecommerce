import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../common/Header';
import axios from 'axios';

const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(), [products];
  });

  const getProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Header
        leftIcon={require('../images/menu.png')}
        rightIcon={require('../images/cart.png')}
        title={'grocery app'}
        onClickLeftIcon={() => navigation.openDrawer()}
      />

      <FlatList
        data={products}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.poductItem}
              onPress={() => navigation.navigate('ProductDetails', {item})}>
              <Image style={styles.productImage} source={{uri: item.image}} />
              <View>
                <Text style={styles.productTitle}>
                  {item.title.length > 20
                    ? item.title.substring(0, 20) + '...'
                    : item.title}
                </Text>
                <Text style={styles.productPrice}>${item.price}</Text>
                <Text style={styles.productDescription}>
                  {item.description.length > 20
                    ? item.description.substring(0, 20) + '...'
                    : item.description}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  poductItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '50',
    marginLeft: 15,
    marginTop: 5,
    color: 'green',
  },
  productDescription: {
    fontSize: 12,
    marginLeft: 15,
    marginTop: 5,
  },
});
