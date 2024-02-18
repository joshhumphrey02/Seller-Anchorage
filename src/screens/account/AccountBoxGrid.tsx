import { CheckCircle2, LoaderIcon } from "lucide-react";

export default function AccountBoxGrid() {
	const pending = true;
	return (
		<div className=" xl:grid-cols-4 md:grid-cols-2 grid-cols-1 grid gap-4 w-full">
			<BoxWrapper>
				<div className="flex mb-3  justify-between items-center w-full border-b pb-4">
					<h3 className=" text-xl font-[RobotoRegular]">Shop Informations</h3>
				</div>
				<div className="flex gap-1 items-center">
					{pending ? (
						<LoaderIcon size={18} color="gray" />
					) : (
						<CheckCircle2 size={18} color="blue" />
					)}
					{pending ? "Pending" : "Completed"}
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="flex mb-3  justify-between items-center w-full border-b pb-4">
					<h3 className=" text-xl font-[RobotoRegular]">Shop Informations</h3>
				</div>
				<div className="flex gap-1 items-center">
					{pending ? (
						<LoaderIcon size={18} color="gray" />
					) : (
						<CheckCircle2 size={18} color="blue" />
					)}
					{pending ? "Pending" : "Completed"}
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="flex mb-3  justify-between items-center w-full border-b pb-4">
					<h3 className=" text-xl font-[RobotoRegular]">Shop Informations</h3>
				</div>
				<div className="flex gap-1 items-center">
					{pending ? (
						<LoaderIcon size={18} color="gray" />
					) : (
						<CheckCircle2 size={18} color="blue" />
					)}
					{pending ? "Pending" : "Completed"}
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="flex mb-3  justify-between items-center w-full border-b pb-4">
					<h3 className=" text-xl font-[RobotoRegular]">Shop Informations</h3>
				</div>
				<div className="flex gap-1 items-center">
					{pending ? (
						<LoaderIcon size={18} color="gray" />
					) : (
						<CheckCircle2 size={18} color="blue" />
					)}
					{pending ? "Pending" : "Completed"}
				</div>
			</BoxWrapper>
		</div>
	);
}

interface BoxWrapper {
	children: Array<JSX.Element>;
}

function BoxWrapper({ children }: BoxWrapper) {
	return (
		<div className="bg-card rounded-lg p-4 flex-1 border flex flex-col items-start">
			{children}
		</div>
	);
}
