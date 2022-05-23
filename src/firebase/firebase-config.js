import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDIDdg1JRCEN8aI6ng9qMvluqSn_nUaHpk',
  authDomain: 'react-journal-app-a8d9d.firebaseapp.com',
  projectId: 'react-journal-app-a8d9d',
  storageBucket: 'react-journal-app-a8d9d.appspot.com',
  messagingSenderId: '41585561633',
  appId: '1:41585561633:web:b9efbdc1422f42bcf85360',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider, app };
