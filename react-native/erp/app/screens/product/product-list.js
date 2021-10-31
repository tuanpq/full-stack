import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Image,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const Product = ({item, onPress}) => {
  const {images, name, price} = item;

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.productImage}
          source={{
            uri: images[0],
          }}
        />
        <Text style={styles.productName} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.productPrice} numberOfLines={1}>
          {price} VNĐ
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const ProductListScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const viewProduct = item => {
    navigation.navigate('ProductDetailScreen', {item});
  };

  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(
        'http://192.168.1.2:8080/api/products?page=0&size=6',
      );
      const json = await response.json();
      setProducts(json.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Product onPress={() => viewProduct(item)} item={item} />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    elevation: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.33,
    shadowRadius: 8,
    borderRadius: 8,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    margin: 8,
    padding: 8,
  },
  productImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    aspectRatio: 1,
  },
  productName: {
    margin: 8,
    padding: 8,
    color: '#ae52d4',
    fontSize: 20,
    fontWeight: 'bold',
  },
  productPrice: {
    margin: 8,
    padding: 8,
    color: '#a4a4a4',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductListScreen;
