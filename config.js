import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4T8b6ao6FVFhTw_PsWP5FBQo7eS5bf4Y",
  authDomain: "medicine-reminder-77a18.firebaseapp.com",
  projectId: "medicine-reminder-77a18",
  storageBucket: "medicine-reminder-77a18.appspot.com",
  messagingSenderId: "272826992572",
  appId: "1:272826992572:web:77299c4a768b21f3a84db9",
};

if (firebase.apps.length == 0) {
  const app = firebase.initializeApp(firebaseConfig);
}

export default firebase;
