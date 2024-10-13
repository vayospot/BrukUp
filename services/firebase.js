import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOJbl2n4dDNucBOy7uHNnCKEXgIa0rA78",
  authDomain: "bruk-up.firebaseapp.com",
  projectId: "bruk-up",
  storageBucket: "bruk-up.appspot.com",
  messagingSenderId: "89579853100",
  appId: "1:89579853100:web:3eb0a19ed6462a50654889",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
