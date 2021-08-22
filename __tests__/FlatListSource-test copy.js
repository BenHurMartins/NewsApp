import 'react-native';
import React from 'react';
import Divider from '../src/components/Divider';
import renderer from 'react-test-renderer';

describe('Divider component', () => {
  it('Divider renders correctly', () => {
    renderer.create(<Divider />);
  });
  it('Divider snapshot test', () => {
    const tree = renderer.create(<Divider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
