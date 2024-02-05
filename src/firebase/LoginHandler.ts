import { LStore } from "@/screens/login/login";
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export const LoginHandler = async ({ email, password }: LStore) => {
	try {
		const storeD = await signInWithEmailAndPassword(auth, email, password);
		if (storeD?.user) {
			return { error: false, message: storeD.user.email };
		}
	} catch (error) {
		console.log(error);
		return { error: true, message: (error as Error).message };
	}
};
