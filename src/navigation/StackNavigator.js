import React from 'react';
import {Animated} from 'react-native';

import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Chat from '../screens/Chat';
import BabyDetails from '../screens/BabyDetails';
import Bayiku from '../screens/Bayiku';
import JadwalVaksin from '../screens/JadwalVaksin';
import HubungiDokter from '../screens/HubungiDokter';
import LeaderBoard from '../screens/LeaderBoard';
import MyCases from '../screens/MyCases';
import OpenCases from '../screens/OpenCases';
import Pengaturan from '../screens/Pengaturan';

import BottomTabNavigator from './TabNavigator';
import BottomTabNavigatorDoctor from './TabNavigatorDoctor';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerTransparent: true,
        // headerTintColor: 'white',

        gestureDirection: 'horizontal',
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
        headerStyleInterpolator: HeaderStyleInterpolators.forStatic,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
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
      <Stack.Screen
        name="BabyDetails"
        component={BabyDetails}
        options={{
          title: 'Profil Bayi',
        }}
      />
      <Stack.Screen name="Bayiku" component={Bayiku} />
      <Stack.Screen
        name="JadwalVaksin"
        component={JadwalVaksin}
        options={{
          title: 'Jadwal Vaksin',
        }}
      />
      <Stack.Screen
        name="HubungiDokter"
        component={HubungiDokter}
        options={{
          title: 'Hubungi Dokter',
        }}
      />
      <Stack.Screen
        name="MyCases"
        component={MyCases}
        options={{
          title: 'My Cases',
        }}
      />
      <Stack.Screen
        name="OpenCases"
        component={OpenCases}
        options={{
          title: 'Open Cases',
        }}
      />
      <Stack.Screen
        name="LeaderBoard"
        component={LeaderBoard}
        options={{
          title: 'Leader Board',
        }}
      />
      <Stack.Screen name="Pengaturan" component={Pengaturan} />
    </Stack.Navigator>
  );
};
