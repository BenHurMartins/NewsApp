import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Mixins} from '../styles';

const Divider = props => {
  return <View style={[styles.container, props.style]} />;
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: Colors.PRIMARY,
    width: Mixins.DEVICE_WIDTH,
  },
});
