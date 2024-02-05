import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { register } from "@/reducers/Store";

export const RegisterationHandler = async (store: register) => {
	try {
		const storeD = await createUserWithEmailAndPassword(
			auth,
			store.storeEmail,
			store.password
		);
		if (storeD.user) {
			await updateProfile(storeD.user, {
				displayName: store.storeName,
			});
			return { error: false, message: storeD.user.email };
		}
	} catch (error) {
		console.log(error);
		return { error: true, message: (error as Error).message };
	}
};
