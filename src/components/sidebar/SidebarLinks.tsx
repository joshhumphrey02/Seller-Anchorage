import {
	ArrowRightLeft,
	Bell,
	Boxes,
	Info,
	LayoutDashboard,
	ListOrdered,
	Rows4,
	Settings2,
	Upload,
	UserRound,
} from "lucide-react";

export const SIDEBAR_LINKS = [
	{
		key: "dashboard",
		label: "Dashboard",
		path: "/dashboard",
		icon: <LayoutDashboard size={20} />,
	},
	{
		key: "products",
		label: "Products",
		path: "/products",
		icon: <Boxes size={20} />,
	},
	{
		key: "orders",
		label: "Orders",
		path: "/orders",
		icon: <ListOrdered size={20} />,
	},
	{
		key: "reviews",
		label: "Reviews",
		path: "/reviews",
		icon: <Rows4 size={20} />,
	},
	{
		key: "transactions",
		label: "Transactions",
		path: "/transactions",
		icon: <ArrowRightLeft size={20} />,
	},
	{
		key: "notifications",
		label: "Notifications",
		path: "/notifications",
		icon: <Bell size={20} />,
	},
	{
		key: "upload",
		label: "Upload Product",
		path: "/upload",
		icon: <Upload size={20} />,
	},
];

export const SIDEBAR_BOTTOM_LINKS = [
	{
		key: "settings",
		label: "Settings",
		path: "/settings",
		icon: <Settings2 size={20} />,
	},
	{
		key: "account",
		label: "Account",
		path: "/account",
		icon: <UserRound size={20} />,
	},
	{
		key: "support",
		label: "Help & Support",
		path: "/support",
		icon: <Info size={20} />,
	},
];
