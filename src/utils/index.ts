export const shuffle = (originalArray: string[]): string[] => {
	if (Object.prototype.toString.call(originalArray).slice(8, -1) !== 'Array') {
		return []
	}

	const newArray: string[] = [...originalArray]

	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
	}

	return newArray
}
