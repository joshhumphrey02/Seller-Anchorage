import { Link } from "react-router-dom";
import logo from "@/assets/logos/anchorage.png";

function Logo({ side = false }) {
	return (
		<Link
			to={"/dashboard"}
			className={` ${
				side ? "hidden md:flex" : "md:hidden flex"
			}  items-center select-none pl-3 py-3 mt-2`}>
			<span className="flex justify-center">
				<img
					src={logo}
					alt="Logo"
					width={"24"}
					height={"24"}
					className=" w-6"
				/>
			</span>
			<span className=" font-[robotoBold] sm:text-2xl text-xl text-center">
				nchorage
			</span>
		</Link>
	);
}

export default Logo;
