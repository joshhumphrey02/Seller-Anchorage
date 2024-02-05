import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Form, Link, useNavigate } from "react-router-dom";
import { Copyright } from "lucide-react";
import { Input } from "@/components/ui/input";
import googleIcon from "@/assets/icons/google_300221.png";
import { LoginHandler } from "@/firebase/LoginHandler";
import toast from "react-hot-toast";
import { GoogleHandler } from "@/firebase/GoogleHandler";
import { getRedirectResult } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

export interface LStore {
	email: string;
	password: string;
}

const Login = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const [store, setStore] = useState<LStore>({
		email: "",
		password: "",
	});
	async function SLoginHandler() {
		setIsLoading(true);
		const result = await LoginHandler(store);
		setIsLoading(false);
		if (result?.error) {
			if (
				result?.message?.includes("Firebase: Error (auth/invalid-credential)")
			) {
				toast.error("Invalid credential");
			} else if (
				result?.message?.includes(
					"Firebase: Error (auth/network-request-failed)"
				)
			) {
				toast.error("Check ur internet connection");
			} else {
				toast.error(result?.message);
			}
		} else if (result === undefined) {
			return toast.error("An error occurred");
		} else {
			toast.success("Sign in successfull", { duration: 3000 });
			return navigate("/dashboard", {
				state: { login: true },
			});
		}
	}
	useEffect(() => {
		(async () => {
			try {
				const result = await getRedirectResult(auth);
				if (result) {
					toast.success("Sign in successfull", { duration: 3000 });
					navigate("/dashboard");
				}
			} catch (err) {
				console.log(err);
				toast.error("An error occurred");
			}
		})();
	}, [navigate]);

	return (
		<div className="flex sm:items-center landscape:items-start  mt-[6rem] justify-center w-full h-screen ">
			<div className=" md:w-[30rem] w-full h-fit pb-4 p-3 mx-auto">
				<div className=" mb-8">
					<h1 className=" text-center text-2xl font-bold">
						{"Seller's Center"}
					</h1>
				</div>
				<Form
					method="post"
					action="/login"
					onSubmit={(e) => {
						e.preventDefault();
						SLoginHandler();
					}}
					className=" rounded-lg p-4 border bg-card">
					<div className="px-2 mt-6 pb-6 p-4">
						<div className="mb-4 py-1">
							<label
								htmlFor="email"
								className=" text-sm font-[RobotoMedium] mb-2 flex">
								Email address
							</label>
							<Input
								type="email"
								onChange={(e) => setStore({ ...store, email: e.target.value })}
								placeholder="name@gmail.com"
								autoComplete="yes"
								id="email"
								className="w-full border border-input"
								value={store.email}
								required
							/>
						</div>
						<div className="mb-3 py-1">
							<label
								htmlFor="password"
								className=" text-sm font-[RobotoMedium] mb-2 flex">
								Password
							</label>
							<Input
								type="password"
								onChange={(e) =>
									setStore({ ...store, password: e.target.value })
								}
								placeholder="Password"
								className=" w-full"
								id="password"
								value={store.password}
								required
							/>
						</div>
						<div className="my-4 flex justify-between items-center">
							<span className=" flex items-center">
								<input
									type="checkbox"
									className=" mr-1"
									name="remember"
									id="remember"
								/>
								<label
									htmlFor="remember"
									className=" font-[RobotoMedium] text-sm">
									Remember Me
								</label>
							</span>
							<Link
								to={"#"}
								className="bg-transparent text-sm font-[RobotoMedium] text-primary">
								Forgot Password?
							</Link>
						</div>
						<div onClick={GoogleHandler} className="flex flex-col ">
							<Button
								type="button"
								variant="outline"
								className="m-2 mx-auto rounded-xl w-full  border text_primary ">
								<span>
									<img src={googleIcon} alt="google" className="w-6 h-6" />
								</span>
								<h6 className=" text-center w-full font-[RobotoRegular]">
									Google
								</h6>
							</Button>
						</div>
						<div className="">
							<Button
								type="submit"
								className="mt-3 w-full text-white text-md rounded-xl font-[RobotoRegular]">
								{isLoading ? "Loading..." : "Login"}
							</Button>
						</div>
						<p className="text-sm text-center mt-4">
							{"Don't have a seller account?"}{" "}
							<Link to="/register" className=" text-blue-500">
								Register
							</Link>
						</p>
					</div>
				</Form>
				<div>
					<h4 className=" select-none flex gap-2 justify-center items-center mt-8 text-xl font-[RobotoBold]">
						<Copyright /> Anchorage
					</h4>
				</div>
			</div>
		</div>
	);
};

export default Login;
