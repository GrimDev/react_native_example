import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import Text from '../../ui-components/Text';

export default class OneFilm extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>One Film</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
