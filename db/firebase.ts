// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { API_KEY, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID } from '@/config/keys';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'freedomwallv2-f6e93.firebaseapp.com',
  projectId: 'freedomwallv2-f6e93',
  storageBucket: 'freedomwallv2-f6e93.appspot.com',
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
