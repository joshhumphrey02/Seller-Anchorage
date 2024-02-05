import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../configs/firebase";

const actionCodeSettings = {
	url: "http://localhost:5173/register",
	handleCodeInApp: true,
};

export async function verifyEmail(email) {
	try {
		const result = await sendSignInLinkToEmail(auth, email, actionCodeSettings);
		if (result) {
			window.localStorage.setItem("emailForSignIn", email);
			return { message: "Verification code Sent", error: false };
		}
	} catch (error) {
		console.log(error.message, error.code);
		return { message: "Ooops! an error occurred.", error: true };
	}
}
