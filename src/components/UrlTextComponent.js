import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {Colors, Mixins} from '../styles';

const UrlTextComponent = ({url}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => Linking.openURL(url)}>
        <Text style={styles.url}>{url}</Text>
      </TouchableOpacity>
    </>
  );
};

export default UrlTextComponent;

const styles = StyleSheet.create({
  url: {
    fontSize: Mixins.FONT_SIZE_SMALL - 2,
    fontWeight: '200',
    textAlign: 'justify',
    textDecorationLine: 'underline',
  },
  linkContainer: {
    width: '90%',
  },
});
