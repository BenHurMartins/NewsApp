import 'react-native';
import React from 'react';
import {render, act} from '@testing-library/react-native';
import Header from '../src/components/Header';
import renderer from 'react-test-renderer';

describe('Header component', () => {
  it('Header renders correctly', () => {
    renderer.create(<Header title={'Test'} />);
  });
  it('Header snapshot test', () => {
    const tree = renderer.create(<Header title={'Test'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should set the title', () => {
    const {getByText} = render(<Header title={'Test'} />);
    act(() => {
      expect(getByText('Test')).not.toBe(null);
    });
  });
});
