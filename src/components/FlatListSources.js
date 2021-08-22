import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {Mixins} from '../styles';
import {getSources} from '../services/sources/sources';
import {SourceItemComponent} from './';
import {useDeviceOrientation} from '@react-native-community/hooks';

const FlatListSources = () => {
  const [sources, setSources] = useState([]);
  const renderItem = ({item}) => <SourceItemComponent source={item} />;

  const orientation = useDeviceOrientation();
  const dinamicWidth = orientation.portrait
    ? Mixins.DEVICE_WIDTH
    : Mixins.DEVICE_HEIGHT / 2 - 60;

  useEffect(async () => {
    await getSources().then(response => {
      setSources(response.data.sources);
    });
  }, []);

  return (
    <FlatList
      contentContainerStyle={
        ([styles.flatListContainer], {width: dinamicWidth})
      }
      data={sources}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id}
      // onEndReached={getMoreResults}
      onEndReachedThreshold={0.7}
    />
  );
};

export default FlatListSources;

const styles = StyleSheet.create({
  flatListContainer: {
    alignItems: 'center',
  },
});
