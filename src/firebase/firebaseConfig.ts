import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyD4bVGUFX2te2HTjDFA5mXyC6KoEvQZ-xk",
	authDomain: "seller-anchorage.firebaseapp.com",
	projectId: "seller-anchorage",
	storageBucket: "seller-anchorage.appspot.com",
	messagingSenderId: "1068639996334",
	appId: "1:1068639996334:web:360ddfad7a9333fa3ba03f",
	measurementId: "G-WJ2GP07ZQX",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
