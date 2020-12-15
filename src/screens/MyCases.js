import React from 'react';
import tailwind from 'tailwind-rn';

import {useSelector, useDispatch} from 'react-redux';

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

import {useHeaderHeight} from '@react-navigation/stack';

import {Link} from '@react-navigation/native';
import ButtonBase from '../components/ButtonBase';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CaseListItem from '../components/CaseListItem';
import MyCaseListItem from '../components/MyCaseListItem';
import SearchBar from '../components/SearchBar';

import HomeNavItem from '../components/HomeNavItem';
import TextBase from '../components/TextBase';

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

export default function MyCases({navigation}) {
  const headerHeight = useHeaderHeight();

  const dispatch = useDispatch();

  const {Bayis} = useSelector((state) => state.userReducer.user.details);
  console.log({Bayis});

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
            <View style={[styles.container, tailwind('py-8 px-4')]}>
              {/* SEARCH */}
              <SearchBar placeholder="Nama anak atau orang tua/wali" />

              {/* MY CASES LIST */}
              {Bayis.map((bayi, i) => (
                <MyCaseListItem key={i} navigation={navigation} bayi={bayi} />
              ))}

              <View style={styles.circle1} />

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
    paddingVertical: 24,
    paddingHorizontal: 16,
    flex: 1,
    // justifyContent: 'space-around',
    // justifyContent: 'center',
  },
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
  subsectionTitle: {
    textAlign: 'left',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16,
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
    zIndex: -1,
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
