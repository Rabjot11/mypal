import { initializeApp } from "firebase/app";

import{getFirestore}  from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDgKGTqSb68FzB4J38seh_MMimYaQKOE68",
  authDomain: "mypal-ee402.firebaseapp.com",
  projectId: "mypal-ee402",
  storageBucket: "mypal-ee402.appspot.com",
  messagingSenderId: "78422918395",
  appId: "1:78422918395:web:e75af2856dfcff9055dc5e",
  measurementId: "G-JCJJ5GP4D0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const auth =  getAuth(app)

export{db,auth}