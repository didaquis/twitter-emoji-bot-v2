export type Configuration = {
	TWITTER_CONSUMER_KEY: string
	TWITTER_CONSUMER_SECRET: string
	TWITTER_ACCESS_TOKEN_KEY: string
	TWITTER_ACCESS_TOKEN_SECRET: string
}

export enum Environments {
	PRODUCTION = 'production',
	DEVELOPMENT = 'development',
}

export interface EmojiServiceInterface {
	emojiList: string[]
	getEmojis(): string[]
}
