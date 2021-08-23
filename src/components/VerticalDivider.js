import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Mixins} from '../styles';

const VerticalDivider = props => {
  return <View style={[styles.container, props.style]} />;
};

export default VerticalDivider;

const styles = StyleSheet.create({
  container: {
    height: Mixins.DEVICE_WIDTH,
    backgroundColor: Colors.PRIMARY,
    width: 1,
  },
});
