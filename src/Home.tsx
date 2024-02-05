import AuthProvider from "./GetStore";

function Home() {
	return (
		<AuthProvider>
			<div>Home</div>
		</AuthProvider>
	);
}

export default Home;
