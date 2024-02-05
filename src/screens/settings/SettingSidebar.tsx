import { NavLink } from "react-router-dom";
import { settingData } from "./SettingsData";
import { Button } from "@/components/ui/button";

function SettingSidebar() {
	return (
		<div className=" h-fit w-full  pb-6 p-3 rounded-lg">
			<div className=" grid grid-flow-col lg:grid-flow-row gap-1 lg:gap-4">
				{settingData.map((data) => (
					<NavLink
						to={data.path}
						key={data.key}
						className={
							"font-[RobotoRegular] p-1 lg:px-3 lg:py-2 hover:text-blue-400 hover:no-underline rounded-sm text-base"
						}>
						<span>{data.label}</span>
					</NavLink>
				))}
				<Button
					variant={"destructive"}
					className=" lg:block hidden mt-8 font-[RobotoLight] text-base">
					Delete Account
				</Button>
			</div>
		</div>
	);
}

export default SettingSidebar;
