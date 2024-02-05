import { BadgeDollarSign, PieChart, ShoppingCart, Users } from "lucide-react";

export default function DashboardStatsGrid() {
	return (
		<div className=" xl:grid-cols-4 md:grid-cols-2 grid-cols-1 grid gap-4 w-full">
			<BoxWrapper>
				<div className="h-12 rounded-full w-12 flex items-center justify-center bg-sky-500">
					<BadgeDollarSign />
				</div>
				<div className="pl-4">
					<span className="text-md font-[RobotoRegular] xl:text-lg text-foreground">
						Total Sales
					</span>
					<div className="flex items-center">
						<strong className="text-base text-muted-foreground font-[RobotoLight]">
							$54232
						</strong>
						<span className="text-sm text-green-500 font-[RobotoLight] pl-2">
							+343
						</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="h-12 rounded-full w-12 flex items-center justify-center bg-orange-600">
					<PieChart />
				</div>
				<div className="pl-4">
					<span className="text-md font-[RobotoRegular] xl:text-lg text-foreground">
						Total Expenses
					</span>
					<div className="flex items-center">
						<strong className="text-base text-muted-foreground font-[RobotoLight]">
							$3423
						</strong>
						<span className="text-sm text-green-500 font-[RobotoLight] pl-2">
							-343
						</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="h-12 rounded-full w-12 flex items-center justify-center bg-yellow-400">
					<Users />
				</div>
				<div className="pl-4">
					<span className="text-md font-[RobotoRegular] xl:text-lg text-foreground">
						Total Customers
					</span>
					<div className="flex items-center">
						<strong className="text-base text-muted-foreground font-[RobotoLight]">
							12313
						</strong>
						<span className="text-sm text-red-500 font-[RobotoLight] pl-2">
							-30
						</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="h-12 rounded-full w-12 flex items-center justify-center bg-green-600">
					<ShoppingCart />
				</div>
				<div className="pl-4">
					<span className="text-md font-[RobotoRegular] xl:text-lg text-foreground">
						Total Orders
					</span>
					<div className="flex items-center">
						<strong className="text-base text-muted-foreground font-[RobotoLight]">
							16432
						</strong>
						<span className="text-sm text-red-500 font-[RobotoLight] pl-2">
							-43
						</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	);
}

interface BoxWrapper {
	children: Array<JSX.Element>;
}

function BoxWrapper({ children }: BoxWrapper) {
	return (
		<div className="bg-card rounded-lg p-4 flex-1 border flex items-center">
			{children}
		</div>
	);
}
