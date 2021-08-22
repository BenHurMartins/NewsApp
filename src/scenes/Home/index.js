import React from 'react';
import {
  FlatListSources,
  ViewContainer,
  FlatListNews,
  Header,
} from '../../components';
import {useDeviceOrientation} from '@react-native-community/hooks';
const Home = () => {
  const orientation = useDeviceOrientation();

  return orientation.portrait ? (
    <ViewContainer>
      <Header title={'Your Definitive Source of Information'} />
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
