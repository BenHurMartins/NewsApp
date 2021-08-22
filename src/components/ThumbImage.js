import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Colors, Mixins} from '../styles/';

const ThumbImage = ({style, url}) => {
  const urlWithHttps = url.replace('http://', 'https://');
  return (
    <Image style={[styles.container, style]} source={{uri: urlWithHttps}} />
  );
};

export default ThumbImage;

const styles = StyleSheet.create({
  container: {
    resizeMode: 'cover',
    height: Mixins.DEVICE_WIDTH25,
    width: Mixins.DEVICE_WIDTH30,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },
});
