import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
//import HomeScreen from '../screens/HomeScreen'

import {MainStackNavigator, ChatNavigator} from './StackNavigator';
import Home from '../screens/Home';
import HomeDoctor from '../screens/HomeDoctor';
import Chat from '../screens/Chat';
import HomeScreen from '../screens/HomeScreen';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="ios-home-outline"
              size={24}
              color={focused ? '#4F8EF7' : '#bdbdbd'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="ios-chatbox-outline"
              size={24}
              color={focused ? '#4F8EF7' : '#bdbdbd'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="ios-person-outline"
              size={24}
              color={focused ? '#4F8EF7' : '#bdbdbd'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
