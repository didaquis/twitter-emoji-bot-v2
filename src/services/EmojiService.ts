export class EmojiService {
	emojiList: []

	constructor() {
		this.emojiList = require('emojis-list')
	}

	getEmojis(): [] {
		return this.emojiList
	}
}
