import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore /
  collection("users")
    .doc("nWWiEZerJfPcRuYMrzYD")
    .collection("cardItems")
    .doc("6bRN7VCPmklFMLPPhbpE");
firestore.doc("/users/nWWiEZerJfPcRuYMrzYD/cardItems/6bRN7VCPmklFMLPPhbpE");
firestore.collection("/users/nWWiEZerJfPcRuYMrzYD/cardItems");
