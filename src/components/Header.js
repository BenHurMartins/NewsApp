import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors, Mixins} from '../styles';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
const Header = ({title, leftAction}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sideContainer} onPress={leftAction}>
        {leftAction ? (
          <Icon
            name={'left'}
            color={Colors.WHITE}
            size={Mixins.FONT_SIZE_BIG}
          />
        ) : null}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.sideContainer}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: Colors.PRIMARY,
    width: Mixins.DEVICE_WIDTH,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: Colors.WHITE,
    fontSize: Mixins.FONT_SIZE_BIG,
    fontWeight: '500',
    width: Mixins.DEVICE_WIDTH80,
    textAlign: 'center',
  },
  sideContainer: {
    width: Mixins.DEVICE_WIDTH10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
