import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../@types";

interface options {
	search: string;
	category: string;
	stockOrder: string;
}

interface state {
	products: IProduct[];
	product: IProduct[];
	filterProducts: IProduct[];
	filterOptions: options;
}
// Define the initial state using that type
const initialState: state = {
	products: [],
	product: [],
	filterProducts: [],
	filterOptions: {
		search: "",
		category: "all",
		stockOrder: "ascending",
	},
};

export const productsSlice = createSlice({
	name: "Products",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		getproducts: (state, action) => {
			const updates = action.payload.filter((product: IProduct) => {
				if (state.products.find((item) => item.productId === product.productId))
					return;
				return product;
			});
			return {
				...state,
				products: [...state.products, ...updates],
			};
		},
		filterProducts: (state) => {
			const products = state.products.map((item) => {
				return { ...item, productStock: Number(item.productStock) };
			});
			const filteredStockOrder = products.sort((a, b) => {
				if (state.filterOptions.stockOrder === "ascending") {
					return a.productStock - b.productStock;
				} else {
					return b.productStock - a.productStock;
				}
			});
			const filteredCategory = filteredStockOrder.filter((product) =>
				state.filterOptions.category.toLowerCase() === "all"
					? product
					: product.productCategory
							.toLowerCase()
							.includes(state.filterOptions.category.toLowerCase())
			);
			const filteredSearch = filteredCategory.filter((product) =>
				product.productName
					.toLowerCase()
					.includes(state.filterOptions.search.toLowerCase())
			);
			return {
				...state,
				filterProducts: filteredSearch,
			};
		},
		updateSearchFilter: (state, action) => {
			return {
				...state,
				filterOptions: {
					...state.filterOptions,
					search: action.payload,
				},
			};
		},
		updateCategoryFilter: (state, action) => {
			return {
				...state,
				filterOptions: {
					...state.filterOptions,
					category: action.payload,
				},
			};
		},
		updateStockFilter: (state, action) => {
			return {
				...state,
				filterOptions: {
					...state.filterOptions,
					stockOrder: action.payload,
				},
			};
		},
	},
});

export const {
	getproducts,
	filterProducts,
	updateCategoryFilter,
	updateSearchFilter,
	updateStockFilter,
} = productsSlice.actions;

export default productsSlice.reducer;
