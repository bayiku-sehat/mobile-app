// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './src/navigation/StackNavigator';

import React from 'react';
import {StatusBar, KeyboardAvoidingView, Platform} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
          style={{flex: 1}}
          enabled> */}
        <StatusBar barStyle="dark-content" />
        <MainStackNavigator />
        {/* </KeyboardAvoidingView> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
