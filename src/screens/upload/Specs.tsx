import { useState } from "react";

const Specs = () => {
	const [color, setColor] = useState("Color: ");
	const [weight, setWeight] = useState("Weight (kg): ");
	const [model, setModel] = useState("Model: ");
	const [quantity, setQuantity] = useState("Quantity: ");
	return (
		<div className="mt-2 flex flex-col gap-2">
			<h5 className="text-center mt-2  text-lg md:text-xl font-[RobotoMedium] capitalize">
				Product specification
			</h5>
			<div>
				<div className="mt-2 flex flex-col gap-2">
					<div className="border px-2 rounded-md border_color">
						<input
							type="text"
							onChange={(e) => setColor(e.target.value)}
							className="w-full bg-transparent h-10"
							name="specs"
							value={color}
						/>
					</div>
					<div className="border px-2 rounded-md border_color">
						<input
							type="text"
							onChange={(e) => setWeight(e.target.value)}
							className="w-full bg-transparent h-10"
							name="specs"
							value={weight}
						/>
					</div>
					<div className="border px-2 rounded-md border_color">
						<input
							type="text"
							onChange={(e) => setModel(e.target.value)}
							className="w-full bg-transparent h-10"
							name="specs"
							value={model}
						/>
					</div>
					<div className="border px-2 rounded-md border_color">
						<input
							type="text"
							onChange={(e) => setQuantity(e.target.value)}
							className="w-full bg-transparent h-10"
							name="specs"
							value={quantity}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Specs;
