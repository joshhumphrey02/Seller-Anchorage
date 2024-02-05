import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, PlusIcon, Search } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";
import AuthProvider from "@/GetStore";
import { Getproducts } from "@/firebase/GetProducts";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
	filterProducts,
	getproducts,
	updateCategoryFilter,
	updateSearchFilter,
	updateStockFilter,
} from "@/reducers/Products";

function Products() {
	const [sidebar, setSidebar] = useState(false);
	const Products = useAppSelector((state) => state.Products.products);
	const filterOrder = useAppSelector((state) => state.Products.filterOptions);
	const filteredProducts = useAppSelector(
		(state) => state.Products.filterProducts
	);

	const dispatch = useAppDispatch();
	const categories = Array.from(
		new Set(Products.map((p) => p.productCategory))
	);

	useEffect(() => {
		(async () => {
			try {
				const result = await Getproducts();
				dispatch(getproducts(result));
				dispatch(filterProducts());
			} catch (e) {
				console.error(e);
			}
		})();
	}, [dispatch]);

	return (
		<AuthProvider>
			<div className=" main">
				<Navbar setSidebar={setSidebar} />
				<div className="sub_main">
					<Sidebar sidebar={sidebar} setSidebar={setSidebar} />
					<div className="sub">
						<div className="  px-4 pt-2 pb-4">
							<div className=" flex items-center justify-between mt-2 my-6">
								<h2 className=" text-2xl font-[RobotoBold]">Products stock</h2>
								<Button
									size="sm"
									className={"text-white flex items-center gap-2"}>
									<PlusIcon size={20} /> Add Product
								</Button>
							</div>
							<div>
								<div className=" border-b ">
									<h3 className=" text-lg font-bold text-blue-500 pb-1">
										All Items
									</h3>
								</div>
								<div className=" my-4 lg:grid lg:grid-cols-[35%,20%,20%,auto,15%] lg:grid-rows-1 flex flex-wrap justify-between gap-4 items-center">
									<div className=" col-start-1 lg:col-end-2 w-full border rounded-md">
										<div className="flex items-center px-1">
											<Input
												type="search"
												placeholder="Search product or id"
												onChange={(e) => {
													dispatch(updateSearchFilter(e.target.value));
													dispatch(filterProducts());
												}}
												value={filterOrder.search}
												className=" h-8 ring-0 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
											/>
											<Button
												type="submit"
												className=" bg-transparent text-primary">
												<Search />
											</Button>
										</div>
									</div>
									<Select
										value={filterOrder.category}
										onValueChange={(value) => {
											dispatch(updateCategoryFilter(value));
											dispatch(filterProducts());
										}}>
										<SelectTrigger className="w-40 sm:w-48">
											<SelectValue placeholder="Category or any" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Category</SelectLabel>
												<SelectItem value="all">All</SelectItem>
												{categories.map((product, i) => (
													<SelectItem
														className=" capitalize"
														key={i.toString()}
														value={product}>
														{product}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
									<Select
										value={filterOrder.stockOrder}
										onValueChange={(value) => {
											dispatch(updateStockFilter(value));
											dispatch(filterProducts());
										}}>
										<SelectTrigger className="w-[10.5rem] sm:w-48">
											<SelectValue placeholder="Stock arrangement" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Stock</SelectLabel>
												<SelectItem value="ascending">
													Ascending order
												</SelectItem>
												<SelectItem value="descending">
													Descending order
												</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
								<table className=" w-full mt-5 bg-card">
									<thead>
										<tr>
											<th className="w-[10%] text-center">Image</th>
											<th className="w-auto">Name</th>
											<th className="w-[30%]">Category</th>
											<th className="w-[10%] text-end hidden lg:table-cell">
												Price
											</th>
											<th className="w-[10%] text-end">Stock</th>
											<th className=" w-[8%] text-end pr-4">Edit</th>
										</tr>
									</thead>
									<tbody>
										{filteredProducts.map((product) => (
											<tr key={product.productId}>
												<td>
													<span className=" flex justify-center items-center border-b-0 w-full">
														<img
															src={product.productImgUrl}
															alt="product image"
															width={70}
															height={40}
														/>
													</span>
												</td>
												<td>{product.productName}</td>
												<td className=" capitalize">
													{product.productCategory}
												</td>
												<td className=" text-end hidden lg:table-cell">
													{product.productPrice}
												</td>
												<td
													className={`${
														product.productStock === 0
															? "text-red-500"
															: product.productStock > 50
															? "text-green-500"
															: "text-orange-500"
													} text-end`}>
													{product.productStock}
												</td>
												<td>
													<span className=" flex justify-end pr-2 border-b-0 w-full">
														<Button
															variant="outline"
															className=" bg-transparent border-blue-500 rounded-full"
															size="icon">
															<ArrowRight color="red" />
														</Button>
													</span>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AuthProvider>
	);
}

export default Products;
