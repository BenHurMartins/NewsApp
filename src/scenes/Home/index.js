import React from 'react';
import {
  FlatListSources,
  ViewContainer,
  FlatListNews,
  Header,
  VerticalDivider,
} from '../../components';
import {useDeviceOrientation} from '@react-native-community/hooks';
const Home = () => {
  const orientation = useDeviceOrientation();

  return orientation.portrait ? (
    <ViewContainer>
      <Header title={'News App'} />
      <FlatListSources />
    </ViewContainer>
  ) : (
    <ViewContainer style={{flexDirection: 'row'}}>
      <FlatListSources />
      <VerticalDivider />
      <FlatListNews />
    </ViewContainer>
  );
};

export default Home;
