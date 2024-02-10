import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA9CY2shbxE8zIm0bUeW2CiBHHpJsjDURo',
  authDomain: 'freedomwallv2-f6e93.firebaseapp.com',
  projectId: 'freedomwallv2-f6e93',
  storageBucket: 'freedomwallv2-f6e93.appspot.com',
  messagingSenderId: '261982449610',
  appId: '1:261982449610:web:1630fefd93ceb3cfab6933',
  measurementId: 'G-QVCDGBXMKM',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
