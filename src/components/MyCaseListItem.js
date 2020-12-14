import React from 'react';
import {t} from 'react-native-tailwindcss';

import {
  View,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
} from 'react-native';
import TextBase from './TextBase';

import tailwind from 'tailwind-rn';

import StatusEmoji from './StatusEmoji';

export default function MyCaseListItem({
  status = -2,
  name,
  age,
  sex,
  guardian,
  navigation,
}) {
  function statusToBgColor(status) {
    switch (status) {
      case 0:
        return 'bg-green-700';
      case -1:
        return 'bg-yellow-500';
      case -2:
        return 'bg-orange-500';
      case -3:
        return 'bg-red-700';
    }
  }
  return (
    <View
      style={[t.wFull, t.roundedXl, t.bgWhite, t.overflowHidden, t.shadowLg]}>
      {/* BADGE */}
      <View style={[t.wFull, t.flexRow, t.justifyEnd, t.absolute, t.mT3]}>
        <View
          style={tailwind(
            `rounded-l-full py-1 pl-2 w-12 ${statusToBgColor(-2)}`,
          )}>
          <StatusEmoji value={-2} size={26} color="white" />
        </View>
      </View>

      {/* TOP SECTION */}
      <Pressable
        onPress={() => navigation.navigate('BabyDetails')}
        onStartShouldSetResponderCapture={(evt) => false}>
        <View style={tailwind('p-3')}>
          <View style={tailwind('flex-row items-center')}>
            {/* PICTURE */}
            <View
              style={tailwind('h-20 w-20 rounded-full overflow-hidden mr-3')}>
              <Image
                style={tailwind('h-20 w-20')}
                source={{
                  uri:
                    'https://akcdn.detik.net.id/visual/2020/04/15/5cc7028a-5809-4d5d-b951-ae8bb43674c0_43.jpeg?w=400&q=90',
                }}
              />
            </View>

            {/* PRIMARY DATA */}

            <View>
              <TextBase
                style={tailwind(
                  'text-lg text-gray-800 font-semibold mb-2 w-10/12',
                )}>
                Daryal Fuaddin
              </TextBase>
              <View style={tailwind('flex-row')}>
                <TextBase style={tailwind('text-sm')}>6 bulan, </TextBase>
                <TextBase style={tailwind('text-sm')}>Laki-laki</TextBase>
              </View>
              <TextBase style={tailwind('text-sm')}>Wali: Ibunya</TextBase>
              <TextBase style={tailwind('text-sm')}>
                Pengadegan, Pancoran, Jakarta Selatan
              </TextBase>
            </View>
          </View>
        </View>
      </Pressable>

      {/* BOTTOM SECTION */}
      <View style={tailwind('px-3')}>
        <View style={tailwind('flex-row justify-around')}>
          <View
            style={tailwind(
              'rounded-full border border-gray-400 py-1 px-2 mr-2 w-1/3',
            )}>
            <Text style={[t.textGray700]} numberOfLines={1}>
              Hepatitis-B
            </Text>
          </View>
          <View
            style={tailwind(
              'rounded-full border border-gray-400 py-1 px-2 mr-2 w-1/3',
            )}>
            <Text style={[t.textGray700]} numberOfLines={1}>
              Hidrosefalus
            </Text>
          </View>
          <View
            style={tailwind('rounded-full border border-gray-400 py-1 px-2 ')}>
            <Text style={[t.textGray700]} numberOfLines={1}>
              +2 More
            </Text>
          </View>
        </View>
      </View>

      {/* BUTTON */}
      <View style={tailwind('flex-row w-full p-3  justify-end')}>
        <Pressable
          style={({pressed}) => [
            tailwind(
              `w-5/12 py-2 border border-gray-500 rounded-full justify-center items-center ${
                pressed ? 'bg-blue-500' : 'bg-white'
              }`,
            ),
          ]}>
          {({pressed}) => (
            <TextBase style={tailwind(`${pressed ? 'text-white' : ''}`)}>
              Hubungi
            </TextBase>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowSmall: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  shadowMedium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  shadowLarge: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },

  shadowLargest: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
