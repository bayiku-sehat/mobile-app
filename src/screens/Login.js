import React from 'react';

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

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

console.log('login');
export default function Login({navigation}) {
  function login() {
    // alert('Login');
    navigation.replace('Home');
  }

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <View style={{flex: 1}}>
            <View style={styles.circle1}></View>
            <View style={[styles.container, styles.inner]}>
              <View>
                <Text style={styles.label}>Username</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={{marginTop: 24}}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} />
              </View>

              <ButtonBase
                size="xl"
                onPress={() => login()}
                title="Log In"
                accessibilityLabel="Log In button"
                borderRadius={25}
                width={250}
                marginTop={24}
              />
            </View>
            <View style={styles.circle2}></View>
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
  label: {
    marginBottom: 10,
    marginLeft: 12,
    color: 'red',
    zIndex: 5,
  },
  input: {
    paddingLeft: 24,
    marginTop: 8,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    width: 250,
    height: 44,
    zIndex: 5,
  },
  countdownContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  boardContainer: {
    flex: 7,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionsContainer: {
    flex: 2,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
  },
  countdown: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  cell: {
    backgroundColor: 'rgb(130, 213, 129)',
    margin: 4,
    textAlign: 'center',
    height: 30,
    width: 30,
    color: 'black',
    borderRadius: 8,
  },
  cell3: {
    marginRight: 16,
  },
  row3: {
    marginBottom: 16,
  },
  disabled: {
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: '#ddd',
  },
  isFocused: {
    // color: 'black',
    backgroundColor: 'powderblue',
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
