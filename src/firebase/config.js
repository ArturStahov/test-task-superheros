import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD34TEphko4HXAfwRdCsllM5mkvC21Dxkc',
  authDomain: 'super-hero-factory-f0ab8.firebaseapp.com',
  databaseURL: 'https://super-hero-factory-f0ab8-default-rtdb.firebaseio.com',
  projectId: 'super-hero-factory-f0ab8',
  storageBucket: 'super-hero-factory-f0ab8.appspot.com',
  messagingSenderId: '22925264515',
  appId: '1:22925264515:web:b121ecfc15dee0c26cbdb6',
  measurementId: 'G-B1D1D8BEBB',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
