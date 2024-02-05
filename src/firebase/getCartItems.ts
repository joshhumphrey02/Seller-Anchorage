import friedRice from "../assets/fried-rice.png";
import { ITrendingMeals } from "../@types";

export const getCartItems = (): Promise<ITrendingMeals[]> =>
	new Promise((resolve) => {
		const meals: Array<ITrendingMeals> = [];
		for (let i = 0; i < 4; i++) {
			meals.push({
				content: "1x bottle water, 1 plate of chicken, salad & 4 plantains",
				shopName: "Mama Ada",
				price: "NGN 2,500",
				id: i + "txtID",
				name: "Fried rice & chicken",
				imgUrl: friedRice,
			});
		}
		setTimeout(() => {
			resolve(meals);
		}, 2000);
	});
