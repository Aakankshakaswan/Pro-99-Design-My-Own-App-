import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDyn2X3xZ4gTHo1R64l3TmaWpPq0_msGRI",
  authDomain: "my-own-app-97115.firebaseapp.com",
  projectId: "my-own-app-97115",
  storageBucket: "my-own-app-97115.appspot.com",
  messagingSenderId: "635291969754",
  appId: "1:635291969754:web:5dd7898392b7602d23dde3"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  };
  
  export default firebase.database();