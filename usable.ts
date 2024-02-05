import { unsplash } from "@/lib/Unsplash"; //yan add unsplash-js

import { createApi } from "unsplash-js";

export const unsplash = createApi({
	accessKey: "KL5q9DbPRQ2Hm9ak4-RahO5cHLu9oV5CRXMZkKCBMqU",
});

(async () => {
	try {
		const result = await unsplash.search.getPhotos({
			query: "electronics",
			perPage: 20,
			page: 1,
			orientation: "landscape",
			orderBy: "relevant",
		});

		setTest(result.response?.results);
	} catch (e) {
		console.error(e);
	}
})();

<div className=" flex gap-3 flex-wrap">
	{test?.map((item) => (
		<div id={item.user.id} className=" w-[20rem] h-[22rem]">
			<img
				src={item.urls.small}
				alt={"photo"}
				width={300}
				height={300}
				className=" object-cover"
				color={item.color}
				loading="lazy"
			/>
			<div className=" h-20 overflow-hidden w-[18rem]">{item.description}</div>
			<span>{item.likes}</span>
			<div>
				{item.user.first_name} {item.user.last_name}
			</div>
		</div>
	))}
</div>;
