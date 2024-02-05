import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";

interface data {
	image: string;
	title: string;
	message: string;
}

function InvalidData({ image, title, message }: data) {
	return (
		<div className=" mx-auto w-fit mt-[2rem] pb-2">
			<div className=" flex justify-center">
				<img
					src={image}
					alt={title}
					className=" rounded w-[100px] md:w-[200px] lg:w-[300px]"
					width={300}
					height={250}
				/>
			</div>
			<h4 className=" font-[RobotoMedium] text-xl text-center my-3">{title}</h4>
			<p className="text-center font-[RobotoLight] my-1">{message}</p>
			<div className=" flex justify-center">
				<Button className="text-white my-2 flex gap-1">
					<PlusIcon /> Add product
				</Button>
			</div>
		</div>
	);
}

export default InvalidData;
