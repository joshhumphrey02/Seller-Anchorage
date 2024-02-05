import { Getproducts } from "@/firebase/GetProducts";
import { getproducts } from "@/reducers/Products";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";

function PopularProducts() {
	const popularProducts = useAppSelector((state) =>
		state.Products.products.slice(0, 6)
	);
	const dispatch = useAppDispatch();
	useEffect(() => {
		(async () => {
			try {
				const result = await Getproducts();
				dispatch(getproducts(result));
			} catch (e) {
				console.error(e);
			}
		})();
	}, [dispatch]);
	return (
		<div className="w-full xl:col-span-1 col-span-2 bg-card p-4 rounded-sm border border_color">
			<strong className=" text-lg lg:text-xl font-[RobotoBold]">
				Popular Products
			</strong>
			<div className="mt-4 flex flex-col gap-3">
				{popularProducts.map((product) => (
					<a
						key={product.productId}
						href={`/product/${product.productId}`}
						className="flex items-start hover:no-underline">
						<div className="w-10 h-10 min-w-[2.5rem] rounded-sm">
							<img
								width={100}
								height={100}
								className="w-full h-full object-cover rounded-sm"
								src={product.productImgUrl}
								alt={product.productName}
							/>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm lg:text-md font-[robotoRegular] text-muted-foreground">
								{product.productName}
							</p>
							<span
								className={`
									${
										product.productStock === 0
											? "text-red-500"
											: product.productStock > 50
											? "text-green-500"
											: "text-orange-500"
									}
									text-xs font-[robotoLight]
								`}>
								{product.productStock === 0
									? "Out of Stock"
									: product.productStock + " in Stock"}
							</span>
						</div>
						<div className="text-xs font-[robotoLight] text-muted-foreground pl-1.5">
							{product.productPrice}
						</div>
					</a>
				))}
			</div>
		</div>
	);
}

export default PopularProducts;
