export function OrderStatus(status: string) {
	switch (status) {
		case "placed":
			return (
				<span
					style={{
						textTransform: "capitalize",
						color: "rgb(2 132 199)",
						backgroundColor: "rgb(224 242 254)",
					}}
					className=" capitalize py-1 px-2 rounded-lg text-sm font-[RobotoLight]">
					{status}
				</span>
			);
		case "confirmed":
			return (
				<span
					style={{
						textTransform: "capitalize",
						color: "rgb(234 88 12)",
						backgroundColor: "rgb(255 237 213)",
					}}
					className=" capitalize py-1 px-2 rounded-lg text-sm font-[RobotoLight]">
					{status}
				</span>
			);
		case "shipped":
			return (
				<span
					style={{
						textTransform: "capitalize",
						color: "rgb(13 148 136)",
						backgroundColor: "rgb(204 251 241)",
					}}
					className=" capitalize py-1 px-2 rounded-lg text-sm font-[RobotoLight]">
					{status}
				</span>
			);
		case "deliving":
			return (
				<span
					style={{
						textTransform: "capitalize",
						color: "rgb(202 138 4)",
						backgroundColor: "rgb(254 249 195)",
					}}
					className=" capitalize py-1 px-2 rounded-lg text-sm font-[RobotoLight]">
					{status}
				</span>
			);
		case "delivered":
			return (
				<span
					style={{
						textTransform: "capitalize",
						color: "rgb(22 163 74)",
						backgroundColor: "rgb(220 252 231)",
					}}
					className=" capitalize py-1 px-2 rounded-lg text-sm font-[RobotoLight]">
					{status}
				</span>
			);
		default:
			return (
				<span
					style={{
						textTransform: "capitalize",
						color: "rgb(75 85 99)",
						backgroundColor: "rgb(243 244 246)",
					}}
					className=" capitalize py-1 px-2 rounded-lg text-sm font-[RobotoLight]">
					{status}
				</span>
			);
	}
}
