import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import 'react-native-gesture-handler';

import Home from './Home';
import Films from './Films';
import OneFilm from './OneFilm';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Films" component={Films} />
  </Drawer.Navigator>
);

const AppWithNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainNavigator" component={DrawerNavigator} />
      <Stack.Screen name="OneFilm" component={OneFilm} />
    </Stack.Navigator>
  );
};

export default AppWithNavigation;
