import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "./components/ui/button";

export default function ErrorPage() {
	const navigate = useNavigate();
	const error = useRouteError() as unknown as any;
	console.error(error);

	return (
		<div
			id="error-page"
			className=" bg_primary flex justify-center items-center h-screen">
			<div className=" w-fit grid grid-flow-row gap-3 place-items-center">
				<h1 className=" text-3xl font-bold">Oops!</h1>
				<p className=" text-xl font-normal">
					Sorry, an unexpected error has occurred.
				</p>
				<p className=" text-lg">
					<i>{error.statusText || error.message}</i>
				</p>
				<div className=" flex gap-3">
					<Button
						onClick={() => navigate(-1)}
						className=" bg-blue-600 text_primary">
						Return
					</Button>
					<Button className=" bg-red-400">Report</Button>
				</div>
			</div>
		</div>
	);
}
