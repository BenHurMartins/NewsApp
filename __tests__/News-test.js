/**
 * @format
 */

import 'react-native';
import React from 'react';
import News from '../src/scenes/News';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
describe('Redenring tests for News', () => {
  it('News renders correctly', () => {
    renderer.create(<News />);
  });
  it('News snapshot test', () => {
    const tree = renderer.create(<News />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
