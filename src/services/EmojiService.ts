export class EmojiService {
	emojiList: string[]

	constructor() {
		this.emojiList = require('emojis-list')
	}

	getEmojis(): string[] {
		return this.emojiList
	}
}
