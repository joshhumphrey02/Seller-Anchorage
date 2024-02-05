import { Upload } from "lucide-react";
import { CategoryLinks } from "./Categories";
import { switcher } from "./SubCategory";
import { useState, useEffect } from "react";
import Specs from "./Specs";
import { useRef } from "react";
import { ButtonController } from "./ButtonController";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthProvider from "@/GetStore";
// import { postUpload } from "@/models/upload";

interface sub {
	id: string;
	type: string;
}

export default function Uploads() {
	const formRef = useRef<HTMLFormElement>(document.createElement("form"));
	const [cat, setCat] = useState("accessories");
	const [subCat, setSubCat] = useState<sub[]>([]);

	useEffect(() => {
		setSubCat(() => switcher(cat));
	}, [cat]);
	const [sidebar, setSidebar] = useState(false);
	return (
		<AuthProvider>
			<div className=" main">
				<Navbar setSidebar={setSidebar} />
				<div className="sub_main">
					<Sidebar sidebar={sidebar} setSidebar={setSidebar} />
					<div className=" sub p-2 pb-4 rounded-lg border bg-card shadow-md">
						<form
							ref={formRef}
							autoComplete="off"
							className="px-1 pt-2 pb-3"
							onSubmit={() => {
								formRef.current.reset();
								// postUpload(e);
							}}
							action="/upload"
							method="post"
							encType="multipart/form-data">
							<div className="flex justify-end">
								<Button
									type="submit"
									className="mr-4 flex gap-1 items-center rounded font-[RobotoLight] hover:text-red-600  text-white ">
									<Upload size={22} />
									Upload
								</Button>
							</div>
							<div className="form-con grid lg:grid-cols-2 md:grid-cols-1 gap-2">
								<div>
									<div>
										<h5 className="text-center text-lg md:text-xl font-[RobotoMedium] mt-2 capitalize">
											Product details
										</h5>
										<div className="flex flex-col gap-2 my-3">
											<div className="px-2 flex flex-col gap-1">
												<label
													htmlFor="name"
													className="text-xs md:text-sm lg:text-base font-[RobotoLight]">
													Products Name
												</label>
												<Input
													type="text"
													className="w-full text-base font-[RobotoLight]"
													name="name"
													autoComplete="off"
													autoCapitalize="on"
													id="name"
													required
												/>
											</div>
											<div className="px-2 flex flex-col gap-1">
												<label
													htmlFor="price"
													className="text-xs md:text-sm lg:text-base font-[RobotoLight]">
													Products price
												</label>
												<Input
													type="text"
													className="w-full text-base font-[RobotoLight]"
													name="price"
													id="price"
													required
												/>
											</div>
											<div className="px-2 flex flex-col gap-1">
												<label
													htmlFor="category"
													className="text-xs md:text-sm lg:text-base font-[RobotoLight]">
													Product Category
												</label>
												<select
													name="category"
													id="category"
													onChange={(e) => setCat(e.target.value.toLowerCase())}
													autoComplete="off"
													className="w-full border rounded-lg bg-transparent h-10 text-base font-[RobotoLight]"
													required>
													{CategoryLinks.map((cat) => (
														<option key={cat.key} value={cat.label}>
															{cat.label}
														</option>
													))}
												</select>
											</div>
											<div className="px-2 flex flex-col gap-1">
												<label
													htmlFor="category"
													className="text-xs md:text-sm lg:text-base font-[RobotoLight]">
													Product sub-category
												</label>
												<select
													name="category"
													id="sub-category"
													className="w-full border rounded-lg bg-transparent h-10 text-base font-[RobotoLight]"
													required>
													{subCat.map((sub) => (
														<option key={sub.id} value={sub.type}>
															{sub.type}
														</option>
													))}
												</select>
											</div>
										</div>
									</div>
									<div>
										<h5 className="text-center mt-2 text-lg md:text-xl font-[RobotoMedium] capitalize">
											Product images
										</h5>
										<div className="my-2 images">
											<ButtonController bt="image" ct="imagesDiv" dt="images" />
											<div className="my-2 flex imagesDiv flex-col gap-2">
												<div className=" Div px-1">
													<Input
														type="file"
														name="image"
														className="w-full mt-1"
														id="image"
														accept="img/*"
														required
													/>
												</div>
											</div>
										</div>
									</div>
									<div>
										<h5 className="text-center mt-2 text-lg md:text-xl font-[RobotoMedium] capitalize">
											Product features
										</h5>
										<div className="features">
											<ButtonController
												bt="feature"
												ct="featuresDiv"
												dt="features"
											/>
											<div className="mt-2 flex featuresDiv flex-col gap-2">
												<div className=" Div px-1">
													<Input
														type="text"
														className="w-full h-8 text-base font-[RobotoLight]"
														name="price"
														id="price"
														required
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div>
										<h5 className="text-center mt-2 text-lg md:text-xl font-[RobotoMedium] capitalize">
											Product description
										</h5>
										<div className=" mt-3 px-1">
											<textarea
												name="description"
												id="description"
												required
												className="w-full mt-1 p-3 bg-transparent border rounded-lg text-base font-[RobotoLight]"
												cols={70}
												rows={8}></textarea>
										</div>
									</div>
									<div>{<Specs />}</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</AuthProvider>
	);
}
