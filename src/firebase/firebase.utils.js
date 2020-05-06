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
  appId: "1:1022165659063:web:60ec524e01274661e48c32",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, addinitialData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/1231xassadcas`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...addinitialData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
  const transformedCollection = collectionsSnapshot.docs.map((docSnapShot) => {
    const { title, items } = docSnapShot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapShot.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
