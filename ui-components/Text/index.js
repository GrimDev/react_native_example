import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import styles from './styles';

export default class MyText extends React.Component {
  static propTypes = {
    children: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    children: null,
    style: {},
  };

  render() {
    const {style, children, ...other} = this.props;
    return (
      <Text style={[styles.text, style]} {...other}>
        {children}
      </Text>
    );
  }
}
