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

              {/* ASSIGNMENTS FILTER */}
              <View
                style={[
                  styles.frame,
                  styles.shadowLarge,
                  {flexDirection: 'row'},
                ]}>
                {/* <HomeNavItem
                  icon="MaterialCommunityIcons"
                  name="baby-face-outline"
                  text="My Assignments"
                /> */}
                <View style={styles.filterItem}>
                  <Text>MY ASSIGNMENTS</Text>
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
              </View>

              {/* OPEN ASSIGNMENTS */}

              <View style={[styles.frame, styles.shadowLarge, {zIndex: 10}]}>
                <TextBase
                  bold
                  size={20}
                  // color="#1E88E5"
                  marginTop={6}
                  style={styles.sectionTitle}>
                  Open Assignments
                </TextBase>
                <View style={styles.assignmentList}>
                  <AssignmentListItem
                    name="Daryal Fuaddin"
                    address="Menteng"
                    status={-1}
                  />
                  <AssignmentListItem
                    name="Adrian"
                    address="Pondok Indah"
                    status={-2}
                  />
                  <AssignmentListItem name="Yogi" address="BSD" status={-3} />
                </View>
                <AssignmentListItem name="Ogi" address="Ciputat" status={-3} />
                <AssignmentListItem
                  name="Septian"
                  address="Manggarai"
                  status={-1}
                />
                <AssignmentListItem
                  name="Deo"
                  address="Cempaka Putih"
                  status={-1}
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

  assignmentList: {},

  statusCircle: {
    height: 24,
    width: 24,
    borderRadius: 100,
    backgroundColor: 'green',
    marginRight: 24,
  },

  assignmentListItem: {
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
