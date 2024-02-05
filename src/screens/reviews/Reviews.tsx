import InvalidData from "@/components/InvalidData";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { StarIcon } from "lucide-react";
import { useState } from "react";
import profileImg from "@/assets/logos/profile svg.png";
import noReviews from "@/assets/vectors/no-reviews.avif";
import AuthProvider from "@/GetStore";
const Review = () => {
	return (
		<div className="border bg-card px-2 py-3 rounded-lg flex justify-between">
			<div className=" flex flex-col md:flex-row items-center justify-between w-1/2">
				<div className=" flex items-center">
					<img
						src={profileImg}
						alt="profile pix"
						width={50}
						height={50}
						className=" border w-10 h-10 rounded-full mr-3"
					/>
					<h4 className="font-[RobotoRegular]">Joshua Humphrey</h4>
				</div>
				<div className=" flex gap-1 texl-sm md:text-xl items-center h-full">
					<StarIcon color="blue" />
					<StarIcon color="blue" />
					<StarIcon color="blue" />
					<StarIcon color="blue" />
					<StarIcon color="blue" />
				</div>
			</div>
			<div className="w-[40%]">
				<p className=" text-sm font-[RobotoLight]">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
					obcaecati tempore corporis delectus eos nobis officiis.
				</p>
			</div>
		</div>
	);
};

function Reviews() {
	const data = true;
	const [sidebar, setSidebar] = useState(false);
	return (
		<AuthProvider>
			<div className=" main">
				<Navbar setSidebar={setSidebar} />
				<div className="sub_main">
					<Sidebar sidebar={sidebar} setSidebar={setSidebar} />
					<div className="sub rounded-lg pb-3 h-fit">
						<h1 className="text-2xl font-[RobotoBold] my-2 border-b pb-1">
							Customers Reviews
						</h1>
						<div className=" grid grid-flow-row gap-3">
							{data ? (
								<Review />
							) : (
								<InvalidData
									image={noReviews}
									title={"No reviews"}
									message={
										"Reviews linked to your account will be listed here."
									}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</AuthProvider>
	);
}

export default Reviews;
