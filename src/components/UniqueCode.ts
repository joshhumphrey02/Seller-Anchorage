export function GenerateUniqueCode(
	count: number,
	min: number,
	max: number
): string {
	const uniqueNumbers: number[] = [];

	while (uniqueNumbers.length < count) {
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

		if (!uniqueNumbers.includes(randomNumber)) {
			uniqueNumbers.push(randomNumber);
		}
	}
	return uniqueNumbers.join("").toString();
}
