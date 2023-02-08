// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyALRpkHOUa3PGGtddlO5WzVC959Z-YH9p8',
  authDomain: 'leets-203bb.firebaseapp.com',
  projectId: 'leets-203bb',
  storageBucket: 'leets-203bb.appspot.com',
  messagingSenderId: '345947995292',
  appId: '1:345947995292:web:d38d017cf065de92e34159',
  measurementId: 'G-L2YMPFNE0G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default getFirestore(app);
