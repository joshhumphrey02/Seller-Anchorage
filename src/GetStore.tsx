import { onAuthStateChanged } from "firebase/auth";
import { FC, ReactNode, useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { logState, updateLogin } from "./reducers/Store";
import Loader from "./Loader";
import { Navigate } from "react-router-dom";

type MyComponentProps = {
	children: ReactNode;
};

const AuthProvider: FC<MyComponentProps> = ({ children }) => {
	const Store = useAppSelector((state) => state.Store.login);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (Store.logged === "logged") return;
		const unSubcribe = onAuthStateChanged(auth, (store) => {
			if (store && Store.logged === "checking") {
				dispatch(
					updateLogin({
						id: store?.uid,
						storeName: store?.displayName ? store.displayName : "",
						storeEmail: store?.email ? store.email : "",
						verified: store?.emailVerified,
						logged: "logged",
					})
				);
			} else if (!store && Store.logged === "checking") {
				dispatch(logState("notLogged"));
			}
		});
		return unSubcribe;
	}, [Store.logged, dispatch]);

	return (
		<>
			{Store.logged === "checking" ? (
				<Loader />
			) : Store.logged === "notLogged" ? (
				<Navigate to={"/login"} replace={true} />
			) : (
				<div>{children}</div>
			)}
		</>
	);
};
export default AuthProvider;
