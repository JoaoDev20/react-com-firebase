import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTcivmLxCbDuY57PTkjhWfdGEtGzqDd8Q",
  authDomain: "curso-reactjs-ac160.firebaseapp.com",
  projectId: "curso-reactjs-ac160",
  storageBucket: "curso-reactjs-ac160.firebasestorage.app",
  messagingSenderId: "635219700066",
  appId: "1:635219700066:web:c797e2e5520aee13ce643b",
  measurementId: "G-8G6SPFJDMZ",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
