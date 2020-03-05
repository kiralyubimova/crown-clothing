import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBgNDAOgCtnne-WGRpykpRsb--bujHiB8M",
  authDomain: "crown-db-3a103.firebaseapp.com",
  databaseURL: "https://crown-db-3a103.firebaseio.com",
  projectId: "crown-db-3a103",
  storageBucket: "crown-db-3a103.appspot.com",
  messagingSenderId: "552887922878",
  appId: "1:552887922878:web:fa343ce56de9f5c6cc6eef",
  measurementId: "G-4SFFFFG6XJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
