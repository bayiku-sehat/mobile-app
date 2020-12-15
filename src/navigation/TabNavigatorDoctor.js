import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// import {MainStackNavigator, ChatNavigator} from './StackNavigator';
import Home from '../screens/Home';
import HomeDoctor from '../screens/HomeDoctor';
import Chat from '../screens/Chat';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeDoctor}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="ios-home-outline" size={24} color="#4F8EF7" />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <Icon name="ios-chatbox-outline" size={24} color="#4F8EF7" />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="ios-person-outline" size={24} color="#4F8EF7" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
