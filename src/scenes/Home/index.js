import React from 'react';
import {FlatListSources, ViewContainer, FlatListNews} from '../../components';
import {useDeviceOrientation} from '@react-native-community/hooks';
const Home = () => {
  const orientation = useDeviceOrientation();

  return orientation.portrait ? (
    <ViewContainer>
      <FlatListSources />
    </ViewContainer>
  ) : (
    <ViewContainer style={{flexDirection: 'row'}}>
      <FlatListSources />
      <FlatListNews />
    </ViewContainer>
  );
};

export default Home;
