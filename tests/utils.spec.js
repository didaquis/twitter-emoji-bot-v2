import { shuffle } from '../src/utils/'

describe('shuffle', () => {
	it('should be defined', () => {
		expect(shuffle).toBeDefined()
		expect(typeof shuffle).toBe('function')
	})

	it('should return an array if receive an empty array as parameter', () => {
		const result = shuffle([])
		expect(Object.prototype.toString.call(result).slice(8, -1)).toBe('Array')
		expect(result).toHaveLength(0)
	})

	it('should return an empty array if receive nothing', () => {
		const result = shuffle()
		expect(Object.prototype.toString.call(result).slice(8, -1)).toBe('Array')
		expect(result).toHaveLength(0)
	})

	it('should return an array with the same length of array received as parameter', () => {
		const myArray = ['A', 'B', 'C', 'D', 'E']
		const result = shuffle(myArray)
		expect(myArray.length === result.length).toBe(true)
	})

	it('should return a new array (cloned array)', () => {
		const myArray = ['A', 'B', 'C', 'D', 'E']
		const result = shuffle(myArray)
		expect(myArray === result).toBe(false)
	})

	it('should return an array with the same values as the array received as parameter', () => {
		const myArray = ['A', 'B', 'C', 'D', 'E']
		const result = shuffle(myArray)
		expect(result.includes(myArray[0])).toBe(true)
		expect(result.includes(myArray[1])).toBe(true)
		expect(result.includes(myArray[2])).toBe(true)
		expect(result.includes(myArray[3])).toBe(true)
		expect(result.includes(myArray[4])).toBe(true)
	})

	it('should return an array with the same values as the array received as parameter but sorted randomly', () => {
		const myArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']
		const originalArray = JSON.stringify(myArray)
		const numberOfAttempts = 100
		const allResults = []

		for (let index = 0; index < numberOfAttempts; index++) {
			const result = shuffle(myArray)
			const parsedResult = JSON.stringify(result)

			expect(originalArray !== parsedResult).toBe(true)

			if (!allResults.includes(parsedResult)) {
				allResults.push(parsedResult)
			}
		}

		expect(allResults.length === numberOfAttempts).toBe(true)
	})
})
