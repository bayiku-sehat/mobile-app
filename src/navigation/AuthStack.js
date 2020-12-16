import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
// import LoginScreen from '../screens/LoginScreen';
import LoginScreen from '../screens/Login'

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login' headerMode='none'>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='SignupScreen' component={SignupScreen} />
    </Stack.Navigator>
  );
}