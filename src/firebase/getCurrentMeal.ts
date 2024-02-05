import { ITrendingMeals } from "../@types";
import friedRice from "../assets/fried-rice.png";

export const getCurrentMeal = (): Promise<ITrendingMeals[]> =>
	new Promise((resolve) => {
		const data: Array<ITrendingMeals> = [];
		for (let i = 0; i < 1; i++) {
			data.push({
				id: "123",
				name: "Fried rice & chicken",
				imgUrl: friedRice,
				shopName: "Mama Ada",
				price: "2,500",
				likes: 500,
				shopAddress: "No. 52 behind aka road opp the shelf supermarket",
			});
		}
		setTimeout(() => {
			resolve(data);
		}, 2000);
	});
