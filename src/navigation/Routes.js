import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import {MainStackNavigator} from '../navigation/StackNavigatorPatient';



import HomeStack from './HomeStack';
import {AuthContext} from './AuthProvider';
import Loading from '../components/Loading';
import firestore from '@react-native-firebase/firestore';

export default function Routes() {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);
  const [patient, setPatient] = useState([]);
  const [dokter, setDokter] = useState([]);
  const [userLogedIn,setUserLogedIn] = useState ([])

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }

  //pengecekan ke firestore
  var userRef = firestore().collection('USERS');
  useEffect(()=>{
    firestore()
    .collection('USERS')
    .get()
    .then((querySnapshot) => {
      if (user.email) {
        querySnapshot.forEach((documentSnapshot) => {
          
          if (user.email === documentSnapshot.data().email) {
            setUserLogedIn(documentSnapshot.data())
            if (documentSnapshot.data().role == 'orang tua') {
              setPatient([documentSnapshot.data()]);
            } else {
              setDokter([documentSnapshot.data()]);
            }
          }
        });
      }else{
        setPatient([])
        setDokter([])
      }
    })
    .catch(console.log);
  },[user])
  

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }

  console.log(patient,'pasien')
  console.log(dokter,'dokter')
  return (
      
    <NavigationContainer>
      {patient.length>0 && user ? <MainStackNavigator user={userLogedIn}/> : <AuthStack />}
     {/* {dokter.length>0 ? <MainStackNavigatorDokter /> : <AuthStack />} */}
    </NavigationContainer>
 
    // <NavigationContainer>

    // </NavigationContainer> 
  );
}
