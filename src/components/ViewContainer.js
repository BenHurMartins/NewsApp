import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors, Mixins} from '../styles';

const ViewContainer = props => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: Colors.PRIMARY}} />
      <SafeAreaView style={[styles.container, props.style]}>
        {props.children}
      </SafeAreaView>
    </>
  );
};

export default ViewContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
});
