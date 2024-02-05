import { collection, addDoc } from "firebase/firestore";

// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "cities"), {
	name: "Tokyo",
	country: "Japan",
});
console.log("Document written with ID: ", docRef.id);
