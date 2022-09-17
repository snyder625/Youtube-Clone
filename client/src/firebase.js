import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdewXd-hekelgEU4M7vBdw76OUsEFZUTI",
  authDomain: "clone-86962.firebaseapp.com",
  projectId: "clone-86962",
  storageBucket: "clone-86962.appspot.com",
  messagingSenderId: "851747887778",
  appId: "1:851747887778:web:3f5bebeb434cd1bb7f95fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;