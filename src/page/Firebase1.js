
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBAT4pH9JgWW8fKdaC19ExUE3DPYZs8SLY",
  authDomain: "myproject-31b0d.firebaseapp.com",
  projectId: "myproject-31b0d",
  storageBucket: "myproject-31b0d.appspot.com",
  messagingSenderId: "858853901254",
  appId: "1:858853901254:web:5d645f06defac71aa968c7",
  measurementId: "G-KF2DQ538L7"
};
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
 