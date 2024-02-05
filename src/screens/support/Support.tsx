import InvalidData from "@/components/InvalidData";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";
import supportImg from "@/assets/vectors/support.jpg";
import AuthProvider from "@/GetStore";

function Support() {
	const [sidebar, setSidebar] = useState(false);
	return (
		<AuthProvider>
			<div className=" main">
				<Navbar setSidebar={setSidebar} />
				<div className="sub_main">
					<Sidebar sidebar={sidebar} setSidebar={setSidebar} />
					<div className=" sub flex justify-center items-center">
						<InvalidData
							image={supportImg}
							title={"Support not yet implemented"}
							message={"."}
						/>
					</div>
				</div>
			</div>
		</AuthProvider>
	);
}

export default Support;
