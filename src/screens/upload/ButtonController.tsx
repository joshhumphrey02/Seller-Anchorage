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

const ButtonsController = (action: boolean, type: string, dt: string): void => {
	const divisions = document.querySelector<HTMLElement>(`.${type}`);
	const Divs = divisions?.querySelectorAll<HTMLElement>(".Div")[0];
	const con = document.querySelector<HTMLElement>(`.${dt}`);
	const Div = divisions?.querySelectorAll<HTMLDivElement>(".Div");
	const minusBtn = con?.querySelector<HTMLButtonElement>("#minus");
	if (action) {
		const newDiv = Divs?.cloneNode(true) as HTMLElement;
		const input = newDiv?.querySelectorAll<HTMLInputElement>("input")[0];
		input.value = "";
		divisions?.appendChild(newDiv);
		Div !== undefined && Div.length > 0
			? minusBtn === undefined || minusBtn === null
				? ""
				: (minusBtn.style.display = "block")
			: minusBtn === undefined || minusBtn === null
			? ""
			: (minusBtn.style.display = "none");
	} else {
		divisions?.lastElementChild?.remove();
		Div !== undefined && Div.length <= 2
			? minusBtn === undefined || minusBtn === null
				? ""
				: (minusBtn.style.display = "none")
			: null;
	}
};
