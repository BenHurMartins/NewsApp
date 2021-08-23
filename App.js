import React, {useEffect} from 'react';
import Routes from './src/routes';
import SplashScreen from 'react-native-splash-screen';

//Redux
import reducers from './src/reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
const store = createStore(reducers);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
