import React from 'react';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';

import Routes from './routes';


const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#14465e" />
    <Routes />
    <FlashMessage position="top" />
  </>
);

export default App;
