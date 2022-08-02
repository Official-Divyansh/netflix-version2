import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA5AUfxfEoOyf91g2N7zlS4JAeiS_H1UIw",
    authDomain: "login-9d943.firebaseapp.com",
    projectId: "login-9d943",
    storageBucket: "login-9d943.appspot.com",
    messagingSenderId: "64399234498",
    appId: "1:64399234498:web:f1f1c89ff4fef0109ff25b"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

export default fire;