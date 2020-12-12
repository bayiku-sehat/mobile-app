import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Chat from '../screens/Chat';
import BabyDetails from '../screens/BabyDetails';
import Bayiku from '../screens/Bayiku';
import JadwalVaksin from '../screens/JadwalVaksin';
import HubungiDokter from '../screens/HubungiDokter';
import Pengaturan from '../screens/Pengaturan';

import BottomTabNavigator from './TabNavigator';
import BottomTabNavigatorDoctor from './TabNavigatorDoctor';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeDoctor"
        component={BottomTabNavigatorDoctor}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="BabyDetails" component={BabyDetails} />
      <Stack.Screen name="Bayiku" component={Bayiku} />
      <Stack.Screen name="JadwalVaksin" component={JadwalVaksin} />
      <Stack.Screen name="HubungiDokter" component={HubungiDokter} />
      <Stack.Screen name="Pengaturan" component={Pengaturan} />
    </Stack.Navigator>
  );
};

// export const ChatNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Chat" component={Chat} />
//     </Stack.Navigator>
//   );
// };
