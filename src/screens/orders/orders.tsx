import InvalidData from "@/components/InvalidData";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import noOrders from "@/assets/vectors/no orders.avif";
import AuthProvider from "@/GetStore";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { GetOrders } from "@/firebase/GetOrders";
import { getorders } from "@/reducers/Orders";
import { format } from "date-fns";
import { OrderStatus } from "@/components/OrderStatus";

const orderMenu = [
	{ cat: "All" },
	{ cat: "Placed" },
	{ cat: "Confirmed" },
	{ cat: "Returned" },
	{ cat: "Shipped" },
	{ cat: "Delivered" },
];

function Orders() {
	const [sidebar, setSidebar] = useState(false);
	const Orders = useAppSelector((state) => state.Orders.orders);
	const { pathname } = useLocation();
	const location = pathname.split("/")[2].toLowerCase();
	const selection = Orders.filter((order) =>
		location === "all"
			? order
			: order.current_order_status === location
			? order
			: ""
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		(async () => {
			const result = await GetOrders();
			dispatch(getorders(result));
		})();
	}, [dispatch]);
	return (
		<AuthProvider>
			<div className=" main">
				<Navbar setSidebar={setSidebar} />
				<div className="sub_main">
					<Sidebar sidebar={sidebar} setSidebar={setSidebar} />
					<div className="sub px-3 w-full h-fit bg-background rounded-lg pb-4">
						<h2 className=" my-3 text-2xl font-[RobotoBlack]">Orders</h2>
						<div className="w-full">
							<div
								id="orderCategories"
								className=" border-b flex gap-3 lg:gap-10">
								{orderMenu.map((menu) => (
									<NavLink
										to={`/orders/${menu.cat}`}
										style={{ margin: 0 }}
										className={
											"lg:my-2 my-0 text-sm lg:text-xl font-[RotoboLight] w-fit py-1 lg:p-2"
										}>
										{menu.cat}
									</NavLink>
								))}
							</div>
							<div>
								{selection.length === 0 ? (
									<InvalidData
										image={noOrders}
										title={`No ${location} orders`}
										message={
											"Active orders linked to your account will be listed here."
										}
									/>
								) : (
									<div className=" rounded-sm mt-5 bg-card">
										<table className="w-full text-muted-foreground">
											<thead>
												<tr>
													<th className=" hidden sm:table-cell">ID</th>
													<th className=" hidden sm:table-cell">P-ID</th>
													<th className="">Customer</th>
													<th>Dates</th>
													<th>Prices</th>
													<th>Status</th>
												</tr>
											</thead>
											<tbody>
												{selection.map((order) => (
													<tr key={order.id}>
														<td className=" hidden sm:table-cell">
															<a href={`/order/${order.id}`}>#{order.id}</a>
														</td>
														<td className="hidden sm:table-cell">
															<a href={`/product/${order.product_id}`}>
																#{order.product_id}
															</a>
														</td>
														<td>
															<a href={`/customer/${order.customer_id}`}>
																{order.customer_name}
															</a>
														</td>
														<td>
															{format(
																new Date(order.order_date),
																"dd MMM yyyy"
															)}
														</td>
														<td>{order.order_total}</td>
														<td>{OrderStatus(order.current_order_status)}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</AuthProvider>
	);
}

export default Orders;
