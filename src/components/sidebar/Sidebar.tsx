import {
	SIDEBAR_LINKS,
	SIDEBAR_BOTTOM_LINKS,
} from "@/components/sidebar/SidebarLinks";
import SideLinkBtn from "./sideLinkBtn";
import Logo from "../Logo";
import React from "react";
import { Logout } from "../Logout";

interface sidebar {
	sidebar: boolean;
	setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ sidebar, setSidebar }: sidebar) {
	return (
		<div
			className={` ${sidebar ? "flex w-full" : "md:flex hidden"}
				sidebarMenu overflow-hidden  z-50  fixed md:top-[5.9rem] top-0 bottom-0
			`}>
			<div className=" bg-card w-[12rem] md:w-fit flex flex-col rounded-lg pb-4 min-h-[600px]">
				<Logo />
				<div className="side_bar py-8 flex flex-1 flex-col gap-0.5 relative">
					{SIDEBAR_LINKS.map((link) => (
						<SideLinkBtn key={link.key} link={link} setSidebar={setSidebar} />
					))}
				</div>
				<div className="side_bar flex flex-col gap-2 pt-2 border-t">
					{SIDEBAR_BOTTOM_LINKS.map((link) => (
						<SideLinkBtn key={link.key} link={link} setSidebar={setSidebar} />
					))}
					<div className=" mb-3">
						<Logout />
					</div>
				</div>
			</div>
			<span
				onClick={() => setSidebar(() => false)}
				className="flex-1 h-screen"></span>
		</div>
	);
}
