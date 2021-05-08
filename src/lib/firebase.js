import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from "../seed"

const firebaseConfig = {
    apiKey: "AIzaSyAtiGTBrt0nObKK25A9g6ML-v2tJmfe9pY",
    authDomain: "instagram-me.firebaseapp.com",
    projectId: "instagram-me",
    storageBucket: "instagram-me.appspot.com",
    messagingSenderId: "499695050656",
    appId: "1:499695050656:web:1d33adedb23b2b6875cec5"
};

const firebase = Firebase.initializeApp(firebaseConfig)
const { FieldValue } = Firebase.firestore
// seedDatabase(firebase)

export { firebase, FieldValue }