import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHceLS9zso28cZ-oWFO_x01FlLOedV7GM",
  authDomain: "addy-fitness.firebaseapp.com",
  projectId: "addy-fitness",
  storageBucket: "addy-fitness.appspot.com",
  messagingSenderId: "267957169386",
  appId: "1:267957169386:web:f996d79a7e729bad8ffb93",
  measurementId: "G-6D25NJ8T5B",
};

let myContactForm = "";

if (typeof window !== "undefined") {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Check if Firebase Analytics is supported before initializing
  if (isSupported()) {
    const analytics = getAnalytics(app);
  }

  myContactForm = collection(db, "ContactInformation");
} else {
  myContactForm = null;
}

export { myContactForm };
