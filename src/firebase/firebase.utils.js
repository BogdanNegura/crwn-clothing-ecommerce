import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCDsPFj8KtGRTEKr5W7raZiTTd4YDsYehc",
  authDomain: "crwn-db-e7605.firebaseapp.com",
  databaseURL: "https://crwn-db-e7605.firebaseio.com",
  projectId: "crwn-db-e7605",
  storageBucket: "crwn-db-e7605.appspot.com",
  messagingSenderId: "1022165659063",
  appId: "1:1022165659063:web:60ec524e01274661e48c32"
};

export const createUserProfileDocument = async (userAuth, addinitialData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...addinitialData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
