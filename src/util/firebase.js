import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyANO1h0J-DwV_rkPEmPVOSgDISSF-Gno_0 ',
  authDomain: 'bayisehat-chat.firebaseapp.com//',
  databaseURL: 'https://bayisehat-chat-default-rtdb.firebaseio.com',
  projectId: 'bayisehat-chat',
  storageBucket: 'bayisehat-chat.appspot.com',
  messagingSenderId: '371861147882',
  appId: '1:371861147882:android:b63f57cf04dd6fdc1c0793',
  // measurementId: 'G-BSXVN1XVL7//',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;