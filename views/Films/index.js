import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import Text from '../../ui-components/Text';

export default class Film extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>Film</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
