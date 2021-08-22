import 'react-native';
import React from 'react';
import {render, act} from '@testing-library/react-native';
import SourceItemComponent from '../src/components/SourceItemComponent';
import renderer from 'react-test-renderer';

const source = {
  id: 'ben-news',
  url: 'https',
  name: 'Ben Hur News',
  description: 'Lorem ipsum dolor sit amet',
};

describe('SourceItemComponent component', () => {
  it('SourceItemComponent renders correctly', () => {
    renderer.create(<SourceItemComponent source={source} />);
  });
  it('SourceItemComponent snapshot test', () => {
    const tree = renderer
      .create(<SourceItemComponent source={source} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should find the title', () => {
    const {getByText} = render(<SourceItemComponent source={source} />);
    act(() => {
      expect(getByText('Ben Hur News')).not.toBe(null);
    });
  });
  it('Should find the description', () => {
    const {getByText} = render(<SourceItemComponent source={source} />);
    act(() => {
      expect(getByText('Lorem ipsum dolor sit amet')).not.toBe(null);
    });
  });
  it('Should find the url', () => {
    const {getByText} = render(<SourceItemComponent source={source} />);
    act(() => {
      expect(getByText('https')).not.toBe(null);
    });
  });
});
