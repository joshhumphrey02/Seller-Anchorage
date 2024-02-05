import { ICategory } from "../@types";
import friedRice from "../assets/fried-rice.png";

export const getCategories = (): Promise<ICategory[]> =>
	new Promise((resolve) => {
		const data: Array<ICategory> = [];
		for (let i = 0; i < 25; i++) {
			data.push({
				id: i + "txtID",
				name: "cuisines",
				imgUrl: friedRice,
			});
		}
		setTimeout(() => {
			resolve(data);
		}, 2000);
	});
