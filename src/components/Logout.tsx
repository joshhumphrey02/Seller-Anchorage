import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { auth } from "@/firebase/firebaseConfig";
import { LogOut } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function Logout() {
	const navigate = useNavigate();

	async function HandleLogout() {
		try {
			await auth.signOut();
			toast.success("Logout successfully🥹");
			return navigate("/login");
		} catch (err) {
			console.log(err);
			toast.error("Could not process request😔");
		}
	}
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="destructive"
					className="flex items-center justify-start px-3 w-full gap-2 font-[RobotoLight] text-base">
					<LogOut size={20} />
					Logout
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] h-52">
				<DialogHeader>
					<DialogTitle className="font-[RobotoBlack]">
						Are you sure you want to logout?
					</DialogTitle>
				</DialogHeader>
				<DialogDescription className="text-sm">
					You will be logged out of your account.
				</DialogDescription>
				<DialogFooter>
					<Button
						type="button"
						className="text-white"
						onClick={(e) => {
							e.preventDefault();
							HandleLogout();
						}}>
						Yes, Logout !😌
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
