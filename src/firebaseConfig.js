// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb5Ywtod3lmMUawoAWtNxAKVscDvkQ0x0",
  authDomain: "my-drop-box.firebaseapp.com",
  projectId: "my-drop-box",
  storageBucket: "my-drop-box.appspot.com",
  messagingSenderId: "993093971273",
  appId: "1:993093971273:web:fc4f17564c873add867e98",
  measurementId: "G-TD14NS3HJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

// import firebase from "firebase/app";
// import "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyAb5Ywtod3lmMUawoAWtNxAKVscDvkQ0x0",
//   authDomain: "my-drop-box.firebaseapp.com",
//   projectId: "my-drop-box",
//   storageBucket: "my-drop-box.appspot.com",
//   messagingSenderId: "993093971273",
//   appId: "1:993093971273:web:fc4f17564c873add867e98",
//   measurementId: "G-TD14NS3HJX"
// };

// firebase.initializeApp(firebaseConfig);

// export const storage = firebase.storage();

