import Navbar from "@/components/navbar/Navbar";
import SettingSidebar from "@/screens/settings/SettingSidebar";
import Sidebar from "@/components/sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import { Edit, Save } from "lucide-react";
import { useState } from "react";
import { Form } from "react-router-dom";
import profileImg from "@/assets/logos/profile svg.png";
import { Input } from "@/components/ui/input";
import AuthProvider from "@/GetStore";

function EditButton() {
	return (
		<Button className=" flex gap-2 rounded-full text-white ">
			<span>Edit</span> <Edit size={20} />
		</Button>
	);
}
function SaveButton() {
	return (
		<Button className=" flex gap-2 rounded-full text-white ">
			<span>Save</span> <Save size={20} />
		</Button>
	);
}

const inputStyles = (active: boolean) => {
	return active
		? "border font-[RobotoMedium] text-sm"
		: "border-0 font-[RobotoMedium] text-base";
};

function Settings() {
	const [edit, setEdit] = useState(false);
	const [company, setCompany] = useState({
		fullName: "DE-Anchorage Space Electronics",
		nickName: "Anchor",
		contact1: "08056636625",
		contact2: "08056636625",
		email: "de-anchoragespace@gmail.com",
		category: "Electronic Company",
		state: "Bayelsa",
		address: "Kpansia Market Road, Yenagoa",
	});
	const [sidebar, setSidebar] = useState(false);
	return (
		<AuthProvider>
			<div className=" main">
				<Navbar setSidebar={setSidebar} />
				<div className="sub_main">
					<Sidebar sidebar={sidebar} setSidebar={setSidebar} />
					<div className="sub">
						<h1 className=" text-2xl font-[RobotoBold] my-2">
							Account Settings
						</h1>
						<div className=" grid grid-cols-1 lg:grid-cols-[15%,auto] gap-4 setting_sideBar">
							<SettingSidebar />
							<div className=" p-3 rounded-lg h-fit">
								<h2 className=" text-xl font-[RobotoMedium] py-2 mb-3">
									My Company
								</h2>
								<div>
									<div className=" flex gap-2 items-center border p-3 rounded-lg shadow-sm">
										<div className=" relative w-fit">
											<img
												src={profileImg}
												alt="Company Profile Pix"
												width={60}
												height={60}
												className=" rounded"
											/>
											<div className=" absolute z-10  bottom-[-1px] left-[1.35rem]">
												<Button className="text-white p-0 bg-transparent w-fit h-fit rounded-full">
													<Edit size={17} />
												</Button>
											</div>
										</div>
										<div className=" grid gap-1">
											<h4 className="font-[RobotoRegular] text-base">
												{company.fullName}
											</h4>
											<h6 className="font-[RobotoLight] text-sm">
												{company.category}
											</h6>
											<p className="font-[RobotoLight] text-sm">
												{company?.address}
											</p>
										</div>
									</div>
									<Form className="my-3 p-3 border rounded-lg">
										<div className=" flex justify-between">
											<h3 className=" text-base font-[RobotoMedium]">
												Company Information
											</h3>
											<div onClick={() => setEdit(() => !edit)}>
												{edit ? <SaveButton /> : <EditButton />}
											</div>
										</div>
										<div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
											<div className=" grid gap-1 ">
												<label
													className=" font-[RobotoMedium] text-sm pl-2"
													htmlFor="fullName">
													Full Name
												</label>
												<Input
													disabled={edit}
													type="text"
													onChange={(e) => {
														setCompany({
															...company,
															fullName: e.target.value,
														});
													}}
													id="fullName"
													className={inputStyles(edit)}
													name="fullName"
													value={company.fullName}
													aria-placeholder="Full Name"
												/>
											</div>
											<div className=" grid gap-1 ">
												<label
													className=" font-[RobotoMedium] text-sm pl-2"
													htmlFor="nickname">
													{"Company's nickname"}
												</label>
												<Input
													disabled={edit}
													type="text"
													onChange={(e) => {
														setCompany({
															...company,
															nickName: e.target.value,
														});
													}}
													id="nickName"
													className={inputStyles(edit)}
													name="nickName"
													value={company.nickName}
													aria-placeholder="nickName"
												/>
											</div>
											<div className=" grid gap-1 ">
												<label
													className=" font-[RobotoMedium] text-sm pl-2"
													htmlFor="email">
													Email
												</label>
												<Input
													disabled={edit}
													type="text"
													onChange={(e) => {
														setCompany({ ...company, email: e.target.value });
													}}
													id="email"
													className={inputStyles(edit)}
													name="email"
													value={company.email}
													aria-placeholder="email"
												/>
											</div>
											<div className=" grid gap-1 ">
												<label
													className=" font-[RobotoMedium] text-sm pl-2"
													htmlFor="contact1">
													Contact 1
												</label>
												<Input
													disabled={edit}
													type="text"
													onChange={(e) => {
														setCompany({
															...company,
															contact1: e.target.value,
														});
													}}
													id="contact1"
													className={inputStyles(edit)}
													name="contact1"
													value={company.contact1}
													aria-placeholder="contact1"
												/>
											</div>
											<div className=" grid gap-1 ">
												<label
													className=" font-[RobotoMedium] text-sm pl-2"
													htmlFor="contact2">
													Contact 2
												</label>
												<Input
													disabled={edit}
													type="text"
													onChange={(e) => {
														setCompany({
															...company,
															contact2: e.target.value,
														});
													}}
													id="contact2"
													className={inputStyles(edit)}
													name="contact2"
													value={company.contact2}
													aria-placeholder="contact2"
												/>
											</div>
											<div className=" grid gap-1 ">
												<label
													className=" font-[RobotoMedium] text-sm pl-2"
													htmlFor="category">
													Category
												</label>
												<Input
													disabled={edit}
													type="text"
													onChange={(e) => {
														setCompany({
															...company,
															category: e.target.value,
														});
													}}
													id="category"
													className={inputStyles(edit)}
													name="category"
													value={company.category}
													aria-placeholder="category"
												/>
											</div>
										</div>
									</Form>
									<Form className="my-3 p-3 border rounded-lg">
										<div className=" flex justify-between">
											<h3 className=" text-base font-bold">
												Company Information
											</h3>
											<EditButton />
										</div>
										<div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
											<div className=" grid gap-1 ">
												<label
													className=" font-[RobotoMedium] text-sm pl-2"
													htmlFor="state">
													State
												</label>
												<Input
													disabled={edit}
													type="text"
													onChange={(e) => {
														setCompany({ ...company, state: e.target.value });
													}}
													id="state"
													className={inputStyles(edit)}
													name="state"
													value={company.state}
													aria-placeholder="state"
												/>
											</div>
											<div className=" grid gap-1 ">
												<label
													className=" font-[RobotoMedium] text-sm pl-2"
													htmlFor="address">
													{"Company's address"}
												</label>
												<Input
													disabled={edit}
													type="text"
													onChange={(e) => {
														setCompany({ ...company, address: e.target.value });
													}}
													id="address"
													className={inputStyles(edit)}
													name="address"
													value={company.address}
													aria-placeholder="address"
												/>
											</div>
										</div>
									</Form>

									<Button className=" text-red-500 lg:hidden block bg-transparent mt-4 outline outline-red-500 font-[RobotoLight] text-base pl-3">
										Delete Account
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AuthProvider>
	);
}

export default Settings;
