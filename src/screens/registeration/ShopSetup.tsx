import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { updateRegisteration } from "@/reducers/Store";
import { useRef } from "react";
import toast from "react-hot-toast";
import { RegisterationHandler } from "@/firebase/RegisterationHandler";
import LocalDB from "@/localDB/Schema";

function ShopSetup() {
	const navigate = useNavigate();
	const store = useAppSelector((state) => state.Store.registeraton);
	const dispatch = useAppDispatch();
	const checkRef = useRef<HTMLInputElement>(null);

	async function HandleRegister() {
		try {
			if (store.storeName.length === 0 || store.password.length === 0)
				return toast.error("In-complete Informations");
			dispatch(updateRegisteration({ loading: true }));
			const result = await RegisterationHandler(store);
			if (result?.error === false) {
				toast.success("Registered successfully");
				const local = new LocalDB();
				await local.createObjectStore(["registeration"]);
				await local.clearTable();
				dispatch(
					updateRegisteration({
						loading: false,
						storeEmail: "",
						storeShippingState: "",
						storeName: "",
						level: 1,
						verified: "verify",
						verificationCode: "",
						password: "",
					})
				);
				navigate("/login");
			} else {
				toast.error(result !== undefined ? result.message : "");
			}
		} catch (err) {
			dispatch(updateRegisteration({ loading: false }));
			console.log(err);
			toast.error((err as Error).message);
		}
	}

	return (
		<div className="mb-12 w-full">
			<div className=" text-center mb-8">
				<h2 className=" text-2xl font-[RobotoBold] mb-2">Shop Details</h2>
				<p className=" font-[RobotoLight] text-md">
					Setup your shop by filling in your details
				</p>
			</div>
			<div>
				<div className="pt-7 pb-10">
					<div className=" rounded-md border px-5 py-5 mb-4">
						<div className=" mb-5">
							<Input
								type="text"
								required
								value={store.storeName}
								onChange={(e) =>
									dispatch(updateRegisteration({ storeName: e.target.value }))
								}
								placeholder="Shop Name*"
								className="w-full text-sm font-[RobotoLight]"
							/>
						</div>
						<Select>
							<SelectTrigger className="w-full bg-transparent text-sm font-[RobotoLight] mb-4 h-10">
								<SelectValue placeholder="How you heard about us*" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Mediums</SelectLabel>
									<SelectItem value="Social Media">Social Media</SelectItem>
									<SelectItem value="Advertisement">Advertisement</SelectItem>
									<SelectItem value="From Customers">From Customers</SelectItem>
									<SelectItem value="Radio">Radio</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className=" rounded-md border px-5 py-4 mb-8 flex items-start">
						<input
							type="checkbox"
							className="mr-2"
							name="agreement"
							ref={checkRef}
							id="agree"
						/>
						<label htmlFor="agree" className="text-[12px] font-[RobotoLight]">
							I hereby comfirm that i have read and i agree that{" "}
							<Link to={"#"} className="text-primary">
								Art of electronics contract, policies and guidelines
							</Link>{" "}
							and{" "}
							<Link to={"#"} className="text-primary">
								Privacy Notice
							</Link>{" "}
							referenced therein.
						</label>
					</div>
					<Button
						onClick={() => {
							if (store.storeName.length <= 3) {
								toast.error("Shop Name must be more than 3 characters");
							} else if (checkRef.current?.checked === false) {
								toast.error("You must agree to the terms and conditions");
							} else {
								HandleRegister();
							}
						}}
						className=" text-white font-[RotoboLight] w-full">
						{store.loading ? "Loading..." : "Submit"}
					</Button>
				</div>
			</div>
		</div>
	);
}

export default ShopSetup;
