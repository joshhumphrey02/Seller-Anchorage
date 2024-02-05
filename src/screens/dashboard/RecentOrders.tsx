import { format } from "date-fns";
import { OrderStatus } from "@/components/OrderStatus";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { GetOrders } from "@/firebase/getOrders";
import { getorders } from "@/reducers/Orders";

export default function RecentOrders() {
	const Orders = useAppSelector((state) => state.Orders.orders.slice(0, 6));
	const dispatch = useAppDispatch();

	useEffect(() => {
		(async () => {
			const result = await GetOrders();
			dispatch(getorders(result));
		})();
	}, [dispatch]);
	return (
		<div className="bg-card recent col-span-2 pt-3 pb-4 rounded-sm border flex-1">
			<strong className=" text-lg lg:text-xl px-4 font-[RobotoBold]">
				Recent Orders
			</strong>
			<div className=" rounded-sm mt-3 px-3">
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
						{Orders.map((order) => (
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
								<td>{format(new Date(order.order_date), "dd MMM yyyy")}</td>
								<td>{order.order_total}</td>
								<td>{OrderStatus(order.current_order_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
