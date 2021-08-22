import 'react-native-gesture-handler/jestSetup';

// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock');
//   Reanimated.default.call = () => {};

//   return Reanimated;
// });

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => jest.fn(),
}));
jest.mock('@react-native-community/hooks', () => {
  const orientation = {portrait: true};
  return {
    useDeviceOrientation: () =>
      jest.fn().mockImplementation(() => {
        return {orientation: orientation};
      }),
  };
});

jest.mock('react-redux', () => {
  const mockDispatch = jest.fn();
  const ActualReactRedux = jest.requireActual('react-redux');
  const state = {
    sourceName: 'ABC News',
    sourceId: 'abc-news',
    page: 1,
  };
  return {
    ...ActualReactRedux,
    useSelector: () => state,
    useDispatch: () => mockDispatch,
  };
});

jest.mock('../src/services/news/news.js', () => {
  const getNews = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve({
        data: {
          articles: [
            {
              urlToImage: 'https',
              url: 'https',
              author: 'Ben Hur Martins Carvalho',
              publishedAt: 1629672740563,
              title: 'test title',
              description: 'Lorem ipsum dolor sit amet',
            },
          ],
        },
      });
    });
  });
  return {
    getNews,
  };
});
jest.mock('../src/services/sources/sources.js', () => {
  const getSources = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve({
        data: {
          sources: [
            {
              id: 'ben-news',
              url: 'https',
              name: 'Ben Hur News',
              description: 'Lorem ipsum dolor sit amet',
            },
          ],
        },
      });
    });
  });
  return {
    getSources,
  };
});
