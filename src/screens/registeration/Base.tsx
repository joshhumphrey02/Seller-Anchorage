import { Link } from "react-router-dom";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { updateRegisteration } from "@/reducers/Store";
import toast from "react-hot-toast";
import LocalDB from "@/localDB/Schema";

function RegisterationBase() {
	const store = useAppSelector((state) => state.Store.registeraton);
	const dispatch = useAppDispatch();
	return (
		<div>
			<div className=" text-center mb-8">
				<h2 className=" text-2xl font-[robotoBold] mb-2">Sell on Anchorage</h2>
				<p className=" font-[robotoLight] text-sm">
					Select the state where your shop is located!
				</p>
			</div>
			<div>
				<div className=" rounded-md border px-5 pt-7 pb-10">
					<Select
						value={store.storeShippingState}
						onValueChange={(state) =>
							dispatch(updateRegisteration({ storeShippingState: state }))
						}>
						<SelectTrigger className="w-full mb-4 h-12">
							<SelectValue placeholder="Select your state.." />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>States</SelectLabel>
								<SelectItem value="Bayelsa">Bayelsa</SelectItem>
								<SelectItem value="Delta">Delta</SelectItem>
								<SelectItem value="Lagos">Lagos</SelectItem>
								<SelectItem value="Imo">Imo</SelectItem>
								<SelectItem value="Rivers">Rivers</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<Button
						onClick={() => {
							if (store.storeShippingState.length === 0) {
								return toast.error("Please select a State");
							} else {
								(async () => {
									try {
										dispatch(updateRegisteration({ loading: true }));
										const local = new LocalDB();
										await local.createObjectStore(["registeration"]);
										const result = await local.updateValue(
											"registeration",
											{
												id: 1,
												loading: false,
												storeShippingState: store.storeShippingState,
												level: 4,
											},
											1
										);
										if (result) {
											return dispatch(
												updateRegisteration({ loading: false, level: 2 })
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
						className=" bg-blue-500 text-white hover:bg-blue-700 w-full">
						Next
					</Button>
					<p className=" mt-3 text-[12px] font-[robotoLight]">
						Register and make your products available across states.
					</p>
				</div>
				<div className="mt-6 text-center flex gap-1 items-center rounded-md border p-4 justify-center">
					<h6 className=" text-sm font-[robotoRegular]">
						Already have an account?
					</h6>
					<Link
						to={"/login"}
						className=" text-blue-500 text-md font-[robotoBold]">
						Login
					</Link>
				</div>
			</div>
		</div>
	);
}

export default RegisterationBase;
