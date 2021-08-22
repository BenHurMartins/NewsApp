import 'react-native';
import React from 'react';
import FlatListNews from '../src/components/FlatListNews';
import renderer from 'react-test-renderer';

describe('FlatListNews component', () => {
  it('FlatListNews renders correctly', () => {
    renderer.create(<FlatListNews />);
  });
  it('FlatListNews snapshot test', () => {
    const tree = renderer.create(<FlatListNews />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
