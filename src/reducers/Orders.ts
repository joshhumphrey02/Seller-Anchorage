import { createSlice } from "@reduxjs/toolkit";
import { IOrders } from "../@types";

interface state {
	orders: IOrders[];
	order: IOrders[];
}

// Define the initial state using that type
const initialState: state = {
	orders: [],
	order: [],
};

export const shopOrders = createSlice({
	name: "Orders",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		getorders: (state, action) => {
			const updates = action.payload.filter((order: IOrders) => {
				if (state.orders.find((item) => item.id === order.id)) return;
				return order;
			});
			return {
				...state,
				orders: [...state.orders, ...updates],
			};
		},
	},
});

export const { getorders } = shopOrders.actions;

export default shopOrders.reducer;
