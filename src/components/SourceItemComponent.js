import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Linking} from 'react-native';
import {Colors, Mixins} from '../styles';
import {Divider, UrlTextComponent} from './';
import {useDispatch} from 'react-redux';
import {SET_ID, SET_SOURCE} from '../reducers/actionsTypes';
import {useDeviceOrientation} from '@react-native-community/hooks';
import {useNavigation} from '@react-navigation/native';

const SourceItemComponent = ({source}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const orientation = useDeviceOrientation();

  const handleClick = () => {
    dispatch({type: SET_ID, payload: source.id});
    dispatch({type: SET_SOURCE, payload: source.name});
    if (orientation.portrait) {
      navigation.navigate('News');
    }
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={handleClick}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{source.name}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{source.description}</Text>
        </View>
        <UrlTextComponent url={source.url} />
      </TouchableOpacity>
      <Divider style={{alignSelf: 'center', width: Mixins.DEVICE_WIDTH90}} />
    </>
  );
};

export default SourceItemComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: Mixins.FONT_SIZE_REGULAR,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
  },
  descriptionContainer: {
    width: '90%',
    height: 60,
    marginBottom: 10,
  },
  description: {
    fontSize: Mixins.FONT_SIZE_SMALL,
    width: '100%',
    fontWeight: '200',
    textAlign: 'justify',
  },
  linkContainer: {
    width: '90%',
  },
});
