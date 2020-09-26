import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// var admin = require('firebase-admin');

// var serviceAccount = require('path/to/serviceAccountKey.json');

const firebaseConfig = {
  apiKey: 'AIzaSyDa3CgkFdpnqGNJTARju7yaq27ploOD0QI',
  authDomain: 'https://online-learning-app-hackathon.firebaseapp.com',
  databaseURL: 'https://online-learning-app-hackathon.firebaseio.com',
  projectId: 'online-learning-app-hackathon',
  storageBucket: 'online-learning-app-hackathon.appspot.com',
  messagingSenderId: '551093808020',
  appId: '1:551093808020:android:a7bccb478db0a2bc057d81',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://online-learning-app-hackathon.firebaseio.com',
// });

export {firebase};
