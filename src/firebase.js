import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_1fKDmJ-ae2vL6cjIeYENmTvoG_0kFQM",
  authDomain: "netflix-clone-new-f015b.firebaseapp.com",
  projectId: "netflix-clone-new-f015b",
  storageBucket: "netflix-clone-new-f015b.appspot.com",
  messagingSenderId: "1056409262807",
  appId: "1:1056409262807:web:57ffc55b28da59db2e6e92",
  measurementId: "G-ZTE0TFST26",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { auth, app };
export default db;
