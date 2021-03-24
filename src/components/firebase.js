import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD-x-oVevBjKIwXaA5j4ykYevCU3xjXuwI",
    authDomain: "react-solutions-with-redux.firebaseapp.com",
    projectId: "react-solutions-with-redux",
    storageBucket: "react-solutions-with-redux.appspot.com",
    messagingSenderId: "905428083527",
    appId: "1:905428083527:web:e8c3426c251f6a4f166262",
    measurementId: "G-T84NXS0W95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;