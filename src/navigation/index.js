import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from './AuthProvider';
import Routes from './Routes';
import {Provider} from 'react-redux'
import store from "../store/index"

/**
 * Wrap all providers here
 */

export default function Providers() {
  return (
    <PaperProvider>
      <Provider store={store}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      </Provider>
    </PaperProvider>
  );
}