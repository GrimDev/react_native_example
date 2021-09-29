import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Navigator from './views';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
  }
}
