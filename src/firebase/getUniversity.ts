import { IUni } from "../@types";

export const getUniversities = (): Promise<IUni[]> =>
	new Promise((resolve) => {
		const newDto: IUni[] = [];
		for (let i = 0; i < 5; i++) {
			console.log(i);
			newDto.push({
				id: 4 + "t" + i,
				photoUrl:
					"https://firebasestorage.googleapis.com/v0/b/wakatire.appspot.com/o/P8USUMW7_400x400-removebg-preview.png?alt=media&token=f570cebe-a91d-40b2-b259-90ac97b3ca6b",
				name: "Armstrong Delta University",
				countryPhotoUrl:
					"https://firebasestorage.googleapis.com/v0/b/wakatire.appspot.com/o/nigeria-flag-logo-removebg-preview.png?alt=media&token=28359e22-0e56-4669-a39c-a33b30dcb6a1",
			});
		}
		setTimeout(() => {
			resolve(newDto);
		}, 2000);
	});
