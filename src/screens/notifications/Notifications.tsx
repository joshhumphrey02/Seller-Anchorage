import InvalidData from "@/components/InvalidData";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import noNotification from "@/assets/vectors/no-notifications.avif";
import AuthProvider from "@/GetStore";

const ordernotification = [{ not: "All" }, { not: "Read" }, { not: "Unread" }];

function Notifications() {
	const message = "";
	const [sidebar, setSidebar] = useState(false);
	return (
		<AuthProvider>
			<div className=" main">
				<Navbar setSidebar={setSidebar} />
				<div className="sub_main">
					<Sidebar sidebar={sidebar} setSidebar={setSidebar} />
					<div className="sub">
						<div className=" bg_primary border-r border_color p-2">
							<h1 className=" text-2xl mb-5 font-bold">Notifications</h1>
							<div>
								<div
									id="orderCategories"
									className=" border-b border_color flex gap-10">
									{ordernotification.map((notification) => (
										<NavLink
											to={`/notifications/${notification.not}`}
											style={{ margin: 0 }}
											key={notification.not}
											className={"my-2 text-xl font-light w-fit p-2"}>
											{notification.not}
										</NavLink>
									))}
								</div>
								<div>
									{message ? (
										<div>ok {message}</div>
									) : (
										<InvalidData
											image={noNotification}
											title={"No active orders"}
											message={
												"Active orders linked to your account will be listed here."
											}
										/>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AuthProvider>
	);
}

export default Notifications;
