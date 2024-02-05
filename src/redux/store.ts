import { configureStore } from "@reduxjs/toolkit";
import Store from "../reducers/Store";
import anchor from "../reducers/Anchorage";
import Products from "../reducers/Products";
import Orders from "../reducers/Orders";
import SideBar from "../reducers/SideBar";

// ...

export const store = configureStore({
	reducer: {
		/**@description This handles all data related to a store, store details */ Store,
		/**@description This handles all data related to a wakatire e.g food list, discounts, etc */ anchor,
		/**@description This handles all data related to a product, product details etc */ Products,
		/**@description This handles all data related to a orders, order details etc */ Orders,
		/**@description This handles all data related to a sidebaretc */ SideBar,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
