import React from 'react';

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

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

export default function Home({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <View style={{flex: 1}}>
            <View style={[styles.container, styles.inner]}>
              {/* PROFILE */}
              <View style={styles.profileContainer}>
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
                  <Text>Bu Melody</Text>
                  <Text>Orang Tua</Text>
                  <Text>+62 812 1000 1000</Text>
                </View>
              </View>

              {/* NAVIGATION */}
              <View style={styles.homeNavigation}>
                <HomeNavItem
                  icon="MaterialCommunityIcons"
                  name="baby-face-outline"
                  text="Bayiku"
                />
                <HomeNavItem name="ios-calendar-outline" text="Jadwal Vaksin" />

                <HomeNavItem name="ios-call-outline" text="Hubungi Dokter" />

                <HomeNavItem
                  name="ios-settings-outline"
                  text="Pengaturan"
                  borderBottom={false}
                />
              </View>
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
});
