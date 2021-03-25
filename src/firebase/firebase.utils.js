import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyACyXa_tPMa_IX536-RyfpK6_sP3ebxZZU",
  authDomain: "cwn-clothing.firebaseapp.com",
  projectId: "cwn-clothing",
  storageBucket: "cwn-clothing.appspot.com",
  messagingSenderId: "671088559443",
  appId: "1:671088559443:web:ad67c768cf5fbcae8f4da6",
  measurementId: "G-Y0BDSV2NBT",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

//Auth (firebase.auth from above) below enables signing in with all sorts of providers,
//and the provider passed in this case is via google from above.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
