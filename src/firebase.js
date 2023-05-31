import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoTOJpX3P6c8eeGwp408tvUuZAH-o9_xg",
  authDomain: "sample-7632e.firebaseapp.com",
  projectId: "sample-7632e",
  storageBucket: "sample-7632e.appspot.com",
  messagingSenderId: "651372394116",
  appId: "1:651372394116:web:670c83998c7f6bbe8874d1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
