import { Navigate } from "react-router-dom";
import AuthProvider from "./GetStore";

function Home() {
	const seller = false;
	return (
		<AuthProvider>
			{seller ? <div>Home</div> : <Navigate to={"/dashboard"} />}
		</AuthProvider>
	);
}

export default Home;
