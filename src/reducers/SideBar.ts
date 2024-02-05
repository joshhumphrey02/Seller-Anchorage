import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface sidebar {
	currentState: boolean;
}

// Define the initial state using that type
const initialState: sidebar = {
	currentState: false,
};

export const anchorSlice = createSlice({
	name: "SideBar",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		open: (state) => {
			state.currentState = true;
		},
		close: (state) => {
			state.currentState = false;
		},
	},
});

export const { open, close } = anchorSlice.actions;

export default anchorSlice.reducer;
