import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRegister, IStore, IStoreDetails } from "../@types";

interface store {
	login: IStore;
	storeDetails: IStoreDetails;
	registeraton: IRegister;
}

// Define the initial state using that type
const initialState: store = {
	login: {
		id: "",
		storeName: "",
		storeEmail: "",
		verified: false,
		logged: "checking",
	},
	storeDetails: {
		id: "",
		storeName: "",
		storeShippingState: "",
		storeEmail: "",
		verified: false,
		storeImgUrl: "",
		storePhone: 0,
		storeVisibility: true,
		storeAddress: "",
	},
	registeraton: {
		storeName: "",
		storeShippingState: "",
		storeEmail: "",
		verified: "verify",
		verificationCode: "",
		loading: false,
		level: 1,
		password: "",
	},
};

export const storeSlice = createSlice({
	name: "Store",
	initialState,
	reducers: {
		updateLogin: (state, action: PayloadAction<IStore>) => {
			return {
				...state,
				login: { ...action.payload },
			};
		},
		logState: (state, action) => {
			return {
				...state,
				login: { ...state.login, logged: action.payload },
			};
		},
		updateRegisteration: (state, action: PayloadAction<Partial<IRegister>>) => {
			return {
				...state,
				registeraton: {
					loading:
						action.payload.loading !== undefined
							? action.payload.loading
							: state.registeraton.loading,
					storeEmail:
						action.payload.storeEmail !== undefined
							? action.payload.storeEmail
							: state.registeraton.storeEmail,
					storeShippingState:
						action.payload.storeShippingState !== undefined
							? action.payload.storeShippingState
							: state.registeraton.storeShippingState,
					storeName:
						action.payload.storeName !== undefined
							? action.payload.storeName
							: state.registeraton.storeName,
					verificationCode:
						action.payload.verificationCode !== undefined
							? action.payload.verificationCode
							: state.registeraton.verificationCode,
					verified:
						action.payload.verified !== undefined
							? action.payload.verified
							: state.registeraton.verified,
					level:
						action.payload.level !== undefined
							? action.payload.level
							: state.registeraton.level,
					password:
						action.payload.password !== undefined
							? action.payload.password
							: state.registeraton.password,
				},
			};
		},
	},
});

export const { updateLogin, logState, updateRegisteration } =
	storeSlice.actions;

export default storeSlice.reducer;
