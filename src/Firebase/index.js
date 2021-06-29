import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDy2HzO_5nE-nxkW_VajkKm7PMr2eMMUX0',
  authDomain: 'dognet-233d6.firebaseapp.com',
  databaseURL: 'https://dognet-233d6-default-rtdb.firebaseio.com',
  projectId: 'dognet-233d6',
  storageBucket: 'dognet-233d6.appspot.com',
  messagingSenderId: '745602144025',
  appId: '1:745602144025:web:69438010073a6a406a5788',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
