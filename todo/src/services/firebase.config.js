import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAJa3WhkXwMUrBPkLhKrOkV3iTXk4cAmZY",
  authDomain: "react-todoapplication-21bdd.firebaseapp.com",
  projectId: "react-todoapplication-21bdd",
  storageBucket: "react-todoapplication-21bdd.firebasestorage.app",
  messagingSenderId: "253753153611",
  appId: "1:253753153611:web:bfaf0485226eb5fc9615ce",
  measurementId: "G-MVQSNEGDHN"
};

const app = initializeApp(config);

export const db = getFirestore(app);