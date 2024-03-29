import { initializeApp,getApps } from "firebase/app";
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
import { getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCTJMHJXvrHXqz7vDi6liqN9Ro0suuszs4",
  authDomain: "famousrecipe-44035.firebaseapp.com",
  projectId: "famousrecipe-44035",
  storageBucket: "famousrecipe-44035.appspot.com",
  messagingSenderId: "523349287196",
  appId: "1:523349287196:web:b020ffa3ac34f5cd5adad9",
  measurementId: "G-JJ4CP5BPS4"
};


export const app=getApps().length ===0?initializeApp(firebaseConfig):getApps()[0];
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db:any = getFirestore(app)
  const readUserData = async (userId:any) => {
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
  await addDoc(collection(db, "Users"), {
  uid: user.uid,
  name: user.displayName,
  authProvider: "google",
  email: user.email,
  });
  }
  } catch (err:any) {
  console.error(err);
  console.log('sign in wity googlke popup failed')
  alert(err.message);
  }
};




//const analytics = getAnalytics(app);
//export {app,firebaseConfig,auth,db,googleProvider,readUserData}