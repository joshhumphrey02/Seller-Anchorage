import { ModeToggle } from "@/components/theme/mode-toggle";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Form, Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Bell, Menu, Settings, User } from "lucide-react";
import Logo from "../Logo";
import React from "react";
import profileSvg from "@/assets/logos/profile svg.png";
import { Logout } from "../Logout";
import { useAppSelector } from "@/redux/hook";

interface navbar {
	setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setSidebar }: navbar) {
	const Store = useAppSelector((state) => state.Store.storeDetails);
	return (
		<div className=" flex bg-card justify-between sticky z-20 top-0 h-fit gap-3 py-3 rounded-lg items-center mb-2">
			<div>
				<Logo side={true} />
				<div
					onClick={() => setSidebar(() => true)}
					className=" menuButton bg-transparent text-foreground flex md:hidden">
					<Menu size={35} />
				</div>
			</div>
			<Form
				action="/dashboard"
				method="get"
				className=" w-[40rem] items-center hidden md:flex gap-2 ">
				<Input
					type="search"
					placeholder="Search for a product..."
					className=" flex-1 h-11 font-[RobotoLight]"
				/>
				<Button type="submit" className="h-11 text-white font-[RobotoRegular]">
					Search
				</Button>
			</Form>

			<div className="nav-profile col-span-4 lg:flex-row full flex justify-end items-center lg:gap-6 sm:gap-10 gap-4 mx-2">
				<ModeToggle />
				<Link
					className="flex items-center font-[RobotoRegular] gap-1 rounded-sm px-2 py-1"
					to="/notifications">
					<Bell size={24} />{" "}
					<span className="text-sm md:inline-block hidden">Notifications</span>
				</Link>
				<DropdownMenu>
					<DropdownMenuTrigger
						asChild
						className="h-10 w-10 rounded-full bg-sky-500 overflow-hidden bg-cover bg-no-repeat bg-center">
						<img
							src={Store.storeImgUrl ? Store.storeImgUrl : profileSvg}
							width={40}
							height={40}
							alt="profile image"
							className=" object-contain"
						/>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="block">
						<DropdownMenuItem className="font-[RobotoLight] text-sm md:text-base ">
							<Link
								className="flex items-center gap-1 rounded-sm text-sm md:text-base font-[RobotoLight] w-full "
								to="/account">
								<User size={20} />
								Account
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="font-[RobotoLight] text-sm md:text-base ">
							<Link
								className="flex items-center gap-1 rounded-sm text-sm md:text-base font-[RobotoLight] w-full "
								to="/settings">
								<Settings size={20} /> Settings
							</Link>
						</DropdownMenuItem>
						<div className="focus:bg-transparent font-[RobotoLight] text-sm md:text-base p-0">
							<Logout />
						</div>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
