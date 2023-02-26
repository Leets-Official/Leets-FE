// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyALRpkHOUa3PGGtddlO5WzVC959Z-YH9p8',
  authDomain: 'leets-203bb.firebaseapp.com',
  projectId: 'leets-203bb',
  storageBucket: 'leets-203bb.appspot.com',
  messagingSenderId: '345947995292',
  appId: '1:345947995292:web:d38d017cf065de92e34159',
  measurementId: 'G-L2YMPFNE0G',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore(app);

export { firestore, auth };
