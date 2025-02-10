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
      <Drawer.Navigator
        initialRouteName="Delícias do povo"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F4A261',
          },
          headerTitleStyle: {
            color: '#2F3E46',
            fontFamily: 'Montserrat-Bold',
          },
          drawerStyle: {
            backgroundColor: '#FFF8F0',
          },
          drawerLabelStyle: {
            color: '#2F3E46',
            fontFamily: 'Montserrat-Regular',
          },
        }}
      >
        <Drawer.Screen name="Delícias do povo" component={Telaprincipal} />
        <Drawer.Screen name="Produtos" component={Produtos} />
        <Drawer.Screen name="Sobre nós" component={Sobrenós} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
