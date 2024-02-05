import { DatePicker } from "@/components/DatePicker";
import QuickDate from "@/screens/transactions/QuickDate";
import InvalidData from "@/components/InvalidData";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import { addDays, format } from "date-fns";
import { Minus } from "lucide-react";
import { useState } from "react";
import noTrans from "@/assets/vectors/no-transactions.avif";
import AuthProvider from "@/GetStore";

const transTitles = [
	{ trans: "Order ID" },
	{ trans: "Date" },
	{ trans: "Type" },
	{ trans: "Ship to" },
	{ trans: "Amount" },
	{ trans: "Dues" },
	{ trans: "Status" },
	{ trans: "View" },
];

function Transactions() {
	const [fromDate, setFromDate] = useState<Date | undefined>();
	const [toDate, setToDate] = useState<Date | undefined>();
	const [date, setQuickDate] = useState<Date>();
	const [table, setTable] = useState(false);

	useState(() => {
		setFromDate(addDays(new Date(), parseInt("0")));
		setToDate(addDays(new Date(), parseInt("30")));
	}, []);
	const [sidebar, setSidebar] = useState(false);
	return (
		<AuthProvider>
			<div className=" main">
				<Navbar setSidebar={setSidebar} />
				<div className="sub_main">
					<Sidebar sidebar={sidebar} setSidebar={setSidebar} />
					<div className="sub px-4 pb-4 md:pb-6 rounded-md h-fit">
						<h1 className=" text-2xl font-[RobotoBold] my-3">
							All Transactions
						</h1>
						<div>
							<div className=" border rounded-md p-3 grid grid-cols-1 md:grid-cols-[auto,20%] gap-6 md:gap-[10%]">
								<form
									action="/transactions"
									method="get"
									className=" grid md:grid-cols-[35%,25%,20%] grid-cols-[62%,32%] md:gap-6 gap-4 items-center">
									<div className=" md:w-full w-[70%] col-start-1 col-end-3 md:col-end-1">
										<h4 className=" pl-1 mb-1 font-[RobotoLight]">From Date</h4>
										<div className=" flex gap-1 items-center">
											<DatePicker setDate={setFromDate} date={fromDate} />
											<Minus />
										</div>
									</div>
									<div className="">
										<h4 className=" pl-1 mb-1 font-[RobotoLight]">To Date</h4>
										<div className=" flex gap-1 items-center">
											<DatePicker setDate={setToDate} date={toDate} />
										</div>
									</div>
									<Button className="bg-blue-500 px-2 mt-[24px] rounded-[4rem] text_primary">
										Save
									</Button>
								</form>
								<div className="">
									<h4 className=" pl-1 mb-1 font-[RobotoLight]">
										Quick Duration
									</h4>
									<div className="flex gap-3">
										<QuickDate setDate={setQuickDate} />
									</div>
								</div>
							</div>
							<div className=" mt-8">
								<h2 className=" md:text-xl flex flex-wrap gap-1  text-md font-[RobotoMedium]">
									<span>All Transactions From </span>
									<span className="w-full md:w-fit">
										{fromDate ? format(fromDate, "PPP") : ""} to{" "}
										{toDate ? format(toDate, "PPP") : ""}
									</span>
								</h2>
								{table ? (
									<table className="w-full mt-4">
										<thead>
											<tr>
												{transTitles.map((title, index) => (
													<th key={index}>{title.trans}</th>
												))}
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>hey</td>
											</tr>
										</tbody>
									</table>
								) : (
									<InvalidData
										image={noTrans}
										title={"No transactions"}
										message={
											"Transactions linked to your account will be listed here."
										}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</AuthProvider>
	);
}

export default Transactions;
