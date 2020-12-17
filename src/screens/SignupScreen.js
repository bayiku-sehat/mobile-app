import React, {useState, useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Title, IconButton} from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';


export default function SignupScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('')

  // const { register } = useContext(AuthContext);

  //cek firestore
  // const register =(email,password) => {
  //   var userRef = firebase.database().ref("USERS");
  //   const newUser={
  //     email,
  //     password
  //   }
  //   userRef.push(newUser)

  // }
  const register = (email, password,role) => {
    firestore()
      .collection('USERS')
      .add({
        email,
        password,
        role
      })
      .then(()=>{
        console.log(`User with email ${email} has been added`)
      })
  };

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Register to chat</Title>
      <FormInput
        labelName="Email"
        value={email}
        autoCapitalize="none"
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      {/* <Text> {JSON.stringify(email)}</Text>
      <Text> {JSON.stringify(password)}</Text>
      <Text>{JSON.stringify(role)}</Text> */}
      <FormInput
        labelName="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(userPassword) => setPassword(userPassword)}
      />
      
      <FormInput
        labelName="Role"
        value={role}
        autoCapitalize="none"
        onChangeText={(userRole) => setRole(userRole)}
      />
      <FormButton
        title="Signup"
        modeValue="contained"
        labelStyle={styles.loginButtonLabel}
        onPress={() => register(email, password,role)}
      />
      <IconButton
        icon="keyboard-backspace"
        size={30}
        style={styles.navButton}
        color="#6646ee"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 18,
  },
  navButton: {
    marginTop: 10,
  },
});
