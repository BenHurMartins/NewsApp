import 'react-native';
import React from 'react';
import {render, act} from '@testing-library/react-native';
import NewsItemComponent from '../src/components/NewsItemComponent';
import renderer from 'react-test-renderer';

const news = {
  urlToImage: 'https',
  url: 'https',
  author: 'Ben Hur',
  publishedAt: 1629672740563,
  title: 'test title',
  description: 'Lorem ipsum dolor sit amet',
};

describe('NewsItemComponent component', () => {
  it('NewsItemComponent renders correctly', () => {
    renderer.create(<NewsItemComponent news={news} />);
  });
  it('NewsItemComponent snapshot test', () => {
    const tree = renderer.create(<NewsItemComponent news={news} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should find the author', () => {
    const {getByText} = render(<NewsItemComponent news={news} />);
    act(() => {
      expect(getByText('Author: Ben Hur')).not.toBe(null);
    });
  });
  it('Should find the description', () => {
    const {getByText} = render(<NewsItemComponent news={news} />);
    act(() => {
      expect(getByText('Lorem ipsum dolor sit amet')).not.toBe(null);
    });
  });
  it('Should find the title', () => {
    const {getByText} = render(<NewsItemComponent news={news} />);
    act(() => {
      expect(getByText('test title')).not.toBe(null);
    });
  });
  it('Should find the url', () => {
    const {getByText} = render(<NewsItemComponent news={news} />);
    act(() => {
      expect(getByText('https')).not.toBe(null);
    });
  });
});
