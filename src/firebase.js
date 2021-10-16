// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  import firebase from "firebase";
  const firebaseApp = firebase.initializeApp({ apiKey: "AIzaSyCR1D3ez7K_VACzmkE9lDrpZcrwpn7M8X0",
  authDomain: "instagram-clone-react-42877.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-42877-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-42877",
  storageBucket: "instagram-clone-react-42877.appspot.com",
  messagingSenderId: "968579910987",
  appId: "1:968579910987:web:41c59ca0172d2063862cce",
  measurementId: "G-S952M6SSX7"});
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  export{db , auth, storage};