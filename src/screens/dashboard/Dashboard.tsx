import DashboardStatsGrid from "@/screens/dashboard/DashboardStatsGrid";
import TransactionChart from "@/screens/dashboard/TransactionChart";
import RecentOrders from "@/screens/dashboard/RecentOrders";
import BuyerProfilePieChart from "@/screens/dashboard/BuyerProfilePieChart";
import PopularProducts from "@/screens/dashboard/PopularProducts";
import { Plus } from "lucide-react";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";
import AuthProvider from "@/GetStore";
import { useAppSelector } from "@/redux/hook";

export default function Dashboard() {
	const Store = useAppSelector((state) => state.Store.login);
	const [sidebar, setSidebar] = useState(false);
	return (
		<AuthProvider>
			<div className=" main">
				<Navbar setSidebar={setSidebar} />
				<div className="sub_main">
					<Sidebar sidebar={sidebar} setSidebar={setSidebar} />
					<div className="sub pb-10">
						<div className=" my-3 px-1 pt-2 flex flex-row justify-between items-center">
							<div>
								<h1 className=" font-[RobotoBold] md:text-2xl capitalize text-xl">
									Welcome back, {Store.storeName}
								</h1>
								<h4 className=" font-[RobotoLight] mt-2 lg:text-lg text-[12px]">
									Upload products, manage and track your customers and orders.
								</h4>
							</div>
							<a
								href="/upload"
								className=" px-3 lg:flex hidden py-2 items-center gap-2 rounded-md bg-primary text-white">
								<Plus /> Upload
							</a>
						</div>
						<div className="w-full flex flex-col gap-4">
							<DashboardStatsGrid />
							<div className="grid xl:grid-cols-3 grid-cols-2 gap-4 w-full">
								<TransactionChart />
								<BuyerProfilePieChart />
							</div>
							<div className=" grid xl:grid-cols-3 grid-cols-2 gap-4 w-full">
								<RecentOrders />
								<PopularProducts />
							</div>
						</div>
					</div>
				</div>
			</div>
		</AuthProvider>
	);
}
