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
  TouchableOpacity,
} from 'react-native';
import {Link} from '@react-navigation/native';
import ButtonBase from '../components/ButtonBase';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CaseListItem from '../components/CaseListItem';

import HomeNavItem from '../components/HomeNavItem';
import TextBase from '../components/TextBase';

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

export default function LeaderBoard({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={{alignItems: 'flex-end', zIndex: 10}}>
          <ButtonBase
            size="sm"
            onPress={() => navigation.replace('Login')}
            title="Sign Out"
            backgroundColor="black"
            marginTop={10}
            marginRight={10}
          />
        </View>
        <View style={styles.body}>
          <View style={{flex: 1}}>
            <View style={[styles.container, styles.inner]}>
              <View style={styles.circle1}></View>
              {/* PROFILE */}
              <View
                style={[
                  styles.profileContainer,
                  styles.shadowLarge,
                  styles.filter,
                ]}>
                <View style={styles.photoContainer}>
                  <Image
                    style={styles.avatar}
                    source={{
                      uri:
                        'https://steemitimages.com/640x0/https://img.esteem.ws/adh8217cds.jpg',
                    }}
                  />
                </View>
                <View style={styles.data}>
                  <TextBase bold size={16}>
                    dr. Camila
                  </TextBase>
                  <TextBase light>Dokter</TextBase>
                  <TextBase>+62 812 9999 9999</TextBase>
                </View>
              </View>

              <View style={[styles.homeNavigation, styles.shadowLarge]}>
                <HomeNavItem
                  icon="MaterialCommunityIcons"
                  name="baby-face-outline"
                  text="My Cases"
                  onPress={() => navigation.navigate('MyCases')}
                />
                <HomeNavItem
                  icon="MaterialCommunityIcons"
                  name="emoticon-sad-outline"
                  text="Open Cases"
                  onPress={() => navigation.navigate('OpenCases')}
                />

                <HomeNavItem
                  name="medal"
                  text="Leader Board"
                  onPress={() => navigation.navigate('Leaderboard')}
                />

                <HomeNavItem
                  icon="Ionicons"
                  name="ios-settings-outline"
                  text="Pengaturan"
                  borderBottom={false}
                  onPress={() => navigation.navigate('Pengaturan')}
                />
              </View>

              {/* CASES FILTER */}
              {/* <View
                style={[
                  styles.frame,
                  styles.shadowLarge,
                  {flexDirection: 'row'},
                ]}>
                <View style={styles.filterItem}>
                  <Text>MY CASES</Text>
                </View>
                <View style={styles.filterItem}>
                  <Text>ALL</Text>
                </View>
                <View style={styles.filterItem}>
                  <Text>OPEN</Text>
                </View>
                <View style={styles.filterItem}>
                  <Text>CLOSED</Text>
                </View>
              </View> */}

              {/* OPEN CASES */}

              <View style={[styles.frame, styles.shadowLarge, {zIndex: 10}]}>
                <TextBase
                  bold
                  size={20}
                  // color="#1E88E5"
                  marginTop={6}
                  style={styles.sectionTitle}>
                  Open Cases Terlama
                </TextBase>
                <View style={{flexDirection: 'row'}}>
                  <TextBase>Desa/Kel:</TextBase>
                  <TextBase bold marginLeft={8}>
                    Pengadegan
                  </TextBase>
                </View>
                <TextBase>Pancoran, Jakarta Selatan</TextBase>

                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                  <TextBase bold color="red" size={16} marginVertical={6}>
                    6 bayi
                  </TextBase>
                  <TextBase marginLeft={6}>butuh penanganan</TextBase>

                  <TextBase marginLeft={6} bold color="red">
                    segera
                  </TextBase>
                </View>

                <View style={styles.caseList}>
                  <CaseListItem
                    name="Daryal Fuaddin"
                    address="Menteng"
                    status={-1}
                    age={6}
                    updatedAt="4 hari 2 jam"
                  />
                  <CaseListItem
                    name="Adrian"
                    address="Pondok Indah"
                    status={-2}
                    age={10}
                    updatedAt="3 hari 19 jam"
                  />
                  <CaseListItem
                    name="Yogi"
                    address="BSD"
                    status={-3}
                    age={12}
                    updatedAt="3 hari 17 jam"
                  />
                  <CaseListItem
                    name="Ogi"
                    address="Ciputat"
                    status={-3}
                    age={15}
                    updatedAt="3 hari 6 jam"
                  />
                  <CaseListItem
                    name="Septian"
                    address="Manggarai"
                    status={-1}
                    age={18}
                    updatedAt="3 hari 1 jam"
                  />
                  <CaseListItem
                    name="Ikhrom"
                    address="Cempaka Putih"
                    status={-1}
                    age={2}
                    updatedAt="2 hari 18 jam"
                  />
                </View>
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

  signout: {
    marginTop: 10,
    marginRight: 10,
  },

  homeNavigation: {
    marginTop: 24,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: 'white',
    width: ScreenWidth * 0.9,
    borderRadius: 16,
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

  frame: {
    marginTop: 24,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: 'white',
    width: ScreenWidth * 0.9,
    borderRadius: 16,
  },

  filter: {},

  filterItem: {
    width: (ScreenWidth * 0.9 - 24) / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sectionTitle: {
    marginBottom: 20,
    textAlign: 'center',
  },

  caseList: {},

  statusCircle: {
    height: 24,
    width: 24,
    borderRadius: 100,
    backgroundColor: 'green',
    marginRight: 24,
  },

  caseListItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  actions: {
    justifyContent: 'center',
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
    top: 500,
    left: ScreenWidth - 150,
    zIndex: 1,
  },
});
