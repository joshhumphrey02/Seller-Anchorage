export interface IStore {
	id: string | number;
	storeEmail: string;
	storeName: string;
	verified: boolean;
	logged?: "logged" | "notLogged" | "checking";
}

export interface IRegister {
	storeShippingState: string;
	storeEmail: string;
	storeName: string;
	verified: "sent" | "verified" | "verify";
	verificationCode: string;
	loading: boolean;
	level: number;
	password: string;
}

export interface IStoreDetails extends IStore {
	storeImgUrl: string;
	storeShippingState: string;
	storeAddress: string;
	storePhone: number | string;
	storeVisibility: boolean;
}

export interface IProduct {
	productId: string | number;
	productName: string;
	productImgUrl: string;
	productPrice: string;
	productStock: number;
	productCategory: string;
}

export interface ICategory {
	id: string;
	name: string;
	imgUrl: string;
}

export interface IOrders {
	id: string;
	product_id: string;
	customer_id: string;
	customer_name: string;
	order_date: string;
	order_total: string;
	current_order_status:
		| "placed"
		| "confirmed"
		| "shipped"
		| "delivered"
		| "returned";
	shipment_address: string;
	quantity: string;
}
