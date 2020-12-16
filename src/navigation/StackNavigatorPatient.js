import React,{useEffect} from 'react';
import  {useDispatch, useSelector} from 'react-redux'


import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import SignupScreen from '../screens/SignupScreen';
import Chat from '../screens/Chat';
import BabyDetails from '../screens/BabyDetails';
import Bayiku from '../screens/Bayiku';
import JadwalVaksin from '../screens/JadwalVaksin';
import HubungiDokter from '../screens/HubungiDokter';
import LeaderBoard from '../screens/LeaderBoard';
import MyCases from '../screens/MyCases';
import OpenCases from '../screens/OpenCases';
import Pengaturan from '../screens/Pengaturan';
import HomeScreen from '../screens/HomeScreen';
import AddRoomScreen from '../screens/AddRoomScreen';
import {RoomScreen} from '../screens/RoomScreen';
import {addUser} from '../store/action/userAction'

import {IconButton} from 'react-native-paper';

import BottomTabNavigator from './TabNavigator';
import BottomTabNavigatorDoctor from './TabNavigatorDoctor';

const Stack = createStackNavigator();

export const MainStackNavigator = ({user}) => {
  // console.log(user,'hasil props')
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(addUser(user))
  })
  console.log(user.role)
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
    {/* <Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    /> */}
      {/* <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{headerShown: false}}
      /> */}
      
      {user.role =="orang tua" && <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      /> }
      {user.role ==="dokter" &&  <Stack.Screen
        name="HomeDoctor"
        component={BottomTabNavigatorDoctor}
        options={{
          headerShown: false,
        }}
      />}
      <Stack.Screen name="BabyDetails" component={BabyDetails} />
      <Stack.Screen name="Bayiku" component={Bayiku} />
      <Stack.Screen name="JadwalVaksin" component={JadwalVaksin} />
      {/* <Stack.Screen name="HubungiDokter" component={HubungiDokter} /> */}
      {/* passing data bayi */}
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={
          ({navigation}) => ({
          headerRight: () => (
            <IconButton
              icon="message-plus"
              size={28}
              color="blue"
              onPress={() => navigation.navigate('AddRoomScreen')}
            />
          )
        })
      }
      />
      <Stack.Screen name="RoomScreen" component={RoomScreen} options={({route})=>({
        title:route.params.thread.name
      })} />
      <Stack.Screen name="AddRoomScreen" component={AddRoomScreen} />
      <Stack.Screen name="MyCases" component={MyCases} />
      <Stack.Screen name="OpenCases" component={OpenCases} />
      <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
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
