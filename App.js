// App.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Telaprincipal from './Telaprincipal';
import Produtos from './Produtos';
import Sobrenós from './Sobrenós';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Delícias do povo">
        <Drawer.Screen name="Delícias do povo" component={Telaprincipal} />
        <Drawer.Screen name="Produtos" component={Produtos} />
        <Drawer.Screen name="Sobre nós" component={Sobrenós} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
