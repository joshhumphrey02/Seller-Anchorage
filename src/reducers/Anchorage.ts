import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IanchorState {
	value: number;
}

// Define the initial state using that type
const initialState: IanchorState = {
	value: 0,
};

export const anchorSlice = createSlice({
	name: "anchor",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = anchorSlice.actions;

export default anchorSlice.reducer;
