import firebase from "firebase";
require("@firebase/firestore");

 var firebaseConfig = {
    apiKey: "AIzaSyDyXRz165FCqufJGKD_jiTtALdsuYIhlMw",
    authDomain: "ff-12-3a774.firebaseapp.com",
    projectId: "ff-12-3a774",
    storageBucket: "ff-12-3a774.appspot.com",
    messagingSenderId: "777401858545",
    appId: "1:777401858545:web:cbd5b62a8ff602ea5bec50",
    measurementId: "G-CSX7TYLVGC"
  };

// Initialize Firebase

if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
}


export default firebase.firestore();
