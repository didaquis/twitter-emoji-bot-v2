import { EmojiServiceInterface } from '../types'

export class EmojiService implements EmojiServiceInterface {
	public readonly emojiList: string[]

	constructor() {
		this.emojiList = require('emojis-list')
	}

	getEmojis(): string[] {
		return this.emojiList
	}
}
