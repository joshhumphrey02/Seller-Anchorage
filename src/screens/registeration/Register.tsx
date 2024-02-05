import { useEffect } from "react";
import RegisterationBase from "./Base";
import EmailSetup from "./EmailSetup";
import PasswordSetup from "./PasswordSetup";
import ShopSetup from "./ShopSetup";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { updateReg, updateRegisteration } from "@/reducers/Store";
import LocalDB from "@/localDB/Schema";

// const Test = () => {
// 	useEffect(() => {
// 		const runIndexDb = async () => {
// 			const local = new local("an");
// 			await local.createObjectStore(["registeration", "students"]);
// 			await local.putValue("registeration", { name: "A Game of Thrones" });
// 			await local.putBulkValue("registeration", [
// 				{ name: "A Song of Fire and Ice" },
// 				{ name: "Harry Potter and the Chamber of Secrets" },
// 			]);
// 			await local.getValue("registeration", 1);
// 			await local.getAllValue("registeration");
// await local.deleteValue("registeration", 1);
// 		};
// 		runIndexDb();
// 	}, []);
// };

const Register = () => {
	const store = useAppSelector((state) => state.Store.registeraton);
	console.log(store);
	const dispatch = useAppDispatch();
	function LevelHandler(level: number) {
		dispatch(updateRegisteration({ level: level }));
	}

	useEffect(() => {
		(async () => {
			const local = new LocalDB();
			await local.createObjectStore(["registeration"]);
			const result: updateReg = await local.getValue("registeration", 1);
			if (result !== undefined) {
				dispatch(
					updateRegisteration({
						storeEmail: result?.storeEmail,
						storeName: result?.storeName,
						storeShippingState: result?.storeShippingState,
						verified: result?.verified,
						level: result?.level,
						password: result?.password,
						loading: result?.loading,
					})
				);
			}
		})();
	}, [dispatch]);
	return (
		<div className=" flex lg:flex-row flex-col col p-2 gap-[2%] mx-auto bg-background landscape:items-start landscape:lg:items-center items-center justify-start lg:justify-center w-full md:w-[90%] 2xl:w-[70%]  h-screen ">
			<div className="  p-2 w-full items-center my-6">
				<img
					src="/src/assets/vectors/sell3.png"
					alt="seller image"
					className=" w-[90%] hidden lg:flex mx-auto object-contain"
					width={500}
					height={500}
				/>
				<div className=" mt-4 flex justify-between md:w-[80%] w-full px-3 md:px-0 mx-auto">
					<div
						onClick={() => LevelHandler(1)}
						className={`
							${store.level >= 1 ? "bg-blue-500 text-white" : "bg-transparent"}
							" w-fit border rounded-full cursor-pointer p-1 px-3`}>
						1
					</div>
					<div
						onClick={() => {
							if (store.storeShippingState.length > 0) return LevelHandler(2);
						}}
						className={`
							${store.level >= 2 ? "bg-blue-500 text-white" : "bg-transparent"}
							" w-fit border rounded-full cursor-pointer p-1 px-3`}>
						2
					</div>
					<div
						onClick={() => {
							if (store.verified === "verified") return LevelHandler(3);
						}}
						className={`
							${store.level >= 3 ? "bg-blue-500 text-white" : "bg-transparent"}
							" w-fit border rounded-full cursor-pointer p-1 px-3`}>
						3
					</div>
					<div
						onClick={() => {
							if (store.password.length > 0) return LevelHandler(4);
						}}
						className={`
							${store.level >= 4 ? "bg-blue-500 text-white" : "bg-transparent"}
							" w-fit border rounded-full cursor-pointer p-1 px-3`}>
						4
					</div>
				</div>
			</div>
			<div className=" w-full h-fit py-6 md:px-8 px-3 md:mt-20 mt-0 lg:mt-0 mx-auto">
				{store.level === 2 ? (
					<EmailSetup />
				) : store.level === 3 ? (
					<PasswordSetup />
				) : store.level === 4 ? (
					<ShopSetup />
				) : (
					<RegisterationBase />
				)}
			</div>
		</div>
	);
};

export default Register;
