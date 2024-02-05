interface BProps {
	bt: string;
	ct: string;
	dt: string;
}

export const ButtonController = ({ bt, ct, dt }: BProps) => {
	return (
		<div className="flex justify-between mt-1 px-2">
			<div>
				<button
					type="button"
					onClick={() => ButtonsController(true, ct, dt)}
					id="add"
					className="px-3 py-1 rounded-md border-2 bg-blue-400 text-white">
					+ {bt}
				</button>
			</div>
			<div>
				<button
					type="button"
					onClick={() => ButtonsController(false, ct, dt)}
					id="minus"
					style={{ display: "none" }}
					className="px-3 py-1 rounded-md border-2 bg-red-400 text-white">
					- {bt}
				</button>
			</div>
		</div>
	);
};

const ButtonsController = (action: boolean, type: string, dt: string) => {
	const divisions = document.querySelector(`.${type}`);
	const Divs = divisions.querySelectorAll(".Div")[0];
	const con = document.querySelector(`.${dt}`);
	const Div = divisions.querySelectorAll(".Div");
	const minusBtn = con.querySelector("#minus");
	if (action) {
		const newDiv = Divs.cloneNode(true);
		const input = newDiv.querySelectorAll("input")[0];
		input.value = "";
		divisions.appendChild(newDiv);
		Div.length > 0
			? (minusBtn.style.display = "block")
			: (minusBtn.style.display = "none");
	} else {
		divisions.lastElementChild.remove();
		Div.length <= 2 ? (minusBtn.style.display = "none") : null;
	}
};
