import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import iconFont from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import Icon from 'react-native-vector-icons/Ionicons';

import {MainStackNavigator, ChatNavigator} from './StackNavigator';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

// const iconFontStyles = `@font-face {
//   src: url(${iconFont});
//   font-family: MaterialCommunityIcons;
// }`;

// // Create stylesheet
// const style = document.createElement('style');
// style.type = 'text/css';
// if (style.styleSheet) {
//   style.styleSheet.cssText = iconFontStyles;
// } else {
//   style.appendChild(document.createTextNode(iconFontStyles));
// }

// // Inject stylesheet
// document.head.appendChild(style);

export default function BottomTabNavigator() {
  console.log(MainStackNavigator);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({color, size}) => (
            // <MaterialCommunityIcons name="account" color={color} size={size} />
            <Icon name="ios-person" size={30} color="#4F8EF7" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
