// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './src/navigation/StackNavigator';
import Providers from './src/navigation/index';
import React from 'react';
import {StatusBar} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      {/* <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <MainStackNavigator />
      </NavigationContainer> */}
      <Providers/>
    </>
  );
};

export default App;
