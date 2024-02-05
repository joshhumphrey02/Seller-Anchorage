import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LocalDB from "@/localDB/Schema";
import { updateRegisteration } from "@/reducers/Store";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useRef } from "react";
import toast from "react-hot-toast";

function PasswordSetup() {
	const store = useAppSelector((state) => state.Store.registeraton);
	const comfirmRef = useRef<HTMLInputElement>(null);
	const dispatch = useAppDispatch();
	return (
		<div className="mb-12 w-full">
			<div className=" text-center mb-8">
				<h2 className=" text-2xl font-[robotoBold] mb-2">
					Setup your account password
				</h2>
				<p className=" font-[robotoLight] text-md">
					Please enter a unique password to proceed
				</p>
			</div>
			<div>
				<div className=" bg_primary rounded-md border px-5 pt-7 pb-10">
					<div className=" mb-5">
						<Input
							required
							onChange={(e) =>
								dispatch(updateRegisteration({ password: e.target.value }))
							}
							value={store.password}
							type="password"
							placeholder="Password"
							className="w-full"
						/>
					</div>
					<div className=" mb-5">
						<Input
							required
							ref={comfirmRef}
							type="password"
							placeholder="Comfirm Password"
							className="w-full"
						/>
					</div>
					<Button
						onClick={() => {
							if (
								store.password.length === 0 ||
								comfirmRef.current?.value.length === 0
							) {
								toast.error("Please fill all the fields");
							} else if (store.password !== comfirmRef.current?.value) {
								toast.error("Passwords do not match");
							} else {
								(async () => {
									try {
										dispatch(updateRegisteration({ loading: true }));
										const local = new LocalDB();
										await local.createObjectStore(["registeration"]);
										const result = await local.updateValue(
											"registeration",
											{
												password: store.password,
												level: 4,
											},
											1
										);
										if (result) {
											return dispatch(
												updateRegisteration({ level: 4, loading: false })
											);
										}
									} catch (error) {
										dispatch(updateRegisteration({ loading: false }));
										console.log(error);
										return toast.error("Error occurred! try again");
									}
								})();
							}
						}}
						className={`text-white w-full`}>
						Verify
					</Button>
				</div>
			</div>
		</div>
	);
}

export default PasswordSetup;
