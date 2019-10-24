import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    authDomain: "assignment2-firebase1.firebaseapp.com",
    databaseURL: "https://assignment2-firebase1.firebaseio.com",
    storageBucket: "assignment2-firebase1.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default firebase; 