import React, {useContext}from 'react';
import { AuthContext } from '../navigation/AuthProvider';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import ButtonBase from '../components/ButtonBase';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeNavItem from '../components/HomeNavItem';
import TextBase from '../components/TextBase';

// import AsyncStorage from '@react-native-async-storage/async-storage';

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

// const getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('@role');
//     if (value !== null) {
//       // value previously stored
//     }
//   } catch (e) {
//     // error reading value
//   }
// };

// let role = getData();
export default function Home({navigation}) {
  // console.log(role);
  const {user, logout } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={{alignItems: 'flex-end'}}>
          <ButtonBase
            size="sm"
            onPress={() => logout()}
            title="Sign Out"
            backgroundColor="black"
            marginTop={10}
            marginRight={10}
          />
        </View>
        <View style={styles.body}>
          <View style={{flex: 1}}>
            <View style={[styles.container, styles.inner]}>
              <View style={styles.circle1} />

              {/* PROFILE */}
              <View style={[styles.profileContainer, styles.shadowLarge]}>
                <View style={styles.photoContainer}>
                  <Image
                    style={styles.avatar}
                    source={{
                      uri:
                        'https://cdn1-production-images-kly.akamaized.net/CASsRi73DznnCPVGy_MO48zCeMA=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2786209/original/029379000_1556018610-Melody_Nurramdhani.jpg',
                    }}
                  />
                </View>
                <View style={styles.data}>
                  <TextBase bold size={16}>
                  { (user.email)}
                  </TextBase>
                  <TextBase light>Orang Tua</TextBase>
                  <TextBase>+62 812 1000 1000</TextBase>
                </View>
              </View>

              {/* NAVIGATION */}
              <View style={[styles.homeNavigation, styles.shadowLarge]}>
                <HomeNavItem
                  icon="MaterialCommunityIcons"
                  name="baby-face-outline"
                  text="Bayiku"
                  onPress={() => navigation.navigate('Bayiku')}
                />
                <HomeNavItem
                  name="ios-calendar-outline"
                  text="Jadwal Vaksin"
                  onPress={() => navigation.navigate('JadwalVaksin')}
                />

                <HomeNavItem
                  name="ios-call-outline"
                  text="Hubungi Dokter"
                  // onPress={() => navigation.navigate('HubungiDokter')
                  onPress={() => navigation.navigate('HomeScreen')}
                
                />

                <HomeNavItem
                  name="ios-settings-outline"
                  text="Pengaturan"
                  borderBottom={false}
                  onPress={() => navigation.navigate('Pengaturan')}
                />
              </View>
              <View style={styles.circle2} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 24,
    minHeight: ScreenHeight,
  },

  body: {
    // backgroundColor: Colors.white,
    zIndex: 5,
  },
  inner: {
    padding: 24,
    flex: 1,
    // justifyContent: 'space-around',
    // justifyContent: 'center',
  },

  profileContainer: {
    marginTop: 50,
    backgroundColor: 'white',
    width: ScreenWidth * 0.9,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    height: 90,
    width: 90,
    borderRadius: 100,
    overflow: 'hidden',
    position: 'absolute',
    top: -45,
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

  avatar: {
    height: 90,
    width: 90,
  },

  data: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
  },

  homeNavigation: {
    marginTop: 24,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: 'white',
    width: ScreenWidth * 0.9,
    borderRadius: 16,
  },

  scrollView: {
    backgroundColor: '#eee',
  },
  label: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  circle1: {
    backgroundColor: '#1E88E5',
    height: ScreenWidth * 1.25,
    width: ScreenWidth * 1.25,
    borderRadius: 1000,
    position: 'absolute',
    top: ScreenWidth * -0.85,
    left: -100,
    right: -100,
    bottom: -250,
  },
  circle2: {
    backgroundColor: '#1E88E5',
    height: 200,
    width: 200,
    borderRadius: 1000,
    position: 'absolute',
    top: ScreenHeight - 80,
    left: ScreenWidth - 150,
  },
});
