import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import 'react-native-gesture-handler';

import Films from './Films';
import OneFilm from './OneFilm';

const Drawer = createDrawerNavigator();

const AppWithNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Films">
      <Drawer.Screen name="Films" component={Films} />
      <Drawer.Screen name="OneFilm" component={OneFilm} />
    </Drawer.Navigator>
  );
};

export default AppWithNavigation;
