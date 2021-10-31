import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductListScreen from './app/screens/product/product-list';
import ProductDetailScreen from './app/screens/product/product-detail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductListScreen">
        <Stack.Screen
          name="ProductListScreen"
          component={ProductListScreen}
          options={{title: 'Product List'}}
        />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
          options={{title: 'Product Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
