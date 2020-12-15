import React, {useState, useContext, useEffect} from 'react';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);

  const [userLogin, setUserLogin] = useState([]);
  var userRef = firestore().collection('USERS');

  function loginDoctor(email, password) {
    firestore()
      .collection('USERS')
      .get()
      .then((querySnapshot) => {
        // console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach((documentSnapshot) => {
          // console.log(
          //   'User ID: ',
          //   documentSnapshot.id,
          //   documentSnapshot.data(),
          // );
          if(email === documentSnapshot.data().email && password === documentSnapshot.data().password){
            console.log(documentSnapshot.data().email)
            navigation.navigate('HomeDoctor')
          }else{
            console.log("password atau email salah")
          }
        });
      });
  }

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
                {/* <Text>{user}</Text> */}
                <Text style={styles.label}>Username</Text>
                <TextInput
                  style={[
                    styles.input,
                    focus === 'username' && styles.inputFocus,
                  ]}
                  value={email}
                  autoCapitalize="none"
                  onChangeText={(userEmail) => setEmail(userEmail)}
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
                  value={password}
                  secureTextEntry={true}
                  onChangeText={(userPassword) => setPassword(userPassword)}
                  onFocus={() => setFocus('password')}
                />
              </View>

              <ButtonBase
                // size="xl"
                onPress={() => login(email, password)}
                title="Parent Log In"
                borderRadius={25}
                width={250}
                marginTop={24}
              />

              <ButtonBase
                // size="xl"
                onPress={() => loginDoctor(email, password)}
                title="Doctor Log In"
                borderRadius={25}
                width={250}
                marginTop={24}
              />
              <FormButton
                borderRadius={25}
                width={250}
                marginTop={24}
                marginLeft={60}
                title="New user? Join here"
                modeValue="text"
                uppercase={false}
                labelStyle={styles.navButtonText}
                onPress={() => navigation.navigate('SignupScreen')}
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
