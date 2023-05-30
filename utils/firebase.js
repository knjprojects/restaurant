import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc
} from "firebase/firestore";
const firebaseConfig={
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "helpme-64896.firebaseapp.com",
    projectId: "helpme-64896",
    storageBucket: "helpme-64896.appspot.com",
    messagingSenderId: "260898256355",
    appId: "1:260898256355:web:d761a3e5a8f1f2bbcfdcd6",
    measurementId: "G-WG99XG9KZH"
  };
  const firebase = require('firebase');

  // Initialize Firebase

  
  firebase.initializeApp(firebaseConfig);

  
  const readUserData = async (userId) => {
    try {
      const userRef = db.collection('users').doc(userId);
      const userData = await userRef.get();
  
      if (userData.exists) {
        return userData.data();
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      console.error('Error reading user data:', error);
      throw error;
    }
  };

  
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth();
//firebase.auth().useDeviceLanguage();
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');




/*signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });*/


const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};





export {auth,db,googleProvider,readUserData}