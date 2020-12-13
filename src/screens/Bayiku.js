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
import FA5Icon from 'react-native-vector-icons/FontAwesome5';

import AssignmentListItem from '../components/AssignmentListItem';

import HomeNavItem from '../components/HomeNavItem';
import TextBase from '../components/TextBase';

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

export default function HomeDoctor({navigation}) {
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
                <View style={styles.badgesContainer}>
                  <View style={[styles.badge, styles.success]}>
                    <Text style={[styles.badgeText]}>Normal</Text>
                  </View>
                  <View style={[styles.badge, styles.danger]}>
                    <Text style={[styles.badgeText]}>Unverified</Text>
                  </View>
                </View>
                <View style={styles.photoRing}>
                  <View style={styles.photoContainer}>
                    <Image
                      style={styles.avatar}
                      source={{
                        uri:
                          'https://akcdn.detik.net.id/visual/2020/04/15/5cc7028a-5809-4d5d-b951-ae8bb43674c0_43.jpeg?w=400&q=90',
                      }}
                    />
                  </View>
                </View>

                <View style={styles.data}>
                  <TextBase bold size={16}>
                    Daryal Fuaddin
                  </TextBase>
                  <TextBase light>6 bulan</TextBase>
                </View>
                <View style={[styles.imagePreviewList]}>
                  {[1, 2, 3].map((_, i) => (
                    <View key={i} style={styles.imagePreviewListItem}>
                      <Image
                        style={styles.imagePreview}
                        source={{
                          uri:
                            'https://akcdn.detik.net.id/visual/2020/04/15/5cc7028a-5809-4d5d-b951-ae8bb43674c0_43.jpeg?w=400&q=90',
                        }}
                      />
                    </View>
                  ))}
                  <View style={[styles.imagePreviewListItem]}>
                    <View style={styles.overlayContainer}>
                      <View style={styles.overlay} />
                      <Text style={styles.textOverlay}>+7</Text>
                    </View>
                    <Image
                      style={[styles.imagePreview]}
                      source={{
                        uri:
                          'https://akcdn.detik.net.id/visual/2020/04/15/5cc7028a-5809-4d5d-b951-ae8bb43674c0_43.jpeg?w=400&q=90',
                      }}
                    />
                  </View>
                </View>
              </View>

              {/* ASSIGNMENTS FILTER */}
              <View
                style={[
                  styles.frame,
                  styles.shadowLarge,
                  {flexDirection: 'column'},
                ]}>
                <TextBase
                  bold
                  size={20}
                  // color="#1E88E5"
                  marginTop={6}
                  style={styles.sectionTitle}>
                  Data Fisik Bayi
                </TextBase>
                <View style={styles.tanggalUpdate}>
                  <TextBase>Tanggal update terakhir: </TextBase>
                  <TextBase bold>13 Desember 2020</TextBase>
                </View>
                <View style={styles.dataContainer}>
                  <View style={styles.dataItemContainer}>
                    <View style={styles.dataTitle}>
                      <Text style={styles.dataText}>Kepala</Text>
                    </View>
                    <View style={styles.dataInputContainer}>
                      <TextInput
                        value="40"
                        numeric
                        keyboardType={'numeric'}
                        style={styles.dataInput}
                      />
                      <Text style={styles.dataInputUnit}> cm</Text>
                    </View>
                    <FA5Icon
                      name="smile"
                      style={[styles.statusIcon, {color: 'green'}]}
                    />
                  </View>
                  <View style={styles.dataItemContainer}>
                    <View style={styles.dataTitle}>
                      <Text style={styles.dataText}>Tinggi</Text>
                    </View>
                    <View style={styles.dataInputContainer}>
                      <TextInput
                        value="59"
                        numeric
                        keyboardType={'numeric'}
                        style={styles.dataInput}
                      />
                      <Text style={styles.dataInputUnit}> cm</Text>
                    </View>
                    <FA5Icon
                      name="frown"
                      style={[styles.statusIcon, {color: 'orange'}]}
                    />
                  </View>
                  <View style={styles.dataItemContainer}>
                    <View style={styles.dataTitle}>
                      <Text style={styles.dataText}>Berat</Text>
                    </View>
                    <View style={styles.dataInputContainer}>
                      <TextInput
                        value="6"
                        numeric
                        keyboardType={'numeric'}
                        style={styles.dataInput}
                      />
                      <Text style={styles.dataInputUnit}> kg</Text>
                    </View>
                    <FA5Icon
                      name="smile"
                      style={[styles.statusIcon, {color: 'green'}]}
                    />
                  </View>
                </View>
                <ButtonBase
                  title="Update Data"
                  borderRadius={100}
                  marginBottom={12}
                />
              </View>

              {/* OPEN ASSIGNMENTS */}

              <View style={[styles.frame, styles.shadowLarge]}>
                <TextBase
                  bold
                  size={20}
                  // color="#1E88E5"
                  marginTop={6}
                  style={styles.sectionTitle}>
                  Riwayat Perkembangan Bayi
                </TextBase>
                <View style={styles.assignmentList}></View>
              </View>
              <View style={[styles.frame, styles.shadowLarge]}>
                <TextBase
                  bold
                  size={20}
                  // color="#1E88E5"
                  marginTop={6}
                  style={styles.sectionTitle}>
                  Riwayat Rekam Medis
                </TextBase>
                <View style={styles.assignmentList}></View>
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
    alignItems: 'center',
  },

  badgesContainer: {
    width: '100%',
    alignItems: 'flex-end',
    zIndex: 10,
    top: 10,
    position: 'absolute',
  },

  badge: {
    width: 90,
    marginVertical: 6,
    paddingVertical: 4,
    paddingLeft: 12,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },

  success: {
    backgroundColor: '#5DB075',
  },

  danger: {
    backgroundColor: '#FE5555',
  },

  badgeText: {
    color: 'white',
    fontSize: 12,
  },

  photoRing: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 98,
    width: 98,
    borderRadius: 100,
    backgroundColor: 'white',
    position: 'absolute',
    top: -45,
  },
  photoContainer: {
    height: 90,
    width: 90,
    borderRadius: 100,
    overflow: 'hidden',
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

  imagePreviewList: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-around',
    width: '100%',
  },

  imagePreviewListItem: {
    borderRadius: 6,
    overflow: 'hidden',
  },

  overlayContainer: {
    height: 64,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    position: 'absolute',
  },

  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: '#0F427D',
    position: 'absolute',
    opacity: 0.65,
  },

  textOverlay: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  imagePreview: {
    height: 64,
    aspectRatio: 1,
  },

  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dataItemContainer: {
    flex: 1,
    paddingHorizontal: 6,
  },
  dataTitle: {
    paddingVertical: 3,
    width: '100%',
    borderRadius: 50,
    backgroundColor: '#a75aff',
    marginBottom: 6,
  },

  tanggalUpdate: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  dataText: {
    textAlign: 'center',
    color: 'white',
  },

  dataInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataInput: {
    height: 40,
    width: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 0,
    paddingLeft: 6,
    paddingRight: 6,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    fontSize: 26,
    textAlign: 'right',
  },

  dataInputUnit: {},

  statusIcon: {
    marginTop: 10,
    marginBottom: 30,
    fontSize: 24,
    textAlign: 'center',
  },

  sectionTitle: {
    marginBottom: 20,
    textAlign: 'center',
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
