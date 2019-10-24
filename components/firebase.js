import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAqwMcKSqGkxf98XUfK2lDtxCr4V5UUMi8",
    authDomain: "assignment2-firebase1.firebaseapp.com",
    databaseURL: "https://assignment2-firebase1.firebaseio.com",
    projectId: "assignment2-firebase1",
    storageBucket: "assignment2-firebase1.appspot.com",
    messagingSenderId: "2312350713",
    appId: "1:2312350713:web:854ad9087d4f15f421eb28"
};

firebase.initializeApp(firebaseConfig);

export default firebase; 