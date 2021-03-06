import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import Text from '../../ui-components/Text';

export default class OneFilm extends React.Component {
  componentDidMount() {
    if (!this.props.route.params.film_id) {
      this.props.navigation.navigate('Films');
    }
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>One Film {this.props.route.params.film_id}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
