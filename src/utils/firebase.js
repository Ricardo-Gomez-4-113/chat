import firebase from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBBI59yX6HMBfMOe2xkicmZpT_prvXyYK4",
    authDomain: "chat-d2945.firebaseapp.com",
    databaseURL: "https://chat-d2945-default-rtdb.firebaseio.com",
    projectId: "chat-d2945",
    storageBucket: "chat-d2945.appspot.com",
    messagingSenderId: "773562730763",
    appId: "1:773562730763:web:506c1e2f84b5ef7da5fa0e"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);