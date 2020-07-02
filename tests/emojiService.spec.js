import { EmojiService } from '../src/services/EmojiService'

describe('EmojiService class', () => {
	it('should be defined', () => {
		expect(EmojiService).toBeDefined()
	})

	it('should be a class', () => {
		const emoji = new EmojiService()
		expect(emoji instanceof EmojiService).toBe(true)
	})

	describe('getEmojis method', () => {
		it('should be defined', () => {
			const emoji = new EmojiService()
			expect(emoji.getEmojis).toBeDefined()
		})

		it('should return an array', () => {
			const emoji = new EmojiService()
			const emojiList = emoji.getEmojis()
			expect(Object.prototype.toString.call(emojiList).slice(8, -1)).toBe('Array')
		})

		it('should return an array with a lot of strings', () => {
			const emoji = new EmojiService()
			const emojiList = emoji.getEmojis()

			const minimumExpectedPositions = 2000
			expect(emojiList.length).toBeGreaterThan(minimumExpectedPositions)

			emojiList.forEach((emoji) => {
				expect(typeof emoji).toBe('string')
			})
		})
	})
})
