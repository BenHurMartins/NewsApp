import 'react-native';
import React from 'react';
import FlatListSources from '../src/components/FlatListSources';
import renderer from 'react-test-renderer';

describe('FlatListSources component', () => {
  it('FlatListSources renders correctly', () => {
    renderer.create(<FlatListSources />);
  });
  it('FlatListSources snapshot test', () => {
    const tree = renderer.create(<FlatListSources />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
