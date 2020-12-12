import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import ButtonBase from '../components/ButtonBase';

import {Colors} from 'react-native/Libraries/NewAppScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

export default function Login({navigation}) {
  const [focus, setFocus] = useState(null);

  function login() {
    // alert('Login');
    // storeData('parent');
    navigation.replace('Home');
  }

  function loginDoctor() {
    navigation.replace('HomeDoctor');
  }
  // const storeData = async (value) => {
  //   try {
  //     await AsyncStorage.setItem('@role', value);
  //   } catch (e) {
  //     // saving error
  //     console.log(e);
  //   }
  // };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <View style={{flex: 1}}>
            <View style={styles.circle1} />
            <View style={[styles.container, styles.inner]}>
              <View>
                <Text style={styles.label}>Username</Text>
                <TextInput
                  style={[
                    styles.input,
                    focus === 'username' && styles.inputFocus,
                  ]}
                  onFocus={() => setFocus('username')}
                />
              </View>
              <View>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={[
                    styles.input,
                    focus === 'password' && styles.inputFocus,
                  ]}
                  onFocus={() => setFocus('password')}
                />
              </View>

              <ButtonBase
                // size="xl"
                onPress={() => login()}
                title="Parent Log In"
                borderRadius={25}
                width={250}
                marginTop={24}
              />

              <ButtonBase
                // size="xl"
                onPress={() => loginDoctor()}
                title="Doctor Log In"
                borderRadius={25}
                width={250}
                marginTop={24}
              />
            </View>
            <View style={styles.circle2} />
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
    justifyContent: 'space-between',
    paddingTop: 24,
    minHeight: ScreenHeight,
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
    zIndex: 2,
  },
  circle2: {
    backgroundColor: '#1E88E5',
    height: 200,
    width: 200,
    borderRadius: 1000,
    position: 'absolute',
    top: ScreenHeight - 80,
    left: ScreenWidth - 150,
    zIndex: 2,
  },
  inner: {
    padding: 24,
    flex: 1,
    // justifyContent: 'space-around',
    justifyContent: 'center',
  },

  input: {
    paddingLeft: 24,
    marginTop: 8,
    marginBottom: 24,
    // borderWidth: 1,
    // borderColor: '#ccc',
    borderRadius: 25,
    width: 250,
    height: 44,
    zIndex: 5,
    backgroundColor: '#eee',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.52,
    shadowRadius: 2.22,

    elevation: 3,
  },
  inputFocus: {
    borderWidth: 2,
    borderColor: '#1E88E5',
  },
  scrollView: {
    backgroundColor: '#eee',
  },
  label: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});
