import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import PagerView from 'react-native-pager-view';

const ProductDetailScreen = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const [product, setProduct] = useState(props.route.params.item);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.card}>
        <PagerView style={styles.pagerView} initialPage={0}>
          <View key="0">
            <Image
              style={styles.productImage}
              source={{
                uri: product.images[0],
              }}
            />
          </View>
          <View key="1">
            <Image
              style={styles.productImage}
              source={{
                uri: product.images[1],
              }}
            />
          </View>
          <View key="2">
            <Image
              style={styles.productImage}
              source={{
                uri: product.images[2],
              }}
            />
          </View>
        </PagerView>
        <Text style={styles.productName} numberOfLines={2}>
          {product.name}
        </Text>
        <Text style={styles.productPrice} numberOfLines={1}>
          {product.price} VNĐ
        </Text>
      </View>
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
  pagerView: {
    flex: 0.5,
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

export default ProductDetailScreen;
