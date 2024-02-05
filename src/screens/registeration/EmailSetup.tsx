import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateRegisteration } from "@/reducers/Store";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import toast from "react-hot-toast";
import { GenerateUniqueCode } from "@/components/UniqueCode";
import emailjs from "emailjs-com";
import LocalDB from "@/localDB/Schema";

function EmailSetup() {
	const store = useAppSelector((state) => state.Store.registeraton);
	const dispatch = useAppDispatch();
	const emailjsConfig = {
		SERVICE_ID: "service_0jzrfn4",
		TEMPLATE_ID: "template_37j7o0c",
		publicKey: "_OP1uRYJbh9ySLwk3",
	};
	const verificationHandler = async () => {
		try {
			if (store.verified === "verify" && store.storeEmail.length > 0) {
				const code = GenerateUniqueCode(4, 1, 9);
				dispatch(
					updateRegisteration({ verificationCode: code, loading: true })
				);
				const sent = await emailjs.send(
					emailjsConfig.SERVICE_ID,
					emailjsConfig.TEMPLATE_ID,
					{
						email: store.storeEmail,
						code: code,
					},
					emailjsConfig.publicKey
				);
				if (sent) {
					dispatch(updateRegisteration({ loading: false, verified: "sent" }));
					toast.success("email verification sent");
				}
			} else if (store.verified === "verified") {
				const local = new LocalDB();
				await local.createObjectStore(["registeration"]);
				const result = await local.updateValue(
					"registeration",
					{
						storeEmail: store.storeEmail,
						level: 3,
					},
					1
				);
				if (result) {
					return dispatch(updateRegisteration({ level: 3, loading: false }));
				}
				return;
			}
		} catch (err) {
			dispatch(updateRegisteration({ loading: false }));
			console.log(err);
			toast.error("Error occurred. Enter a valid email");
		}
	};
	return (
		<div className="mb-12 w-full">
			<div className=" text-center mb-8">
				<h2 className=" text-2xl font-[RobotoBold] mb-2">
					Verify your account
				</h2>
				<p className=" font-[RobotoLight] text-md">
					Please enter your email address to proceed
				</p>
			</div>
			<div className=" rounded-md border px-5 pt-7 pb-6">
				<div className="mb-5">
					<Input
						type="email"
						onChange={(e) =>
							dispatch(updateRegisteration({ storeEmail: e.target.value }))
						}
						value={store.storeEmail}
						placeholder="Email address"
						className="w-full"
					/>
				</div>
				<div
					hidden={
						store.verified === "sent" || store.verified === "verified"
							? false
							: true
					}
					className="mb-5">
					<Input
						type="text"
						onChange={(e) => {
							if (e.target.value === store.verificationCode) {
								dispatch(updateRegisteration({ verified: "verified" }));
							} else if (e.target.value.length === 4) {
								toast.error("Invalid verification code");
							}
						}}
						placeholder="Enter your verification code"
						className={`w-full ${
							store.verified === "verified"
								? " focus-visible:ring-0 ring-1 ring-green-500"
								: "border-border"
						}`}
					/>
				</div>
				<Button
					onClick={verificationHandler}
					className=" hover:bg-blue-500/90 text-white mt-2 w-full">
					{store.loading
						? "Loading.."
						: store.verified === "verify"
						? "Verify"
						: "Continue"}
				</Button>
				<button
					className="mt-3 text-sm p-0 bg-transparent text-red-500 font-[RobotoLight]"
					onClick={() => {
						dispatch(
							updateRegisteration({ verificationCode: "", verified: "verify" })
						);
						verificationHandler();
					}}
					hidden={store.verified === "sent" ? false : true}>
					Resend code
				</button>
			</div>
		</div>
	);
}

export default EmailSetup;
