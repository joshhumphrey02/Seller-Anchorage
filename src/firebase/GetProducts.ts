import { IProduct } from "../@types";

const popularProducts = [
	{
		productId: "3432",
		productName: 'Macbook M1 Pro 14"',
		productImgUrl: "https://source.unsplash.com/100x100?macbook",
		productPrice: "$1499.00",
		productCategory: "laptop",
		productStock: 341,
	},
	{
		productId: "7633",
		productName: "Samsung Galaxy Buds 2",
		productImgUrl: "https://source.unsplash.com/100x100?earbuds",
		productPrice: "$399.00",
		productCategory: "phones",
		productStock: 24,
	},
	{
		productId: "4315",
		productName: "Apple Magic Touchpad",
		productImgUrl: "https://source.unsplash.com/100x100?touchpad",
		productPrice: "$699.00",
		productCategory: "iPads",
		productStock: 0,
	},
	{
		productId: "4340",
		productName: "Nothing Earbuds One",
		productImgUrl: "https://source.unsplash.com/100x100?earphone",
		productPrice: "$399.00",
		productCategory: "air pod",
		productStock: 453,
	},
	{
		productId: "6534",
		productName: "Asus Zenbook Pro",
		productImgUrl: "https://source.unsplash.com/100x100?laptop",
		productPrice: "$899.00",
		productCategory: "laptop",
		productStock: 56,
	},
	{
		productId: "9234",
		productName: "LG Flex Canvas",
		productImgUrl: "https://source.unsplash.com/100x100?smartphone",
		productPrice: "$499.00",
		productCategory: "tv",
		productStock: 98,
	},
	{
		productId: "4314",
		productName: "Apple Magic Touchpad",
		productImgUrl: "https://source.unsplash.com/100x100?touchpad",
		productPrice: "$699.00",
		productCategory: "laptop",
		productStock: 100,
	},
	{
		productId: "9204",
		productName: "LG Flex Canvas",
		productImgUrl: "https://source.unsplash.com/100x100?smartphone",
		productPrice: "$499.00",
		productCategory: "cables",
		productStock: 98,
	},
	{
		productId: "4014",
		productName: "Apple Magic Touchpad",
		productImgUrl: "https://source.unsplash.com/100x100?touchpad",
		productPrice: "$699.00",
		productCategory: "laptop",
		productStock: 2,
	},
	{
		productId: "4342",
		productName: "Nothing Earbuds One",
		productImgUrl: "https://source.unsplash.com/100x100?earphone",
		productPrice: "$399.00",
		productCategory: "air pod",
		productStock: 453,
	},
];

export const Getproducts = async (): Promise<IProduct[]> =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(popularProducts);
		}, 1000);
	});
