import React from 'react';
import {Text} from 'react-native';
import {
  FlatListNews,
  ViewContainer,
  Header,
  FlatListSources,
  VerticalDivider,
} from '../../components/';
import {useDeviceOrientation} from '@react-native-community/hooks';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const News = () => {
  const {sourceName} = useSelector(state => state.NewsReducer);
  const orientation = useDeviceOrientation();
  const navigation = useNavigation();

  return orientation.portrait ? (
    <ViewContainer>
      <Header title={sourceName} leftAction={navigation.goBack} />
      <FlatListNews />
    </ViewContainer>
  ) : (
    <ViewContainer style={{flexDirection: 'row'}}>
      <FlatListSources />
      <VerticalDivider />
      <FlatListNews />
    </ViewContainer>
  );
};

export default News;
