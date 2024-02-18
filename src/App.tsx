import {
	RouterProvider,
	createBrowserRouter,
	redirect,
} from "react-router-dom";
import { ThemeProvider } from "./components/theme/theme-provider";
import ErrorPage from "./ErrorPage";
import Dashboard from "./screens/dashboard/Dashboard";
import Products from "./screens/products/Products";
import Orders from "./screens/orders/orders";
import Reviews from "./screens/reviews/Reviews";
import Transactions from "./screens/transactions/Transactions";
import Notifications from "./screens/notifications/Notifications";
import Uploads from "./screens/upload/Upload";
import Settings from "./screens/settings/Settings";
import Account from "./screens/account/Account";
import Support from "./screens/support/Support";
import Login from "./screens/login/login";
import Register from "./screens/registeration/Register";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./Home";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <ErrorPage />,
		element: <Home />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		errorElement: <ErrorPage />,
		id: "dashboard",
	},
	{
		path: "/products",
		element: <Products />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/orders",
		loader: ({ params }) => {
			return params === null ? null : redirect("all");
		},
	},
	{
		path: "/orders/:order",
		// loader: ({ params }): FC<any>=> {
		// 	return params.order;
		// },
		element: <Orders />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/reviews",
		element: <Reviews />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/transactions",
		element: <Transactions />,
		errorElement: <ErrorPage />,
	},
	{
		path: "notifications",
		loader: ({ params }) => {
			return params === null ? null : redirect("all");
		},
	},
	{
		path: "notifications/:notification",
		// loader: ({ params }) => {
		// 	return params.notification;
		// },
		element: <Notifications />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/upload",
		element: <Uploads />,
		errorElement: <ErrorPage />,
	},
	{
		path: "settings",
		loader: ({ params }) => {
			return params === null ? null : redirect("company");
		},
	},
	{
		path: "settings/:setting",
		// loader: ({ params }) => {
		// 	return params.setting;
		// },
		element: <Settings />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/account",
		element: <Account />,
		errorElement: <ErrorPage />,
	},
	{
		path: "support",
		element: <Support />,
		errorElement: <ErrorPage />,
	},
	{
		path: "register",
		element: <Register />,
		errorElement: <ErrorPage />,
	},
	{
		path: "login",
		element: <Login />,
		errorElement: <ErrorPage />,
		// loader: redirectIfUser,
	},
]);

function App() {
	return (
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<Provider store={store}>
				<div className=" container px-2 sm:px-3 md:px-4 lg:px-5">
					<Toaster position="top-right" reverseOrder={true} />
					<RouterProvider router={router} />
				</div>
			</Provider>
		</ThemeProvider>
	);
}

export default App;
