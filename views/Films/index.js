import React from 'react';
import {SafeAreaView, ScrollView, View, Button} from 'react-native';

import Text from '../../ui-components/Text';

export default class Film extends React.Component {
  // this.props.navigation.navigate('');
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>Film</Text>
            <Button
              onPress={() =>
                this.props.navigation.navigate('OneFilm', {film_id: 'truc'})
              }
              title="Go to Film"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
