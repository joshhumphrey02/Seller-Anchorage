import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "./firebaseConfig";

export const GoogleHandler = () => {
	try {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	} catch (error) {
		console.log(error);
		return { error: true, message: (error as Error).message };
	}
};
